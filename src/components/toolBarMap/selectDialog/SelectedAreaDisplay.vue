<template>
  <div class="selected-area-display" v-if="selectedAreaNum > 0">
    <span>
      <el-tooltip
        v-for="item in selectedArea.country"
        :key="item.code"
        placement="top"
        :content="item.name"
        class="item"
      >
        <span>{{ item.name }}</span>
      </el-tooltip>
    </span>
    <span>
      <el-tooltip
        v-for="item in selectedArea.featureArea"
        :key="item.value"
        placement="top"
        :content="item.name"
        class="item"
      >
        <span>{{ item.name }}</span>
      </el-tooltip>
    </span>
    <span>
      <el-tooltip
        v-for="item in selectedArea.customArea"
        :key="item.id"
        placement="top"
        :content="item.name"
        class="item"
      >
        <span>{{ item.name }}</span>
      </el-tooltip>
    </span>
  </div>
</template>

<script>
import { Tooltip } from 'element-ui';

export default {
  name: 'SelectedAreaDisplay',
  components: {
    [Tooltip.name]: Tooltip
  },
  props: {
    selectedAreaNum: {
      type: Number,
      default: 0
    },
    selectedArea: {
      type: Object,
      default: () => ({ country: [], featureArea: [], customArea: [] })
    }
  }
};
</script>

<style lang="scss">
.selected-area-display {
  height: 30px;

  .item {
    background: rgba(47, 84, 201, 0.08);
    border-radius: 4px;
    padding: 2px 13px;
    color: rgba(47, 84, 201, 1);
    font-size: 14px;
    display: inline-block;
    max-width: 38em;
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;

    + .item {
      margin-left: 16px;
    }
  }
}
</style>
