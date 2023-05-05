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
      candidatePlaceVos: [
          {
              lng: 116.43661741374045,
              lat: 39.96945574065629,
              visitSum: 59,
              visitObj: 45,
              durationAvg: 20.12,
              road1len: 16.0,
              road2len: 68.0,
              road3len: 99.0,
              intersection: 15,
              freqMean: 1.8272744433421517,
              timeSegment: "12-15时",
              concaveHull: "POLYGON((116.43657486967123 39.968874199539115,116.43557503617724 39.96925043256118,116.43587696386486 39.96986009318208,116.43615155627576 39.97013643762653,116.43746797338925 39.96962210478,116.43743311791197 39.969172417147796,116.43673211057573 39.9689115020696,116.43657486967123 39.968874199539115))",
              chartData: {
                  durationDistribute: [
                      {
                        name: "[0,10)",
                        value: 0.0
                      },
                      {
                        name: "[10,20)",
                        value: 0.3050847457627119
                      },
                      {
                        name: "[20,30)",
                        value: 0.423728813559322
                      },
                      {
                        name: "[30,40)",
                        value: 0.13559322033898305
                      },
                      {
                        name: "[40,50)",
                        value:0.01694915254237288
                      },
                      {
                        name: "[50,60)",
                        value: 0.0
                      },
                      {
                        name: "[60, )",
                        value: 0.11864406779661017
                      }
                  ],
                  timeDistribute: [
                      {
                        name: "0-3时",
                        value: 0.1016949152542373
                      },
                      {
                        name: "3-6时",
                        value: 0.0847457627118644
                      },
                      {
                        name: "6-9时",
                        value:0.05084745762711865
                      },
                      {
                        name: "9-12时",
                        value: 0.0847457627118644
                      },
                      {
                        name:"12-15时",
                        value: 0.2711864406779661
                      },
                      {
                        name: "15-18时",
                        value: 0.1864406779661017
                      },
                      {
                        name: "18-21时",
                        value: 0.1016949152542373
                      },
                      {
                        name:"21-24时",
                        value: 0.11864406779661017
                      }
                  ],
                  freqDistribute: [
                      {
                        name: "[0,0.5)",
                        value: 0.0
                      },
                      {
                        name: "[0.5,1)",
                        value: 0.0
                      },
                      {
                        name: "[1.0,1.5)",
                        value: 0.2857142857142857
                      },
                      {
                        name: "[1.5,2.0)",
                        value: 0.2857142857142857
                      },
                      {
                        name: "[2.0,2.5)",
                        value: 0.2857142857142857
                      },
                      {
                        name: "[2.5,3.0)",
                        value: 0.14285714285714285
                      },
                      {
                        name: "[3, )",
                        value: 0.0
                      }
                  ],
                  poiDistribute: [
                      {
                        name: "邮局物流",
                        value: 0.5
                      },
                      {
                        name: "餐厅",
                        value: 0.5
                      }
                  ]
              }
          }
        ],
    placeNum: 1510,
    chartData: {
        visitSumDistribute: [
            {
              name: "[0,20)",
              value: 0.495364238410596
            },
            {
              name: "[20,50)",
              value: 0.3456953642384106
            },
            {
              name: "[50,100)",
              value: 0.11390728476821192
            },
            {
              name: "[100,200)",
              value: 0.03576158940397351
            },
            {
              name: "[200,500)",
              value: 0.007947019867549669
            },
            {
              name:"[500,1000)",
              value: 0.0013245033112582781
            },
            {
              name: "[1000, )",
              value: 0.0
            }
        ],
        freqMeanDistribute: [
            {
              name: "[0,0.5)",
              value: 0.0
            },
            {
              name: "[0.5,1)",
              value: 0.0
            },
            {
              name: "[1.0,1.5)",
              value: 0.3443708609271523
            },
            {
              name: "[1.5,2.0)",
              value: 0.495364238410596
            },
            {
              name: "[2.0,2.5)",
              value: 0.0847682119205298
            },
            {
              name:"[2.5,3.0)",
              value: 0.009271523178807948
            },
            {
              name: "[3, )",
              value: 0.06622516556291391
            }
        ],
        durationAvgDistribute: [
            {
              name: "[0,10)",
              value: 0.0
            },
            {
              name: "[10,20)",
              value: 0.017218543046357615
            },
            {
              name: "[20,30)",
              value: 0.280794701986755
            },
            {
              name: "[30,40)",
              value: 0.16158940397350993
            },
            {
              name: "[40,50)",
              value: 0.10596026490066225
            },
            {
              name: "[50,60)",
              value: 0.039735099337748346
            },
            {
              name: "[60, )",
              value: 0.39470198675496687
            }
        ],
        visitObjStatDistribute: [
            {
              name: "[0,20)",
              value: 0.7324503311258278
            },
            {
              name: "[20,50)",
              value: 0.18410596026490067
            },
            {
              name: "[50,100)",
              value: 0.05827814569536424
            },
            {
              name: "[100,200)",
              value: 0.022516556291390728
            },
            {
              name: "[200,500)",
              value: 0.0013245033112582781
            },
            {
              name:"[500,1000)",
              value: 0.0013245033112582781
            },
            {
              name: "[1000, )",
              value: 0.0
            }
        ],
        poiTypeDistribute: [
            {
              name: "住宅区",
              value: 0.06814814814814815
            },
            {
              name: "停车场",
              value: 0.29950617283950615
            },
            {
              name: "公共厕所",
              value: 0.06395061728395061
            },
            {
              name: "公园广场",
              value: 0.005679012345679012
            },
            {
              name: "加油站",
              value: 0.0014814814814814814
            },
            {
              name: "医院",
              value: 0.030864197530864196
            },
            {
              name: "地铁站",
              value: 0.012839506172839505
            },
            {
              name: "学校",
              value: 0.0508641975308642
            },
            {
              name: "宾馆酒店",
              value: 0.03530864197530864
            },
            {
              name: "超市商场",
              value: 0.020493827160493826
            },
            {
              name: "车辆管理",
              value: 9.876543209876543E-4
            },
            {
              name: "运动场馆",
              value:0.023950617283950617
            },
            {
              name: "邮局物流",
              value: 0.013827160493827161
            },
            {
              name: "银行",
              value: 0.016049382716049384
            },
            {
              name: "风景区",
              value: 0.007901234567901235
            },
            {
              name: "餐厅",
              value: 0.34814814814814815
            }
        ],
        timeSegDistribute: [
            {
              name: "0-3时",
              value: 0.09953984015500121
            },
            {
              name: "3-6时",
              value: 0.14866392185355615
            },
            {
              name: "6-9时",
              value: 0.10442399289577783
            },
            {
              name: "9-12时",
              value: 0.09796560910632114
            },
            {
              name: "12-15时",
              value: 0.16351820456930652
            },
            {
              name: "15-18时",
              value: 0.17320578025349156
            },
            {
              name: "18-21时",
              value: 0.10611931864051022
            },
            {
              name: "21-24时",
              value: 0.10656333252603536
            }
        ],
        road1lenDistribute: [
            {
              name: "[0,100)",
              value: 1.0
            },
            {
              name: "[100,500)",
              value: 0.0
            },
            {
              name: "[500,1000)",
              value: 0.0
            },
            {
              name: "[1000, )",
              value: 0.0
            }
        ],
        road2lenDistribute: [
            {
              name: "[0,100)",
              value: 0.7986754966887417
            },
            {
              name: "[100,500)",
              value: 0.20132450331125828
            },
            {
              name: "[500,1000)",
              value: 0.0
            },
            {
              name: "[1000, )",
              value: 0.0
            }
        ],
        road3lenDistribute: [
            {
              name: "[0,100)",
              value: 0.4781456953642384
            },
            {
              name: "[100,500)",
              value: 0.5218543046357615
            },
            {
              name: "[500,1000)",
              value:0.0
            },
            {
              name:"[1000, )",
              value: 0.0
            }
        ],
        intersectDistribute: [
            {
              name: "[0,3)",
              value: 0.0026490066225165563
            },
            {
              name: "[3,6)",
              value: 0.005298013245033113
            },
            {
              name: "[6,10)",
              value: 0.045033112582781455
            },
            {
              name: "[10, ]",
              value: 0.9470198675496688
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
