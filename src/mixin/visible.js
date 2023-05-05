export default {
  props: {
    visible: Boolean
  },
  computed: {
    // 用于dialog显示与隐藏
    localVisible: {
      get() {
        return this.visible;
      },
      set(val) {
        this.$emit('update:visible', val);
      }
    }
  }
};
