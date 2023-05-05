<template>
  <div class="tool-bar">
    <el-row>
      <el-col :span="3">
        <div class="sel_btn">
          <el-button type="primary"
                     @click="fun">筛选</el-button>
        </div>
      </el-col>
      <el-col :span="18">
        <el-card v-if="show"
                 class="box-card">
          <div slot="header"
               class="clearfix">
            <span>驻留点分析</span>
          </div>
          <el-scrollbar wrap-class="list"
                        view-class="view-box"
                        :native="false">
            <div class="sel_bottom">
              <el-row>
                <el-col :span="6">
                  <div class="sel_menu">
                    <el-menu default-active="1"
                             class="el-menu-vertical-demo"
                             @select="changeMenu">
                      <el-menu-item index="stayPoint">
                        <span slot="title">驻留点查询</span>
                      </el-menu-item>
                      <el-menu-item index="pos">
                        <span slot="title">地点画像生成</span>
                      </el-menu-item>
                    </el-menu>
                  </div>
                </el-col>
                <el-col :span="15"
                        v-if="menu === 'stayPoint'">
                  <div class="sel_point">
                    <div class="sel_point_sel">

                      <el-row>
                        <span>筛选:</span>
                        <el-button type="text"
                                   @click="clean">清空</el-button>
                      </el-row>
                      <el-row>
                        <span>条件属性：</span>
                        <el-cascader v-model="value"
                                     :options="options"
                                     class="condition"
                                     @change="con_change"
                                     clearable></el-cascader>
                      </el-row>
                      <el-row>
                        <div v-if="value[1]==='poi'">
                          <span>POI条件：</span>
                          <el-input v-model="poiScope"
                                    class="poi_input"
                                    placeholder=""></el-input>
                          <span>米范围内</span>
                          <el-select v-model="poiFilter"
                                     class="exist_poi"
                                     placeholder="请选择">
                            <el-option v-for="item in exist"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                          <el-select v-model="poiType"
                                     multiple
                                     style="margin-left:75px; margin-top:10px;"
                                     placeholder="请选择">
                            <el-option v-for="item in poi"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='road'">
                          <span>路网条件：</span>
                          <el-input v-model="roadScope"
                                    class="poi_input"
                                    placeholder=""></el-input>
                          <span>米范围内</span>
                          <el-select v-model="roadFilter"
                                     class="exist_poi"
                                     placeholder="请选择">
                            <el-option v-for="item in exist"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                          <el-select v-model="roadType"
                                     multiple
                                     style="margin-left:75px; margin-top:10px;"
                                     placeholder="请选择">
                            <el-option v-for="item in road"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='region'">
                          <span>行政区划：</span>
                          <el-select v-model="regionList"
                                     multiple
                                     style="margin-left:20px; margin-top:10px; width:67%;"
                                     placeholder="请选择">
                            <el-option v-for="item in region"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='intersect'">
                          <span>交叉路口个数</span>
                          <el-select v-model="intersectSymbol"
                                     style="margin-left:7px;width:25%;">
                            <el-option v-for="item in intersectType"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                          <el-input v-model="intersectNum"
                                    class="poi_input"
                                    placeholder=""></el-input>
                          <span>个</span>
                        </div>
                        <div v-if="value[1]==='timescope'">
                          <span>时间范围：</span>
                          <el-date-picker style="width:73%; margin-left:5px;"
                                          v-model="value1"
                                          :default-value="timeDefaultShow"
                                          type="daterange"
                                          range-separator="至"
                                          start-placeholder="开始日期"
                                          end-placeholder="结束日期"
                                          value-format="yyyy-MM-dd hh:mm:ss">
                          </el-date-picker>
                        </div>
                        <div v-if="value[1]==='week'">
                          <span>语义时间(周)：</span>
                          <el-select v-model="weekList"
                                     multiple
                                     style="margin-left:10px; width:64%;"
                                     placeholder="请选择">
                            <el-option v-for="item in week"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='timeseg'">
                          <span>语义时间(日)：</span>
                          <el-select v-model="timeSegList"
                                     multiple
                                     style="margin-left:10px; width:64%;"
                                     placeholder="请选择">
                            <el-option v-for="item in timeS"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='oftenstay'">
                          <span>常驻地：</span>
                          <el-select v-model="stayTimeSeg"
                                     style="margin-left:20px;width:25%;">
                            <el-option v-for="item in stayTimeSegType"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                          <span> 常驻</span>
                          <el-select v-model="stayPlace"
                                     style="margin-left:20px;width:30%;">
                            <el-option v-for="item in poi"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                        </div>
                        <div v-if="value[1]==='duration'">
                          <span>停留时长：</span>
                          <el-select v-model="durationSymbol"
                                     style="margin-left:20px;width:25%;">
                            <el-option v-for="item in intersectType"
                                       :key="item.value"
                                       :label="item.label"
                                       :value="item.value">
                            </el-option>
                          </el-select>
                          <el-input v-model="duration"
                                    class="poi_input"
                                    placeholder=""></el-input>
                          <span>分钟</span>

                        </div>
                        <el-row>
                          <el-button type="primary"
                                     plain
                                     @click="add_con">添加条件</el-button>
                        </el-row>
                        <el-divider></el-divider>
                        <div>
                          <span>已筛选条件:</span>
                          <el-tooltip placement="top">
                            <i class="el-icon-question"></i>
                            <div slot="content">条件与条件之间为“且”逻辑</div>
                          </el-tooltip>

                          <el-row v-for="(item, idx) in filterList"
                                  :key="idx"
                                  style="border:1px solid #000; padding:5px;">
                            <div>{{item}}
                              <span @click="() =>delFilter(idx)"
                                    style="float:right; color:#00F;">删除</span>
                            </div>
                          </el-row>

                        </div>
                        <el-row>
                          <el-button type="primary"
                                     style="margin-left:10px;"
                                     @click="sel">筛选</el-button>

                        </el-row>
                      </el-row>
                    </div>
                  </div>
                </el-col>
                <el-col :span="15"
                        v-if="menu === 'pos'">
                  <el-row>
                    <span>地点模式：</span>
                    <el-select v-model="modeType"
                               placeholder="请选择">
                      <el-option v-for="item in modes"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </el-row>
                  <div v-if="modeType==='generate'">
                    <el-row>
                      <span>生成算法:DBSCAN</span>
                    </el-row>
                    <el-row>
                      <span>最少点数：</span>
                      <el-input v-model="minpts"
                                style="width:25%; margin-left:10px; margin-right:10px;"></el-input>
                      <span>个</span>
                    </el-row>
                    <el-row>
                      <span>领域距离：</span>
                      <el-input v-model="eps"
                                style="width:25%; margin-left:10px; margin-right:10px;"></el-input>
                      <span>米</span>
                    </el-row>
                  </div>
                  <div v-if="modeType==='exists'">
                    <br>
                    <span>地点类型：</span>
                    <el-select v-model="placeType"
                               placeholder="请选择">
                      <el-option v-for="item in poi"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </el-option>
                    </el-select>
                  </div>
                  <el-row>
                    <el-button type="primary"
                               style="float:right; margin-left:10px;"
                               @click="generate">生成</el-button>
                    <el-button type="primary"
                               style="float:right;"
                               plain
                               @click="clean_alr">重置</el-button>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-scrollbar>
        </el-card>
      </el-col>
    </el-row>
  </div>

</template>

<script>
import { Message } from 'element-ui'
import * as api from '@/api/base'
import BaiduSuggest from '@/components/BaiduSuggest'
import { mapMutations, mapState, mapActions } from 'vuex';

export default {
  components: {
    BaiduSuggest,
  },
  data () {
    return {
      show: false,
      timeDefaultShow: new Date('2010-06-01'),
      poiFilter: '1',//填写的存在与否
      poiScope: 50,//填写的距离范围
      poiType: [],//选择的POI类型
      roadScope: 100.0,//填写路网的距离范围
      roadFilter: '1',//填写路网的存在与否
      roadType: [],//选择的路网类型
      regionList: [],//选择区的类型
      intersectSymbol: '>',
      intersectNum: 5,
      stayTimeSeg: "晚上",
      stayPlace: "学校",
      value1: '',
      weekList: [],
      timeSegList: [],
      durationSymbol: "<=",
      duration: 30.0,
      placeType: [],
      modeType: '',
      timeS: [
        {
          value: '00',
          label: '0-1点',
        },
        {
          value: '01',
          label: '1-2点',
        },
        {
          value: '02',
          label: '2-3点',
        },
        {
          value: '03',
          label: '3-4点',
        },
        {
          value: '04',
          label: '4-5点',
        },
        {
          value: '05',
          label: '5-6点',
        },
        {
          value: '06',
          label: '6-7点',
        },
        {
          value: '07',
          label: '7-8点',
        },
        {
          value: '08',
          label: '8-9点',
        },
        {
          value: '09',
          label: '9-10点',
        },
        {
          value: '10',
          label: '10-11点',
        },
        {
          value: '11',
          label: '11-12点',
        },
        {
          value: '12',
          label: '12-13点',
        },
        {
          value: '13',
          label: '13-14点',
        },
        {
          value: '14',
          label: '14-15点',
        },
        {
          value: '15',
          label: '15-16点',
        },
        {
          value: '16',
          label: '16-17点',
        },
        {
          value: '17',
          label: '17-18点',
        },
        {
          value: '18',
          label: '18-19点',
        },
        {
          value: '19',
          label: '19-20点',
        },
        {
          value: '20',
          label: '20-21点',
        },
        {
          value: '21',
          label: '21-22点',
        },
        {
          value: '22',
          label: '22-23点',
        },
        {
          value: '23',
          label: '23-24点',
        },
      ],
      week: [
        {
          value: '1',
          label: '周一',
        },
        {
          value: '2',
          label: '周二',
        },
        {
          value: '3',
          label: '周三',
        },
        {
          value: '4',
          label: '周四',
        },
        {
          value: '5',
          label: '周五',
        },
        {
          value: '6',
          label: '周六',
        },
        {
          value: '7',
          label: '周日',
        },
      ],
      intersectType: [
        {
          value: '>',
          label: '>',
        },
        {
          value: '<=',
          label: '<=',
        }
      ],
      stayTimeSegType: [
        {
          value: '1',
          label: '晚上',
        },
        {
          value: '2',
          label: '白天',
        }
      ],
      exist: [
        {
          value: '1',
          label: '存在',
        },
        {
          value: '0',
          label: '不存在',
        },
      ],
      poi: [
        {
          value: '宾馆酒店',
          label: '宾馆酒店'
        }, {
          value: '餐厅',
          label: '餐厅'
        }, {
          value: '超市商场',
          label: '超市商场'
        }, {
          value: '风景区',
          label: '风景区'
        }, {
          value: '公共厕所',
          label: '公共厕所'
        }, {
          value: '加油站',
          label: '加油站'
        }, {
          value: '停车场',
          label: '停车场'
        }, {
          value: '学校',
          label: '学校'
        }, {
          value: '医院',
          label: '医院'
        }, {
          value: '银行',
          label: '银行'
        }, {
          value: '邮局物流',
          label: '邮局物流'
        }, {
          value: '运动场馆',
          label: '运动场馆'
        }, {
          value: '住宅区',
          label: '住宅区'
        }, {
          value: '公园广场',
          label: '公园广场'
        }, {
          value: '地铁站',
          label: '地铁站'
        }, {
          value: '车辆管理',
          label: '车辆管理'
        }
      ],
      road: [
        {
          value: '1',
          label: '1级路网',
        },
        {
          value: '2',
          label: '2级路网',
        },
        {
          value: '3',
          label: '3级路网',
        }
      ],
      region: [
        {
          value: '大兴区',
          label: '大兴区',
        },
        {
          value: '通州区',
          label: '通州区',
        },
        {
          value: '朝阳区',
          label: '朝阳区',
        },
        {
          value: '海淀区',
          label: '海淀区',
        },
        {
          value: '顺义区',
          label: '顺义区',
        },
        {
          value: '丰台区',
          label: '丰台区',
        },
        {
          value: '密云区',
          label: '密云区',
        },
        {
          value: '怀柔区',
          label: '怀柔区',
        },
        {
          value: '东城区',
          label: '东城区',
        },
        {
          value: '石景山区',
          label: '石景山区',
        },
        {
          value: '西城区',
          label: '西城区',
        },
        {
          value: '平谷区',
          label: '平谷区',
        },
        {
          value: '延庆区',
          label: '延庆区',
        },
        {
          value: '门头沟区',
          label: '门头沟区',
        },
        {
          value: '昌平区',
          label: '昌平区',
        }
      ],
      valueregion: [],
      value: [],
      options: [
        {
          value: 'space',
          label: '空间条件',
          children: [
            {
              value: 'poi',
              label: 'POI条件',
            },
            {
              value: 'road',
              label: '路网条件',
            },
            {
              value: 'region',
              label: '行政区划',
            },
            {
              value: 'intersect',
              label: '交叉路口条件',
            },
          ],
        },
        {
          value: 'time',
          label: '时间条件',
          children: [
            {
              value: 'timescope',
              label: '时间范围（日期）',
            },
            {
              value: 'week',
              label: '语义时间（周）',
            },
            {
              value: 'timeseg',
              label: '语义时间（日）',
            },
          ],
        },
        {
          value: 'object',
          label: '对象条件',
          children: [
            {
              value: 'oftenstay',
              label: '常驻地条件',
            }
          ]
        },
        {
          value: 'attribute',
          label: '属性条件',
          children: [
            {
              value: 'duration',
              label: '停留时间',
            },
          ],
        },
      ],
      modes: [
        {
          value: 'exists',
          label: '已知地点'
        }, {
          value: 'generate',
          label: '聚类生成'
        }
      ],
      menu: "stayPoint",
      // filterList:[],
      // conditionList:[],
      eps: 100,//填写的距离
      minpts: 10,//填写的最少点数
      str_con: ''
    }
  },


  computed: {
    ...mapState(['conditionList', 'filterList']),
  },
  watch: {

  },
  methods: {
    ...mapMutations({
      setcondition: 'SET_CONDITION',
      setfilt: 'SET_FILT'
    }),
    clean_alr () {
      this.eps = 100;//填写的距离
      this.minpts = 10;//填写的最少点数
    },
    clean () {
      this.value = [];
      this.poiFilter = '1';//POI
      this.poiScope = 50;
      this.poiType = [];
      this.roadScope = 100.0;//填写路网的距离范围
      this.roadFilter = '1';//填写路网的存在与否
      this.roadType = [];//选择的路网类型
      this.regionList = [];//选择区的类型
      this.intersectSymbol = '>';
      this.intersectNum = 5;
      this.value1 = '';
      this.weekList = [];
      this.timeSegList = [];
      this.durationSymbol = "<=";
      this.duration = 30.0;
    },
    delFilter (index) {
      const newConditionlist = [];
      this.conditionList.forEach((i, idx) => {
        if (idx !== index) newConditionlist.push(i);
      }
      )
      this.setcondition(newConditionlist);
      const newFilterlist = [];
      this.filterList.forEach((i, idx) => {
        if (idx !== index) newFilterlist.push(i);
      }
      )
      this.setfilt(newFilterlist);
      // this.conditionList.splice(index, 1)
      // this.setcondition(this.conditionList);
      // this.filterList.splice(index, 1)
      // this.setfilt(this.filterList);
    },
    changeMenu (v) {
      this.menu = v;
    },
    /**
     * 选中区域后的回调函数
     */
    fun () {
      this.show = !this.show
    },
    con_change () {
      console.log(this.value);
    },
    con_change1 () {
      console.log(this.valueregion);
    },

    add_con () {
      console.log(this.value);
      if (this.value.length === 0) alert('条件类型不可为空');
      else {
        let newFilter = {};
        let str;
        switch (this.value[1]) {
          case 'poi':
            if (this.poiType.length === 0 || this.poiScope === '' || this.poiFilter === '') alert('条件不可为空');
            else {
              newFilter = {
                type: 'poi',
                poiType: this.poiType,
                poiScope: this.poiScope,
                poiFilter: this.poiFilter
              }
              str = '条件：' + this.poiScope + '米范围内';
              if (this.poiFilter === '0') str = str + '不';
              str = str + '存在';
              this.poiType.forEach((element, index) => {
                if (index != this.poiType.length - 1) {
                  str = str + element + '、';
                }
                else str = str + element;
              })
              this.poiFilter = '1';
              this.poiScope = 50;
              this.poiType = [];
              this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
              // this.filterList = [str, ...this.filterList];
              // this.conditionList = [newFilter, ...this.conditionList];
            }
            break;
          case 'road':
            if (this.roadType.length === 0 || this.roadScope === '' || this.roadFilter === '') alert('条件不可为空');
            else {
              newFilter = {
                type: 'road',
                roadType: this.roadType,
                roadScope: this.roadScope,
                roadFilter: this.roadFilter
              }
              str = '条件：' + this.roadScope + '米范围内';
              if (this.roadFilter === '0') str = str + '不';
              str = str + '存在';
              this.roadType.forEach((element, index) => {
                if (index != this.roadType.length - 1) {
                  switch (element) {
                    case '1':
                      str = str + '1级路网、';
                      break;
                    case '2':
                      str = str + '2级路网、';
                      break;
                    case '3':
                      str = str + '3级路网、';
                      break;
                    default:
                      break;
                  }
                }
                else {
                  switch (element) {
                    case '1':
                      str = str + '1级路网';
                      break;
                    case '2':
                      str = str + '2级路网';
                      break;
                    case '3':
                      str = str + '3级路网';
                      break;
                    default:
                      break;
                  }
                }
              })
              this.roadFilter = '1';
              this.roadScope = 100;
              this.roadType = [];
              this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'region':
            if (this.regionList.length === 0) alert('条件不可为空');
            else {
              newFilter = {
                type: 'region',
                regionList: this.regionList,
              }
              str = '条件：行政区划为';
              this.regionList.forEach((element, index) => {
                if (index != this.regionList.length - 1) {
                  str = str + element + '、';
                }
                else str = str + element;
              })
              this.regionList = [];
              this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'intersect':
            if (this.intersectSymbol.length === 0 || this.intersectSymbol === '') alert('条件不可为空');
            else {
              newFilter = {
                type: 'intersect',
                intersectNum: this.intersectNum,
                intersectSymbol: this.intersectSymbol
              }
              str = '条件：交叉路口个数';
              if (this.intersectSymbol === '>') str = str + '大于';
              else str = str + '小于等于';
              str = str + this.intersectNum;
              this.intersectSymbol = '>',
                this.intersectNum = 5,
                this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'timescope':
            console.log(this.value1);
            if (this.value1.length === 0) alert('条件不可为空');
            else {
              newFilter = {
                type: 'timescope',
                stime: this.value1[0],
                etime: this.value1[1]
              }
              str = '条件：时间范围为' + this.value1[0].substring(0, 11) + '至' + this.value1[1].substring(0, 11);
              this.value1 = '',
                this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'week':
            console.log(this.value1);
            if (this.weekList.length === 0) alert('条件不可为空');
            else {
              newFilter = {
                type: 'week',
                weekList: this.weekList
              }
              str = '条件：';
              this.weekList.forEach((element, index) => {
                if (index != this.weekList.length - 1) {
                  switch (element) {
                    case '1':
                      str = str + '周一、';
                      break;
                    case '2':
                      str = str + '周二、';
                      break;
                    case '3':
                      str = str + '周三、';
                      break;
                    case '4':
                      str = str + '周四、';
                      break;
                    case '5':
                      str = str + '周五、';
                      break;
                    case '6':
                      str = str + '周六、';
                      break;
                    case '7':
                      str = str + '周日、';
                      break;
                    default:
                      break;
                  }
                }
                else {
                  switch (element) {
                    case '1':
                      str = str + '周一';
                      break;
                    case '2':
                      str = str + '周二';
                      break;
                    case '3':
                      str = str + '周三';
                      break;
                    case '4':
                      str = str + '周四';
                      break;
                    case '5':
                      str = str + '周五';
                      break;
                    case '6':
                      str = str + '周六';
                      break;
                    case '7':
                      str = str + '周日';
                      break;
                    default:
                      break;
                  }
                }
              })
              this.weekList = [],
                this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'timeseg':
            if (this.timeSegList.length === 0) alert('条件不可为空');
            else {
              newFilter = {
                type: 'timeseg',
                timeSegList: this.timeSegList
              }
              str = '条件：';
              this.timeSegList.forEach((element, index) => {
                if (index != this.timeSegList.length - 1) {
                  switch (element) {
                    case '00':
                      str = str + '0-1点、';
                      break;
                    case '01':
                      str = str + '1-2点、';
                      break;
                    case '02':
                      str = str + '2-3点、';
                      break;
                    case '03':
                      str = str + '3-4点、';
                      break;
                    case '04':
                      str = str + '4-5点、';
                      break;
                    case '05':
                      str = str + '5-6点、';
                      break;
                    case '06':
                      str = str + '6-7点、';
                      break;
                    case '07':
                      str = str + '7-8点、';
                      break;
                    case '08':
                      str = str + '8-9点、';
                      break;
                    case '09':
                      str = str + '9-10点、';
                      break;
                    case '10':
                      str = str + '10-11点、';
                      break;
                    case '11':
                      str = str + '11-12点、';
                      break;
                    case '12':
                      str = str + '12-13点、';
                      break;
                    case '13':
                      str = str + '13-14点、';
                      break;
                    case '14':
                      str = str + '14-15点、';
                      break;
                    case '15':
                      str = str + '15-16点、';
                      break;
                    case '16':
                      str = str + '16-17点、';
                      break;
                    case '17':
                      str = str + '17-18点、';
                      break;
                    case '18':
                      str = str + '18-19点、';
                      break;
                    case '19':
                      str = str + '19-20点、';
                      break;
                    case '20':
                      str = str + '20-21点、';
                      break;
                    case '21':
                      str = str + '21-22点、';
                      break;
                    case '22':
                      str = str + '22-23点、';
                      break;
                    case '23':
                      str = str + '23-24点、';
                      break;
                    default:
                      break;
                  }
                }
                else {
                  switch (element) {
                    case '00':
                      str = str + '0-1点';
                      break;
                    case '01':
                      str = str + '1-2点';
                      break;
                    case '02':
                      str = str + '2-3点';
                      break;
                    case '03':
                      str = str + '3-4点';
                      break;
                    case '04':
                      str = str + '4-5点';
                      break;
                    case '05':
                      str = str + '5-6点';
                      break;
                    case '06':
                      str = str + '6-7点';
                      break;
                    case '07':
                      str = str + '7-8点';
                      break;
                    case '08':
                      str = str + '8-9点';
                      break;
                    case '09':
                      str = str + '9-10点';
                      break;
                    case '10':
                      str = str + '10-11点';
                      break;
                    case '11':
                      str = str + '11-12点';
                      break;
                    case '12':
                      str = str + '12-13点';
                      break;
                    case '13':
                      str = str + '13-14点';
                      break;
                    case '14':
                      str = str + '14-15点';
                      break;
                    case '15':
                      str = str + '15-16点';
                      break;
                    case '16':
                      str = str + '16-17点';
                      break;
                    case '17':
                      str = str + '17-18点';
                      break;
                    case '18':
                      str = str + '18-19点';
                      break;
                    case '19':
                      str = str + '19-20点';
                      break;
                    case '20':
                      str = str + '20-21点';
                      break;
                    case '21':
                      str = str + '21-22点';
                      break;
                    case '22':
                      str = str + '22-23点';
                      break;
                    case '23':
                      str = str + '23-24点';
                      break;
                  }
                }
              })
              this.timeSegList = [],
                this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'oftenstay':
            if (this.stayTimeSeg === '' || this.stayPlace === '') alert('条件不可为空');
            else {
              newFilter = {
                type: 'oftenstay',
                // stayTimeSeg: this.stayTimeSeg,
                stayPlace: this.stayPlace
              }
              str = '条件：' + this.stayTimeSeg + '常驻地:' + this.stayPlace;
              // if (this.durationSymbol === '>') str = str + '大于';
              // else str = str + '小于等于';
              // str = str + this.duration + '分钟';
              // this.durationSymbol = '>',
              //   this.duration = 30,
              this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          case 'duration':
            if (this.durationSymbol.length === 0 || this.durationSymbol === '') alert('条件不可为空');
            else {
              newFilter = {
                type: 'duration',
                duration: this.duration,
                durationSymbol: this.durationSymbol
              }
              str = '条件：停留时长';
              if (this.durationSymbol === '>') str = str + '大于';
              else str = str + '小于等于';
              str = str + this.duration + '分钟';
              this.durationSymbol = '>',
                this.duration = 30,
                this.setfilt([str, ...this.filterList]);
              this.setcondition([newFilter, ...this.conditionList]);
            }
            break;
          default:
            break;
        }
        str = '';
        this.value = [];
      }


    },
    sel () {
      this.filterList.forEach((currentValue) => {
        this.str_con = this.str_con + currentValue;
      });
      console.log(this.conditionList);
      this.$emit('receiveMe', this.conditionList, this.str_con);
      this.str_con = '';

      // console.log('存进去了');
      // console.log(this.condtion);
      // console.log(this.filter);
    },
    // generate () {
    //   if (this.eps === '' || this.minpts === '') {
    //     alert('变量不可为空');
    //     this.eps = 10;//填写的距离
    //     this.minpts = 1000;//填写的最少点数
    //   }
    //   else {
    //     this.$emit('receiveMeloc', this.eps, this.minpts);
    //     this.show = false;
    //   }
    // }
    generate () {
      if (this.modeType === 'exists') {
        console.log(this.modeType, this.placeType)
        this.$emit('receiveMelocMode2', this.modeType, this.placeType)
      } else if (this.modeType == 'generate') {
        if (this.eps === '' || this.minpts === '') {
          alert('变量不可为空');
          this.eps = 10;//填写的距离
          this.minpts = 1000;//填写的最少点数
        }
        else {
          this.$emit('receiveMelocMode1', this.modeType, this.eps, this.minpts);
          this.show = false;
        }
      }
    }

  },
}
</script>

<style lang="scss">
@import "variable";
$height-tool: 48px;
$tool-gutter: 8px;

.tool-bar {
  z-index: 2000;
  position: absolute;
  top: 0;
  left: 32px;
  .sel_btn {
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
    border-radius: 4px;
    .el-button {
      width: 80px;
      height: $height-tool;
      font-size: 16px;
    }
    float: left;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }
  .list {
    max-height: calc(70vh);
  }

  .box-card {
    width: 480px;
    margin-left: 10px;
  }
  .el-card__body {
    padding: 0;
    padding-bottom: 20px;
  }
  .sel_menu {
    float: left;
  }
  .sel_point {
    // position: absolute;
    .sel_point_sel {
      margin-top: 10px;
      .el-button {
        float: right;
        padding-right: 10px 0;
      }
      .condition {
        width: 200px;
        font-size: 14px;
        padding-left: 20px;
      }
      .poi_input {
        width: 25%;
        margin-left: 10px;
      }
      .exist_poi {
        padding-left: 10px;
        width: 25%;
      }
    }
  }
}

.el-row {
  margin-top: $tool-gutter;
}
.el-col {
  margin-right: $tool-gutter;
}
.area-selected-container {
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.32);
  padding: 12px 24px;
  background: #fff;
  width: 566px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  cursor: pointer;

  .area-name {
    display: inline-block;
    width: 38em;
    overflow: hidden;
    word-wrap: normal;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
.active {
  color: $--color-primary;
  font-weight: 500;
}

.area-selected-container.marker {
  width: 296px;
  .name-item {
    width: 270px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
