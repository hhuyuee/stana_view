<template>
  <div>
    <el-table :data="currentData" v-bind="elProps" v-on="elEvent" class="table">
      <el-table-column
        v-for="(item, idx) in columns"
        :key="idx"
        :prop="item.value"
        :label="item.label"
        :formatter="item.formatter"
        v-bind="item.option"
      >
        <template slot-scope="slotScope">
          <slot v-if="item.slot" :name="item.slot" v-bind="slotScope"></slot>
          <span v-if="!item.slot">
            <!-- eslint-disable-next-line -->
            {{
              item.formatter
                ? item.formatter(slotScope.row)
                : slotScope.row[item.value]
            }}
          </span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      class="pagination"
      v-if="datalist.length > pageSize"
      small
      :current-page.sync="pageNum"
      layout="prev, pager, next"
      :page-size="pageSize"
      :total="datalist.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => []
    },
    datalist: Array,
    pageSize: {
      default: 5,
      type: Number
    },
    elProps: Object,
    elEvent: Object
  },
  data() {
    return {
      pageNum: 1
    };
  },
  watch: {
    datalist() {
      this.pageNum = 1;
    }
  },
  computed: {
    currentData() {
      const { datalist, pageNum: num, pageSize: size } = this;
      return datalist.slice((num - 1) * size, num * size);
    }
  }
};
</script>

<style lang="scss">
.pagination {
  margin-top: 8px;
  text-align: right;
}
</style>
