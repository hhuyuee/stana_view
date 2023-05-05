<template>
  <div class="city-select">
    <div class="title">
      <span>选择城市</span>
      <span class="count">
        {{`(${selectedCity.code ? 1 : 0}/1)`}}
      </span>
    </div>
    <div class="city-list-wrapper">
      <city-list-sort-pinyin :selectedCity="selectedCity"
                             :allCityList="allCityList"
                             @select="handleSelect" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import CityListSortPinyin from '@/components/CityListSortPinyin';

export default {
  name: 'city-select',
  components: {
    CityListSortPinyin
  },
  computed: {
    ...mapState(['allCityList']),
    selectedCity () {
      return this.$store.state.selectedCity;
    }
  },
  async created () {
    this.getAllCityList();
  },
  methods: {
    ...mapActions(['getAllCityList']),
    ...mapMutations({
      setSelectCity: 'SET_SELECTED_CITY'
    }),
    handleSelect (e) {
      this.setSelectCity(e);
      this.$router.push({ name: 'customerFeature' });
    }
  }
};
</script>

<style lang="scss">
.city-select {
  position: relative;
  top: 100px;
  max-height: 500px;
  .title {
    font-size: 24px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 40px;
    text-align: center;
  }
}
</style>
