/* eslint-disable */
import Mock from 'mockjs';
import { after, mergeOk } from './interceptor';

// /mock/diagnose
Mock.mock(
  /\/pop\/feature\//,
  mergeOk({
    sex: [
      {
        name: '男',
        value: 0.82,
        industryId: null
      },
      {
        name: '女',
        value: 0.18,
        industryId: null
      }
    ],
    age: [
      {
        name: '15岁以下',
        value: 0,
        industryId: null
      },
      {
        name: '16-25岁',
        value: 0.55,
        industryId: null
      },
      {
        name: '26-35岁',
        value: 0.45,
        industryId: null
      },
      {
        name: '36-45岁',
        value: 0,
        industryId: null
      },
      {
        name: '46-55岁',
        value: 0,
        industryId: null
      },
      {
        name: '56岁以上',
        value: 0,
        industryId: null
      }
    ],
    family: [
      {
        name: '有小孩比例',
        value: 0.09,
        industryId: null
      },
      {
        name: '有老人比例',
        value: 0,
        industryId: null
      }
    ],
    car: [
      {
        name: '有车',
        value: 0.18,
        industryId: null
      },
      {
        name: '没车',
        value: 0.82,
        industryId: null
      }
    ],
    industry: [
      {
        name: '金融从业者',
        value: 0,
        industryId: null
      },
      {
        name: '医务人员',
        value: 0,
        industryId: null
      },
      {
        name: '公务员/事业单位',
        value: 0.09,
        industryId: null
      },
      {
        name: '白领/一般职员',
        value: 0.36,
        industryId: null
      },
      {
        name: '工人/服务业人员',
        value: 0,
        industryId: null
      },
      {
        name: '教师',
        value: 0,
        industryId: null
      },
      {
        name: '农民',
        value: 0.18,
        industryId: null
      },
      {
        name: '学生',
        value: 0,
        industryId: null
      }
    ],
    income: null,
    consume: [
      {
        name: '土豪',
        value: 0,
        industryId: null
      },
      {
        name: '高级白领',
        value: 0.55,
        industryId: null
      },
      {
        name: '小白领',
        value: 0.36,
        industryId: null
      },
      {
        name: '蓝领',
        value: 0,
        industryId: null
      },
      {
        name: '收入很少',
        value: 0,
        industryId: null
      }
    ],
    priceSensitivity: [
      {
        name: '不敏感',
        value: 0,
        industryId: null
      },
      {
        name: '轻度敏感',
        value: 0.27,
        industryId: null
      },
      {
        name: '中度敏感',
        value: 0.09,
        industryId: null
      },
      {
        name: '高度敏感',
        value: 0.45,
        industryId: null
      },
      {
        name: '极度敏感',
        value: 0.18,
        industryId: null
      }
    ],
    consumeImpulse: [],
    brandLoyalty: [
      {
        name: '高度-忠诚型',
        value: 0.45,
        industryId: null
      },
      {
        name: '中度-忠诚型',
        value: 0.18,
        industryId: null
      },
      {
        name: '远期-普通型',
        value: 0.09,
        industryId: null
      },
      {
        name: '远期-投机型',
        value: 0,
        industryId: null
      },
      {
        name: '远期-偶然型',
        value: 0.09,
        industryId: null
      },
      {
        name: '近期-普通型',
        value: 0.09,
        industryId: null
      },
      {
        name: '近期-投机型',
        value: 0,
        industryId: null
      },
      {
        name: '近期-偶然型',
        value: 0,
        industryId: null
      }
    ]
  })
);

Mock.mock(
  /\/sta\/StayPoint\//,
  mergeOk({
    stayPointVos: [
      {
          "tid": "7909_20080206231338_20080207023837",
          "oid": "7909",
          "midTime": "2008-02-07 00:56:07",
          "duration": 204.98333333333332,
          "lng": 116.34809729651658,
          "lat": 39.722948689282155
      },
      {
          "tid": "7910_20080205130605_20080205162414",
          "oid": "7910",
          "midTime": "2008-02-05 14:45:09",
          "duration": 198.15,
          "lng": 116.68675033128193,
          "lat": 39.88835507869093
      }
    ],
    visitNum: 4621,
    startTime: "2008-02-02 13:39:38",
    endTime: "2008-02-08 17:28:16",
    chartData:{
      durationDistribute: [
        {
          name: "[0,10)",
          value: 0.0
        },
        {
          name: "[10,20)",
          value: 0.06383899588833586
        },
        {
          name: "[20,30)",
          value: 0.13070763903916902
        },
        {
          name: "[30,40)",
          value: 0.09153862800259684
        },
        {
          name: "[40,50)",
          value: 0.05951092837048258
        },
        {
          name: "[50,60)",
          value: 0.0473923393204934
        },
        {
          name: "[60,70)",
          value: 0.6070114693789224
        }
      ],
      weekdayDistribute: [
        {
          name: "周一",
          value: 0.17290629733823848
        },
        {
          name: "周二",
          value: 0.1750703310971651
        },
        {
          name: "周三",
          value: 0.16533217918199525
        },
        {
          name: "周四",
          value: 0.14801990911058213
        },
        {
          name: "周五",
          value: 0.11209694871239992
        },
        {
          name: "周六",
          value: 0.06405539926422853
        },
        {
          name: "周日",
          value: 0.1625189352953906
        }
    ],
      timeDistribute: [
        {
          name: "0-3时",
          value: 0.079203635576715
        },
        {
          name: "3-6时",
          value:  0.183510062756979
        },
        {
          name: "6-9时",
          value:  0.1073360744427613
        },
        {
          name: "9-12时",
          value:  0.12096948712399913
        },
        {
          name: "12-15时",
          value:  0.11599220947846786
        },
        {
          name: "15-18时",
          value:  0.1607877082882493
        },
        {
          name: "18-21时",
          value:  0.12746158840077906
        },
        {
          name: "21-24时",
          value: 0.10473923393204934
        }
    ],
      intersectDistribute: [
        {
          name: "[0,3)",
          value: 0.0
        },
        {
          name: "[3,6)",
          value: 0.5273750270504219
        },
        {
          name: "[6,10)",
          value: 0.37827310106037654
        },
        {
          name: "[10, ]",
          value: 0.09435187188920147
        }
  ],
      poiDistribute: [
        {
          name: "住宅区",
          value: 0.048423143779488455
        },
        {
          name: "停车场",
          value: 0.18351129873354854
        },
        {
          name: "公共厕所",
          value: 0.0551278867643407
        },
        {
          name:"公园广场",
          value: 0.0017382666997765085
        },
        {
          name: "加油站",
          value: 0.007449714427613608
        },
        {
          name: "医院",
          value: 0.03973181028060591
        },
        {
          name: "地铁站",
          value: 0.023839086168363548
        },
        {
          name: "学校",
          value: 0.04618822945120437
        },
        {
          name: "宾馆酒店",
          value: 0.015892724112242365
        },
        {
          name: "超市商场",
          value: 0.016886019369257512
        },
        {
          name: "运动场馆",
          value: 0.013409485969704494
        },
        {
          name: "邮局物流",
          value: 0.019120933697541594
        },
        {
          name: "银行",
          value: 0.014651105040973429
        },
        {
          name: "风景区",
          value: 0.00322820958529923
        },
        {
          name: "餐厅",
          value: 0.5108020859200397
        }
  ],
      road1Distribute : [
        {
          name: "[0,100)",
          value: 0.05263157894736842
        },
        {
          name: "[100,500)",
          value: 0.3157894736842105
        },
        {
          name: "[500,1000)",
          value: 0.05263157894736842
        },
        {
          name: "[1000, )",
          value:0.5789473684210527
        }
  ],
      road2Distribute: [
        {
          name: "[0,100)",
          value: 0.06806282722513089
        },
        {
          name: "[100,500)",
          value: 0.7120418848167539
        },
        {
          name: "[500,1000)",
          value:0.17408376963350786
        },
        {
          name: "[1000, )",
          value: 0.04581151832460733
        }
  ],
      road3Distribute: [
        {
          name: "[0,100)",
          value: 0.11408677021960364
        },
        {
          name: "[100,500)",
          value: 0.7793251205141939
        },
        {
          name: "[500,1000)",
          value: 0.09373326191751473
        },
        {
          name:"[1000, )",
          value: 0.012854847348687734
        }
  ]
  }
   }
  )
);


Mock.mock(
  /\/sta\/location\//,
  mergeOk({
    
          "candidatePlaceVos": [
              {
                  "lng": 116.32122898807306,
                  "lat": 40.01110133157888,
                  "visitSum": 33,
                  "visitObj": 4,
                  "durationAvg": 136.08,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 39.0,
                  "intersection": 12,
                  "freqMean": 11.251383759469698,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32136897356455 40.01069378407922,116.32117138086049 40.01084894172207,116.3210984331449 40.01104626924156,116.3210419467205 40.01121656577943,116.32097502291322 40.0115261331653,116.3216040611368 40.01142850454667,116.32136897356455 40.01069378407922))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06060606060606061
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.030303030303030304
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5454545454545454
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.24242424242424243
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7575757575757576
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.25
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.75
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "学校",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.3333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32798597598497,
                  "lat": 40.012396492951815,
                  "visitSum": 30,
                  "visitObj": 6,
                  "durationAvg": 386.07,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 39.0,
                  "intersection": 9,
                  "freqMean": 13.431729104257444,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32875801766414 40.01155124355434,116.32835899965217 40.01158141432717,116.32739688937065 40.01171675135232,116.32717591624909 40.01319947402077,116.32760301034295 40.01336249719683,116.32789618623909 40.01343517671414,116.32845057843265 40.012692198936406,116.32875801766414 40.01155124355434))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.1
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.2
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.1
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.33327885316449,
                  "lat": 40.00143617291894,
                  "visitSum": 50,
                  "visitObj": 4,
                  "durationAvg": 624.7,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 21.0,
                  "intersection": 22,
                  "freqMean": 13.295102334104937,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33343383420281 40.000698823560505,116.33302904884633 40.00076508748874,116.33289330567416 40.00123926068352,116.3329336612985 40.00269792245668,116.33326631633342 40.001991630663305,116.33352188815148 40.00143524679901,116.33343383420281 40.000698823560505))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.06
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.02
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.04
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.82
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.38
                          },
                          {
                              "name": "18-21时",
                              "value": 0.62
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "银行",
                              "value": 0.6666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32561656974315,
                  "lat": 40.00924134114307,
                  "visitSum": 39,
                  "visitObj": 8,
                  "durationAvg": 55.18,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 0.0,
                  "intersection": 23,
                  "freqMean": 9.439426576967593,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32570126410056 40.008852784476474,116.32550323620167 40.00886970663361,116.32503480661713 40.01022626289119,116.32592945430112 40.01033786939589,116.32606775753578 40.009123752870636,116.32596355739656 40.00888691153374,116.32570126410056 40.008852784476474))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.10256410256410256
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.1794871794871795
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.05128205128205128
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.1794871794871795
                          },
                          {
                              "name": "[60, )",
                              "value": 0.41025641025641024
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.20512820512820512
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7948717948717948
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.25
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.75
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "运动场馆",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3434233969336,
                  "lat": 39.92782959471648,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 711.6,
                  "road1len": 0.0,
                  "road2len": 36.0,
                  "road3len": 51.0,
                  "intersection": 0,
                  "freqMean": 9.406099537037038,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34351148156907 39.927376276969355,116.34246665232831 39.92774342793729,116.34291038687304 39.92822305162547,116.34371191973163 39.9287671692765,116.34431640393841 39.92817777499083,116.3442956053332 39.92761972226091,116.34351148156907 39.927376276969355))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9333333333333333
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.26666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7333333333333333
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.2
                          },
                          {
                              "key": "停车场",
                              "value": 0.6
                          },
                          {
                              "key": "医院",
                              "value": 0.2
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32667823688553,
                  "lat": 40.00757733759758,
                  "visitSum": 13,
                  "visitObj": 4,
                  "durationAvg": 60.9,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 0.0,
                  "intersection": 10,
                  "freqMean": 41.88120804398148,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32703353025447 40.007346102271974,116.32680173959683 40.00738784925133,116.32635434806728 40.00759641383337,116.32616416446189 40.00782203249681,116.32670452255101 40.00770335104964,116.32690581968717 40.007603791209554,116.32704766334656 40.00751891560208,116.32703353025447 40.007346102271974))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5384615384615384
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7692307692307693
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34475635588332,
                  "lat": 40.000257779234516,
                  "visitSum": 13,
                  "visitObj": 1,
                  "durationAvg": 32.33,
                  "road1len": 0.0,
                  "road2len": 42.0,
                  "road3len": 9.0,
                  "intersection": 29,
                  "freqMean": 3.9231071937321937,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34514301226852 39.99999493358863,116.34474208866399 40.00001970669566,116.34463649207596 40.000178414393645,116.34451868754805 40.00061799190974,116.34466930304428 40.00067152831993,116.34527514500878 40.00004899597794,116.34514301226852 39.99999493358863))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.46153846153846156
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6923076923076923
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.2
                          },
                          {
                              "key": "地铁站",
                              "value": 0.2
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6
                          }
                      ]
                  }
              },
              {
                  "lng": 116.35007714892237,
                  "lat": 40.004204260434065,
                  "visitSum": 19,
                  "visitObj": 1,
                  "durationAvg": 756.3,
                  "road1len": 0.0,
                  "road2len": 60.0,
                  "road3len": 114.0,
                  "intersection": 3,
                  "freqMean": 3.4168469785575053,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35006841826693 40.00341274186856,116.34937608560644 40.00412063094604,116.35019710255474 40.00515575109405,116.35094109676267 40.004479294434965,116.35006841826693 40.00341274186856))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.21052631578947367
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7894736842105263
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.5
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.35904002766124,
                  "lat": 39.986296305075705,
                  "visitSum": 15,
                  "visitObj": 3,
                  "durationAvg": 607.58,
                  "road1len": 6.0,
                  "road2len": 54.0,
                  "road3len": 0.0,
                  "intersection": 6,
                  "freqMean": 10.946324331275719,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35995587424924 39.985778413549006,116.35924728846227 39.98589523166008,116.35865466424714 39.98602268067137,116.35787977179868 39.98619554635697,116.3588965873804 39.98656110217489,116.35959785265159 39.98664756350464,116.35995587424924 39.985778413549006))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.13333333333333333
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.13333333333333333
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6666666666666666
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33455947350132,
                  "lat": 39.98257927151329,
                  "visitSum": 47,
                  "visitObj": 8,
                  "durationAvg": 703.28,
                  "road1len": 2.0,
                  "road2len": 66.0,
                  "road3len": 93.0,
                  "intersection": 7,
                  "freqMean": 13.922147053590768,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33421899631662 39.98166985207335,116.33358376289384 39.98199522132744,116.3334109391175 39.98259200360807,116.3333554105418 39.9833514815195,116.33348845520399 39.98342421175009,116.33527194289984 39.98385164453301,116.33584228158279 39.98281757930364,116.33576758211281 39.98214917414447,116.33526256007522 39.9817685481034,116.33421899631662 39.98166985207335))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06382978723404255
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.10638297872340426
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06382978723404255
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.7659574468085106
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2765957446808511
                          },
                          {
                              "name": "18-21时",
                              "value": 0.723404255319149
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.75
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30960177061505,
                  "lat": 40.05043673067604,
                  "visitSum": 16,
                  "visitObj": 2,
                  "durationAvg": 630.17,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 27.0,
                  "intersection": 6,
                  "freqMean": 5.150371557454891,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.30945868838072 40.04986910917904,116.30947074856377 40.05059266902122,116.30967627332892 40.05069993434988,116.3098200304903 40.05060332897664,116.30976007348119 40.05019854134641,116.30945868838072 40.04986910917904))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3125
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6875
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3473836870271,
                  "lat": 40.019259640304824,
                  "visitSum": 25,
                  "visitObj": 1,
                  "durationAvg": 698.57,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 27.0,
                  "intersection": 3,
                  "freqMean": 5.8443055555555565,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.3471723901135 40.01904119455812,116.34697540322429 40.0195788282703,116.34748172090158 40.019554749839024,116.34782525270484 40.01952043123759,116.3477775701069 40.01941636773289,116.34761069317489 40.01914367769005,116.34727620131876 40.019048088728866,116.3471723901135 40.01904119455812))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.16
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.08
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.04
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.04
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.04
                          },
                          {
                              "name": "[60, )",
                              "value": 0.64
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.52
                          },
                          {
                              "name": "18-21时",
                              "value": 0.48
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.34780443969267,
                  "lat": 40.0175194488457,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 617.57,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 27.0,
                  "intersection": 0,
                  "freqMean": 7.336486882716049,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34775398713525 40.01654049721823,116.34706851323277 40.01669038432318,116.3476685459378 40.01794457429449,116.34775479917816 40.018084161649654,116.34822800016617 40.01807784185158,116.34775398713525 40.01654049721823))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8666666666666667
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.26666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7333333333333333
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.337818293671,
                  "lat": 39.97967547765735,
                  "visitSum": 36,
                  "visitObj": 12,
                  "durationAvg": 51.5,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 105.0,
                  "intersection": 6,
                  "freqMean": 5.01509162808642,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33787302274874 39.978082774469776,116.33731743693731 39.97902022922403,116.33685702594356 39.97988924904161,116.33700428850695 39.98069456562292,116.33864767169963 39.98042942196437,116.33867063287602 39.9804136879894,116.33905214792782 39.980006185797215,116.33787302274874 39.978082774469776))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.25
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.1388888888888889
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.027777777777777776
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.027777777777777776
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4722222222222222
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.6
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.5
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.25
                          },
                          {
                              "key": "银行",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.31008370125329,
                  "lat": 39.97239032097574,
                  "visitSum": 12,
                  "visitObj": 5,
                  "durationAvg": 55.18,
                  "road1len": 2.0,
                  "road2len": 56.0,
                  "road3len": 24.0,
                  "intersection": 23,
                  "freqMean": 32.573540839947086,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.30953160399837 39.97188425140984,116.30960432935268 39.97230365681165,116.30983734273454 39.97270162565046,116.3105381482826 39.972722517430924,116.31097631414313 39.972626415735036,116.30953160399837 39.97188425140984))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.25
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.25
                          },
                          {
                              "name": "18-21时",
                              "value": 0.75
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.42857142857142855
                          },
                          {
                              "key": "学校",
                              "value": 0.5714285714285714
                          }
                      ]
                  }
              },
              {
                  "lng": 116.4102738546296,
                  "lat": 40.05928691827572,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 42.42,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 72.0,
                  "intersection": 16,
                  "freqMean": 1.6670841049382716,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.41055631426958 40.05883991116299,116.41020960946258 40.05902791263303,116.4100133100305 40.05941125392507,116.41000972492985 40.05942995300187,116.41020401269954 40.05958957867624,116.41048241003128 40.05944992724604,116.41055409360665 40.05908309953427,116.41055631426958 40.05883991116299))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.4
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 1.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.07142857142857142
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "餐厅",
                              "value": 0.5714285714285714
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34475191908436,
                  "lat": 39.97824171431215,
                  "visitSum": 40,
                  "visitObj": 7,
                  "durationAvg": 27.38,
                  "road1len": 0.0,
                  "road2len": 32.0,
                  "road3len": 141.0,
                  "intersection": 18,
                  "freqMean": 2.385338877865961,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34402177401758 39.97701075384875,116.34374924934967 39.97737435756445,116.34322104292252 39.97849052763904,116.34496106049349 39.97908673514858,116.3458233675592 39.97906600822489,116.34651576740005 39.9776856592856,116.34402177401758 39.97701075384875))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.325
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.225
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.05
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.6
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.2
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.8
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.2
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30897578119327,
                  "lat": 39.988382063561126,
                  "visitSum": 24,
                  "visitObj": 4,
                  "durationAvg": 786.92,
                  "road1len": 10.0,
                  "road2len": 72.0,
                  "road3len": 63.0,
                  "intersection": 16,
                  "freqMean": 30.97553317901235,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.3087822969071 39.98767710526681,116.30770865909078 39.9878568076719,116.30759893686846 39.988908745644224,116.3101541776265 39.98890347804029,116.30994016983757 39.98806281189209,116.3087822969071 39.98767710526681))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.041666666666666664
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.875
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.25
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.4166666666666667
                          },
                          {
                              "key": "风景区",
                              "value": 0.08333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.36804558004296,
                  "lat": 39.95260390633742,
                  "visitSum": 16,
                  "visitObj": 2,
                  "durationAvg": 56.17,
                  "road1len": 0.0,
                  "road2len": 24.0,
                  "road3len": 84.0,
                  "intersection": 6,
                  "freqMean": 3.628963278619528,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.36814844587462 39.95218830713207,116.36780454868082 39.95270167056364,116.36794905975304 39.95277898416611,116.36802048087306 39.95281580961077,116.3682423037699 39.952589714613545,116.36819204574823 39.95228720665228,116.36814844587462 39.95218830713207))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.125
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.25
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.125
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3125
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6875
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.5
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.5
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "宾馆酒店",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42310149621164,
                  "lat": 40.07330045241525,
                  "visitSum": 17,
                  "visitObj": 1,
                  "durationAvg": 698.33,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 27.0,
                  "intersection": 3,
                  "freqMean": 5.001099537037038,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.4235680794629 40.0728324312299,116.42236537137059 40.07283446921236,116.42203729068132 40.07298901788824,116.42278300712555 40.07391886715274,116.42323845405683 40.07377683226204,116.42391035943886 40.073134920752565,116.42391382198173 40.072928984404676,116.4235680794629 40.0728324312299))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.058823529411764705
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9411764705882353
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4117647058823529
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5882352941176471
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33677464153644,
                  "lat": 39.97685448307074,
                  "visitSum": 55,
                  "visitObj": 24,
                  "durationAvg": 1342.45,
                  "road1len": 0.0,
                  "road2len": 90.0,
                  "road3len": 156.0,
                  "intersection": 22,
                  "freqMean": 58.02111927585017,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33730329626759 39.97581554116385,116.33551209368748 39.97643645844208,116.3360612782396 39.97842734619672,116.33632056006464 39.97853092279074,116.33827259861732 39.976840461507884,116.33730329626759 39.97581554116385))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.05454545454545454
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.03636363636363636
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.01818181818181818
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8909090909090909
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2909090909090909
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7090909090909091
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[3, )",
                              "value": 0.8461538461538461
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "停车场",
                              "value": 0.16666666666666666
                          },
                          {
                              "key": "学校",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42602161070718,
                  "lat": 39.97058887246898,
                  "visitSum": 11,
                  "visitObj": 1,
                  "durationAvg": 905.62,
                  "road1len": 10.0,
                  "road2len": 74.0,
                  "road3len": 93.0,
                  "intersection": 10,
                  "freqMean": 17.54677714646465,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.42638477724384 39.969948618861046,116.42553734121623 39.970609827470966,116.42600476063106 39.970985535147385,116.42641222137604 39.970285305279575,116.42638477724384 39.969948618861046))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.7272727272727273
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.36363636363636365
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6363636363636364
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42388357950321,
                  "lat": 39.99744531293667,
                  "visitSum": 56,
                  "visitObj": 1,
                  "durationAvg": 664.57,
                  "road1len": 0.0,
                  "road2len": 126.0,
                  "road3len": 60.0,
                  "intersection": 15,
                  "freqMean": 6.697365244708993,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.4242844315477 39.996734217208385,116.42424570681537 39.9967509808008,116.42267926639279 39.998268759916954,116.42333344680523 39.99845871130016,116.42434229520725 39.99777426949051,116.4245724249685 39.99705648351704,116.4242844315477 39.996734217208385))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.05357142857142857
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.017857142857142856
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.017857142857142856
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9107142857142857
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.32142857142857145
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6785714285714286
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "宾馆酒店",
                              "value": 0.125
                          },
                          {
                              "key": "餐厅",
                              "value": 0.875
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33105629301221,
                  "lat": 39.973265246802164,
                  "visitSum": 11,
                  "visitObj": 4,
                  "durationAvg": 599.07,
                  "road1len": 0.0,
                  "road2len": 30.0,
                  "road3len": 102.0,
                  "intersection": 13,
                  "freqMean": 12.833982445987653,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33079197899602 39.97269078599466,116.3307639768771 39.973243351255405,116.33087968537914 39.97351759042373,116.33128418955421 39.97356504203183,116.33187032301272 39.97306815848729,116.33079197899602 39.97269078599466))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9090909090909091
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.125
                          },
                          {
                              "key": "停车场",
                              "value": 0.375
                          },
                          {
                              "key": "医院",
                              "value": 0.125
                          },
                          {
                              "key": "学校",
                              "value": 0.375
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3510183567336,
                  "lat": 39.96847894499874,
                  "visitSum": 42,
                  "visitObj": 4,
                  "durationAvg": 631.58,
                  "road1len": 28.0,
                  "road2len": 116.0,
                  "road3len": 9.0,
                  "intersection": 19,
                  "freqMean": 10.313807363315696,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35065139530596 39.96807575576733,116.35052777685972 39.96823038550032,116.35091497277763 39.96891672178841,116.35117010476085 39.96902631363749,116.35139757181629 39.96843266675662,116.35142586489654 39.968226773545155,116.35075936969054 39.96809220052359,116.35065139530596 39.96807575576733))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.047619047619047616
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.023809523809523808
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9285714285714286
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.09523809523809523
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9047619047619048
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.3333333333333333
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.6666666666666666
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.6666666666666666
                          },
                          {
                              "key": "风景区",
                              "value": 0.3333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.49929402343444,
                  "lat": 39.955229859590254,
                  "visitSum": 13,
                  "visitObj": 1,
                  "durationAvg": 77.48,
                  "road1len": 0.0,
                  "road2len": 58.0,
                  "road3len": 93.0,
                  "intersection": 29,
                  "freqMean": 5.223247863247862,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.49957640062848 39.954797530420464,116.49915593215776 39.95521121351234,116.49888546685779 39.95565261570859,116.49917475450852 39.9555360816824,116.49958969968681 39.955051037419274,116.49957640062848 39.954797530420464))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6923076923076923
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6923076923076923
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.47783365252394,
                  "lat": 39.928825163885776,
                  "visitSum": 86,
                  "visitObj": 4,
                  "durationAvg": 813.38,
                  "road1len": 0.0,
                  "road2len": 46.0,
                  "road3len": 150.0,
                  "intersection": 25,
                  "freqMean": 5.939962718621399,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.47776160239508 39.92814405935851,116.47723834239595 39.92824021102361,116.47712223987153 39.92831184153295,116.47695800903149 39.92860751928613,116.47819262439567 39.930127610302904,116.47833417184873 39.930262550872754,116.47858826255924 39.93006001064893,116.47855863302043 39.92848158080705,116.47840620180791 39.92832588497804,116.47776160239508 39.92814405935851))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4883720930232558
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5116279069767442
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.1111111111111111
                          },
                          {
                              "key": "停车场",
                              "value": 0.1111111111111111
                          },
                          {
                              "key": "餐厅",
                              "value": 0.7777777777777778
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33237264435733,
                  "lat": 40.07786449425293,
                  "visitSum": 57,
                  "visitObj": 1,
                  "durationAvg": 698.92,
                  "road1len": 0.0,
                  "road2len": 134.0,
                  "road3len": 21.0,
                  "intersection": 0,
                  "freqMean": 23.752966617933716,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33359771177011 40.07709207905484,116.33098415060833 40.07759830399555,116.33081317232994 40.07774076412015,116.33078927890976 40.07789066507213,116.3309123110352 40.078026919386325,116.33207144715188 40.07868560655486,116.33285349345374 40.07837044788968,116.33321993901562 40.07795404614398,116.33359771177011 40.07709207905484))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.03508771929824561
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9649122807017544
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.5
                          },
                          {
                              "key": "银行",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32946001331646,
                  "lat": 40.07734422303118,
                  "visitSum": 45,
                  "visitObj": 1,
                  "durationAvg": 724.67,
                  "road1len": 0.0,
                  "road2len": 86.0,
                  "road3len": 9.0,
                  "intersection": 16,
                  "freqMean": 20.577963477366257,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32935459192963 40.07715064408287,116.32918169845088 40.077226143875656,116.32891556102287 40.07761813817594,116.32941259912185 40.07781248091666,116.33016525771524 40.07744917511871,116.32935459192963 40.07715064408287))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2222222222222222
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7777777777777778
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.27231306351982,
                  "lat": 39.95055471424164,
                  "visitSum": 10,
                  "visitObj": 1,
                  "durationAvg": 843.82,
                  "road1len": 10.0,
                  "road2len": 82.0,
                  "road3len": 48.0,
                  "intersection": 8,
                  "freqMean": 5.800430555555556,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.27212206995421 39.950485688461924,116.27197279664185 39.95058536673306,116.27252779471294 39.95069550713556,116.27262805451626 39.95057667682471,116.27251677819481 39.950491899626165,116.27212206995421 39.950485688461924))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.1
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.43867123167678,
                  "lat": 40.028825250846765,
                  "visitSum": 55,
                  "visitObj": 1,
                  "durationAvg": 778.52,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 222.0,
                  "intersection": 16,
                  "freqMean": 9.819532407407408,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.4389693345508 40.0285104455524,116.4376931888338 40.02862177545097,116.43800617506706 40.02884190199416,116.43809696713073 40.02889590600441,116.43905004604113 40.02905013437766,116.43949734475284 40.029084030043435,116.43979862850146 40.028784360129336,116.4389693345508 40.0285104455524))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.5636363636363636
                          },
                          {
                              "name": "18-21时",
                              "value": 0.43636363636363634
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.5
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.31239807386112,
                  "lat": 40.01511960782459,
                  "visitSum": 25,
                  "visitObj": 1,
                  "durationAvg": 609.4,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 9.0,
                  "intersection": 0,
                  "freqMean": 2.961210648148148,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.31240063633435 40.01499969810039,116.31232979183592 40.0150175157473,116.312196661561 40.01513903642018,116.31219117816366 40.01519975365167,116.3125053480119 40.015194188826236,116.31258724772735 40.01510653959739,116.31263368706534 40.01505562457559,116.31240063633435 40.01499969810039))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.12
                          },
                          {
                              "name": "18-21时",
                              "value": 0.88
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 1.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.26666666666666666
                          },
                          {
                              "key": "宾馆酒店",
                              "value": 0.06666666666666667
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34028489456601,
                  "lat": 39.974844719310916,
                  "visitSum": 11,
                  "visitObj": 1,
                  "durationAvg": 31.0,
                  "road1len": 0.0,
                  "road2len": 20.0,
                  "road3len": 135.0,
                  "intersection": 0,
                  "freqMean": 12.086363636363636,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34000959424934 39.97462045639989,116.33959060169668 39.97475469045883,116.34034175530365 39.975007077112906,116.34090621861908 39.975077042189035,116.34048097991787 39.97485023301504,116.34000959424934 39.97462045639989))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.36363636363636365
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.36363636363636365
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8181818181818182
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.19047619047619047
                          },
                          {
                              "key": "学校",
                              "value": 0.047619047619047616
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.09523809523809523
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.047619047619047616
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6190476190476191
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30307613827414,
                  "lat": 40.01473948256842,
                  "visitSum": 52,
                  "visitObj": 1,
                  "durationAvg": 489.38,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 24.0,
                  "intersection": 0,
                  "freqMean": 2.4612600160256415,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.30307851640384 40.01461330164129,116.30286251058601 40.01465248628838,116.30262032625585 40.01471444684323,116.30261683475878 40.01475609145596,116.30364995457134 40.014857408428625,116.30355021467805 40.01475533423345,116.30339022507887 40.01468070070208,116.30307851640384 40.01461330164129))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.6730769230769231
                          },
                          {
                              "name": "18-21时",
                              "value": 0.3269230769230769
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 1.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.16666666666666666
                          },
                          {
                              "key": "停车场",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "餐厅",
                              "value": 0.16666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.40671712333192,
                  "lat": 40.05380020154978,
                  "visitSum": 35,
                  "visitObj": 4,
                  "durationAvg": 37.0,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 63.0,
                  "intersection": 0,
                  "freqMean": 4.494831349206349,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.40733271722942 40.05311863003523,116.40628490976103 40.053234468629704,116.40608137118848 40.05340897132178,116.40576760693021 40.05433881650915,116.40635526878067 40.0543299947127,116.40671399789423 40.05418824028257,116.408040755963 40.05353411933259,116.40733271722942 40.05311863003523))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.17142857142857143
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.2
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.2
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.02857142857142857
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.02857142857142857
                          },
                          {
                              "name": "[60, )",
                              "value": 0.37142857142857144
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.42857142857142855
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5714285714285714
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.2727272727272727
                          },
                          {
                              "key": "宾馆酒店",
                              "value": 0.18181818181818182
                          },
                          {
                              "key": "餐厅",
                              "value": 0.5454545454545454
                          }
                      ]
                  }
              },
              {
                  "lng": 116.41107805467412,
                  "lat": 40.067951995360836,
                  "visitSum": 13,
                  "visitObj": 2,
                  "durationAvg": 31.07,
                  "road1len": 0.0,
                  "road2len": 54.0,
                  "road3len": 96.0,
                  "intersection": 0,
                  "freqMean": 2.670865162037037,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.41051289783793 40.06740203259283,116.41100618661255 40.0690200216085,116.41130342541639 40.06863398285588,116.41122707601033 40.06759281879893,116.410928487086 40.06745902671065,116.41051289783793 40.06740203259283))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.38461538461538464
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7692307692307693
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.5
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.5
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.45514582847022,
                  "lat": 39.98812937163358,
                  "visitSum": 111,
                  "visitObj": 2,
                  "durationAvg": 697.38,
                  "road1len": 0.0,
                  "road2len": 20.0,
                  "road3len": 36.0,
                  "intersection": 0,
                  "freqMean": 21.394931821469903,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.45569523285822 39.98745194807043,116.45566593775663 39.98745540509434,116.45559452791287 39.98746486920767,116.45494141362384 39.98768622733937,116.4545723201395 39.98794208036032,116.45403541877917 39.98907339903894,116.45428282431324 39.98931280917071,116.4552301596478 39.98946377164109,116.45630081855286 39.98791376970161,116.45569523285822 39.98745194807043))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.07207207207207207
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.04504504504504504
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.009009009009009009
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8738738738738738
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.43243243243243246
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5675675675675675
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.2
                          },
                          {
                              "key": "停车场",
                              "value": 0.2
                          },
                          {
                              "key": "学校",
                              "value": 0.2
                          },
                          {
                              "key": "餐厅",
                              "value": 0.4
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32122898807306,
                  "lat": 40.01110133157888,
                  "visitSum": 33,
                  "visitObj": 4,
                  "durationAvg": 136.08,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 39.0,
                  "intersection": 12,
                  "freqMean": 11.251383759469698,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32136897356455 40.01069378407922,116.32117138086049 40.01084894172207,116.3210984331449 40.01104626924156,116.3210419467205 40.01121656577943,116.32097502291322 40.0115261331653,116.3216040611368 40.01142850454667,116.32136897356455 40.01069378407922))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06060606060606061
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.030303030303030304
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5454545454545454
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.24242424242424243
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7575757575757576
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.25
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.75
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "学校",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.3333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32798597598497,
                  "lat": 40.012396492951815,
                  "visitSum": 30,
                  "visitObj": 6,
                  "durationAvg": 386.07,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 39.0,
                  "intersection": 9,
                  "freqMean": 13.431729104257444,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32875801766414 40.01155124355434,116.32835899965217 40.01158141432717,116.32739688937065 40.01171675135232,116.32717591624909 40.01319947402077,116.32760301034295 40.01336249719683,116.32789618623909 40.01343517671414,116.32845057843265 40.012692198936406,116.32875801766414 40.01155124355434))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.1
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.2
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.1
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.33327885316449,
                  "lat": 40.00143617291894,
                  "visitSum": 50,
                  "visitObj": 4,
                  "durationAvg": 624.7,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 21.0,
                  "intersection": 22,
                  "freqMean": 13.295102334104937,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33343383420281 40.000698823560505,116.33302904884633 40.00076508748874,116.33289330567416 40.00123926068352,116.3329336612985 40.00269792245668,116.33326631633342 40.001991630663305,116.33352188815148 40.00143524679901,116.33343383420281 40.000698823560505))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.06
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.02
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.04
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.82
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.38
                          },
                          {
                              "name": "18-21时",
                              "value": 0.62
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "银行",
                              "value": 0.6666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32561656974315,
                  "lat": 40.00924134114307,
                  "visitSum": 39,
                  "visitObj": 8,
                  "durationAvg": 55.18,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 0.0,
                  "intersection": 23,
                  "freqMean": 9.439426576967593,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32570126410056 40.008852784476474,116.32550323620167 40.00886970663361,116.32503480661713 40.01022626289119,116.32592945430112 40.01033786939589,116.32606775753578 40.009123752870636,116.32596355739656 40.00888691153374,116.32570126410056 40.008852784476474))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.10256410256410256
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.1794871794871795
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.05128205128205128
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.1794871794871795
                          },
                          {
                              "name": "[60, )",
                              "value": 0.41025641025641024
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.20512820512820512
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7948717948717948
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.25
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.75
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "运动场馆",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3434233969336,
                  "lat": 39.92782959471648,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 711.6,
                  "road1len": 0.0,
                  "road2len": 36.0,
                  "road3len": 51.0,
                  "intersection": 0,
                  "freqMean": 9.406099537037038,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34351148156907 39.927376276969355,116.34246665232831 39.92774342793729,116.34291038687304 39.92822305162547,116.34371191973163 39.9287671692765,116.34431640393841 39.92817777499083,116.3442956053332 39.92761972226091,116.34351148156907 39.927376276969355))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9333333333333333
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.26666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7333333333333333
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.2
                          },
                          {
                              "key": "停车场",
                              "value": 0.6
                          },
                          {
                              "key": "医院",
                              "value": 0.2
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32667823688553,
                  "lat": 40.00757733759758,
                  "visitSum": 13,
                  "visitObj": 4,
                  "durationAvg": 60.9,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 0.0,
                  "intersection": 10,
                  "freqMean": 41.88120804398148,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32703353025447 40.007346102271974,116.32680173959683 40.00738784925133,116.32635434806728 40.00759641383337,116.32616416446189 40.00782203249681,116.32670452255101 40.00770335104964,116.32690581968717 40.007603791209554,116.32704766334656 40.00751891560208,116.32703353025447 40.007346102271974))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5384615384615384
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7692307692307693
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34475635588332,
                  "lat": 40.000257779234516,
                  "visitSum": 13,
                  "visitObj": 1,
                  "durationAvg": 32.33,
                  "road1len": 0.0,
                  "road2len": 42.0,
                  "road3len": 9.0,
                  "intersection": 29,
                  "freqMean": 3.9231071937321937,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34514301226852 39.99999493358863,116.34474208866399 40.00001970669566,116.34463649207596 40.000178414393645,116.34451868754805 40.00061799190974,116.34466930304428 40.00067152831993,116.34527514500878 40.00004899597794,116.34514301226852 39.99999493358863))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.46153846153846156
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6923076923076923
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.2
                          },
                          {
                              "key": "地铁站",
                              "value": 0.2
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6
                          }
                      ]
                  }
              },
              {
                  "lng": 116.35007714892237,
                  "lat": 40.004204260434065,
                  "visitSum": 19,
                  "visitObj": 1,
                  "durationAvg": 756.3,
                  "road1len": 0.0,
                  "road2len": 60.0,
                  "road3len": 114.0,
                  "intersection": 3,
                  "freqMean": 3.4168469785575053,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35006841826693 40.00341274186856,116.34937608560644 40.00412063094604,116.35019710255474 40.00515575109405,116.35094109676267 40.004479294434965,116.35006841826693 40.00341274186856))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.21052631578947367
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7894736842105263
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.5
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.35904002766124,
                  "lat": 39.986296305075705,
                  "visitSum": 15,
                  "visitObj": 3,
                  "durationAvg": 607.58,
                  "road1len": 6.0,
                  "road2len": 54.0,
                  "road3len": 0.0,
                  "intersection": 6,
                  "freqMean": 10.946324331275719,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35995587424924 39.985778413549006,116.35924728846227 39.98589523166008,116.35865466424714 39.98602268067137,116.35787977179868 39.98619554635697,116.3588965873804 39.98656110217489,116.35959785265159 39.98664756350464,116.35995587424924 39.985778413549006))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.13333333333333333
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.13333333333333333
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6666666666666666
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33455947350132,
                  "lat": 39.98257927151329,
                  "visitSum": 47,
                  "visitObj": 8,
                  "durationAvg": 703.28,
                  "road1len": 2.0,
                  "road2len": 66.0,
                  "road3len": 93.0,
                  "intersection": 7,
                  "freqMean": 13.922147053590768,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33421899631662 39.98166985207335,116.33358376289384 39.98199522132744,116.3334109391175 39.98259200360807,116.3333554105418 39.9833514815195,116.33348845520399 39.98342421175009,116.33527194289984 39.98385164453301,116.33584228158279 39.98281757930364,116.33576758211281 39.98214917414447,116.33526256007522 39.9817685481034,116.33421899631662 39.98166985207335))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06382978723404255
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.10638297872340426
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.06382978723404255
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.7659574468085106
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2765957446808511
                          },
                          {
                              "name": "18-21时",
                              "value": 0.723404255319149
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.75
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30960177061505,
                  "lat": 40.05043673067604,
                  "visitSum": 16,
                  "visitObj": 2,
                  "durationAvg": 630.17,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 27.0,
                  "intersection": 6,
                  "freqMean": 5.150371557454891,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.30945868838072 40.04986910917904,116.30947074856377 40.05059266902122,116.30967627332892 40.05069993434988,116.3098200304903 40.05060332897664,116.30976007348119 40.05019854134641,116.30945868838072 40.04986910917904))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3125
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6875
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3473836870271,
                  "lat": 40.019259640304824,
                  "visitSum": 25,
                  "visitObj": 1,
                  "durationAvg": 698.57,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 27.0,
                  "intersection": 3,
                  "freqMean": 5.8443055555555565,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.3471723901135 40.01904119455812,116.34697540322429 40.0195788282703,116.34748172090158 40.019554749839024,116.34782525270484 40.01952043123759,116.3477775701069 40.01941636773289,116.34761069317489 40.01914367769005,116.34727620131876 40.019048088728866,116.3471723901135 40.01904119455812))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.16
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.08
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.04
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.04
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.04
                          },
                          {
                              "name": "[60, )",
                              "value": 0.64
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.52
                          },
                          {
                              "name": "18-21时",
                              "value": 0.48
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.34780443969267,
                  "lat": 40.0175194488457,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 617.57,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 27.0,
                  "intersection": 0,
                  "freqMean": 7.336486882716049,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34775398713525 40.01654049721823,116.34706851323277 40.01669038432318,116.3476685459378 40.01794457429449,116.34775479917816 40.018084161649654,116.34822800016617 40.01807784185158,116.34775398713525 40.01654049721823))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8666666666666667
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.26666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7333333333333333
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.337818293671,
                  "lat": 39.97967547765735,
                  "visitSum": 36,
                  "visitObj": 12,
                  "durationAvg": 51.5,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 105.0,
                  "intersection": 6,
                  "freqMean": 5.01509162808642,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33787302274874 39.978082774469776,116.33731743693731 39.97902022922403,116.33685702594356 39.97988924904161,116.33700428850695 39.98069456562292,116.33864767169963 39.98042942196437,116.33867063287602 39.9804136879894,116.33905214792782 39.980006185797215,116.33787302274874 39.978082774469776))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.25
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.1388888888888889
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.027777777777777776
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.027777777777777776
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4722222222222222
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.6
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.5
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.25
                          },
                          {
                              "key": "银行",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.31008370125329,
                  "lat": 39.97239032097574,
                  "visitSum": 12,
                  "visitObj": 5,
                  "durationAvg": 55.18,
                  "road1len": 2.0,
                  "road2len": 56.0,
                  "road3len": 24.0,
                  "intersection": 23,
                  "freqMean": 32.573540839947086,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.30953160399837 39.97188425140984,116.30960432935268 39.97230365681165,116.30983734273454 39.97270162565046,116.3105381482826 39.972722517430924,116.31097631414313 39.972626415735036,116.30953160399837 39.97188425140984))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.25
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.25
                          },
                          {
                              "name": "18-21时",
                              "value": 0.75
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.42857142857142855
                          },
                          {
                              "key": "学校",
                              "value": 0.5714285714285714
                          }
                      ]
                  }
              },
              {
                  "lng": 116.4102738546296,
                  "lat": 40.05928691827572,
                  "visitSum": 15,
                  "visitObj": 1,
                  "durationAvg": 42.42,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 72.0,
                  "intersection": 16,
                  "freqMean": 1.6670841049382716,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.41055631426958 40.05883991116299,116.41020960946258 40.05902791263303,116.4100133100305 40.05941125392507,116.41000972492985 40.05942995300187,116.41020401269954 40.05958957867624,116.41048241003128 40.05944992724604,116.41055409360665 40.05908309953427,116.41055631426958 40.05883991116299))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.4
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.06666666666666667
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 1.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.07142857142857142
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.03571428571428571
                          },
                          {
                              "key": "餐厅",
                              "value": 0.5714285714285714
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34475191908436,
                  "lat": 39.97824171431215,
                  "visitSum": 40,
                  "visitObj": 7,
                  "durationAvg": 27.38,
                  "road1len": 0.0,
                  "road2len": 32.0,
                  "road3len": 141.0,
                  "intersection": 18,
                  "freqMean": 2.385338877865961,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34402177401758 39.97701075384875,116.34374924934967 39.97737435756445,116.34322104292252 39.97849052763904,116.34496106049349 39.97908673514858,116.3458233675592 39.97906600822489,116.34651576740005 39.9776856592856,116.34402177401758 39.97701075384875))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.325
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.225
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.05
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.4
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.2
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.6
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.2
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.8
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.2
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30897578119327,
                  "lat": 39.988382063561126,
                  "visitSum": 24,
                  "visitObj": 4,
                  "durationAvg": 786.92,
                  "road1len": 10.0,
                  "road2len": 72.0,
                  "road3len": 63.0,
                  "intersection": 16,
                  "freqMean": 30.97553317901235,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.3087822969071 39.98767710526681,116.30770865909078 39.9878568076719,116.30759893686846 39.988908745644224,116.3101541776265 39.98890347804029,116.30994016983757 39.98806281189209,116.3087822969071 39.98767710526681))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.08333333333333333
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.041666666666666664
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.875
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.16666666666666666
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8333333333333334
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.25
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.4166666666666667
                          },
                          {
                              "key": "风景区",
                              "value": 0.08333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.36804558004296,
                  "lat": 39.95260390633742,
                  "visitSum": 16,
                  "visitObj": 2,
                  "durationAvg": 56.17,
                  "road1len": 0.0,
                  "road2len": 24.0,
                  "road3len": 84.0,
                  "intersection": 6,
                  "freqMean": 3.628963278619528,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.36814844587462 39.95218830713207,116.36780454868082 39.95270167056364,116.36794905975304 39.95277898416611,116.36802048087306 39.95281580961077,116.3682423037699 39.952589714613545,116.36819204574823 39.95228720665228,116.36814844587462 39.95218830713207))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.125
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.25
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.125
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.5
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3125
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6875
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.5
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.5
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "宾馆酒店",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42310149621164,
                  "lat": 40.07330045241525,
                  "visitSum": 17,
                  "visitObj": 1,
                  "durationAvg": 698.33,
                  "road1len": 0.0,
                  "road2len": 38.0,
                  "road3len": 27.0,
                  "intersection": 3,
                  "freqMean": 5.001099537037038,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.4235680794629 40.0728324312299,116.42236537137059 40.07283446921236,116.42203729068132 40.07298901788824,116.42278300712555 40.07391886715274,116.42323845405683 40.07377683226204,116.42391035943886 40.073134920752565,116.42391382198173 40.072928984404676,116.4235680794629 40.0728324312299))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.058823529411764705
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9411764705882353
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4117647058823529
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5882352941176471
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33677464153644,
                  "lat": 39.97685448307074,
                  "visitSum": 55,
                  "visitObj": 24,
                  "durationAvg": 1342.45,
                  "road1len": 0.0,
                  "road2len": 90.0,
                  "road3len": 156.0,
                  "intersection": 22,
                  "freqMean": 58.02111927585017,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33730329626759 39.97581554116385,116.33551209368748 39.97643645844208,116.3360612782396 39.97842734619672,116.33632056006464 39.97853092279074,116.33827259861732 39.976840461507884,116.33730329626759 39.97581554116385))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.05454545454545454
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.03636363636363636
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.01818181818181818
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8909090909090909
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2909090909090909
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7090909090909091
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[3, )",
                              "value": 0.8461538461538461
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "停车场",
                              "value": 0.16666666666666666
                          },
                          {
                              "key": "学校",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42602161070718,
                  "lat": 39.97058887246898,
                  "visitSum": 11,
                  "visitObj": 1,
                  "durationAvg": 905.62,
                  "road1len": 10.0,
                  "road2len": 74.0,
                  "road3len": 93.0,
                  "intersection": 10,
                  "freqMean": 17.54677714646465,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.42638477724384 39.969948618861046,116.42553734121623 39.970609827470966,116.42600476063106 39.970985535147385,116.42641222137604 39.970285305279575,116.42638477724384 39.969948618861046))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.7272727272727273
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.36363636363636365
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6363636363636364
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 1.0
                          }
                      ]
                  }
              },
              {
                  "lng": 116.42388357950321,
                  "lat": 39.99744531293667,
                  "visitSum": 56,
                  "visitObj": 1,
                  "durationAvg": 664.57,
                  "road1len": 0.0,
                  "road2len": 126.0,
                  "road3len": 60.0,
                  "intersection": 15,
                  "freqMean": 6.697365244708993,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.4242844315477 39.996734217208385,116.42424570681537 39.9967509808008,116.42267926639279 39.998268759916954,116.42333344680523 39.99845871130016,116.42434229520725 39.99777426949051,116.4245724249685 39.99705648351704,116.4242844315477 39.996734217208385))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.05357142857142857
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.017857142857142856
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.017857142857142856
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9107142857142857
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.32142857142857145
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6785714285714286
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "宾馆酒店",
                              "value": 0.125
                          },
                          {
                              "key": "餐厅",
                              "value": 0.875
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33105629301221,
                  "lat": 39.973265246802164,
                  "visitSum": 11,
                  "visitObj": 4,
                  "durationAvg": 599.07,
                  "road1len": 0.0,
                  "road2len": 30.0,
                  "road3len": 102.0,
                  "intersection": 13,
                  "freqMean": 12.833982445987653,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33079197899602 39.97269078599466,116.3307639768771 39.973243351255405,116.33087968537914 39.97351759042373,116.33128418955421 39.97356504203183,116.33187032301272 39.97306815848729,116.33079197899602 39.97269078599466))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9090909090909091
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.125
                          },
                          {
                              "key": "停车场",
                              "value": 0.375
                          },
                          {
                              "key": "医院",
                              "value": 0.125
                          },
                          {
                              "key": "学校",
                              "value": 0.375
                          }
                      ]
                  }
              },
              {
                  "lng": 116.3510183567336,
                  "lat": 39.96847894499874,
                  "visitSum": 42,
                  "visitObj": 4,
                  "durationAvg": 631.58,
                  "road1len": 28.0,
                  "road2len": 116.0,
                  "road3len": 9.0,
                  "intersection": 19,
                  "freqMean": 10.313807363315696,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.35065139530596 39.96807575576733,116.35052777685972 39.96823038550032,116.35091497277763 39.96891672178841,116.35117010476085 39.96902631363749,116.35139757181629 39.96843266675662,116.35142586489654 39.968226773545155,116.35075936969054 39.96809220052359,116.35065139530596 39.96807575576733))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.047619047619047616
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.023809523809523808
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.9285714285714286
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.09523809523809523
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9047619047619048
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.3333333333333333
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.6666666666666666
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.6666666666666666
                          },
                          {
                              "key": "风景区",
                              "value": 0.3333333333333333
                          }
                      ]
                  }
              },
              {
                  "lng": 116.49929402343444,
                  "lat": 39.955229859590254,
                  "visitSum": 13,
                  "visitObj": 1,
                  "durationAvg": 77.48,
                  "road1len": 0.0,
                  "road2len": 58.0,
                  "road3len": 93.0,
                  "intersection": 29,
                  "freqMean": 5.223247863247862,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.49957640062848 39.954797530420464,116.49915593215776 39.95521121351234,116.49888546685779 39.95565261570859,116.49917475450852 39.9555360816824,116.49958969968681 39.955051037419274,116.49957640062848 39.954797530420464))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.15384615384615385
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[60, )",
                              "value": 0.6923076923076923
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.3076923076923077
                          },
                          {
                              "name": "18-21时",
                              "value": 0.6923076923076923
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.47783365252394,
                  "lat": 39.928825163885776,
                  "visitSum": 86,
                  "visitObj": 4,
                  "durationAvg": 813.38,
                  "road1len": 0.0,
                  "road2len": 46.0,
                  "road3len": 150.0,
                  "intersection": 25,
                  "freqMean": 5.939962718621399,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.47776160239508 39.92814405935851,116.47723834239595 39.92824021102361,116.47712223987153 39.92831184153295,116.47695800903149 39.92860751928613,116.47819262439567 39.930127610302904,116.47833417184873 39.930262550872754,116.47858826255924 39.93006001064893,116.47855863302043 39.92848158080705,116.47840620180791 39.92832588497804,116.47776160239508 39.92814405935851))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.4883720930232558
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5116279069767442
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.1111111111111111
                          },
                          {
                              "key": "停车场",
                              "value": 0.1111111111111111
                          },
                          {
                              "key": "餐厅",
                              "value": 0.7777777777777778
                          }
                      ]
                  }
              },
              {
                  "lng": 116.33237264435733,
                  "lat": 40.07786449425293,
                  "visitSum": 57,
                  "visitObj": 1,
                  "durationAvg": 698.92,
                  "road1len": 0.0,
                  "road2len": 134.0,
                  "road3len": 21.0,
                  "intersection": 0,
                  "freqMean": 23.752966617933716,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.33359771177011 40.07709207905484,116.33098415060833 40.07759830399555,116.33081317232994 40.07774076412015,116.33078927890976 40.07789066507213,116.3309123110352 40.078026919386325,116.33207144715188 40.07868560655486,116.33285349345374 40.07837044788968,116.33321993901562 40.07795404614398,116.33359771177011 40.07709207905484))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.03508771929824561
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9649122807017544
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "学校",
                              "value": 0.5
                          },
                          {
                              "key": "银行",
                              "value": 0.5
                          }
                      ]
                  }
              },
              {
                  "lng": 116.32946001331646,
                  "lat": 40.07734422303118,
                  "visitSum": 45,
                  "visitObj": 1,
                  "durationAvg": 724.67,
                  "road1len": 0.0,
                  "road2len": 86.0,
                  "road3len": 9.0,
                  "intersection": 16,
                  "freqMean": 20.577963477366257,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.32935459192963 40.07715064408287,116.32918169845088 40.077226143875656,116.32891556102287 40.07761813817594,116.32941259912185 40.07781248091666,116.33016525771524 40.07744917511871,116.32935459192963 40.07715064408287))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.2222222222222222
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7777777777777778
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.27231306351982,
                  "lat": 39.95055471424164,
                  "visitSum": 10,
                  "visitObj": 1,
                  "durationAvg": 843.82,
                  "road1len": 10.0,
                  "road2len": 82.0,
                  "road3len": 48.0,
                  "intersection": 8,
                  "freqMean": 5.800430555555556,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.27212206995421 39.950485688461924,116.27197279664185 39.95058536673306,116.27252779471294 39.95069550713556,116.27262805451626 39.95057667682471,116.27251677819481 39.950491899626165,116.27212206995421 39.950485688461924))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.1
                          },
                          {
                              "name": "18-21时",
                              "value": 0.9
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.43867123167678,
                  "lat": 40.028825250846765,
                  "visitSum": 55,
                  "visitObj": 1,
                  "durationAvg": 778.52,
                  "road1len": 0.0,
                  "road2len": 26.0,
                  "road3len": 222.0,
                  "intersection": 16,
                  "freqMean": 9.819532407407408,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.4389693345508 40.0285104455524,116.4376931888338 40.02862177545097,116.43800617506706 40.02884190199416,116.43809696713073 40.02889590600441,116.43905004604113 40.02905013437766,116.43949734475284 40.029084030043435,116.43979862850146 40.028784360129336,116.4389693345508 40.0285104455524))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.5636363636363636
                          },
                          {
                              "name": "18-21时",
                              "value": 0.43636363636363634
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.5
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.25
                          },
                          {
                              "key": "学校",
                              "value": 0.25
                          }
                      ]
                  }
              },
              {
                  "lng": 116.31239807386112,
                  "lat": 40.01511960782459,
                  "visitSum": 25,
                  "visitObj": 1,
                  "durationAvg": 609.4,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 9.0,
                  "intersection": 0,
                  "freqMean": 2.961210648148148,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.31240063633435 40.01499969810039,116.31232979183592 40.0150175157473,116.312196661561 40.01513903642018,116.31219117816366 40.01519975365167,116.3125053480119 40.015194188826236,116.31258724772735 40.01510653959739,116.31263368706534 40.01505562457559,116.31240063633435 40.01499969810039))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.12
                          },
                          {
                              "name": "18-21时",
                              "value": 0.88
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 1.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.26666666666666666
                          },
                          {
                              "key": "宾馆酒店",
                              "value": 0.06666666666666667
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.34028489456601,
                  "lat": 39.974844719310916,
                  "visitSum": 11,
                  "visitObj": 1,
                  "durationAvg": 31.0,
                  "road1len": 0.0,
                  "road2len": 20.0,
                  "road3len": 135.0,
                  "intersection": 0,
                  "freqMean": 12.086363636363636,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.34000959424934 39.97462045639989,116.33959060169668 39.97475469045883,116.34034175530365 39.975007077112906,116.34090621861908 39.975077042189035,116.34048097991787 39.97485023301504,116.34000959424934 39.97462045639989))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.36363636363636365
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.09090909090909091
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.36363636363636365
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.18181818181818182
                          },
                          {
                              "name": "18-21时",
                              "value": 0.8181818181818182
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.19047619047619047
                          },
                          {
                              "key": "学校",
                              "value": 0.047619047619047616
                          },
                          {
                              "key": "运动场馆",
                              "value": 0.09523809523809523
                          },
                          {
                              "key": "邮局物流",
                              "value": 0.047619047619047616
                          },
                          {
                              "key": "餐厅",
                              "value": 0.6190476190476191
                          }
                      ]
                  }
              },
              {
                  "lng": 116.30307613827414,
                  "lat": 40.01473948256842,
                  "visitSum": 52,
                  "visitObj": 1,
                  "durationAvg": 489.38,
                  "road1len": 0.0,
                  "road2len": 6.0,
                  "road3len": 24.0,
                  "intersection": 0,
                  "freqMean": 2.4612600160256415,
                  "timeSegment": "15-18时",
                  "concaveHull": "POLYGON((116.30307851640384 40.01461330164129,116.30286251058601 40.01465248628838,116.30262032625585 40.01471444684323,116.30261683475878 40.01475609145596,116.30364995457134 40.014857408428625,116.30355021467805 40.01475533423345,116.30339022507887 40.01468070070208,116.30307851640384 40.01461330164129))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.0
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.0
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 1.0
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.6730769230769231
                          },
                          {
                              "name": "18-21时",
                              "value": 0.3269230769230769
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 1.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.16666666666666666
                          },
                          {
                              "key": "停车场",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "公共厕所",
                              "value": 0.3333333333333333
                          },
                          {
                              "key": "餐厅",
                              "value": 0.16666666666666666
                          }
                      ]
                  }
              },
              {
                  "lng": 116.40671712333192,
                  "lat": 40.05380020154978,
                  "visitSum": 35,
                  "visitObj": 4,
                  "durationAvg": 37.0,
                  "road1len": 0.0,
                  "road2len": 0.0,
                  "road3len": 63.0,
                  "intersection": 0,
                  "freqMean": 4.494831349206349,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.40733271722942 40.05311863003523,116.40628490976103 40.053234468629704,116.40608137118848 40.05340897132178,116.40576760693021 40.05433881650915,116.40635526878067 40.0543299947127,116.40671399789423 40.05418824028257,116.408040755963 40.05353411933259,116.40733271722942 40.05311863003523))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.17142857142857143
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.2
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.2
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.02857142857142857
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.02857142857142857
                          },
                          {
                              "name": "[60, )",
                              "value": 0.37142857142857144
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.42857142857142855
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5714285714285714
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "停车场",
                              "value": 0.2727272727272727
                          },
                          {
                              "key": "宾馆酒店",
                              "value": 0.18181818181818182
                          },
                          {
                              "key": "餐厅",
                              "value": 0.5454545454545454
                          }
                      ]
                  }
              },
              {
                  "lng": 116.41107805467412,
                  "lat": 40.067951995360836,
                  "visitSum": 13,
                  "visitObj": 2,
                  "durationAvg": 31.07,
                  "road1len": 0.0,
                  "road2len": 54.0,
                  "road3len": 96.0,
                  "intersection": 0,
                  "freqMean": 2.670865162037037,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.41051289783793 40.06740203259283,116.41100618661255 40.0690200216085,116.41130342541639 40.06863398285588,116.41122707601033 40.06759281879893,116.410928487086 40.06745902671065,116.41051289783793 40.06740203259283))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.07692307692307693
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.0
                          },
                          {
                              "name": "[60, )",
                              "value": 0.38461538461538464
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.23076923076923078
                          },
                          {
                              "name": "18-21时",
                              "value": 0.7692307692307693
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.5
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 0.5
                          }
                      ],
                      "poiDistribute": []
                  }
              },
              {
                  "lng": 116.45514582847022,
                  "lat": 39.98812937163358,
                  "visitSum": 111,
                  "visitObj": 2,
                  "durationAvg": 697.38,
                  "road1len": 0.0,
                  "road2len": 20.0,
                  "road3len": 36.0,
                  "intersection": 0,
                  "freqMean": 21.394931821469903,
                  "timeSegment": "18-21时",
                  "concaveHull": "POLYGON((116.45569523285822 39.98745194807043,116.45566593775663 39.98745540509434,116.45559452791287 39.98746486920767,116.45494141362384 39.98768622733937,116.4545723201395 39.98794208036032,116.45403541877917 39.98907339903894,116.45428282431324 39.98931280917071,116.4552301596478 39.98946377164109,116.45630081855286 39.98791376970161,116.45569523285822 39.98745194807043))",
                  "chartData": {
                      "durationDistribute": [
                          {
                              "name": "[0,10)",
                              "value": 0.0
                          },
                          {
                              "name": "[10,20)",
                              "value": 0.07207207207207207
                          },
                          {
                              "name": "[20,30)",
                              "value": 0.0
                          },
                          {
                              "name": "[30,40)",
                              "value": 0.04504504504504504
                          },
                          {
                              "name": "[40,50)",
                              "value": 0.0
                          },
                          {
                              "name": "[50,60)",
                              "value": 0.009009009009009009
                          },
                          {
                              "name": "[60, )",
                              "value": 0.8738738738738738
                          }
                      ],
                      "timeDistribute": [
                          {
                              "name": "0-3时",
                              "value": 0.0
                          },
                          {
                              "name": "3-6时",
                              "value": 0.0
                          },
                          {
                              "name": "6-9时",
                              "value": 0.0
                          },
                          {
                              "name": "9-12时",
                              "value": 0.0
                          },
                          {
                              "name": "12-15时",
                              "value": 0.0
                          },
                          {
                              "name": "15-18时",
                              "value": 0.43243243243243246
                          },
                          {
                              "name": "18-21时",
                              "value": 0.5675675675675675
                          },
                          {
                              "name": "21-24时",
                              "value": 0.0
                          }
                      ],
                      "weekDistribute": [
                          {
                              "name": "周一",
                              "value": 0.0
                          },
                          {
                              "name": "周二",
                              "value": 0.0
                          },
                          {
                              "name": "周三",
                              "value": 0.0
                          },
                          {
                              "name": "周四",
                              "value": 0.0
                          },
                          {
                              "name": "周五",
                              "value": 0.0
                          },
                          {
                              "name": "周六",
                              "value": 0.0
                          },
                          {
                              "name": "周日",
                              "value": 1.0
                          }
                      ],
                      "freqDistribute": [
                          {
                              "name": "[0,0.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[0.5,1)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.0,1.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[1.5,2.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.0,2.5)",
                              "value": 0.0
                          },
                          {
                              "name": "[2.5,3.0)",
                              "value": 0.0
                          },
                          {
                              "name": "[3, )",
                              "value": 1.0
                          }
                      ],
                      "poiDistribute": [
                          {
                              "key": "住宅区",
                              "value": 0.2
                          },
                          {
                              "key": "停车场",
                              "value": 0.2
                          },
                          {
                              "key": "学校",
                              "value": 0.2
                          },
                          {
                              "key": "餐厅",
                              "value": 0.4
                          }
                      ]
                  }
              }
          ],
          "placeNum": 74,
          "chartData": {
              "visitSumDistribute": [
                  {
                      "name": "[0,20)",
                      "value": 0.4594594594594595
                  },
                  {
                      "name": "[20,50)",
                      "value": 0.32432432432432434
                  },
                  {
                      "name": "[50,100)",
                      "value": 0.1891891891891892
                  },
                  {
                      "name": "[100,200)",
                      "value": 0.02702702702702703
                  },
                  {
                      "name": "[200,500)",
                      "value": 0.0
                  },
                  {
                      "name": "[500,1000)",
                      "value": 0.0
                  },
                  {
                      "name": "[1000, )",
                      "value": 0.0
                  }
              ],
              "freqMeanDistribute": [
                  {
                      "name": "[0,0.5)",
                      "value": 0.0
                  },
                  {
                      "name": "[0.5,1)",
                      "value": 0.0
                  },
                  {
                      "name": "[1.0,1.5)",
                      "value": 0.0
                  },
                  {
                      "name": "[1.5,2.0)",
                      "value": 0.02702702702702703
                  },
                  {
                      "name": "[2.0,2.5)",
                      "value": 0.05405405405405406
                  },
                  {
                      "name": "[2.5,3.0)",
                      "value": 0.05405405405405406
                  },
                  {
                      "name": "[3, )",
                      "value": 0.8648648648648649
                  }
              ],
              "durationAvgDistribute": [
                  {
                      "name": "[0,10)",
                      "value": 0.0
                  },
                  {
                      "name": "[10,20)",
                      "value": 0.0
                  },
                  {
                      "name": "[20,30)",
                      "value": 0.02702702702702703
                  },
                  {
                      "name": "[30,40)",
                      "value": 0.10810810810810811
                  },
                  {
                      "name": "[40,50)",
                      "value": 0.02702702702702703
                  },
                  {
                      "name": "[50,60)",
                      "value": 0.10810810810810811
                  },
                  {
                      "name": "[60, )",
                      "value": 0.7297297297297297
                  }
              ],
              "visitObjStatDistribute": [
                  {
                      "name": "[0,20)",
                      "value": 0.972972972972973
                  },
                  {
                      "name": "[20,50)",
                      "value": 0.02702702702702703
                  },
                  {
                      "name": "[50,100)",
                      "value": 0.0
                  },
                  {
                      "name": "[100,200)",
                      "value": 0.0
                  },
                  {
                      "name": "[200,500)",
                      "value": 0.0
                  },
                  {
                      "name": "[500,1000)",
                      "value": 0.0
                  },
                  {
                      "name": "[1000, )",
                      "value": 0.0
                  }
              ],
              "poiTypeDistribute": [
                  {
                      "key": "住宅区",
                      "value": 0.07936507936507936
                  },
                  {
                      "key": "停车场",
                      "value": 0.20634920634920634
                  },
                  {
                      "key": "公共厕所",
                      "value": 0.0582010582010582
                  },
                  {
                      "key": "医院",
                      "value": 0.010582010582010581
                  },
                  {
                      "key": "地铁站",
                      "value": 0.010582010582010581
                  },
                  {
                      "key": "学校",
                      "value": 0.13227513227513227
                  },
                  {
                      "key": "宾馆酒店",
                      "value": 0.026455026455026454
                  },
                  {
                      "key": "运动场馆",
                      "value": 0.0582010582010582
                  },
                  {
                      "key": "邮局物流",
                      "value": 0.026455026455026454
                  },
                  {
                      "key": "银行",
                      "value": 0.021164021164021163
                  },
                  {
                      "key": "风景区",
                      "value": 0.010582010582010581
                  },
                  {
                      "key": "餐厅",
                      "value": 0.35978835978835977
                  }
              ],
              "timeSegDistribute": [
                  {
                      "name": "0-3时",
                      "value": 0.0
                  },
                  {
                      "name": "3-6时",
                      "value": 0.0
                  },
                  {
                      "name": "6-9时",
                      "value": 0.0
                  },
                  {
                      "name": "9-12时",
                      "value": 0.0
                  },
                  {
                      "name": "12-15时",
                      "value": 0.0
                  },
                  {
                      "name": "15-18时",
                      "value": 0.08108108108108109
                  },
                  {
                      "name": "18-21时",
                      "value": 0.918918918918919
                  },
                  {
                      "name": "21-24时",
                      "value": 0.0
                  }
              ],
              "road1lenDistribute": [
                  {
                      "name": "[0,100)",
                      "value": 1.0
                  },
                  {
                      "name": "[100,500)",
                      "value": 0.0
                  },
                  {
                      "name": "[500,1000)",
                      "value": 0.0
                  },
                  {
                      "name": "[1000, )",
                      "value": 0.0
                  }
              ],
              "road2lenDistribute": [
                  {
                      "name": "[0,100)",
                      "value": 0.918918918918919
                  },
                  {
                      "name": "[100,500)",
                      "value": 0.08108108108108109
                  },
                  {
                      "name": "[500,1000)",
                      "value": 0.0
                  },
                  {
                      "name": "[1000, )",
                      "value": 0.0
                  }
              ],
              "road3lenDistribute": [
                  {
                      "name": "[0,100)",
                      "value": 0.7837837837837838
                  },
                  {
                      "name": "[100,500)",
                      "value": 0.21621621621621623
                  },
                  {
                      "name": "[500,1000)",
                      "value": 0.0
                  },
                  {
                      "name": "[1000, )",
                      "value": 0.0
                  }
              ],
              "intersectDistribute": [
                  {
                      "name": "[0,3)",
                      "value": 0.24324324324324326
                  },
                  {
                      "name": "[3,6)",
                      "value": 0.08108108108108109
                  },
                  {
                      "name": "[6,10)",
                      "value": 0.1891891891891892
                  },
                  {
                      "name": "[10, ]",
                      "value": 0.4864864864864865
                  }
              ]
            }
  }
  

  )
);

Mock.mock(
  /\/guest\/analysis/,
  mergeOk({
    feature: null,
    index: 62.504999999999995
  })
);

Mock.mock(
  /\/consume\/analysis/,
  mergeOk({
    firstTypeBrandIndex: [
      {
        name: '线上指数',
        value: 12
      },
      {
        name: '线下指数',
        value: 34
      }
    ],
    firstTypeConsumeDistribute: [
      {
        name: '线上指数',
        value: 12
      },
      {
        name: '线下指数',
        value: 34
      }
    ],
    firstTypePriceIndex: [
      {
        name: '线上指数',
        value: 12
      },
      {
        name: '线下指数',
        value: 34
      }
    ],
    onlineConsumeIndex: [
      {
        name: '线上指数',
        value: 12
      },
      {
        name: '线下指数',
        value: 34
      }
    ],
    onlineConsumeIndexPredict: [
      {
        name: '线上指数',
        value: 12
      },
      {
        name: '线下指数',
        value: 34
      }
    ],
    secondTypeConsumeIndex: [
      {
        big: '酒类',
        children: [
          {
            name: '茅台',
            value: 100
          },
          {
            name: '五粮液',
            value: 19
          },
          {
            name: '洋河',
            value: 22
          },
          {
            name: '汾酒',
            value: 89
          },
          {
            name: '飞天',
            value: 50
          },
          {
            name: '二锅头',
            value: 11
          },
        ]
      },
      {
        big: '手机',
        children: [
          {
            name: '大米',
            value: 100
          },
          {
            name: '菊华',
            value: 99
          },
          {
            name: '三桑',
            value: 45
          },
          {
            name: '香蕉',
            value: 88
          },
        ]
      }
    ],
    firstTypePriceIndex: [
      {
        big: '酒类',
        children: [
          {
            name: '茅台',
            value: 100
          },
          {
            name: '五粮液',
            value: 19
          },
          {
            name: '洋河',
            value: 22
          },
          {
            name: '汾酒',
            value: 89
          },
          {
            name: '飞天',
            value: 50
          },
          {
            name: '二锅头',
            value: 11
          },
        ]
      },
      {
        big: '手机',
        children: [
          {
            name: '大米',
            value: 100
          },
          {
            name: '菊华',
            value: 99
          },
          {
            name: '三桑',
            value: 45
          },
          {
            name: '香蕉',
            value: 88
          },
        ]
      }
    ],
    firstTypeBrandIndex: [
      {
        big: '酒类',
        children: [
          {
            name: '茅台',
            value: 100
          },
          {
            name: '五粮液',
            value: 19
          },
          {
            name: '洋河',
            value: 22
          },
          {
            name: '汾酒',
            value: 89
          },
          {
            name: '飞天',
            value: 50
          },
          {
            name: '二锅头',
            value: 11
          },
        ]
      },
      {
        big: '手机',
        children: [
          {
            name: '大米',
            value: 100
          },
          {
            name: '菊华',
            value: 99
          },
          {
            name: '三桑',
            value: 45
          },
          {
            name: '香蕉',
            value: 88
          },
        ]
      }
    ],
  })
);
