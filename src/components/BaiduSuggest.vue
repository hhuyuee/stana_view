<template>
  <div class="search-input-container">
    <el-autocomplete
      :debounce="300"
      type="text"
      class="community-suggest"
      placeholder="搜地点、查位置"
      v-model="searchInputLocal"
      :fetch-suggestions="querySearchAsync"
      @select="handleSelect"
      :trigger-on-focus="false"
    >
      <!-- 输入框的前置和后缀 -->
      <span class="pre-tip" slot="prepend">地块</span>
      <span slot="append">
        <uc-svg-icon
          name="add_marker"
          size="24px"
          class="marker-icon"
          @click="drawMarker"
        />
      </span>
      <!-- 输入建议列表 -->
      <template v-slot="{ item }">
        <!-- <div v-if="item.isTitle" class="title">
          <span class="rank">排名</span>
          <span class="position">位置</span>
          <span v-if="fullTitle">
            <span class="score">得分</span>
            <span class="collect">收藏</span>
            <span class="op">操作</span>
          </span>
        </div> -->
        <div v-if="!item.isTitle" class="content-item">
          <!-- <span class="rank">{{ item._index }}</span> -->
          <el-tooltip :content="`${item.name}  ${item.city}${item.district}`">
            <span class="position f-toe1">
              {{ item.name }}
              <span class="gray">
                <span>{{ item.city }}</span>
                <span>{{ item.district }}</span>
              </span>
            </span>
          </el-tooltip>
        </div>
      </template>
    </el-autocomplete>
    <div class="search-icon">
      <uc-svg-icon name="search" size="24px" />
    </div>
  </div>
</template>
<script>
import * as bmapApi from '@/api/bmap';
import { Message } from 'element-ui';

export default {
  name: 'baidu-suggest',
  model: {
    prop: 'searchInput',
    event: 'change'
  },
  props: {
    searchInput: {
      type: String,
      default: ''
    },
    fullTitle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    searchInputLocal: {
      get() {
        return this.searchInput;
      },
      set(v) {
        this.$emit('change', v);
      }
    }
  },
  methods: {
    // 获取建议的列表
    async querySearchAsync(queryString, cb) {
      if (!queryString) return;
      try {
        const result = (
          await bmapApi.placeSuggestion({
            query: queryString,
            region: this.$store.state.selectedCity.name
          })
        ).map((item, i) => ({ ...item, _index: i + 1 }));
        result.unshift({ isTitle: true });


        cb(result);
      } catch (error) {
        Message.error(error.message);
      }
    },
    // 地点列表选中
    handleSelect(value) {
      this.$emit('select:marker', value);
    },
    // 选点
    drawMarker() {
      this.$emit('draw:marker');
    }
  }
};
</script>
<style lang="scss">
@import "variable";
$height-tool: 48px;

.search-input-container {
  display: flex;
  position: relative;
  width: 384px;
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  overflow: hidden;

  .search-icon {
    background: $--color-primary;
    padding: 12px;
    padding-bottom: 0px;
    color: #fff;
    cursor: pointer;
  }

  .community-suggest {
    // flex-grow: 1;
    // padding: 0 12px;
    background: rgba(255, 255, 255, 1);
    font-size: 16px;
    color: rgba(0, 6, 32, 0.65);
    height: $height-tool;
    width: 336px;

    .el-input-group__prepend {
      background: $--color-primary;
      border: none;
      .pre-tip {
        color: #fff;
      }
    }
    .el-input__inner {
      height: $height-tool;
      border: none;
      &::placeholder {
        color: rgba(0, 6, 32, 0.16);
      }
    }
    .el-input-group__append {
      border: none;
      background-color: #fff;
      .marker-icon {
        background: #fff;
        cursor: pointer;
        position: relative;
        top: 2px;
        &:hover {
          background-color: $--background-color-base;
        }
      }
    }
  }
}
</style>
