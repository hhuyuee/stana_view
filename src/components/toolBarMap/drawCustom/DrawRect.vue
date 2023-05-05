<template>
  <!-- 矩形弹窗 -->
  <el-dialog
    v-dialogDrag
    width="30%"
    title="自定义矩形区域"
    :visible.sync="dialogShow"
    :modal="false"
    :before-close="handleClose"
    @close="close"
  >
    <el-form ref="rect" :model="rectForm">
      <el-form-item prop="name" label="自定义区域名称" :rules="rules">
        <el-input
          placeholder="请输入自定义区域名称"
          v-model.trim="rectForm.name"
          maxlength="25"
          show-word-limit
        />
      </el-form-item>
    </el-form>
    <div slot="footer">
      <el-button @click="redraw">重选</el-button>
      <el-button type="primary" @click="addRect">确定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import L from 'leaflet';
import { Message } from 'element-ui';
import { bd2wgs } from '@/util';
import * as api from '@/api/base';
import drawCustomMixin from './drawCustomMixin';

export default {
  mixins: [drawCustomMixin],
  data() {
    return {
      // 矩形区域
      rectForm: {
        name: ''
      },
      dialogShow: false,
      rules: [{ required: true, trigger: 'blur', message: '请输入区域名称' }],
      wgsLatLngs: []
    };
  },
  methods: {
    initDraw() {
      const p = new L.Draw.Rectangle(this.map, {
        shapeOptions: {
          stroke: true,
          color: 'red'
        }
      });
      p.enable();

      this.map.on(L.Draw.Event.CREATED, ({ layer }) => {
        this.drawnItems.addLayer(layer); // 绘制的图层添加到地图
        const [latlngs] = layer.getFullLatLngs();
        this.wgsLatLngs = latlngs.map(({ lat, lng }) => {
          const [lngTmp, latTmp] = bd2wgs([lng, lat]);
          return { latitude: latTmp, longitude: lngTmp };
        });
        this.dialogShow = true;
        this.map.off(L.Draw.Event.CREATED);
        // this.$emit('draw:end', wgsLatLngs);
      });
    },
    async addRect() {
      this.$refs.rect.validate(async (validate) => {
        if (validate) {
          try {
            const {
              rectForm: { name },
              wgsLatLngs: polygon
            } = this;
            await api.addCustomArea({ name, polygon, type: '矩形区域' });
            this.dialogShow = false;
            this.drawnItems.clearLayers();
            this.$emit('finish');
          } catch (error) {
            Message.error(error.message);
          }
        }
      });
    },
    close() {
      this.$refs.rect.resetFields();
    }
  }
};
</script>

<style>
</style>
