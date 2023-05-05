<template>
  
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex';
import { routes } from '@/router/sideBarRoutes';
import CityListSortPinyin from '@/components/CityListSortPinyin';
import * as api from '@/api/user';
import MenuItem from './MenuItem';
import HeaderTitle from './HeaderTitle';

export default {
  components: { MenuItem, HeaderTitle, CityListSortPinyin },
  data: () => ({
    routes,
    cityListShow: false
  }),
  computed: {
    // ...mapState(['allCityList']),
    // user() {
    //   return this.$store.state.user;
    // },
    // selectedCity() {
    //   return this.$store.state.selectedCity;
    // }
  },
  async created() {
    // this.getAllCityList();
  },
  methods: {
    ...mapActions(['getAllCityList']),
    ...mapMutations({
      setSelectCity: 'SET_SELECTED_CITY'
    }),
    // 处理用户菜单
    // async handleCommand(command) {
    //   if (command === 'logout') {
    //     await api.logout();
    //     this.$router.push('/login');
    //   }
    // },
    // // 城市选择功能显示
    // toggleCityList() {
    //   this.cityListShow = !this.cityListShow;
    // },
    // setSelectCityFunc(data) {
    //   this.cityListShow = false;
    //   this.setSelectCity(data);
    // }
  }
};
</script>
<style lang="scss">
@import "variable";
#menu-header {
  position: relative;
  height: $height-header;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08);
  z-index: 2000;
  .header-title {
    position: absolute;
    top: 10px;
    left: 32px;
  }
  .menu-item-wrapper {
    margin-left: 172px;
  }
  .right {
    float: right;
    position: relative;
    top: 14px;
    right: 32px;
    line-height: 20px;
    .divider {
      display: inline-block;
      width: 1px;
      height: 16px;
      background-color: #000620;
      margin-right: 23px;
      margin-left: 23px;
      vertical-align: middle;
    }
    .user-name {
      color: #000620;
    }
    .city-dropdown-title, .user-name {
      cursor: pointer;
      &:hover{
        background-color: $--background-color-base;
      }
    }
  }
}

.city-popper-class {
  right: 0 !important;
}
</style>

