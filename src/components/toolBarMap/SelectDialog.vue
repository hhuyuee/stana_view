<template>
  <div id="tool-bar-select-dialog">
    <el-dialog
      :visible.sync="localVisible"
      :title="`已选择区域(${selectedAreaNum}/3)`"
      width="33%"
      :modal="false"
    >
      <!-- 已选中的区县和区域 -->
      <selected-area-display
        :selectedAreaNum="selectedAreaNum"
        :selectedArea="selectedArea"
      />
      <!-- 选择区域的表单 -->
      <el-form ref="selectForm" :model="selectedAreaForm" label-position="top">
        <el-form-item label="行政区县">
          <el-select
            size="small"
            :loading="countryLoading"
            v-model="selectedAreaForm.country"
            placeholder="请选择行政区县"
            @focus="searchCountry"
            multiple
            :multiple-limit="3"
          >
            <el-option
              v-for="item in countryOptions"
              :disabled="selectDisable"
              :key="item.code"
              :label="item.name"
              :value="item.code"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="特征区域">
          <el-select
            size="small"
            :loading="featureLoading"
            v-model="selectedAreaForm.featureArea"
            placeholder="请选择特征区域"
            multiple
            filterable
            remote
            :remote-method="searchFeatureArea"
            @focus="() => getFeatureArea()"
            :multiple-limit="3"
          >
            <el-option
              v-for="item in featureAreaOptions"
              :key="item.value"
              :label="item.name"
              :value="item.value"
              :disabled="selectDisable"
            >
              <span>{{ item.name }}  </span>
              <span class="gray">{{item.cityName}}{{item.countyName}}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="已定义区域">
          <el-select
            size="small"
            :loading="customLoading"
            v-model="selectedAreaForm.customArea"
            placeholder="请选择已定义区域"
            @focus="searchCustomArea"
            multiple
            :multiple-limit="3"
          >
            <el-option
              v-for="item in customAreaOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              :disabled="selectDisable"
            >
              <span>{{ item.name }}&nbsp;</span>
              <span class="gray">{{ item.type }}</span>
              <span style="float: right">
                <i
                  class="el-icon-close"
                  @click.stop="() => showDeleteDialog(item.id)"
                ></i>
              </span>
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="自定义区域" class="custom-area">
          <el-button
            v-for="btn in customAreaBtn"
            :key="btn.type"
            round
            class="area-btn"
            @click="() => handleDrawCustomClick(btn.type)"
          >
            <uc-svg-icon :name="btn.type" size="1em" />
            {{ btn.label }}
          </el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleSaveClick">确 定</el-button>
      </span>
    </el-dialog>
    <delete-custom-area :visible.sync="deleteDialogVis" :id="deleteCustomId" />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Message } from 'element-ui';
import visibleMixin from '@/mixin/visible';
import DeleteCustomArea from './selectDialog/DeleteCustomArea';
import SelectedAreaDisplay from './selectDialog/SelectedAreaDisplay';

// 自定义区域按钮
const customAreaBtn = [
  { type: 'rect', label: '矩形区域' },
  { type: 'reach', label: '可达区域' },
  { type: 'fence', label: '地理围栏' }
];
export default {
  components: {
    DeleteCustomArea,
    SelectedAreaDisplay
  },
  mixins: [visibleMixin],
  data() {
    return {
      selectedArea: {
        country: [],
        featureArea: [],
        customArea: []
      },
      selectedAreaForm: {
        country: [], // 选择地区的code
        featureArea: [], // 特征区域的索引值
        customArea: [] // 自定义区域的id
      },
      countryLoading: false,
      featureLoading: false,
      customLoading: false,
      deleteCustomId: '',
      deleteDialogVis: false,
      customAreaBtn
    };
  },
  computed: {
    ...mapState({
      countryOptions: 'country',
      featureAreaOptions: 'featureArea',
      customAreaOptions: 'customArea'
    }),
    selectedAreaNum() {
      const { country, featureArea, customArea } = this.selectedAreaForm;
      return country.length + featureArea.length + customArea.length;
    },
    selectDisable() {
      // 最多选3个
      return this.selectedAreaNum >= 3;
    }
  },
  watch: {
    selectedAreaForm: {
      handler(newVal) {
        const country = this.countryOptions.filter(item =>
          newVal.country.includes(item.code));
        const featureArea = this.featureAreaOptions.filter(item =>
          newVal.featureArea.includes(item.value));
        const customAreaStr = this.customAreaOptions.filter(item =>
          newVal.customArea.includes(item.id));
        const customArea = customAreaStr.map(ca => ({
          ...ca,
          polygon: JSON.parse(ca.polygon)
        }));
        this.selectedArea = Object.assign({}, this.selectedArea, {
          country,
          featureArea,
          customArea
        });
      },
      deep: true
    }
  },
  methods: {
    ...mapActions(['getCountry', 'getFeatureArea', 'getCustomArea']),
    // 点击绘制自定义区域
    handleDrawCustomClick(type) {
      this.localVisible = false;
      this.$emit('draw', type);
    },
    // 确定选择
    handleSaveClick() {
      if (this.selectedAreaNum === 0) {
        Message.warning('请选择区域');
        return;
      }
      this.localVisible = false;
      this.$emit('select', this.selectedArea);
    },
    resetFields() {
      if (this.$refs.selectForm) {
        this.$refs.selectForm.resetFields();
      }
    },
    // 行政区县的选项
    async searchCountry() {
      try {
        this.countryLoading = true;
        await this.getCountry();
        this.countryLoading = false;
      } catch (error) {
        Message.error(error.message);
      }
    },
    // 特征区域的选项
    async searchFeatureArea(query) {
      try {
        this.featureLoading = true;
        await this.getFeatureArea(query);
        this.featureLoading = false;
      } catch (error) {
        Message.error(error.message);
      }
    },
    // 已定义区域的选项
    async searchCustomArea() {
      try {
        this.customLoading = true;
        await this.getCustomArea();
        this.customLoading = false;
      } catch (error) {
        Message.error(error.message);
      }
    },
    // 弹出删除自定义区域的对话框
    showDeleteDialog(id) {
      this.deleteCustomId = id;
      this.deleteDialogVis = true;
    }
  }
};
</script>

<style lang="scss">
#tool-bar-select-dialog {
  .custom-area {
    button {
      span {
        vertical-align: middle;
      }
    }
  }

  .area-btn {
    background: rgba(255, 255, 255, 1);
    border-radius: 24px;
    padding: 2px 12px;
    border: 1px solid rgba(0, 6, 32, 0.08);
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 6, 32, 0.65);
    line-height: 20px;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .el-form-item__label {
    height: 24px;
    padding-bottom: 0;
    margin-bottom: 16px;
    line-height: 24px;
    font-size: 16px;
  }

  .el-form-item {
    margin-bottom: 24px;
  }

  .el-select.el-select--small {
    width: 100%;
  }
}

.delete-custom-dialog {
  .title {
    font-size: 16px;
    font-family: NotoSansSC;
    font-weight: 500;
    color: rgba(0, 6, 32, 0.65);
    line-height: 24px;
  }

  .sub-title {
    font-size: 14px;
    font-family: NotoSansSC;
    font-weight: 500;
    color: rgba(0, 6, 32, 0.4);
    line-height: 20px;
  }
}
</style>
