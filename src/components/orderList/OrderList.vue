<template lang="pug">
  div.order-list

    div.operation
      slot(name="operation")
    div.header
      div.order(v-if="ordered") {{'序号'}}
      div(v-for="col in columns" :key="col.key") {{col.label}}

    .order-list__content
      order-list-item.order-list-item-wrapper(
        v-for="item in orderedList"
        :key="item._order"
        @click="() => handleClickItem(item)"
        :columns="columns"
        :data="item"
        :order="item._order"
      )
        template(v-slot:order="{order}")
          order-pos-img(:order="order")

</template>

<script>
import OrderPosImg from '@/components/orderPosImg/OrderPosImg';
import OrderListItem from './OrderListItem';

export default {
  name: 'OrderList',
  components: { OrderListItem, OrderPosImg },
  props: {
    ordered: {
      type: Boolean,
      default: true
    },
    columns: {
      type: Array,
      default: () => [{ label: '地址', key: 'address' }]
    },
    list: {
      type: Array,
      default: () => [{ address: '你好' }, { address: 'hello' }]
    }
  },
  computed: {
    orderedList() {
      let orderedList = this.list;
      if (this.ordered) {
        orderedList = this.addListOrder(orderedList);
      }
      return orderedList;
    }
  },
  methods: {
    handleClickItem(item) {
      //
      this.$emit('click:item', item);
    },
    /**
     * 返回增加序号的list(_index),
     * 不改变原list
     * @param {Object[]} list
     * @returns {Obejct[]}
     */
    addListOrder(list) {
      return list.map((item, idx) => ({ ...item, _order: idx + 1 }));
    }
  }
};
</script>

<style lang="scss">
@import "./OrderListBase";
.order-list {
  padding: 16px 40px;
  .header {
    display: flex;
    align-items: center;
    .order {
      width: $--width-order-label;
      // padding-left: $pl-order-label;
    }
  }
  // .operation {
  //   // float: right;
  // }
}
</style>
