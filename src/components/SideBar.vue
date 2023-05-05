<template>
  <div
    :class="['side-bar', isFullScreen ? 'side-bar-full-screen' : '']"
    :style="{ width: localWidth, display: localVisible ? 'block' : 'none' }"
  >
    <p v-if="title" class="title">{{ title }}</p>
    <div class="switch">
      <i
        :title="isFullScreen ? '收起' : '展开'"
        :class="[
          'el-icon-arrow-left',
          isFullScreen ? 'switch-full-screen' : ''
        ]"
        @click="toggleFullScreen"
      />
    </div>
    <div class="content-wrapper">
      <div class="content">
        <!-- @slot 内容区域,绑定了当前是否全局显示
              @binding {Boolean} isFullScreen 是否全局显示
         -->
        <slot :isFullScreen="isFullScreen"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import visibleMixin from '@/mixin/visible';

export default {
  name: 'SideBar',
  mixins: [visibleMixin],
  props: {
    width: {
      type: String,
      default: '500px'
    },
    title: {
      type: String,
      default: ''
    } 
  },
  data() {
    const localWidth = this.width;
    return {
      localWidth,
      isFullScreen: false
    };
  },
  watch: {
    isFullScreen(val) {
      if (val) this.localWidth = 'calc(100%)';
      else this.localWidth = this.width;
    }
  },
  methods: {
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    }
  }
};
</script>

<style lang="scss">
@import "variable";
.side-bar {
  padding: $--gutter-paragraph;
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  height: 100%;
  transition: all 0.2s ease-in-out;
  background: linear-gradient(
    180deg,
    rgba(244, 255, 250, 0.85) 0%,
    rgba(232, 244, 255, 0.76) 100%
  );
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.28);
  border-radius: 4px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  z-index: 2000;
  // overflow-y: auto;

  .title {
    font-size: 18px;
    color: rgba(0, 6, 32, 0.65);
    border-bottom: 1px solid rgba(0, 0, 0, 0.4);
    padding-bottom: 10px;
    width: 100%;
    text-align: center;
    margin-bottom: $--gutter-paragraph;
  }
  .switch {
    position: absolute;
    width: 32px;
    height: 100%;
    display: flex;
    align-items: center;
    i {
      cursor: pointer;
    }
  }
  .content-wrapper{
    position: absolute;
    top: 24px;
    bottom: 0;
    left: 32px;
    right: 16px;
    overflow-y: auto;
    // margin-left: 16px;
  }
  .content {
    width: 100%;
    .el-row{
      width: 100%;
    }
  }
  .switch-full-screen {
    transition: all 0.2s ease-in-out;
    transform: rotate(180deg);
  }
}
.side-bar-full-screen {
  background-color: #fff;
}
</style>
