<template>
  <el-dialog
    title="删除自定义区域"
    :visible.sync="localVisible"
    class="delete-custom-dialog"
    :append-to-body="true"
    width="30%"
  >
    <div class="title">确定删除该自定义区域吗？</div>
    <div class="sub-title">本删除操作不可逆</div>
    <span
      slot="footer"
      class="dialog-footer"
    >
      <el-button
        type="primary"
        @click="deleteCustom"
      >确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { Message } from 'element-ui';
import { mapActions } from 'vuex';
import visibleMixin from '@/mixin/visible';

export default {
  mixins: [visibleMixin],
  props: {
    id: {
      default: ''
    }
  },
  methods: {
    ...mapActions(['deleteCustomArea']),
    // 确认删除自定义区域
    async deleteCustom() {
      if (!this.id) return;
      try {
        this.customLoading = true;
        await this.deleteCustomArea(this.id);
        this.localVisible = false;
        this.customLoading = false;
        this.$emit('delete', this.id);
      } catch (error) {
        Message.error(error.message);
      }
    }
  }
};
</script>

<style>
</style>
