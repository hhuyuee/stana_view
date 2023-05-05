<template>
  <!-- 可达区域弹窗 -->
  <el-dialog
    v-dialogDrag
    v-loading="acessLoading"
    :before-close="handleClose"
    width="30%"
    title="可达区域"
    :visible.sync="dialogShow"
    :modal="false"
    @close="close"
  >
    <el-form ref="acess" :model="acessForm">
      <el-row :gutter="16">
        <el-col :span="6">
          <el-select v-model="acessForm.type">
            <el-option
              v-for="{ label, value } in acessTypeList"
              :key="value"
              :label="label"
              :value="value"
            />
          </el-select>
        </el-col>
        <el-col :span="15">
          <el-form-item
            prop="time"
            :rules="[{ validator: nonNagtive, trigger: 'blur' }]"
          >
            <el-input
              v-model="acessForm.time"
              placeholder="请输入可达时间（分钟）"
            />
            <span class="tip">例：23.56</span>
          </el-form-item>
        </el-col>
        <el-col :span="3">
          <el-button type="text" @click="previewAcessPolygon">预览</el-button>
        </el-col>
      </el-row>
      <el-form-item prop="name" label="自定义区域命名" :rules="rules">
        <el-input
          placeholder="请输入自定义区域名称"
          v-model.trim="acessForm.name"
          maxlength="25"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="reSelect">重选</el-button>
      <el-button type="primary" @click="addReach">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import L from 'leaflet';
import { Message } from 'element-ui';
import { bd2wgs, wgs2bd, convertSvg2Uri } from '@/util';
import { defaultLeafletIconSize } from '@/config';
import * as api from '@/api/base';
import svgicon from '@/assets/icon/svg/red.svg';
import drawCustomMixin from './drawCustomMixin';

const iconUrl = convertSvg2Uri(svgicon.content);
const iconOption = { iconUrl, iconSize: defaultLeafletIconSize };

export default {
  mixins: [drawCustomMixin],
  data() {
    return {
      // 可达区域
      acessForm: {
        type: 'walk',
        time: 0,
        name: ''
      },
      wgsLatLng: {},
      reachPolygon: null,
      reachPoint: [],
      acessTypeList: [
        { value: 'walk', label: '步行' },
        { value: 'ride', label: '骑行' },
        { value: 'drive', label: '驾驶' }
      ],
      nonNagtive: (rule, value, cb) => {
        if (!value) {
          cb(new Error('请输入可达时间（分钟）'));
        }
        if (value <= 0) {
          cb(new Error('时间必须大于0'));
        }
        cb();
      },
      rules: [{ required: true, trigger: 'blur', message: '请输入区域名称' }],
      acessLoading: false,
      dialogShow: false
    };
  },
  methods: {
    initDraw() {
      const p = new L.Draw.Marker(this.map, { icon: L.icon(iconOption) });
      p.enable();
      this.map.on(L.Draw.Event.CREATED, ({ layer }) => {
        this.drawnItems.addLayer(layer); // 绘制的图层添加到地图
        const { lng, lat } = layer.getLatLng();
        const [lngTmp, latTmp] = bd2wgs([lng, lat]);
        this.wgsLatLng = { lat: latTmp, lng: lngTmp };
        this.dialogShow = true;
        this.map.off(L.Draw.Event.CREATED);
        // this.$emit('draw:end', wgsLatLng);
      });
    },
    async previewAcessPolygon() {
      if (!this.acessForm.time) {
        Message.error('请选择时间');
        return;
      }
      this.acessLoading = true;
      const { time, type } = this.acessForm;
      const { lat: latitude, lng: longitude } = this.wgsLatLng;
      try {
        const data = await api.getReachablePolygon({
          loc: { latitude, longitude },
          timeInSecond: time * 60,
          type
        });
        if (!data || data.length < 1) {
          this.acessLoading = false;
          Message.info('暂无数据');
          return;
        }
        this.reachPoint = data;
        const latlngs = data.map(point =>
          wgs2bd([point.longitude, point.latitude]).reverse());
        const reachPolygon = L.polygon(latlngs, { color: 'red' }).addTo(this.map);
        this.map.fitBounds(reachPolygon.getBounds());
        this.reachPolygon = reachPolygon;
      } catch (err) {
        Message.error(err.message || '该区域不支持该功能');
      }
      this.acessLoading = false;
    },
    async addReach() {
      this.$refs.acess.validate(async (validate) => {
        if (validate) {
          try {
            const {
              acessForm: { name },
              reachPoint: polygon
            } = this;
            await api.addCustomArea({ name, polygon, type: '可达区域' });
            this.dialogShow = false;
            this.drawnItems.clearLayers();
            this.$emit('finish');
          } catch (error) {
            Message.error(error.message);
          }
        }
      });
    },
    reSelect() {
      // eslint-disable-next-line no-unused-expressions
      this.reachPolygon && this.reachPolygon.remove();
      this.redraw();
    },
    close() {
      // eslint-disable-next-line no-unused-expressions
      this.reachPolygon && this.reachPolygon.remove();
      this.$refs.acess.resetFields();
    }
  }
};
</script>

<style lang="scss">
</style>
