<template>
  <div>
    <div class="collect-container" @click="toggleCollect">
      <uc-svg-icon name="unstar" />收藏夹
    </div>
    <el-drawer
      :visible.sync="visible"
      title="已收藏地块/区域"
      :modal="false"
      class="collection"
    >
      <!-- <div>已收藏地块/区域</div> -->
      <el-select v-model="type" placeholder="请选择" @change="getItem">
        <el-option
          v-for="item in typeOptions"
          :key="item.key"
          :label="item.label"
          :value="item.key"
        ></el-option>
      </el-select>
      <el-divider></el-divider>
      <el-checkbox-group v-model="checkedCollectionIds">
        <el-tooltip
          v-for="collect in collectionList"
          :key="collect.id"
          :content="collect.name"
          placement="top"
          :open-delay="500"
        >
          <el-checkbox :label="collect.id">{{ collect.name }}</el-checkbox>
        </el-tooltip>
      </el-checkbox-group>
      <div class="footer">
        <div class="content">
          <el-checkbox v-model="checkAll" @change="handleCheckAllChange"
            >全选</el-checkbox
          >
          <el-button type="text" @click="deleteItem">删除</el-button>
          <el-button type="text" @click="moveItem">移动</el-button>
          <el-button
            class="compare"
            type="primary"
            @click="compare"
            :disabled="checkedCollectionIds.length > 3"
            v-if="showCompare"
            ><span>对比{{ checkedCollectionIds.length }}/3</span></el-button
          >
        </div>
      </div>
    </el-drawer>
  </div>
</template>
<script>
import { Message } from 'element-ui';
import * as api from '@/api/base';

export default {
  name: 'Collection',
  props: {
    showCompare: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      visible: false,
      typeOptions: [
        {
          key: 'default',
          label: '默认'
        },
        {
          key: 'select',
          label: '社区'
        }
      ],
      checkedCollectionIds: [], // ids
      checkAll: false,
      type: 'select',
      collectionList: []
    };
  },
  watch: {
    checkedCollectionIds(newV) {
      if (
        newV.length === this.collectionList.length &&
        newV.length !== 0 &&
        this.checkedCollectionIds.length !== 0
      ) {
        this.checkAll = true;
      }
    },
    visible(newVal) {
      if (newVal) {
        this.getCollectionList();
      }
    }
  },
  created() {
    this.getCollectionList();
  },
  methods: {
    // 获取收藏夹列表
    async getCollectionList() {
      try {
        this.collectionList = await api.getCollectionList(this.type);
      } catch (error) {
        Message.error(error.message);
      }
    },
    /**
     * 删除一组id
     * @param {Number[]} ids id数组
     */
    async deleteCollect(ids = []) {
      try {
        await api.deleteCollect(ids.join(','));
      } catch (error) {
        Message.error(error.resultMsg);
      }
    },
    /**
     *移动一组收藏
     */
    async moveCollect({ targetType, ids } = { targetType: 'default', ids: [] }) {
      try {
        await api.moveCollect({ targetType, ids: ids.join(',') });
        const typeName = (
          this.typeOptions.find(item => item.key === targetType) || {
            label: '默认'
          }
        ).label;
        Message.success(`成功移动到${typeName}收藏夹`);
      } catch (error) {
        Message.error(error.resultMsg);
      }
    },
    handleCheckAllChange(val) {
      this.checkedCollectionIds = val ? this.collectionList.map(i => i.id) : [];
    },
    async getItem() {
      this.getCollectionList(this.type);
      this.checkedCollectionIds = [];
      this.checkAll = false;
    },
    async deleteItem() {
      if (this.checkedCollectionIds.length > 0) {
        await this.deleteCollect(this.checkedCollectionIds);
        await this.getItem();
      } else {
        Message.error('请选择至少一个删除的地块/区域');
      }
    },
    async moveItem() {
      if (this.checkedCollectionIds.length > 0) {
        const targetType = this.type === 'default' ? 'select' : 'default';
        await this.moveCollect({ targetType, ids: this.checkedCollectionIds });
        await this.getItem();
      } else {
        Message.error('请选择至少一个移动的地块/区域');
      }
    },
    // 显示隐藏收藏夹
    toggleCollect() {
      this.visible = !this.visible;
    },
    compare() {
      const checkedCollections = this.collectionList.filter(i =>
        this.checkedCollectionIds.includes(i.id));
      const dataArr = checkedCollections.map(area => ({
        ...area,
        countyCodes: JSON.parse(area.countyCodes) || [],
        areas: JSON.parse(area.polygon) || [],
        polygon: JSON.parse(area.polygon) || []
      }));
      // collectionList中的countyCodes和polygon字段后台返回的是String
      // compare是本组件唯一的数据出口
      this.$emit('compare', dataArr);
    }
  }
};
</script>
<style lang="scss">
@import "variable";
.collect-container {
  z-index: 2000;
  bottom: 0;
  position: absolute;
  right: 0;
  top: 0;
  background: #fff;
  font-size: 10px;
  width: 12px;
  padding: 0 11px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: $--background-color-base;
  }
}
.collection {
  .el-drawer {
    top: 50px !important;
    right: 30px !important;
    height: calc(100vh - 50px) !important;
    width: 288px !important;
    &:focus{
      outline-width: 0;
    }
    header#el-drawer__title span {
      &:focus {
        outline-width: 0;
      }
    }
  }
  .el-drawer__body {
    position: relative;
  }

  .el-select {
    width: 80%;
    margin-left: 10%;
  }

  .el-checkbox-group {
    position: absolute;
    bottom: 50px;
    top: 89px;
    width: 288px;
    // height: 100%;
    overflow-y: auto;
    overflow-x: hidden;

    .el-checkbox {
      padding-left: 16px;
      height: 40px;
      color: rgba(0, 6, 32, 0.65);
      line-height: 20px;
      font-size: 14px;
      display: flex;
      align-items: center;
      &:hover {
        background-color: $--background-color-base;
      }

      .el-checkbox__label {
        width: 240px;
        overflow: hidden;
        word-wrap: normal;
        white-space: nowrap;
        text-overflow: ellipsis;
        vertical-align: middle;
      }
    }
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    line-height: 50px;
    background-color: rgba(234, 247, 255, 1);
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
    z-index: 2;

    .content {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }

    button span {
      color: rgba(0, 6, 32, 0.65);

      &:hover {
        color: $--color-primary;
      }
    }
    .compare {
      span {
        color: $--color-white;
        &:hover {
          color: $--color-white;
        }
      }
    }

    .el-checkbox__label:hover {
      color: $--color-primary;
    }
  }
}
</style>
