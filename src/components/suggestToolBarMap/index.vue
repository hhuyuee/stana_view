<template>
  <div class="suggest-tool-bar-map">
    <div class="map" ref="lmap"></div>
    <div class="tool-bar">
      <el-row type="flex" justify="start">
        <el-col>
          <baidu-suggest
            v-model="searchInput"
            @select:marker="selectMaker"
            @draw:marker="drawMarker"
            :fullTitle="true"
          />
        </el-col>
        <el-col class="suggest-condition">
          <select-industry-dialog />
          <el-divider direction="vertical"></el-divider>
          <select-weight-dialog />
          <el-divider direction="vertical"></el-divider>
          <span class="select-area-btn" @click="selectDialogShow = true">
            <uc-svg-icon name="prod-area" size="24px" />
            区域
          </span>
          <el-button type="primary" class="start-suggest" @click="handleSuggest"
            >执行推荐</el-button
          >
        </el-col>
      </el-row>
    </div>
    <grid-control @gridControl:toggle="toggleGrid" />
    <select-dialog
      ref="selectDailog"
      :visible.sync="selectDialogShow"
      @select="select"
      @draw="addCustomArea"
    />
    <!-- 矩形区域 -->
    <draw-rect ref="draw-rect" @finish="showSelectDialog" :map="map" />
    <!-- 可达区域 -->
    <draw-reach ref="draw-reach" @finish="showSelectDialog" :map="map" />
    <!-- 地理围栏 -->
    <draw-fence
      :map="map"
      :visible.sync="drawFenceVis"
      @finished="showSelectDialog"
    />
  </div>
</template>
<script>
import { Message } from 'element-ui';
import { mapState } from 'vuex';
import mapMixin from '@/mixin/map';
import drawMixin from '@/mixin/draw';
import selectDailogMixin from '@/mixin/selectDialog';
import markerMixin from '@/mixin/marker';
import geohashGridMixin from '@/mixin/geohashGrid';
import SelectDialog from '@/components/toolBarMap/SelectDialog';
import DrawRect from '@/components/toolBarMap/drawCustom/DrawRect';
import DrawReach from '@/components/toolBarMap/drawCustom/DrawReach';
import DrawFence from '@/components/toolBarMap/drawCustom/DrawFence';
import BaiduSuggest from '@/components/BaiduSuggest';
import GridControl from '@/components/toolBarMap/GridControl';
import SelectIndustryDialog from './SelectIndustryDialog';
import SelectWeightDialog from './SelectWeightDialog';

export default {
  name: 'suggest-tool-bar-map',
  mixins: [
    mapMixin,
    drawMixin,
    selectDailogMixin,
    markerMixin,
    geohashGridMixin
  ],
  components: {
    SelectDialog,
    DrawRect,
    DrawReach,
    DrawFence,
    BaiduSuggest,
    SelectIndustryDialog,
    SelectWeightDialog,
    GridControl
  },
  data() {
    return {
      searchInput: ''
    };
  },
  
  computed: {
    ...mapState({
      cityCode: state => state.selectedCity.code
    })
  },
  watch: {
    async cityCode(newVal) {
      try {
        await this.setMapViewByCode(newVal, true);
        this.clearMap();
      } catch (e) {
        Message.error(e.message);
      }
    }
  },
  methods: {
      
    async handleSuggest() {
      this.$emit('suggest');
    }
  }
};
</script>
<style lang="scss" scoped>
@import "variable";
$height-tool: 48px;
$tool-gutter: 16px;
.suggest-tool-bar-map {
  position: relative;
  .map {
    width: 100%;
    height: 100%;
  }
  .tool-bar {
    z-index: 2000;
    position: absolute;
    top: 0;
    left: 32px;
    .el-row {
      margin-top: $tool-gutter;
    }
    .el-col {
      margin-right: $tool-gutter;
    }
    .suggest-condition {
      background-color: white;
      display: flex;
      align-items: center;
      box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
      border-radius: 4px;
      width: 424px;
    }
    .select-area-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: 95px;
    }
    .start-suggest {
      height: 48px;
    }
  }
}
</style>
