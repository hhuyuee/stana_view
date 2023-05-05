<template>
  <!-- 地理围栏弹窗 -->
  <el-dialog
    v-dialogDrag
    :before-close="handleClose"
    width="30%"
    title="地理围栏"
    :visible.sync="localVisible"
    :modal="false"
    @close="close"
  >
    <el-form ref="fence" :model="fenceForm">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-select v-model="fenceForm.type">
            <el-option
              v-for="gcoord in gcoordTypeOptions"
              :key="gcoord.value"
              :label="gcoord.name"
              :value="gcoord.value"
            />
          </el-select>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="pointsStr" :rules="pointRules">
            <el-input
              placeholder="请输入围栏数据"
              v-model="fenceForm.pointsStr"
              @blur="formatPointsStr"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-button type="text" @click="previewPolygon">预览</el-button>
        </el-col>
      </el-row>
      <span class="tip">
        以样例格式为准：23.89#114.56,23.56#114.56...
      </span>
      <el-form-item prop="name" label="自定义区域命名" :rules="nameRules">
        <el-input
          placeholder="请输入自定义区域名称"
          v-model.trim="fenceForm.name"
          maxlength="25"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <!-- <el-button @click="">重选</el-button> -->
      <el-button type="primary" @click="addFence">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import L from 'leaflet';
import { Message } from 'element-ui';
import visibleMixin from '@/mixin/visible';
import { bd2wgs, wgs2bd, gcj2wgs, last } from '@/util';
import { isEqual } from 'lodash';
import * as api from '@/api/base';
import drawCustomMixin from './drawCustomMixin';

const gcoordTypeOptions = [
  {
    name: '百度',
    value: 'BD'
  },
  {
    name: '高德',
    value: 'GD'
  },
  {
    name: '腾讯',
    value: 'TX'
  },
  {
    name: 'GCJ',
    value: 'GCJ02'
  },
  {
    name: 'WGS',
    value: 'WGS84'
  }
];
export default {
  mixins: [drawCustomMixin, visibleMixin],
  data() {
    return {
      // 地理围栏
      fenceForm: {
        type: 'WGS',
        name: '',
        pointsStr: ''
      },
      points: [],
      gcoordTypeOptions,
      polygon: null,
      pointRules: [
        { required: true, trigger: 'blur', message: '请输入围栏数据' }
      ],
      nameRules: [{ required: true, trigger: 'blur', message: '请输入名称' }]
    };
  },
  methods: {
    /**
     * 根据当前的type转换坐标为wgs
     */
    convertWgs() {
      const {
        fenceForm: { type },
        points
      } = this;
      let wgsPoints = points;
      switch (type) {
        case 'BD':
          wgsPoints = points.map(([lat, lng]) => bd2wgs([lng, lat]).reverse());
          break;
        case 'GD':
          wgsPoints = points.map(([lat, lng]) => gcj2bd([lng, lat]).reverse());
          break;
        case 'TX':
        case 'GCJ':
          wgsPoints = points.map(([lat, lng]) => gcj2wgs([lng, lat]).reverse());
          break;
        default:
          break;
      }
      return wgsPoints;
    },
    /**
     * 预览polygon
     */
    previewPolygon() {
      if (this.polygon) {
        this.polygon.remove();
      }

      const wgsPoints = this.convertWgs();
      if (wgsPoints.length === 0) return;
      const bdPoints = wgsPoints.map(([lat, lng]) =>
        wgs2bd([lng, lat]).reverse());
      this.polygon = L.polygon(bdPoints, { color: 'red' }).addTo(this.map);
      this.map.fitBounds(this.polygon.getBounds());
    },
    // 将输入的字符串格式化数组,
    formatPointsStr() {
      try {
        const {
          fenceForm: { pointsStr }
        } = this;
        if (!pointsStr) return;
        const points = pointsStr
          .trim()
          .split(/[,，]\s*/)
          .map(p => p.split('#'))
          .filter(p => p.length > 1);

        if (points.length < 2) {
          throw new Error('请输入三个或以上的坐标点');
        }
        this.points = points;
      } catch (e) {
        Message.error(e.message);
      }
    },
    addFence() {
      this.$refs.fence.validate(async (validate) => {
        if (validate) {
          try {
            const {
              fenceForm: { name }
            } = this;
            // const [latLngs] = this.polygon.getFullLatLngs();
            const wgsPoints = this.convertWgs();
            if (wgsPoints.length === 0) return;

            // 首尾相连
            if (!isEqual(wgsPoints[0], last(wgsPoints))) {
              wgsPoints.push(wgsPoints[0]);
            }
            const polygon = wgsPoints.map(([lat, lng]) => ({
              latitude: Number(lat),
              longitude: Number(lng)
            }));
            await api.addCustomArea({ name, polygon, type: '电子围栏' });
            this.localVisible = false;
            if (this.polygon) {
              this.polygon.remove();
            }
            this.$emit('finished');
          } catch (error) {
            Message.error(error.message);
          }
        }
      });
    },
    close() {
      if (this.polygon) {
        this.polygon.remove();
      }
      this.$refs.fence.resetFields();
    }
  }
};
</script>

<style>
</style>
