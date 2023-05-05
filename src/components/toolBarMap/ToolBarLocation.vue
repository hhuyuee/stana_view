<template>
  <div class="tool-bar-location">
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
              <span>地点筛选</span>
                <el-button style="float: right; padding: 3px 0" @click="backToSP" type="text" icon="el-icon-back">驻留点处理结果</el-button>
            </div>
          <el-scrollbar wrap-class="list"  view-class="view-box" :native="false">
            <div class="sel_bottom">
              <el-row>
                  <div class="sel_point">
                    <div class="sel_point_sel">
                      
                      <el-row>
                        <span>筛选:</span>
                        <el-button type="text" style="margin-right:20px;">清空</el-button>
                      </el-row>
                      <el-row>
                          <el-select v-model="value" style="width:30%;" >
                            <el-option
                              v-for="item in condition"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <el-select v-model="panduan" style="margin-left:10px; width:20%;" >
                            <el-option
                              v-for="item in con_pd"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value">
                            </el-option>
                          </el-select>
                          <el-input v-model="num" style="width:15%; margin-left:10px; margin-right:10px;"></el-input>
                           <span v-if="value==='总访问数'">
                             次
                           </span>
                           <span v-if="value==='平均访问频次'">
                             天/次
                           </span>
                            <span v-if="value==='访问对象个数'">
                             个
                           </span>
                           <span v-if="value==='平均访问时长'">
                            分钟
                           </span>
                      </el-row>
                      <el-row>
                         <el-button type="primary"
                                    plain
                                    style="margin-left:10px; margin-right:20px;"
                                    @click="add_con">添加条件</el-button>
                      </el-row>
                      <el-divider></el-divider>
                      <div>
                        <span>已筛选条件:</span>
                        <el-tooltip placement="top">
                          <i class="el-icon-question"></i>
                          <div slot="content">条件与条件之间为“且”逻辑</div>
                        </el-tooltip>
                      
                        <el-row v-for="(item, idx) in filterList" :key="idx" style="border:1px solid #000; padding:5px; margin-right:20px" >
                          <div>{{item}}
                            <span  @click="() =>delFilter(idx)"  style="float:right; color:#00F;">删除</span>
                          </div>
                        </el-row>
                        
                      </div>
                      <el-row>
                          <el-button type="primary"
                                    style="margin-left:10px; margin-right:20px;"
                                    @click="sel">筛选</el-button> 
                         
                      </el-row>
                    </div>
                  </div>
                
          
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

export default {
  components: {
    BaiduSuggest,
  },
  data() {
    return {
      show: false,
      condition: [{
      value: '总访问数',
      label: '总访问数'
    }, {
      value: '平均访问频次',
      label: '平均访问频次'
    }, {
      value: '访问对象个数',
      label: '访问对象个数'
    }, {
      value: '平均访问时长',
      label: '平均访问时长'
    }],
      value: '',
      con_pd: [{
        value: '1',
        label: '≥'
      }, {
        value: '0',
        label: '<'
      }],
      panduan:'1',
      num:10,
      filterList:[],
      conditionList:[],
      str_con:''
    }
  },
  props: {
    dialogVisible: {
        type: Boolean,
        default: false
      }
  },
  computed: {
   
  },
  watch: {
  
  },
  methods: {
    backToSP(){
      this.$router.push({ name: 'StayPoint', params: { st: 1 }});
    },
    delFilter(index){
      this.conditionList.splice(index, 1);
      this.filterList.splice(index, 1);
      // console.log(this.conditionList);
      // console.log(this.filterList);
      
    },
    changeMenu(v){
      this.menu = v;
    },
    /**
     * 选中区域后的回调函数
     */
    fun() {
      this.show = !this.show
    },
    con_change() {
      console.log(this.value)
    },
    add_con() {
      if(this.value.length===0||this.panduan===''||this.num==='') alert('条件不可为空')
      else{
        let newFilter = {}; 
        let str;
        str = '条件:'+this.value;
        if(this.panduan==='1') {
          str=str+'≥'+this.num;
          newFilter={
              type:this.value,
              low:this.num,
              high:50000
            }
        }
        else {
          str=str+'<'+this.num;
          newFilter={
              type:this.value,
              high:this.num,
              low:0
            }
          }
        switch (this.value) {
          case '总访问数':
          str=str+'次';
          break;
          case '平均访问频次':
          str=str+'天/次';
          break;
          case '访问对象个数':
          str=str+'个';
          break;
          case '平均访问时长':
          str=str+'分钟';
          break;
          default:
            break;
        }
        this.filterList = [str, ...this.filterList];
        this.conditionList = [newFilter, ...this.conditionList];
        str='';
        this.value='';
        this.panduan='1';
        this.num=10;
        console.log(this.conditionList);
        console.log(this.filterList);
      }
    },
    sel(){
       this.filterList.forEach((currentValue) => {
            this.str_con= this.str_con+currentValue;
          });   
        this.$emit('receiveMecon', this.conditionList,this.str_con);
        this.str_con='';

    },
    generate(){

    }
    
  },
}
</script>

<style lang="scss">
@import 'variable';
$height-tool: 48px;
$tool-gutter: 8px;

.tool-bar-location {
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
    content: '';
  }
  .clearfix:after {
    clear: both;
  }
.list {
  max-height:calc(70vh) ;
}

  .box-card {
    width: 450px;
    margin-left: 10px;
  }
  .el-card__body {
    padding: 0;
    padding-bottom: 20px;
  }
  .sel_point {
    // position: absolute;
    .sel_point_sel {
      margin-top: 10px;
      margin-left: 30px;
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
  margin-left: $tool-gutter;
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
