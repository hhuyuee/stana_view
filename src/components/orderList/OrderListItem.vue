<template lang="pug" functional>

  div.order-list-item(v-on="listeners")
    div.order(v-if="props.order")
      slot(name="order" :order="props.order") {{props.order}}
    div.item-column(
      v-for="col in props.columns" :key="col.key"
      class="f-toe1"
      :title="props.data[col.key]"
    ) {{props.data[col.key]}}

</template>
<style lang="scss">
@import "./OrderListBase";
.order-list-item {
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  .item-column{
    max-width: 280px;
  }
  &:hover{
    background-color: $--background-color-base;
  }
  .order {
    width: $--width-order-label;
    padding-left: $pl-order-label;
  }
}
</style>
