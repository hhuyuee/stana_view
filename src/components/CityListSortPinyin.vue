<template>
  
</template>
<script>
import pinyin from 'pinyin';
import * as api from '@/api/base';
import { Message } from 'element-ui';

/**
 * 根据拼音对城市排序
 * TODO: 对应字母中的城市如果都不可选,则置灰
 */
export default {
  name: 'city-list-sort-pinyin',
  data() {
    return {
      letter: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''), // 不是26个字母
      curLetter: 'A'
    };
  },
  props: {
    /**
     * 选中的城市
     */
    selectedCity: {
      type: Object,
      default: () => ({ name: '', code: '' })
    },
    /**
     * 所有城市列表
     */
    allCityList: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    curLetterCityList() {
      return (
        this.cityListSortLetter.find(city => city.letter === this.curLetter) ||
        {}
      ).cityList;
    },
    cityListSortLetter() {
      const { letter, allCityList } = this;

      const out = [];
      letter.forEach((l) => {
        out.push({ letter: l, cityList: [] });
      });
      allCityList.forEach((city) => {
        const l = this.getFirstLetter(city.name);
        out.forEach((o) => {
          if (o.letter === l) {
            o.cityList.push(city);
          }
        });
      });
      return out;
    }
  },
  mounted() {
    this.curLetter = this.getFirstLetter(this.selectedCity.name);
  },
  methods: {
    async setSelectCity(city) {
      // 一下调用接口的业务代码可以从组件中抽离出来,在业务中使用可以再封装一层
      try {
        await api.setCityIndustry({ cityCode: city.code });
        this.$emit('select', city);
      } catch (error) {
        Message.error(error.message);
      }
    },
    /**
     * 获取当前选中城市的拼音首字母
     * @param {String} name 城市名字
     */
    getFirstLetter(name) {
      if (!name) return 'A';
      const firstLetter = pinyin(name, {
        style: pinyin.STYLE_FIRST_LETTER
      });
      let l = firstLetter[0][0].toUpperCase();
      // 因为分词+多音字在web端是阉割版,所以目前是用下面很蠢的写法写死了.
      if (name.indexOf('重庆') > -1) l = 'C';
      if (name[0] === '阿') l = 'A';
      return l;
    }
  }
};
</script>
<style lang="scss">
@import "variable";

.city-list-sort-pinyin {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .el-button + .el-button {
    margin-left: 0;
  }

  .letter {
    padding: 0 13px 32px;
    width: 100%;
    display: flex;
    // justify-content space-around
    flex-wrap: wrap;
    border-bottom: 1px solid rgba(0, 6, 32, 0.4);
  }

  .letter-item {
    font-size: 20px;
    padding: 0 4px 0 4px;
    cursor: pointer;
    color: rgba(0, 6, 32, 0.65);
    line-height: 36px;
    font-size: 20px;
    font-family: NotoSansSC-Medium, NotoSansSC;
    font-weight: 500;
    line-height: 20px;
    letter-spacing: 3px;
    &:hover {
      background-color: $--background-color-base;
    }
    &:disabled {
      &:hover {
        background-color: transparent;
      }
    }
  }

  .city-list {
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    // padding: 35px;
  }

  .city-item {
    cursor: pointer;
    color: rgba(0, 6, 32, 0.65);
    font-size: 18px;
    font-weight: 500;
    line-height: 36px;
    &:hover {
      background-color: $--background-color-base;
    }
    &:disabled {
      &:hover {
        background-color: transparent;
      }
    }
  }

  .selected {
    color: #2f54c9;
  }

  .is-disabled {
    color: rgba(0, 6, 32, 0.4);

    &:hover {
      color: rgba(0, 6, 32, 0.4);
    }
  }
}
</style>
