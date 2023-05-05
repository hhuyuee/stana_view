<template lang="pug">
  div.select-weight-dialog
    span.select-weight-btn(@click="showDialog")
      uc-svg-icon(name="prod-weight" size="24px")
      span 权重
    el-dialog(
      title="智能权重"
      :visible.sync="visible"
      :modal="false"
      width="480px"
    )
      el-button.reset-suggest(
        type="text"
        @click="resetSuggest"
      ) 恢复推荐
      el-divider
      el-row.weight-item(
        v-for="item in weights"
        :key="item.lable"
      )
        el-col(:span="4")
          span {{item.name}}
        el-col(:span="15")
          el-slider(v-model="item.value")
        el-col(:span="2")
          span.value {{item.value}}

      span.dialog-footer(slot="footer")
        el-button(
          type="primary"
          @click="handleClick"
          size="small"
        ) 确 定

</template>
<script>
import { Message } from 'element-ui';
// import { cloneDeep } from 'lodash';
import * as api from '@/api/product';

// const weights = [
//   { label: '人口', value: 80 },
//   { label: '消费', value: 80 },
//   { label: '环境业态', value: 80 },
//   { label: '交通路网', value: 80 }
// ];

export default {
  name: 'select-weight-dialog',
  data() {
    return {
      visible: false,
      weights: [],
    };
  },
  async mounted() {
    try {
      this.defaultWeight = await api.getDefaultWeight();
    } catch (e) {
      Message.error(e.message);
    }
  },
  methods: {
    async showDialog() {
      try {
        this.weights = await api.getWeight();
      } catch (e) {
        Message.error(e.message);
      }
      this.visible = true;
    },
    resetSuggest() {
      this.weights = this.defaultWeight;
    },
    async handleClick() {
      this.visible = false;
      // this.$emit('select', this.weights);
      try {
        await api.setWeight(this.weights);
      } catch (e) {
        Message.error(e.message);
      }
    }
  }
};
</script>
<style lang="scss">
.select-weight-dialog{
  .select-weight-btn{
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 95px;
  }
  .weight-item{
    display: flex;
    align-items: center;
    justify-content: center;
    .value{
      padding-left: 10px;
    }
  }
  .el-divider{
    width: 90%;
    margin: 0 auto;
    margin-bottom: 10px;
  }
  .el-dialog__body{
    padding-top: 15px;
    padding-bottom: 10px;
  }
  .reset-suggest{
    position: absolute;
    top: 15px;
    right: 60px;
  }
}
</style>
