<template lang="pug">
  div.select-industry-dialog
    span.select-industry-dialog-btn(@click="showDialog")
      uc-svg-icon(name="prod-industry" size="24px")
      span 行业
    el-dialog(
      :title="`已选择的行业${selectedNum}/1`"
      :visible.sync="visible"
      :modal="false"
      width="480px"
    )
      div.selected-industry
        span(v-if="form.selectedIndustryId") {{ selectedIndustry.name }}
        span.not-selected(v-else) 暂未选择任何行业
      el-form(ref="form" :model="form" label-position="top" :rules="rules")
        el-form-item(label="全部行业" prop="selectedIndustryId")
          el-select(
            v-model="form.selectedIndustryId"
            placeholder="请选择行业"
            clearable
          )
            el-option(
              v-for="item in industryOptions"
              :key="item.id"
              :label="item.name"
              :value="item.id"
              :disabled="item.status=== industryStatus.DISABLE"
            )

      //- 底部确定按钮
      span.dialog-footer(slot="footer")
        el-button(type="primary" @click="handleClick") 确 定
  </span>
</template>
<script >
import { Dialog, Message } from 'element-ui';
import { mapMutations, mapState } from 'vuex';
import * as api from '@/api/base';

export default {
  name: 'select-industry-dialog',
  components: {
    [Dialog.name]: Dialog
  },
  data() {
    return {
      visible: false,
      form: {
        selectedIndustryId: ''
      },
      rules: {
        selectedIndustryId: [
          { required: true, message: '请选择行业', trigger: ['blur', 'change'] }
        ]
      },
      industryStatus: {
        DISABLE: 0,
        ENABLE: 1
      }
    };
  },
  computed: {
    ...mapState({
      industryOptions: 'allIndustry'
    }),
    selectedNum() {
      if (!this.form.selectedIndustryId) {
        return 0;
      }
      return 1;
    },
    selectedIndustry() {
      return (
        this.industryOptions.find(i => i.id === this.form.selectedIndustryId) ||
        {}
      );
    }
  },
  methods: {
    ...mapMutations({
      setAllIndustry: 'SET_ALL_INDUSTRY',
      setSelectedIndustry: 'SET_SELECTED_INDUSTRY'
    }),
    async showDialog() {
      try {
        const allIndustry = await api.getIndustryOptions();
        this.setAllIndustry(allIndustry);
      } catch (e) {
        Message.error(e.message);
      }
      this.form.selectedIndustryId = this.$store.state.user.industry.id;
      this.visible = true;
    },
    handleClick() {
      this.$refs.form.validate(async (valid) => {
        if (!valid) {
          Message.warning('请选择行业');
          return;
        }
        // this.$emit('select', this.form.selectedIndustry);
        this.visible = false;
        try {
          await api.setCityIndustry({ industryId: this.selectedIndustry.id });
        } catch (e) {
          Message.error(e.message);
        }
        this.setSelectedIndustry(this.selectedIndustry);
      });
    }
  }
};
</script>
<style lang="scss">
.select-industry-dialog {
  .select-industry-dialog-btn {
    cursor: pointer;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 95px;
  }
  .el-dialog__body {
    padding-top: 10px;
    padding-top: 10px;
  }
  .selected-industry {
    padding-left: 2em;
    font-size: 12px;
    font-weight: 500;

    .not-selected {
      color: rgba(0, 6, 32, 0.4);
    }
  }
  .el-form-item__label {
    font-weight: 500;
    color: rgba(0, 6, 32, 0.65);
  }
  .el-select {
    width: 100%;
  }
}
</style>
