<template lang="pug">
  img(width="14px" height="14px" :src="orderedSrc" v-bind="$attrs")
</template>
<script>
import { convertSvg2Uri } from '@/util';
import svgicon from '@/assets/icon/svg/red1.svg';

export default {
  name: 'order-pos-img',
  props: {
    order: {
      type: Number,
      default: 1
    },
    color: {
      type: String,
      default: 'red'
    }
  },
  computed: {
    orderedSrc() {
      return convertSvg2Uri(svgicon.content, {
        order: Number(this.order),
        color: this.color
      });
    }
  }
};
</script>
