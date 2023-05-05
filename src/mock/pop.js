/* eslint-disable */
import Mock , { Random} from 'mockjs';
import { after, mergeOk } from './interceptor';

Mock.mock(/\/pop\/heatMap\/index/, {
  resultCode: 200,
  resultMsg: null,
  tid: 1585915582674,
  data: [
    { name: '居住', value: () => Random.integer(10, 100), industryId: null },
    { name: '工作', value: () => Random.integer(10, 100), industryId: null },
    { name: '到访', value: () => Random.integer(10, 100), industryId: null },
    { name: '综合', value: () => Random.integer(10, 100), industryId: null },
  ],
});

Mock.mock(/\/pop\/heatMap\//, {
  resultCode: 200,
  resultMsg: null,
  tid: 1586316275063,
  data: [
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2490234375,
      },
      index: 49.32,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27511596679688,
      },
      index: 81.89,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22293090820312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27099609375,
      },
      index: 34.78,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2764892578125,
      },
      index: 87.58,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26275634765625,
      },
      index: 62.62,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2874755859375,
      },
      index: 85.06,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27236938476562,
      },
      index: 33.6,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.23666381835938,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.28472900390625,
      },
      index: 88.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26412963867188,
      },
      index: 48.37,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25039672851562,
      },
      index: 37.15,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27236938476562,
      },
      index: 40.04,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26687622070312,
      },
      index: 32.54,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25314331054688,
      },
      index: 84.09,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25863647460938,
      },
      index: 71.93,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29159545898438,
      },
      index: 90.6,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26962280273438,
      },
      index: 37.26,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2490234375,
      },
      index: 33.19,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25863647460938,
      },
      index: 28.98,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25177001953125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2490234375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2874755859375,
      },
      index: 81.06,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.23391723632812,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27511596679688,
      },
      index: 85.23,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.260009765625,
      },
      index: 57.35,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.238037109375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27236938476562,
      },
      index: 38.14,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22293090820312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27374267578125,
      },
      index: 64.44,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27374267578125,
      },
      index: 91.62,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26138305664062,
      },
      index: 34.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.24627685546875,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.28060913085938,
      },
      index: 88.68,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25863647460938,
      },
      index: 59.07,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.28335571289062,
      },
      index: 90.78,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27374267578125,
      },
      index: 88.56,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2490234375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29159545898438,
      },
      index: 71.89,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25588989257812,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.24490356445312,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22979736328125,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26962280273438,
      },
      index: 38.59,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25177001953125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27236938476562,
      },
      index: 47.88,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.28335571289062,
      },
      index: 88.28,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.23391723632812,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.24215698242188,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25177001953125,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27099609375,
      },
      index: 46.63,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2325439453125,
      },
      index: 8.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29159545898438,
      },
      index: 89.2,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27786254882812,
      },
      index: 85.27,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29296875,
      },
      index: 91.76,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27374267578125,
      },
      index: 45.28,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26412963867188,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2655029296875,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.24627685546875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26275634765625,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.28610229492188,
      },
      index: 32.03,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22293090820312,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25177001953125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25314331054688,
      },
      index: 33.3,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2435302734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26687622070312,
      },
      index: 48.28,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.23941040039062,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22293090820312,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26275634765625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.28610229492188,
      },
      index: 81.16,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27374267578125,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.28884887695312,
      },
      index: 86.38,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2435302734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.24215698242188,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25039672851562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26687622070312,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29296875,
      },
      index: 57.99,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25863647460938,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25588989257812,
      },
      index: 70.48,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.24215698242188,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27511596679688,
      },
      index: 84.22,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25588989257812,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26412963867188,
      },
      index: 50.59,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29159545898438,
      },
      index: 90.38,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27236938476562,
      },
      index: 66.7,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.24627685546875,
      },
      index: 70.74,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.24078369140625,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29296875,
      },
      index: 91.07,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26962280273438,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2655029296875,
      },
      index: 84.99,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.281982421875,
      },
      index: 90.6,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25726318359375,
      },
      index: 32.03,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25726318359375,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26687622070312,
      },
      index: 24.31,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27236938476562,
      },
      index: 83.93,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26275634765625,
      },
      index: 38.12,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25863647460938,
      },
      index: 83.13,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2655029296875,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2435302734375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.23529052734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26138305664062,
      },
      index: 85.64,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29022216796875,
      },
      index: 39.71,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.28884887695312,
      },
      index: 87.18,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25039672851562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.260009765625,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29296875,
      },
      index: 86.64,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27374267578125,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27374267578125,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.24765014648438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22430419921875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.24765014648438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.24078369140625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2764892578125,
      },
      index: 85.38,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25588989257812,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2655029296875,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25314331054688,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.23529052734375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25726318359375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.23117065429688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.24627685546875,
      },
      index: 22.99,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25314331054688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2490234375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.28884887695312,
      },
      index: 87.3,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26412963867188,
      },
      index: 87.6,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25177001953125,
      },
      index: 42.37,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22293090820312,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.24490356445312,
      },
      index: 43.98,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22705078125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25039672851562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27786254882812,
      },
      index: 85.81,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2435302734375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.260009765625,
      },
      index: 39.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27923583984375,
      },
      index: 75.02,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.23391723632812,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27236938476562,
      },
      index: 33.6,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25039672851562,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.23666381835938,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.238037109375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29159545898438,
      },
      index: 49.04,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22979736328125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.28472900390625,
      },
      index: 87.62,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2545166015625,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27923583984375,
      },
      index: 74.82,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2435302734375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.281982421875,
      },
      index: 87.71,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2764892578125,
      },
      index: 79.42,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.23529052734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27923583984375,
      },
      index: 66.47,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.28060913085938,
      },
      index: 92.69,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.23941040039062,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27236938476562,
      },
      index: 39.71,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26412963867188,
      },
      index: 29.06,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.28472900390625,
      },
      index: 91.35,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.23117065429688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.28472900390625,
      },
      index: 84.35,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27099609375,
      },
      index: 57.49,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.28472900390625,
      },
      index: 89.87,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22567749023438,
      },
      index: 80.68,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.281982421875,
      },
      index: 90.7,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27923583984375,
      },
      index: 91.31,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29296875,
      },
      index: 91.15,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25588989257812,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27374267578125,
      },
      index: 79.58,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.238037109375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2490234375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.28884887695312,
      },
      index: 86.67,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2435302734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.28610229492188,
      },
      index: 82.87,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2545166015625,
      },
      index: 61.92,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.23666381835938,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.24765014648438,
      },
      index: 50.66,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2545166015625,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27923583984375,
      },
      index: 86.1,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26824951171875,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29296875,
      },
      index: 89.1,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26138305664062,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26962280273438,
      },
      index: 77.78,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2874755859375,
      },
      index: 68.37,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.28610229492188,
      },
      index: 76.19,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2435302734375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.28060913085938,
      },
      index: 54.98,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.24078369140625,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.23666381835938,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25314331054688,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27374267578125,
      },
      index: 84.29,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29159545898438,
      },
      index: 80.19,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.28884887695312,
      },
      index: 65.76,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.23117065429688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2764892578125,
      },
      index: 66.63,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25177001953125,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.28610229492188,
      },
      index: 86.05,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25726318359375,
      },
      index: 82.79,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27099609375,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22293090820312,
      },
      index: 47.17,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.23666381835938,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22842407226562,
      },
      index: 28.41,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2490234375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.260009765625,
      },
      index: 84.38,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26962280273438,
      },
      index: 86.2,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.238037109375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25314331054688,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.24627685546875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26138305664062,
      },
      index: 16.67,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2764892578125,
      },
      index: 92.43,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29022216796875,
      },
      index: 89.77,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22430419921875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.23117065429688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2874755859375,
      },
      index: 91.02,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29159545898438,
      },
      index: 87.47,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.28060913085938,
      },
      index: 88.95,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25726318359375,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2435302734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.28884887695312,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.28610229492188,
      },
      index: 82.98,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22293090820312,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22293090820312,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.28060913085938,
      },
      index: 87.96,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27511596679688,
      },
      index: 80.2,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.23666381835938,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.24490356445312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.24627685546875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2545166015625,
      },
      index: 19.98,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.28060913085938,
      },
      index: 77.53,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.24490356445312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26138305664062,
      },
      index: 84.74,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22293090820312,
      },
      index: 36.89,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2874755859375,
      },
      index: 84.69,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25588989257812,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27236938476562,
      },
      index: 64.67,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.28060913085938,
      },
      index: 92.87,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26412963867188,
      },
      index: 87.42,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22705078125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.28610229492188,
      },
      index: 89.28,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26275634765625,
      },
      index: 44.3,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.28335571289062,
      },
      index: 86.81,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.28472900390625,
      },
      index: 92.58,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27374267578125,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.260009765625,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2435302734375,
      },
      index: 28.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2435302734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26962280273438,
      },
      index: 26.78,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.23666381835938,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29159545898438,
      },
      index: 91.72,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25177001953125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26275634765625,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27923583984375,
      },
      index: 91.92,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26138305664062,
      },
      index: 30.36,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.24765014648438,
      },
      index: 24.97,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25863647460938,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25039672851562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.24490356445312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27511596679688,
      },
      index: 26.52,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27374267578125,
      },
      index: 64.81,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.28335571289062,
      },
      index: 86.4,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26687622070312,
      },
      index: 87.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2490234375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27511596679688,
      },
      index: 89.75,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.23941040039062,
      },
      index: 24.97,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2435302734375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26275634765625,
      },
      index: 48.66,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.28884887695312,
      },
      index: 86.9,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.281982421875,
      },
      index: 92.35,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.238037109375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2874755859375,
      },
      index: 75.31,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25039672851562,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2874755859375,
      },
      index: 85.96,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22430419921875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.28060913085938,
      },
      index: 90.88,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.24490356445312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29296875,
      },
      index: 81.93,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.23529052734375,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25726318359375,
      },
      index: 74.22,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.238037109375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22567749023438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2874755859375,
      },
      index: 91.64,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25588989257812,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26138305664062,
      },
      index: 51.66,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2655029296875,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.24627685546875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29296875,
      },
      index: 84.72,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.28610229492188,
      },
      index: 87.85,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.24490356445312,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27786254882812,
      },
      index: 55.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26412963867188,
      },
      index: 55.35,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22842407226562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26962280273438,
      },
      index: 67.05,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25863647460938,
      },
      index: 30.01,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26962280273438,
      },
      index: 33.37,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29159545898438,
      },
      index: 88.45,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27236938476562,
      },
      index: 48.9,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.23666381835938,
      },
      index: 67.22,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27511596679688,
      },
      index: 70.4,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22567749023438,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.28060913085938,
      },
      index: 92.82,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.28060913085938,
      },
      index: 82.86,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27236938476562,
      },
      index: 16.67,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.28610229492188,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.32180786132812,
      },
      index: 88.59,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31768798828125,
      },
      index: 81.16,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29708862304688,
      },
      index: 84.21,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.32730102539062,
      },
      index: 88.5,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.32455444335938,
      },
      index: 83.4,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.32180786132812,
      },
      index: 82.26,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.34103393554688,
      },
      index: 29.35,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.3314208984375,
      },
      index: 73.93,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.30120849609375,
      },
      index: 85.69,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33279418945312,
      },
      index: 62.9,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33554077148438,
      },
      index: 41.93,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.3314208984375,
      },
      index: 75.58,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31082153320312,
      },
      index: 84.31,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31356811523438,
      },
      index: 78.34,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.34103393554688,
      },
      index: 31.13,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.3369140625,
      },
      index: 37.23,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31906127929688,
      },
      index: 82.13,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31768798828125,
      },
      index: 62.06,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.32730102539062,
      },
      index: 79.14,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33966064453125,
      },
      index: 29.3,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33554077148438,
      },
      index: 36.21,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29434204101562,
      },
      index: 92.45,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.32318115234375,
      },
      index: 58.8,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.3314208984375,
      },
      index: 23.65,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.32318115234375,
      },
      index: 71.2,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2984619140625,
      },
      index: 90.3,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.30258178710938,
      },
      index: 74.67,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29571533203125,
      },
      index: 88.83,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31356811523438,
      },
      index: 59.41,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.3314208984375,
      },
      index: 49.97,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33554077148438,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.30532836914062,
      },
      index: 56.67,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.30532836914062,
      },
      index: 61.08,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31631469726562,
      },
      index: 69.36,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33966064453125,
      },
      index: 26.32,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31768798828125,
      },
      index: 41.77,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.303955078125,
      },
      index: 71.18,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31082153320312,
      },
      index: 57.65,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29434204101562,
      },
      index: 91.93,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.3094482421875,
      },
      index: 64.95,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33828735351562,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.3204345703125,
      },
      index: 27.79,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29983520507812,
      },
      index: 90.46,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31356811523438,
      },
      index: 55.77,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.3369140625,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33554077148438,
      },
      index: 28.82,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.325927734375,
      },
      index: 67.86,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31219482421875,
      },
      index: 63.27,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29708862304688,
      },
      index: 80.91,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33004760742188,
      },
      index: 46.23,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31631469726562,
      },
      index: 35.02,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31906127929688,
      },
      index: 68.8,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.34103393554688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33554077148438,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29571533203125,
      },
      index: 80.91,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.3314208984375,
      },
      index: 35.19,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29571533203125,
      },
      index: 89.18,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33828735351562,
      },
      index: 24.31,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33416748046875,
      },
      index: 21.27,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.325927734375,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31906127929688,
      },
      index: 60.69,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31356811523438,
      },
      index: 60.77,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31219482421875,
      },
      index: 88.23,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33966064453125,
      },
      index: 40.32,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.32455444335938,
      },
      index: 72.22,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.32180786132812,
      },
      index: 77.38,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29434204101562,
      },
      index: 85.04,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.3314208984375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.30807495117188,
      },
      index: 87.09,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33416748046875,
      },
      index: 33.44,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33279418945312,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29708862304688,
      },
      index: 90.49,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.3094482421875,
      },
      index: 90.24,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.32730102539062,
      },
      index: 36.13,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29708862304688,
      },
      index: 89.78,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31906127929688,
      },
      index: 85.92,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.30532836914062,
      },
      index: 85.59,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.3204345703125,
      },
      index: 79.06,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.30258178710938,
      },
      index: 57.3,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31356811523438,
      },
      index: 62.09,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.3369140625,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31906127929688,
      },
      index: 59.65,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29571533203125,
      },
      index: 91.74,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29708862304688,
      },
      index: 90.79,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.3314208984375,
      },
      index: 48.78,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31631469726562,
      },
      index: 77.36,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29571533203125,
      },
      index: 90.51,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29708862304688,
      },
      index: 86.07,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.30532836914062,
      },
      index: 86.34,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.32730102539062,
      },
      index: 50.28,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31906127929688,
      },
      index: 46.49,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.32867431640625,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29571533203125,
      },
      index: 91.1,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.32455444335938,
      },
      index: 90.29,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.30807495117188,
      },
      index: 76.84,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.30532836914062,
      },
      index: 84.37,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.30258178710938,
      },
      index: 80.72,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31631469726562,
      },
      index: 35.99,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31768798828125,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29571533203125,
      },
      index: 82.59,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.3094482421875,
      },
      index: 81.1,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.325927734375,
      },
      index: 52.6,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.32730102539062,
      },
      index: 75.75,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33004760742188,
      },
      index: 29.3,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31219482421875,
      },
      index: 91.91,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33828735351562,
      },
      index: 33.3,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.30120849609375,
      },
      index: 77.21,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31219482421875,
      },
      index: 51.67,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31768798828125,
      },
      index: 39.89,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.3369140625,
      },
      index: 28.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33828735351562,
      },
      index: 34.93,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.30120849609375,
      },
      index: 73.52,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31494140625,
      },
      index: 90.91,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.30120849609375,
      },
      index: 91.86,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29983520507812,
      },
      index: 73.56,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.3369140625,
      },
      index: 27.28,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.3314208984375,
      },
      index: 43.3,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.3369140625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31082153320312,
      },
      index: 81.46,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.32318115234375,
      },
      index: 30.76,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.303955078125,
      },
      index: 86.61,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33554077148438,
      },
      index: 38.59,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2984619140625,
      },
      index: 75.54,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.303955078125,
      },
      index: 66.21,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33554077148438,
      },
      index: 28.84,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33554077148438,
      },
      index: 30.11,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.3204345703125,
      },
      index: 59.26,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.30258178710938,
      },
      index: 83.86,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31768798828125,
      },
      index: 68.87,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31768798828125,
      },
      index: 28.74,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31356811523438,
      },
      index: 81.73,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.32180786132812,
      },
      index: 74.81,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.3369140625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.32455444335938,
      },
      index: 27.03,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.3094482421875,
      },
      index: 68.27,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.32318115234375,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.3204345703125,
      },
      index: 70.18,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33416748046875,
      },
      index: 46.44,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33004760742188,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29571533203125,
      },
      index: 78.39,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31631469726562,
      },
      index: 71.68,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2984619140625,
      },
      index: 89.07,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31906127929688,
      },
      index: 53.37,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.30258178710938,
      },
      index: 61.82,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.32318115234375,
      },
      index: 37.07,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31494140625,
      },
      index: 31.86,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31082153320312,
      },
      index: 67.77,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.32455444335938,
      },
      index: 69.55,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29983520507812,
      },
      index: 81.25,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31494140625,
      },
      index: 78.22,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33828735351562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.32730102539062,
      },
      index: 47.07,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33416748046875,
      },
      index: 26.02,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.34103393554688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.32867431640625,
      },
      index: 43.35,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29708862304688,
      },
      index: 87.9,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.30807495117188,
      },
      index: 67.62,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2984619140625,
      },
      index: 84.14,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31906127929688,
      },
      index: 54.72,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.30807495117188,
      },
      index: 83.73,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.32318115234375,
      },
      index: 28.3,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.3094482421875,
      },
      index: 64.04,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.303955078125,
      },
      index: 59.4,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.325927734375,
      },
      index: 71.52,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31494140625,
      },
      index: 33.03,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.32867431640625,
      },
      index: 62.85,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29434204101562,
      },
      index: 89.37,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.30670166015625,
      },
      index: 63.14,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.30120849609375,
      },
      index: 93.12,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.32180786132812,
      },
      index: 65.53,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33416748046875,
      },
      index: 40.51,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.303955078125,
      },
      index: 81.16,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.30532836914062,
      },
      index: 83.49,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29983520507812,
      },
      index: 82.9,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31082153320312,
      },
      index: 86.24,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.32730102539062,
      },
      index: 67.11,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.325927734375,
      },
      index: 69.08,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.32455444335938,
      },
      index: 64.9,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.30258178710938,
      },
      index: 91.97,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.34103393554688,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.30670166015625,
      },
      index: 83.55,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.30532836914062,
      },
      index: 46.42,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.30670166015625,
      },
      index: 69.98,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31631469726562,
      },
      index: 61.19,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31082153320312,
      },
      index: 65.93,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29708862304688,
      },
      index: 91.62,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.3204345703125,
      },
      index: 65.75,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.3369140625,
      },
      index: 34.65,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.3369140625,
      },
      index: 44.86,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.30670166015625,
      },
      index: 83.25,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.30258178710938,
      },
      index: 81.68,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31356811523438,
      },
      index: 86.82,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.30258178710938,
      },
      index: 89.77,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.30258178710938,
      },
      index: 74.45,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.3204345703125,
      },
      index: 61.11,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33279418945312,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31906127929688,
      },
      index: 58.17,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.3369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33554077148438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.34103393554688,
      },
      index: 31.65,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33828735351562,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.32730102539062,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31219482421875,
      },
      index: 85.64,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31082153320312,
      },
      index: 84.05,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31631469726562,
      },
      index: 57.76,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.32180786132812,
      },
      index: 61.3,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29708862304688,
      },
      index: 89.59,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29434204101562,
      },
      index: 83.65,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31631469726562,
      },
      index: 51.07,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31906127929688,
      },
      index: 39.81,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33279418945312,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31768798828125,
      },
      index: 50.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29708862304688,
      },
      index: 88.71,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29983520507812,
      },
      index: 92.22,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33554077148438,
      },
      index: 47.79,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.3094482421875,
      },
      index: 67.04,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31631469726562,
      },
      index: 39.7,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.32318115234375,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.30120849609375,
      },
      index: 84.52,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29434204101562,
      },
      index: 82.61,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31082153320312,
      },
      index: 89.89,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31906127929688,
      },
      index: 79.57,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29983520507812,
      },
      index: 84.54,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31906127929688,
      },
      index: 42.28,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.30120849609375,
      },
      index: 74.48,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29434204101562,
      },
      index: 83.92,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.32455444335938,
      },
      index: 70.57,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.30532836914062,
      },
      index: 85.75,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.32867431640625,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2655029296875,
      },
      index: 33.68,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27099609375,
      },
      index: 33.74,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26412963867188,
      },
      index: 56.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.28335571289062,
      },
      index: 85.07,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26275634765625,
      },
      index: 38.61,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2764892578125,
      },
      index: 85.44,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29296875,
      },
      index: 90.76,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2545166015625,
      },
      index: 90.29,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2655029296875,
      },
      index: 64.03,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.28610229492188,
      },
      index: 87.15,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.281982421875,
      },
      index: 87.74,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27374267578125,
      },
      index: 35.75,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2545166015625,
      },
      index: 82.68,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27923583984375,
      },
      index: 86.39,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25314331054688,
      },
      index: 78.44,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.24765014648438,
      },
      index: 28.59,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.28060913085938,
      },
      index: 91.93,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.24215698242188,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25039672851562,
      },
      index: 61.76,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27374267578125,
      },
      index: 60.49,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26138305664062,
      },
      index: 66.79,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27786254882812,
      },
      index: 90.84,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22430419921875,
      },
      index: 24.31,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27099609375,
      },
      index: 35.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25177001953125,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25039672851562,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29022216796875,
      },
      index: 68.68,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.28884887695312,
      },
      index: 67.85,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.28884887695312,
      },
      index: 93.27,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26824951171875,
      },
      index: 28.74,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26275634765625,
      },
      index: 86.28,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25039672851562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.281982421875,
      },
      index: 88.93,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26412963867188,
      },
      index: 65.22,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26275634765625,
      },
      index: 40.21,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27236938476562,
      },
      index: 65.71,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.23117065429688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29159545898438,
      },
      index: 81.45,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2874755859375,
      },
      index: 91.95,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26687622070312,
      },
      index: 19.98,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26138305664062,
      },
      index: 39.21,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.24490356445312,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22430419921875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2874755859375,
      },
      index: 93.14,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.28335571289062,
      },
      index: 91.44,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22842407226562,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25039672851562,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27786254882812,
      },
      index: 60.24,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2490234375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26687622070312,
      },
      index: 74.05,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26824951171875,
      },
      index: 40.44,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2490234375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.23941040039062,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25726318359375,
      },
      index: 34.86,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.281982421875,
      },
      index: 87.57,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.24215698242188,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27374267578125,
      },
      index: 91.09,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.24765014648438,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.24078369140625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22567749023438,
      },
      index: 23.65,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27786254882812,
      },
      index: 88.45,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29022216796875,
      },
      index: 86.57,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26687622070312,
      },
      index: 32.05,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.28060913085938,
      },
      index: 91.94,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26687622070312,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2655029296875,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2435302734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2655029296875,
      },
      index: 86.82,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29022216796875,
      },
      index: 84.81,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26412963867188,
      },
      index: 25.51,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29296875,
      },
      index: 79.97,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26412963867188,
      },
      index: 82.65,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2545166015625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2655029296875,
      },
      index: 45.08,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27923583984375,
      },
      index: 59.72,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.28060913085938,
      },
      index: 91.54,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.24078369140625,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25863647460938,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2490234375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.23666381835938,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.24627685546875,
      },
      index: 26.98,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25039672851562,
      },
      index: 49.4,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22979736328125,
      },
      index: 33.84,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26962280273438,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.28884887695312,
      },
      index: 91.96,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26687622070312,
      },
      index: 36.67,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.260009765625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29296875,
      },
      index: 85.94,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26687622070312,
      },
      index: 39.48,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26275634765625,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.281982421875,
      },
      index: 90.11,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.28884887695312,
      },
      index: 78.34,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2764892578125,
      },
      index: 87.99,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27786254882812,
      },
      index: 92.54,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.24627685546875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27099609375,
      },
      index: 28.26,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26824951171875,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25588989257812,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27923583984375,
      },
      index: 91.1,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.260009765625,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2874755859375,
      },
      index: 88.53,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26824951171875,
      },
      index: 85.36,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22567749023438,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.28884887695312,
      },
      index: 87.5,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27374267578125,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.28610229492188,
      },
      index: 91.43,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22430419921875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.23529052734375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.260009765625,
      },
      index: 70.89,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26412963867188,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26412963867188,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27236938476562,
      },
      index: 40.39,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2764892578125,
      },
      index: 69.51,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29296875,
      },
      index: 80.47,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.28335571289062,
      },
      index: 90.52,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2874755859375,
      },
      index: 90.97,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26138305664062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26412963867188,
      },
      index: 84.97,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26138305664062,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.28472900390625,
      },
      index: 90.3,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2545166015625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26275634765625,
      },
      index: 81.56,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22705078125,
      },
      index: 34.86,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27236938476562,
      },
      index: 77.36,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26138305664062,
      },
      index: 75.73,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2490234375,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.28335571289062,
      },
      index: 91.44,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2874755859375,
      },
      index: 83.86,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27099609375,
      },
      index: 66.27,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25314331054688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22430419921875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26962280273438,
      },
      index: 38.84,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27923583984375,
      },
      index: 88.79,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2874755859375,
      },
      index: 81.74,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.24765014648438,
      },
      index: 31.13,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27236938476562,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26138305664062,
      },
      index: 77.48,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27786254882812,
      },
      index: 90.35,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22705078125,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25863647460938,
      },
      index: 45.87,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25863647460938,
      },
      index: 81.04,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.281982421875,
      },
      index: 86.31,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27511596679688,
      },
      index: 71.58,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.23666381835938,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25863647460938,
      },
      index: 27.54,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22842407226562,
      },
      index: 39.97,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27923583984375,
      },
      index: 93.27,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27923583984375,
      },
      index: 88.14,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.260009765625,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27374267578125,
      },
      index: 73.95,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29296875,
      },
      index: 80.21,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.28610229492188,
      },
      index: 90.63,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2435302734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26138305664062,
      },
      index: 86.04,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.24490356445312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29022216796875,
      },
      index: 88.92,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27099609375,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.28060913085938,
      },
      index: 78.32,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.28610229492188,
      },
      index: 88.46,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26412963867188,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26275634765625,
      },
      index: 17.99,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25863647460938,
      },
      index: 81.31,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2874755859375,
      },
      index: 83.86,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2764892578125,
      },
      index: 34.22,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.28060913085938,
      },
      index: 92.12,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2435302734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26275634765625,
      },
      index: 35.37,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.238037109375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.28610229492188,
      },
      index: 86.81,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2545166015625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2490234375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.24765014648438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27511596679688,
      },
      index: 68.09,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27099609375,
      },
      index: 80.32,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26412963867188,
      },
      index: 81.36,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22705078125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.24490356445312,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22979736328125,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2545166015625,
      },
      index: 82.29,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22705078125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22979736328125,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29159545898438,
      },
      index: 71.29,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27236938476562,
      },
      index: 85.13,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.24490356445312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22979736328125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27511596679688,
      },
      index: 66.67,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25177001953125,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.24215698242188,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.24490356445312,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26687622070312,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25863647460938,
      },
      index: 67.97,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26138305664062,
      },
      index: 46.98,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26962280273438,
      },
      index: 63.84,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.23666381835938,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.24765014648438,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27099609375,
      },
      index: 86.52,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26138305664062,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.23666381835938,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25863647460938,
      },
      index: 42.04,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25314331054688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29022216796875,
      },
      index: 89.6,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.24215698242188,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2655029296875,
      },
      index: 40.4,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25039672851562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26412963867188,
      },
      index: 89.56,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25726318359375,
      },
      index: 86.37,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25863647460938,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.28610229492188,
      },
      index: 91.42,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.24078369140625,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2655029296875,
      },
      index: 34.16,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.24627685546875,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22567749023438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2490234375,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.24490356445312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27236938476562,
      },
      index: 53.21,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29296875,
      },
      index: 85.76,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27099609375,
      },
      index: 26.91,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.28335571289062,
      },
      index: 91.05,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.260009765625,
      },
      index: 63.76,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.260009765625,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.281982421875,
      },
      index: 72.55,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29159545898438,
      },
      index: 85.1,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.24078369140625,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26687622070312,
      },
      index: 79.61,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26412963867188,
      },
      index: 47.12,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2490234375,
      },
      index: 38.3,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.23666381835938,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2874755859375,
      },
      index: 81.59,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22293090820312,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22705078125,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.28472900390625,
      },
      index: 87.1,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26275634765625,
      },
      index: 83.44,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22979736328125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2764892578125,
      },
      index: 33.98,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27786254882812,
      },
      index: 90.71,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.281982421875,
      },
      index: 90.56,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26687622070312,
      },
      index: 36.68,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25314331054688,
      },
      index: 19.98,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26275634765625,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.28610229492188,
      },
      index: 91.21,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22430419921875,
      },
      index: 70.34,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26824951171875,
      },
      index: 33.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27923583984375,
      },
      index: 65.62,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.260009765625,
      },
      index: 47.3,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29296875,
      },
      index: 88.17,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25039672851562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.24765014648438,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27374267578125,
      },
      index: 58.25,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2435302734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2435302734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.28884887695312,
      },
      index: 90.45,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26275634765625,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.23391723632812,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.28335571289062,
      },
      index: 94.09,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25177001953125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25863647460938,
      },
      index: 41.69,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25726318359375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.24627685546875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.28060913085938,
      },
      index: 83.31,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25314331054688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.23666381835938,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.23941040039062,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.28610229492188,
      },
      index: 91.4,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22842407226562,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27099609375,
      },
      index: 33.7,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.28884887695312,
      },
      index: 86.85,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26275634765625,
      },
      index: 72.21,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.260009765625,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.23117065429688,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.28335571289062,
      },
      index: 91.34,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29296875,
      },
      index: 82.36,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.24627685546875,
      },
      index: 61.09,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2545166015625,
      },
      index: 32.28,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.24627685546875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22430419921875,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2874755859375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25314331054688,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.281982421875,
      },
      index: 91.78,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.30807495117188,
      },
      index: 86.86,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31219482421875,
      },
      index: 74.75,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31494140625,
      },
      index: 77.77,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.32730102539062,
      },
      index: 83.89,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29708862304688,
      },
      index: 82.2,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31631469726562,
      },
      index: 81.18,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.30670166015625,
      },
      index: 85.77,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31768798828125,
      },
      index: 84.39,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.32867431640625,
      },
      index: 87.84,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.30120849609375,
      },
      index: 83.63,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33004760742188,
      },
      index: 81.72,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31631469726562,
      },
      index: 81.13,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31494140625,
      },
      index: 84.4,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31494140625,
      },
      index: 77.58,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.34103393554688,
      },
      index: 33.49,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.3204345703125,
      },
      index: 83.13,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33966064453125,
      },
      index: 36.75,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.32318115234375,
      },
      index: 84.4,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.30532836914062,
      },
      index: 86.1,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.32867431640625,
      },
      index: 78.54,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33004760742188,
      },
      index: 87.32,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29434204101562,
      },
      index: 86.12,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.3094482421875,
      },
      index: 81.64,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31082153320312,
      },
      index: 82.86,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33828735351562,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29571533203125,
      },
      index: 84.51,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.32455444335938,
      },
      index: 82.14,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.34103393554688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31768798828125,
      },
      index: 48.07,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.30120849609375,
      },
      index: 84.99,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.32867431640625,
      },
      index: 43.22,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.3094482421875,
      },
      index: 86.12,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.3204345703125,
      },
      index: 39.4,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33004760742188,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.30807495117188,
      },
      index: 81.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33004760742188,
      },
      index: 39.21,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.303955078125,
      },
      index: 67.31,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29571533203125,
      },
      index: 91.54,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31082153320312,
      },
      index: 49.3,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31356811523438,
      },
      index: 82.79,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.303955078125,
      },
      index: 89.32,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31219482421875,
      },
      index: 88.13,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.30670166015625,
      },
      index: 83.75,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31356811523438,
      },
      index: 53.91,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31906127929688,
      },
      index: 65.78,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33279418945312,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.30670166015625,
      },
      index: 66.1,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31906127929688,
      },
      index: 87.13,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33416748046875,
      },
      index: 52.39,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.3094482421875,
      },
      index: 62.23,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.30670166015625,
      },
      index: 85.02,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.3204345703125,
      },
      index: 32.03,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33554077148438,
      },
      index: 52.77,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.30670166015625,
      },
      index: 69.84,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31219482421875,
      },
      index: 58.15,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29434204101562,
      },
      index: 91.71,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31631469726562,
      },
      index: 31.91,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.30532836914062,
      },
      index: 61.9,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.32318115234375,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33416748046875,
      },
      index: 24.54,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.32867431640625,
      },
      index: 80.64,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29708862304688,
      },
      index: 87.8,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.3314208984375,
      },
      index: 33.59,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.3369140625,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.30670166015625,
      },
      index: 65.54,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.32180786132812,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31631469726562,
      },
      index: 44.94,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33004760742188,
      },
      index: 55.05,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33279418945312,
      },
      index: 36.67,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31631469726562,
      },
      index: 74.28,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.30532836914062,
      },
      index: 86.26,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.303955078125,
      },
      index: 87.12,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.3369140625,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.30258178710938,
      },
      index: 88.85,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29571533203125,
      },
      index: 91.56,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31356811523438,
      },
      index: 80.83,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33966064453125,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33554077148438,
      },
      index: 47.77,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31631469726562,
      },
      index: 42.94,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29571533203125,
      },
      index: 89.91,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33554077148438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31494140625,
      },
      index: 79.28,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29983520507812,
      },
      index: 91.24,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33966064453125,
      },
      index: 29.93,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33828735351562,
      },
      index: 34.35,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33966064453125,
      },
      index: 34.46,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31631469726562,
      },
      index: 35.89,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.32730102539062,
      },
      index: 62.87,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.30670166015625,
      },
      index: 86.17,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31356811523438,
      },
      index: 82.8,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33554077148438,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31219482421875,
      },
      index: 61.1,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.3204345703125,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.32318115234375,
      },
      index: 60.12,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33966064453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.32318115234375,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33966064453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29983520507812,
      },
      index: 91.34,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33416748046875,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33279418945312,
      },
      index: 41.27,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33416748046875,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.30670166015625,
      },
      index: 77.09,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29708862304688,
      },
      index: 88.73,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31906127929688,
      },
      index: 33.05,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.32318115234375,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.30258178710938,
      },
      index: 90.69,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33554077148438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.325927734375,
      },
      index: 56.52,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31768798828125,
      },
      index: 66.53,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29983520507812,
      },
      index: 91.14,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29708862304688,
      },
      index: 91.36,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2984619140625,
      },
      index: 86.42,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31219482421875,
      },
      index: 72.46,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31356811523438,
      },
      index: 27.53,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.34103393554688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33004760742188,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.32455444335938,
      },
      index: 70.91,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29434204101562,
      },
      index: 90.59,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31631469726562,
      },
      index: 52.14,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.34103393554688,
      },
      index: 29.65,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2984619140625,
      },
      index: 85.16,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.325927734375,
      },
      index: 78.25,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.30258178710938,
      },
      index: 90.25,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31356811523438,
      },
      index: 44.37,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31906127929688,
      },
      index: 69.79,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.32455444335938,
      },
      index: 27.28,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2984619140625,
      },
      index: 89.34,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33554077148438,
      },
      index: 18.65,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33554077148438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31494140625,
      },
      index: 38.68,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.3204345703125,
      },
      index: 70.74,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.32730102539062,
      },
      index: 33.2,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.30258178710938,
      },
      index: 90.43,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33279418945312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.32180786132812,
      },
      index: 34.54,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.325927734375,
      },
      index: 32.28,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.30807495117188,
      },
      index: 54.83,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.3094482421875,
      },
      index: 78.03,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2984619140625,
      },
      index: 88.47,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33004760742188,
      },
      index: 51.04,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33828735351562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29434204101562,
      },
      index: 88.34,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31768798828125,
      },
      index: 83.41,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29983520507812,
      },
      index: 72.4,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33416748046875,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31494140625,
      },
      index: 76.82,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.32455444335938,
      },
      index: 74.77,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29708862304688,
      },
      index: 92.31,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31082153320312,
      },
      index: 81.09,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31768798828125,
      },
      index: 64.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.30258178710938,
      },
      index: 83.09,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.3204345703125,
      },
      index: 56.68,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.30807495117188,
      },
      index: 77.74,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.325927734375,
      },
      index: 67.7,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.30120849609375,
      },
      index: 78.69,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.325927734375,
      },
      index: 76.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.3204345703125,
      },
      index: 33.74,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29434204101562,
      },
      index: 79.2,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.30670166015625,
      },
      index: 90.3,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29434204101562,
      },
      index: 86.3,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.32318115234375,
      },
      index: 75.92,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.32867431640625,
      },
      index: 37.87,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.3369140625,
      },
      index: 31.32,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.30807495117188,
      },
      index: 88.82,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.303955078125,
      },
      index: 74.05,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31906127929688,
      },
      index: 22.28,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.303955078125,
      },
      index: 73.07,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.3314208984375,
      },
      index: 24.31,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.3314208984375,
      },
      index: 45.51,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.32867431640625,
      },
      index: 59.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29571533203125,
      },
      index: 90.39,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.34103393554688,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.30532836914062,
      },
      index: 64.28,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.34103393554688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.30258178710938,
      },
      index: 69.42,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.32180786132812,
      },
      index: 71.25,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.3204345703125,
      },
      index: 68.99,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.3094482421875,
      },
      index: 80.78,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.325927734375,
      },
      index: 67.83,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.32180786132812,
      },
      index: 61.66,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33279418945312,
      },
      index: 41.29,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.3314208984375,
      },
      index: 33.57,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31494140625,
      },
      index: 57.25,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.30807495117188,
      },
      index: 75.22,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31219482421875,
      },
      index: 72.26,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29983520507812,
      },
      index: 84.74,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.32180786132812,
      },
      index: 66.85,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31494140625,
      },
      index: 56.28,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31356811523438,
      },
      index: 87.85,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.32867431640625,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33554077148438,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.29708862304688,
      },
      index: 92.33,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.32455444335938,
      },
      index: 62.1,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.32867431640625,
      },
      index: 74.58,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.3314208984375,
      },
      index: 37.95,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33004760742188,
      },
      index: 52.21,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.32180786132812,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31768798828125,
      },
      index: 70.44,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.325927734375,
      },
      index: 68.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31082153320312,
      },
      index: 91.7,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.32867431640625,
      },
      index: 22.54,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.3369140625,
      },
      index: 16.63,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31494140625,
      },
      index: 46.45,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2984619140625,
      },
      index: 90.93,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33416748046875,
      },
      index: 26.78,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33279418945312,
      },
      index: 32.3,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.32455444335938,
      },
      index: 67.96,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.30807495117188,
      },
      index: 63.43,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.3314208984375,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.32318115234375,
      },
      index: 33.74,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33416748046875,
      },
      index: 43.76,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.32867431640625,
      },
      index: 52.16,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.3369140625,
      },
      index: 44.63,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.32867431640625,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33554077148438,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.32455444335938,
      },
      index: 28.74,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.34103393554688,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.303955078125,
      },
      index: 83.58,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.32318115234375,
      },
      index: 69.22,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.33004760742188,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33828735351562,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.325927734375,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.30807495117188,
      },
      index: 57.39,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.30532836914062,
      },
      index: 57.55,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33416748046875,
      },
      index: 32.87,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.30532836914062,
      },
      index: 85.73,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.30120849609375,
      },
      index: 89.44,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.32730102539062,
      },
      index: 70.37,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31906127929688,
      },
      index: 29.38,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33828735351562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.3314208984375,
      },
      index: 54.68,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33828735351562,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2984619140625,
      },
      index: 79.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.30807495117188,
      },
      index: 86.93,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.303955078125,
      },
      index: 64.94,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.32730102539062,
      },
      index: 76.17,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.32867431640625,
      },
      index: 71.65,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.3369140625,
      },
      index: 38.7,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29434204101562,
      },
      index: 90.99,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.325927734375,
      },
      index: 34.54,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33279418945312,
      },
      index: 33.3,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33004760742188,
      },
      index: 51.7,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.23666381835938,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.23529052734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.23117065429688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25726318359375,
      },
      index: 84.45,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29159545898438,
      },
      index: 92.14,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.28335571289062,
      },
      index: 88.22,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.24627685546875,
      },
      index: 56.38,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26687622070312,
      },
      index: 58.05,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.27786254882812,
      },
      index: 89.29,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.260009765625,
      },
      index: 72.21,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27511596679688,
      },
      index: 66.35,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26138305664062,
      },
      index: 56.14,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.28472900390625,
      },
      index: 90.41,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29296875,
      },
      index: 90.45,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29022216796875,
      },
      index: 86.52,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.28884887695312,
      },
      index: 84.8,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25177001953125,
      },
      index: 81.75,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22705078125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29022216796875,
      },
      index: 87.19,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26824951171875,
      },
      index: 60.16,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.28060913085938,
      },
      index: 82.33,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22293090820312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25177001953125,
      },
      index: 67.56,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.28472900390625,
      },
      index: 76.9,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25726318359375,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26824951171875,
      },
      index: 50.11,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22293090820312,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.24078369140625,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2874755859375,
      },
      index: 90.17,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27374267578125,
      },
      index: 50.07,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22567749023438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27511596679688,
      },
      index: 87.22,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26962280273438,
      },
      index: 68.04,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27786254882812,
      },
      index: 91.8,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.23529052734375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26412963867188,
      },
      index: 79.92,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.28335571289062,
      },
      index: 91.99,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22979736328125,
      },
      index: 28.05,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.24765014648438,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2655029296875,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2874755859375,
      },
      index: 90.26,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.260009765625,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27511596679688,
      },
      index: 61.97,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2545166015625,
      },
      index: 40.4,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26138305664062,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26824951171875,
      },
      index: 67.15,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.28610229492188,
      },
      index: 87.77,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22705078125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2764892578125,
      },
      index: 90.86,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29022216796875,
      },
      index: 90.23,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22567749023438,
      },
      index: 35.18,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.24627685546875,
      },
      index: 43.05,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25726318359375,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2764892578125,
      },
      index: 90.86,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.23117065429688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.28610229492188,
      },
      index: 90.49,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27374267578125,
      },
      index: 66.74,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27511596679688,
      },
      index: 74.66,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2874755859375,
      },
      index: 94.91,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27236938476562,
      },
      index: 84.78,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2490234375,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26824951171875,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.28884887695312,
      },
      index: 79.59,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.281982421875,
      },
      index: 51.64,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26824951171875,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26687622070312,
      },
      index: 70.16,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22842407226562,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.24765014648438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27786254882812,
      },
      index: 32.44,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.281982421875,
      },
      index: 87.94,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.28472900390625,
      },
      index: 90.87,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.28884887695312,
      },
      index: 86.84,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27099609375,
      },
      index: 61.68,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2490234375,
      },
      index: 38.7,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22293090820312,
      },
      index: 35.31,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2490234375,
      },
      index: 26.98,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.281982421875,
      },
      index: 91.09,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26962280273438,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.28335571289062,
      },
      index: 42.21,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25177001953125,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2325439453125,
      },
      index: 30.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25588989257812,
      },
      index: 80.95,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27236938476562,
      },
      index: 82.98,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26138305664062,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29159545898438,
      },
      index: 90.54,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29159545898438,
      },
      index: 24.7,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.24215698242188,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.238037109375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27374267578125,
      },
      index: 29.22,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.28472900390625,
      },
      index: 80.56,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22705078125,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.28472900390625,
      },
      index: 50.3,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22430419921875,
      },
      index: 48.98,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2655029296875,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25314331054688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25726318359375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.23117065429688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25588989257812,
      },
      index: 85.25,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.28335571289062,
      },
      index: 90.71,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.24490356445312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22979736328125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27374267578125,
      },
      index: 45.8,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27236938476562,
      },
      index: 57.16,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22842407226562,
      },
      index: 31.63,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26824951171875,
      },
      index: 90.95,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26275634765625,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26412963867188,
      },
      index: 55.23,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.28060913085938,
      },
      index: 88.63,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.24765014648438,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2490234375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2545166015625,
      },
      index: 50.31,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.23941040039062,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.23117065429688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22430419921875,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27923583984375,
      },
      index: 50.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27511596679688,
      },
      index: 85.75,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25588989257812,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.281982421875,
      },
      index: 87.29,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.28884887695312,
      },
      index: 86.44,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25177001953125,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.24078369140625,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2435302734375,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2490234375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2490234375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27511596679688,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29022216796875,
      },
      index: 84.34,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26687622070312,
      },
      index: 59.29,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.22979736328125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.260009765625,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.28335571289062,
      },
      index: 89.96,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29022216796875,
      },
      index: 92.93,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25177001953125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27786254882812,
      },
      index: 37.37,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29022216796875,
      },
      index: 77.51,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27099609375,
      },
      index: 67.15,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27923583984375,
      },
      index: 84.51,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25863647460938,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.28335571289062,
      },
      index: 89.77,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.28472900390625,
      },
      index: 90.53,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25588989257812,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.23391723632812,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.28472900390625,
      },
      index: 89.8,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27099609375,
      },
      index: 80.76,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.23117065429688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22293090820312,
      },
      index: 22.99,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.281982421875,
      },
      index: 90.92,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25863647460938,
      },
      index: 30.62,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25588989257812,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22430419921875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2764892578125,
      },
      index: 84.15,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29022216796875,
      },
      index: 81.42,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.28335571289062,
      },
      index: 66.64,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27236938476562,
      },
      index: 40.48,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.260009765625,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25039672851562,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22842407226562,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25177001953125,
      },
      index: 37.55,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25039672851562,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.23391723632812,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.281982421875,
      },
      index: 89.37,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.260009765625,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27099609375,
      },
      index: 84.17,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22430419921875,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25314331054688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2764892578125,
      },
      index: 78.51,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26824951171875,
      },
      index: 85.84,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25314331054688,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.24490356445312,
      },
      index: 28.3,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25314331054688,
      },
      index: 66.7,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.23117065429688,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29022216796875,
      },
      index: 88.3,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.24765014648438,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2545166015625,
      },
      index: 26.52,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.24627685546875,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.260009765625,
      },
      index: 33.57,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26824951171875,
      },
      index: 45.88,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27511596679688,
      },
      index: 57.44,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22705078125,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27923583984375,
      },
      index: 86.6,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.22430419921875,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27786254882812,
      },
      index: 60.43,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25314331054688,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2764892578125,
      },
      index: 63.23,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.28335571289062,
      },
      index: 49.7,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.281982421875,
      },
      index: 89.68,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25588989257812,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22293090820312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29296875,
      },
      index: 83.37,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26138305664062,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26687622070312,
      },
      index: 85.72,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29159545898438,
      },
      index: 84.39,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25726318359375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.24765014648438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.27099609375,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26275634765625,
      },
      index: 80.98,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25863647460938,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26824951171875,
      },
      index: 81.68,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27786254882812,
      },
      index: 90.74,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25314331054688,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.28610229492188,
      },
      index: 89.37,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.26412963867188,
      },
      index: 21.52,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.23666381835938,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29159545898438,
      },
      index: 93.68,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.25177001953125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.2874755859375,
      },
      index: 89.24,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26962280273438,
      },
      index: 28.82,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27786254882812,
      },
      index: 91.29,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.28335571289062,
      },
      index: 90.92,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27099609375,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22842407226562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.28610229492188,
      },
      index: 54.69,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2655029296875,
      },
      index: 36.84,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.28335571289062,
      },
      index: 87.03,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.24215698242188,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22842407226562,
      },
      index: 47.09,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25726318359375,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25726318359375,
      },
      index: 33.59,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26824951171875,
      },
      index: 52.25,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22567749023438,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.28060913085938,
      },
      index: 89.98,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27786254882812,
      },
      index: 49.37,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2874755859375,
      },
      index: 81.71,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26275634765625,
      },
      index: 82.76,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27511596679688,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29159545898438,
      },
      index: 86.32,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.23941040039062,
      },
      index: 8.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26687622070312,
      },
      index: 32.79,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26275634765625,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29296875,
      },
      index: 92.53,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27923583984375,
      },
      index: 88.44,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2325439453125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2655029296875,
      },
      index: 20.76,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27374267578125,
      },
      index: 66.48,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25314331054688,
      },
      index: 39.97,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.23666381835938,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.22979736328125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2490234375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2545166015625,
      },
      index: 33.19,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27511596679688,
      },
      index: 67.37,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22567749023438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22430419921875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26962280273438,
      },
      index: 79.3,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2764892578125,
      },
      index: 91.48,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27099609375,
      },
      index: 35.24,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.24215698242188,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25177001953125,
      },
      index: 24.97,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2764892578125,
      },
      index: 33.82,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.26138305664062,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26962280273438,
      },
      index: 38.67,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.28060913085938,
      },
      index: 88.67,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25039672851562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27786254882812,
      },
      index: 84.8,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.22567749023438,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.23941040039062,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.26412963867188,
      },
      index: 25.66,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29159545898438,
      },
      index: 88.7,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25314331054688,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2655029296875,
      },
      index: 34.35,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.24078369140625,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2764892578125,
      },
      index: 83.48,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.28884887695312,
      },
      index: 83.86,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.26412963867188,
      },
      index: 23.65,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22567749023438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26687622070312,
      },
      index: 52.39,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.238037109375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25039672851562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27511596679688,
      },
      index: 88.43,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26962280273438,
      },
      index: 74.67,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.25039672851562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22979736328125,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25177001953125,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29296875,
      },
      index: 91.58,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.23117065429688,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2490234375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22293090820312,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.27511596679688,
      },
      index: 87.52,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.2764892578125,
      },
      index: 76.67,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.27786254882812,
      },
      index: 91.32,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.24490356445312,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.22842407226562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26687622070312,
      },
      index: 35.87,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.23529052734375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.28884887695312,
      },
      index: 92.23,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2325439453125,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26275634765625,
      },
      index: 84.56,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25588989257812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25314331054688,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.24627685546875,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.2545166015625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.24490356445312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.23666381835938,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26962280273438,
      },
      index: 80.25,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22705078125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2655029296875,
      },
      index: 77.79,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29022216796875,
      },
      index: 89.19,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2874755859375,
      },
      index: 58.76,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26275634765625,
      },
      index: 72.12,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27786254882812,
      },
      index: 58.81,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22293090820312,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.28884887695312,
      },
      index: 93.15,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31356811523438,
      },
      index: 84.46,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.3204345703125,
      },
      index: 78.84,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31219482421875,
      },
      index: 74.47,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31356811523438,
      },
      index: 77.41,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.325927734375,
      },
      index: 89.83,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.32867431640625,
      },
      index: 80.44,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33828735351562,
      },
      index: 34.46,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.32318115234375,
      },
      index: 84.12,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.30807495117188,
      },
      index: 85.2,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33279418945312,
      },
      index: 70.56,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.2984619140625,
      },
      index: 78.3,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.32180786132812,
      },
      index: 82.47,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.3314208984375,
      },
      index: 72.83,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33004760742188,
      },
      index: 79.67,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.325927734375,
      },
      index: 80.74,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33828735351562,
      },
      index: 34.09,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33966064453125,
      },
      index: 32.54,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.303955078125,
      },
      index: 86.64,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.30532836914062,
      },
      index: 88.11,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33416748046875,
      },
      index: 36.93,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.3369140625,
      },
      index: 41.21,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.3094482421875,
      },
      index: 85.98,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.33279418945312,
      },
      index: 45.43,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33416748046875,
      },
      index: 53.05,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.33416748046875,
      },
      index: 51.12,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29983520507812,
      },
      index: 78.48,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31768798828125,
      },
      index: 62.62,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33004760742188,
      },
      index: 57.8,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.30670166015625,
      },
      index: 84.83,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.30670166015625,
      },
      index: 89.01,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33004760742188,
      },
      index: 23.65,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.3204345703125,
      },
      index: 66.61,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.32867431640625,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33828735351562,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.34103393554688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.325927734375,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33554077148438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.3204345703125,
      },
      index: 87.05,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31768798828125,
      },
      index: 60.49,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31082153320312,
      },
      index: 57.67,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.30670166015625,
      },
      index: 57.79,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.34103393554688,
      },
      index: 17.99,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33416748046875,
      },
      index: 27.03,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31631469726562,
      },
      index: 72.65,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33966064453125,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33828735351562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33554077148438,
      },
      index: 48.05,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.34103393554688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31219482421875,
      },
      index: 60.41,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33416748046875,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.32730102539062,
      },
      index: 31.27,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31082153320312,
      },
      index: 66.17,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.3204345703125,
      },
      index: 40.58,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.32455444335938,
      },
      index: 73.03,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.30532836914062,
      },
      index: 68.88,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31219482421875,
      },
      index: 87.27,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31631469726562,
      },
      index: 28.41,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33004760742188,
      },
      index: 35.86,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.30807495117188,
      },
      index: 78.77,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33554077148438,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.32318115234375,
      },
      index: 68.59,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.3369140625,
      },
      index: 61.76,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33279418945312,
      },
      index: 37.23,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.3314208984375,
      },
      index: 46.74,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.30532836914062,
      },
      index: 82.45,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33416748046875,
      },
      index: 41.27,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.3314208984375,
      },
      index: 59.05,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29983520507812,
      },
      index: 70.56,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33279418945312,
      },
      index: 41.42,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.32180786132812,
      },
      index: 27.28,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29708862304688,
      },
      index: 87.61,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33004760742188,
      },
      index: 35.56,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.3204345703125,
      },
      index: 36.95,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.34103393554688,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.32180786132812,
      },
      index: 30.76,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.30532836914062,
      },
      index: 67.49,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.3094482421875,
      },
      index: 77.64,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.325927734375,
      },
      index: 68.61,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.30120849609375,
      },
      index: 91.16,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.325927734375,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29571533203125,
      },
      index: 90.3,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.34103393554688,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31631469726562,
      },
      index: 84.02,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33966064453125,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.30120849609375,
      },
      index: 76.48,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.3094482421875,
      },
      index: 64.95,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.30258178710938,
      },
      index: 87.64,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31906127929688,
      },
      index: 43.63,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.32318115234375,
      },
      index: 66.04,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33004760742188,
      },
      index: 26.98,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33279418945312,
      },
      index: 43.82,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.32318115234375,
      },
      index: 63.37,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29983520507812,
      },
      index: 82.01,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.32180786132812,
      },
      index: 63.55,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.3094482421875,
      },
      index: 63.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.30120849609375,
      },
      index: 79.8,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33966064453125,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29434204101562,
      },
      index: 83.78,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31082153320312,
      },
      index: 92.16,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.30258178710938,
      },
      index: 67.96,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.30120849609375,
      },
      index: 90.2,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33966064453125,
      },
      index: 91.03,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.32318115234375,
      },
      index: 63.33,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.30807495117188,
      },
      index: 82.87,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.3314208984375,
      },
      index: 40.89,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.3094482421875,
      },
      index: 54.55,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29708862304688,
      },
      index: 86.99,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.3094482421875,
      },
      index: 71.51,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.3094482421875,
      },
      index: 87.07,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31356811523438,
      },
      index: 80.05,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31219482421875,
      },
      index: 76.95,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.303955078125,
      },
      index: 86.55,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.30670166015625,
      },
      index: 73.91,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33279418945312,
      },
      index: 52.28,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.29571533203125,
      },
      index: 87.36,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31082153320312,
      },
      index: 76.27,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2984619140625,
      },
      index: 92.5,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.30258178710938,
      },
      index: 84.48,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31219482421875,
      },
      index: 84.39,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31082153320312,
      },
      index: 41.67,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31906127929688,
      },
      index: 70.08,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2984619140625,
      },
      index: 76.65,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.32730102539062,
      },
      index: 53.42,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29296875,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29434204101562,
      },
      index: 85.08,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33828735351562,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.3369140625,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31219482421875,
      },
      index: 68.34,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29708862304688,
      },
      index: 90.53,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.32180786132812,
      },
      index: 79.68,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.32867431640625,
      },
      index: 30.76,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.303955078125,
      },
      index: 77.62,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.3314208984375,
      },
      index: 66.5,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33966064453125,
      },
      index: 31.63,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33828735351562,
      },
      index: 24.31,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.32318115234375,
      },
      index: 58.04,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2984619140625,
      },
      index: 91.29,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33279418945312,
      },
      index: 43.73,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29983520507812,
      },
      index: 89.99,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.30532836914062,
      },
      index: 86.11,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31494140625,
      },
      index: 48.81,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29571533203125,
      },
      index: 90.4,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29571533203125,
      },
      index: 91.1,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29983520507812,
      },
      index: 72.57,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.325927734375,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31082153320312,
      },
      index: 47.77,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.303955078125,
      },
      index: 84.95,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.32318115234375,
      },
      index: 66.64,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33828735351562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.303955078125,
      },
      index: 79.06,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.32730102539062,
      },
      index: 73.93,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.32318115234375,
      },
      index: 61.81,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29983520507812,
      },
      index: 89.92,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31219482421875,
      },
      index: 61.67,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.30120849609375,
      },
      index: 91.66,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.32867431640625,
      },
      index: 60.57,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33416748046875,
      },
      index: 36.67,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.30807495117188,
      },
      index: 66.14,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.30807495117188,
      },
      index: 78.51,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31219482421875,
      },
      index: 90.96,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.32318115234375,
      },
      index: 28.41,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31082153320312,
      },
      index: 56.65,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31906127929688,
      },
      index: 76.47,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2984619140625,
      },
      index: 88.73,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.31082153320312,
      },
      index: 84.42,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.325927734375,
      },
      index: 77.25,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.32180786132812,
      },
      index: 34.46,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.32867431640625,
      },
      index: 54.23,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.32455444335938,
      },
      index: 69.23,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.31494140625,
      },
      index: 55.58,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.3369140625,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.32867431640625,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31356811523438,
      },
      index: 86.26,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.32455444335938,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29434204101562,
      },
      index: 87.01,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.325927734375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.30670166015625,
      },
      index: 84.83,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.3314208984375,
      },
      index: 23.74,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33004760742188,
      },
      index: 40.72,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.32455444335938,
      },
      index: 36.13,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.3204345703125,
      },
      index: 48.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.30258178710938,
      },
      index: 91.32,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.3094482421875,
      },
      index: 86.25,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29571533203125,
      },
      index: 83.95,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31906127929688,
      },
      index: 24.97,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33828735351562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31768798828125,
      },
      index: 71.19,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33004760742188,
      },
      index: 63.28,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.3314208984375,
      },
      index: 35.28,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.3204345703125,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.303955078125,
      },
      index: 85.04,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.32180786132812,
      },
      index: 74.26,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.30532836914062,
      },
      index: 83.98,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31082153320312,
      },
      index: 49.93,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31768798828125,
      },
      index: 77.36,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.30807495117188,
      },
      index: 87.57,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.32180786132812,
      },
      index: 29.86,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.32455444335938,
      },
      index: 59.84,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2984619140625,
      },
      index: 95.53,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33279418945312,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.30670166015625,
      },
      index: 79.74,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.32455444335938,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.30670166015625,
      },
      index: 53.02,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29571533203125,
      },
      index: 91.37,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2984619140625,
      },
      index: 85.74,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31356811523438,
      },
      index: 35.37,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33828735351562,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.31494140625,
      },
      index: 48.14,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33966064453125,
      },
      index: 30.31,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.32180786132812,
      },
      index: 71.61,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.3094482421875,
      },
      index: 80.97,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.30120849609375,
      },
      index: 69.96,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29708862304688,
      },
      index: 90.76,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.34103393554688,
      },
      index: 25.66,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.3204345703125,
      },
      index: 69.97,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33966064453125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33554077148438,
      },
      index: 54.43,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.30670166015625,
      },
      index: 87.13,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.30807495117188,
      },
      index: 63.37,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.33966064453125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31219482421875,
      },
      index: 54.98,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.32455444335938,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.32455444335938,
      },
      index: 64.64,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31356811523438,
      },
      index: 90.43,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.30670166015625,
      },
      index: 87.52,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.30120849609375,
      },
      index: 90.97,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33279418945312,
      },
      index: 31.13,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.32730102539062,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31494140625,
      },
      index: 44.64,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33004760742188,
      },
      index: 71.61,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.3094482421875,
      },
      index: 81.06,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.31631469726562,
      },
      index: 76.9,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31082153320312,
      },
      index: 90.76,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33966064453125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.33828735351562,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29434204101562,
      },
      index: 84.54,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.24627685546875,
      },
      index: 31.65,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.26824951171875,
      },
      index: 29.7,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.260009765625,
      },
      index: 67.19,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25863647460938,
      },
      index: 82.96,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.24490356445312,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.23117065429688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.28884887695312,
      },
      index: 85.13,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.24765014648438,
      },
      index: 35.11,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2874755859375,
      },
      index: 87.83,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25726318359375,
      },
      index: 88.37,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.238037109375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.25588989257812,
      },
      index: 90.39,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22430419921875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26138305664062,
      },
      index: 66.66,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.26962280273438,
      },
      index: 51.86,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27374267578125,
      },
      index: 47.53,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2435302734375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27786254882812,
      },
      index: 89.77,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.23941040039062,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.22979736328125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.281982421875,
      },
      index: 86.35,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.28610229492188,
      },
      index: 88.73,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.27923583984375,
      },
      index: 91.34,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.25588989257812,
      },
      index: 83.79,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25039672851562,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22567749023438,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.26138305664062,
      },
      index: 38.14,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.27786254882812,
      },
      index: 47.58,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27099609375,
      },
      index: 86.63,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2545166015625,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.281982421875,
      },
      index: 89.23,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27923583984375,
      },
      index: 90.15,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.281982421875,
      },
      index: 90.58,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25863647460938,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27374267578125,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26962280273438,
      },
      index: 31.07,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27923583984375,
      },
      index: 91.29,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.23117065429688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.2435302734375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2545166015625,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.22430419921875,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29022216796875,
      },
      index: 67.86,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27923583984375,
      },
      index: 90.05,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.27786254882812,
      },
      index: 82.3,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29296875,
      },
      index: 88.63,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26962280273438,
      },
      index: 70.02,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25177001953125,
      },
      index: 21.67,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.22430419921875,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.28884887695312,
      },
      index: 90.69,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.23941040039062,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25588989257812,
      },
      index: 43.03,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27374267578125,
      },
      index: 77.39,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.28335571289062,
      },
      index: 84.06,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.25039672851562,
      },
      index: 56.82,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.24215698242188,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25726318359375,
      },
      index: 48.39,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2764892578125,
      },
      index: 87.11,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29296875,
      },
      index: 79.28,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.28610229492188,
      },
      index: 85.36,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.28610229492188,
      },
      index: 80.02,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.25314331054688,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29022216796875,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.27099609375,
      },
      index: 78.7,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.24627685546875,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.23117065429688,
      },
      index: 13.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.26824951171875,
      },
      index: 30.76,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29296875,
      },
      index: 84.87,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.260009765625,
      },
      index: 83.76,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.28884887695312,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22842407226562,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25177001953125,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.27511596679688,
      },
      index: 90.67,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.28060913085938,
      },
      index: 94.47,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.238037109375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25726318359375,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.26962280273438,
      },
      index: 87.02,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2764892578125,
      },
      index: 68.3,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.27923583984375,
      },
      index: 91.13,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26962280273438,
      },
      index: 89.38,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2764892578125,
      },
      index: 32.02,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.27923583984375,
      },
      index: 95.29,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25177001953125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25726318359375,
      },
      index: 79.15,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27099609375,
      },
      index: 87.25,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.28472900390625,
      },
      index: 36.63,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.2764892578125,
      },
      index: 89.23,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25039672851562,
      },
      index: 25.76,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22705078125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22842407226562,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2655029296875,
      },
      index: 84.73,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.28060913085938,
      },
      index: 60.23,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27511596679688,
      },
      index: 34.3,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2435302734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.26962280273438,
      },
      index: 51.93,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22430419921875,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22567749023438,
      },
      index: 44.8,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22293090820312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.22430419921875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.25726318359375,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.27923583984375,
      },
      index: 61.67,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25726318359375,
      },
      index: 77.04,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.26824951171875,
      },
      index: 37.47,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.23391723632812,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25039672851562,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29296875,
      },
      index: 44.57,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.24490356445312,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2655029296875,
      },
      index: 32.19,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.22293090820312,
      },
      index: 32.64,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25314331054688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26412963867188,
      },
      index: 33.59,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26412963867188,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.28472900390625,
      },
      index: 89.72,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.22705078125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.2325439453125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.24765014648438,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25588989257812,
      },
      index: 36.83,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.26687622070312,
      },
      index: 82.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.23117065429688,
      },
      index: 50.22,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.28060913085938,
      },
      index: 73.85,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29296875,
      },
      index: 89.65,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26824951171875,
      },
      index: 68.32,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26687622070312,
      },
      index: 83.39,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.260009765625,
      },
      index: 50.39,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.29159545898438,
      },
      index: 89.96,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26275634765625,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26412963867188,
      },
      index: 25.66,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27236938476562,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.27374267578125,
      },
      index: 70.89,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29159545898438,
      },
      index: 85.86,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.27099609375,
      },
      index: 40.39,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.28610229492188,
      },
      index: 86.07,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29022216796875,
      },
      index: 87.84,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.22567749023438,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.24215698242188,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2435302734375,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.24490356445312,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.24627685546875,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.26962280273438,
      },
      index: 45.06,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.23117065429688,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.28472900390625,
      },
      index: 89.94,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29159545898438,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25863647460938,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.28060913085938,
      },
      index: 90.29,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.22705078125,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26138305664062,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.28884887695312,
      },
      index: 89.06,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.27511596679688,
      },
      index: 85.47,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.28472900390625,
      },
      index: 88.8,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.238037109375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.26824951171875,
      },
      index: 44.61,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.238037109375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29022216796875,
      },
      index: 91.24,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29159545898438,
      },
      index: 88.49,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.26687622070312,
      },
      index: 86.2,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.26275634765625,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2764892578125,
      },
      index: 91.11,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2655029296875,
      },
      index: 85.68,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.23391723632812,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.27236938476562,
      },
      index: 30.51,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.238037109375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25588989257812,
      },
      index: 42.17,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27786254882812,
      },
      index: 87.58,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.25588989257812,
      },
      index: 33.41,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.23529052734375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.2874755859375,
      },
      index: 90.76,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.23941040039062,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.25726318359375,
      },
      index: 55.19,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.23666381835938,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.238037109375,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26824951171875,
      },
      index: 64.88,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.28472900390625,
      },
      index: 92.71,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.260009765625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.25177001953125,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2325439453125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.25863647460938,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25314331054688,
      },
      index: 52.44,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.27786254882812,
      },
      index: 91.09,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.23941040039062,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.24078369140625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.26138305664062,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.23529052734375,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2490234375,
      },
      index: 35.31,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.23666381835938,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2764892578125,
      },
      index: 41.45,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.25588989257812,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29159545898438,
      },
      index: 81.57,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.27236938476562,
      },
      index: 87.87,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25863647460938,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2490234375,
      },
      index: 36.37,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.26824951171875,
      },
      index: 35.16,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25314331054688,
      },
      index: 17.99,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.2874755859375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.28884887695312,
      },
      index: 91.37,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.26687622070312,
      },
      index: 32.67,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.25726318359375,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.260009765625,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.25177001953125,
      },
      index: 30.66,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.281982421875,
      },
      index: 90.07,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.23529052734375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.2655029296875,
      },
      index: 74.26,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.28060913085938,
      },
      index: 91.43,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.28335571289062,
      },
      index: 91.16,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25177001953125,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.28335571289062,
      },
      index: 90.71,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.23941040039062,
      },
      index: 28.32,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.27511596679688,
      },
      index: 84.59,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.25039672851562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25177001953125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22705078125,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.26824951171875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.26962280273438,
      },
      index: 74.08,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.22979736328125,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.27923583984375,
      },
      index: 90.54,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.25039672851562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.25863647460938,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.27236938476562,
      },
      index: 34.09,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2325439453125,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22567749023438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2655029296875,
      },
      index: 85.43,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.28472900390625,
      },
      index: 91.45,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29159545898438,
      },
      index: 92.92,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.28610229492188,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.2874755859375,
      },
      index: 81.54,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.23117065429688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.2545166015625,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.25588989257812,
      },
      index: 25.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.26824951171875,
      },
      index: 79.82,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.22979736328125,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.26824951171875,
      },
      index: 69.98,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.25588989257812,
      },
      index: 35.62,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27511596679688,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.2764892578125,
      },
      index: 86.91,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.24765014648438,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27099609375,
      },
      index: 33.59,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.281982421875,
      },
      index: 90.9,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.28472900390625,
      },
      index: 90.69,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.25039672851562,
      },
      index: 35.48,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29022216796875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.29159545898438,
      },
      index: 90.97,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.260009765625,
      },
      index: 72.46,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.27923583984375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.28060913085938,
      },
      index: 41.67,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.24215698242188,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.25726318359375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.25863647460938,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.25177001953125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.25314331054688,
      },
      index: 46.13,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29159545898438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29296875,
      },
      index: 90.68,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.28472900390625,
      },
      index: 28.9,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.27236938476562,
      },
      index: 26.78,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.23529052734375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.23666381835938,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.25726318359375,
      },
      index: 29.97,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.25588989257812,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.28335571289062,
      },
      index: 91.91,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.24765014648438,
      },
      index: 27.28,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.24765014648438,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.2490234375,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2490234375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.25039672851562,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2655029296875,
      },
      index: 85.18,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.26687622070312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.26824951171875,
      },
      index: 26.23,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.26962280273438,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27099609375,
      },
      index: 75.1,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.23529052734375,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29022216796875,
      },
      index: 88.62,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29022216796875,
      },
      index: 91.51,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.27786254882812,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.27923583984375,
      },
      index: 74.04,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29022216796875,
      },
      index: 79.54,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.23117065429688,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.23391723632812,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.23529052734375,
      },
      index: 5.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.28472900390625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.28610229492188,
      },
      index: 91.91,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.22979736328125,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.23117065429688,
      },
      index: 78.71,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.281982421875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.28335571289062,
      },
      index: 91.54,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.24078369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.2215576171875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.22293090820312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.22567749023438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.22705078125,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2545166015625,
      },
      index: 20.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.22842407226562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.22979736328125,
      },
      index: 27.64,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.25588989257812,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.25726318359375,
      },
      index: 42.39,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.24215698242188,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.27099609375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.27236938476562,
      },
      index: 72.73,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.26138305664062,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.26275634765625,
      },
      index: 24.98,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.23117065429688,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.2325439453125,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.28472900390625,
      },
      index: 90.7,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.24078369140625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.24215698242188,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.2325439453125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.23391723632812,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.2655029296875,
      },
      index: 36.92,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.24627685546875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.24765014648438,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.2655029296875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.26687622070312,
      },
      index: 64.98,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.23941040039062,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.24078369140625,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.2545166015625,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.25588989257812,
      },
      index: 26.02,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.28472900390625,
      },
      index: 89.16,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.281982421875,
      },
      index: 90.26,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.27374267578125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.27511596679688,
      },
      index: 62.3,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.260009765625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.26138305664062,
      },
      index: 80.98,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.25314331054688,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.2545166015625,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.28060913085938,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.281982421875,
      },
      index: 91.55,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2764892578125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.27786254882812,
      },
      index: 61.0,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.25863647460938,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.260009765625,
      },
      index: 84.63,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.22430419921875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.22567749023438,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29022216796875,
      },
      index: 61.44,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.26412963867188,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2655029296875,
      },
      index: 78.24,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.238037109375,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.23941040039062,
      },
      index: 0.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.28335571289062,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.28472900390625,
      },
      index: 90.27,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29022216796875,
      },
      index: 86.32,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.28884887695312,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.29022216796875,
      },
      index: 90.95,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2435302734375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.24490356445312,
      },
      index: 10.0,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.2984619140625,
      },
      index: 75.91,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31631469726562,
      },
      index: 80.02,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29571533203125,
      },
      index: 86.0,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.325927734375,
      },
      index: 90.26,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.3204345703125,
      },
      index: 86.63,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.29983520507812,
      },
      index: 78.26,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.30670166015625,
      },
      index: 84.26,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.33554077148438,
      },
      index: 35.14,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.32318115234375,
      },
      index: 80.98,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.31906127929688,
      },
      index: 84.12,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.30258178710938,
      },
      index: 82.97,
    },
    {
      corner: {
        leftUpLat: 27.28729248046875,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.285919189453125,
        rightDownLon: 105.31906127929688,
      },
      index: 82.96,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.30258178710938,
      },
      index: 81.86,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.32455444335938,
      },
      index: 81.19,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.3369140625,
      },
      index: 34.14,
    },
    {
      corner: {
        leftUpLat: 27.288665771484375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.28729248046875,
        rightDownLon: 105.303955078125,
      },
      index: 86.8,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.29434204101562,
      },
      index: 83.32,
    },
    {
      corner: {
        leftUpLat: 27.2900390625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.288665771484375,
        rightDownLon: 105.31219482421875,
      },
      index: 82.15,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.3204345703125,
      },
      index: 49.25,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.32455444335938,
      },
      index: 25.51,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.33279418945312,
      },
      index: 32.39,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33416748046875,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.32730102539062,
      },
      index: 47.39,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31768798828125,
      },
      index: 39.4,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.3204345703125,
      },
      index: 76.1,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.325927734375,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.3204345703125,
      },
      index: 33.57,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.303955078125,
      },
      index: 45.46,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29983520507812,
      },
      index: 84.85,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.2984619140625,
      },
      index: 88.77,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.34103393554688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.325927734375,
      },
      index: 68.37,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.31906127929688,
      },
      index: 33.12,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31768798828125,
      },
      index: 60.11,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31494140625,
      },
      index: 40.08,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.32867431640625,
      },
      index: 28.66,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31906127929688,
      },
      index: 40.16,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.29983520507812,
      },
      index: 80.64,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.32730102539062,
      },
      index: 30.76,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33554077148438,
      },
      index: 33.44,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.34103393554688,
      },
      index: 22.33,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.3094482421875,
      },
      index: 56.21,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31631469726562,
      },
      index: 80.15,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31494140625,
      },
      index: 84.04,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33966064453125,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29708862304688,
      },
      index: 88.22,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31906127929688,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.3204345703125,
      },
      index: 22.03,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.32455444335938,
      },
      index: 68.86,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.32730102539062,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.32730102539062,
      },
      index: 33.41,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.2984619140625,
      },
      index: 88.25,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.32180786132812,
      },
      index: 73.49,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.3369140625,
      },
      index: 55.68,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31082153320312,
      },
      index: 88.25,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31356811523438,
      },
      index: 48.93,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.30807495117188,
      },
      index: 54.18,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29708862304688,
      },
      index: 91.14,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33828735351562,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.303955078125,
      },
      index: 89.89,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.30120849609375,
      },
      index: 86.38,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.32180786132812,
      },
      index: 59.81,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.32730102539062,
      },
      index: 73.07,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.30120849609375,
      },
      index: 76.3,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.30120849609375,
      },
      index: 87.56,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31356811523438,
      },
      index: 43.56,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.33966064453125,
      },
      index: 23.33,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33004760742188,
      },
      index: 46.55,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.31219482421875,
      },
      index: 62.6,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.34103393554688,
      },
      index: 23.3,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31219482421875,
      },
      index: 88.38,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.3314208984375,
      },
      index: 27.64,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.30258178710938,
      },
      index: 77.46,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33279418945312,
      },
      index: 33.95,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.2984619140625,
      },
      index: 84.76,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.31356811523438,
      },
      index: 87.03,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.30807495117188,
      },
      index: 64.44,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.30807495117188,
      },
      index: 90.65,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.30258178710938,
      },
      index: 91.13,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.3369140625,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.30807495117188,
      },
      index: 87.79,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33004760742188,
      },
      index: 43.33,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.32867431640625,
      },
      index: 56.42,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.32455444335938,
      },
      index: 74.01,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.30258178710938,
      },
      index: 82.44,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31494140625,
      },
      index: 88.38,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33828735351562,
      },
      index: 36.13,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.33416748046875,
      },
      index: 21.63,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.33279418945312,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.30532836914062,
      },
      index: 84.91,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.31768798828125,
      },
      index: 35.02,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.31219482421875,
      },
      index: 58.32,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33004760742188,
      },
      index: 33.33,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.32318115234375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.32455444335938,
      },
      index: 29.31,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.3314208984375,
      },
      index: 27.99,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31768798828125,
      },
      index: 50.07,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.31494140625,
      },
      index: 80.64,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.30258178710938,
      },
      index: 74.22,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.29983520507812,
      },
      index: 78.82,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.33554077148438,
      },
      index: 31.02,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.30532836914062,
      },
      index: 85.82,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.31631469726562,
      },
      index: 72.13,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.33828735351562,
      },
      index: 21.52,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31356811523438,
      },
      index: 88.38,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31494140625,
      },
      index: 87.75,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.3314208984375,
      },
      index: 40.02,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.30532836914062,
      },
      index: 68.33,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.31082153320312,
      },
      index: 83.88,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33416748046875,
      },
      index: 32.79,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.29571533203125,
      },
      index: 90.79,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.30670166015625,
      },
      index: 71.96,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.303955078125,
      },
      index: 46.19,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.33416748046875,
      },
      index: 66.91,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.30532836914062,
      },
      index: 83.09,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.33966064453125,
      },
      index: 38.32,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.32730102539062,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.2984619140625,
      },
      index: 85.26,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33416748046875,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.33554077148438,
      },
      index: 46.24,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31631469726562,
      },
      index: 80.15,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.3369140625,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29571533203125,
      },
      index: 90.37,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.31494140625,
      },
      index: 78.01,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.31768798828125,
      },
      index: 31.52,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31768798828125,
      },
      index: 31.78,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31631469726562,
      },
      index: 33.05,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.3094482421875,
      },
      index: 72.79,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.325927734375,
      },
      index: 53.17,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29983520507812,
      },
      index: 90.79,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.29434204101562,
      },
      index: 88.72,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.29434204101562,
      },
      index: 90.42,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.29434204101562,
      },
      index: 82.05,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.303955078125,
      },
      index: 89.93,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31768798828125,
      },
      index: 51.48,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.30670166015625,
      },
      index: 88.54,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.30120849609375,
      },
      index: 66.41,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.31494140625,
      },
      index: 71.9,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.29983520507812,
      },
      index: 75.04,
    },
    {
      corner: {
        leftUpLat: 27.305145263671875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.30377197265625,
        rightDownLon: 105.3369140625,
      },
      index: 23.65,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.33004760742188,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.34103393554688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.29571533203125,
      },
      index: 81.39,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29708862304688,
      },
      index: 83.3,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31494140625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31631469726562,
      },
      index: 46.46,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.33828735351562,
      },
      index: 32.03,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.31356811523438,
      },
      index: 61.11,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.3094482421875,
      },
      index: 87.49,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.32180786132812,
      },
      index: 32.28,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.3094482421875,
      },
      index: 87.18,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33279418945312,
      },
      index: 27.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.30807495117188,
      },
      index: 77.83,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33416748046875,
      },
      index: 48.98,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.3314208984375,
      },
      index: 35.64,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31494140625,
      },
      index: 84.55,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.29708862304688,
      },
      index: 81.0,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.32730102539062,
      },
      index: 30.25,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.303955078125,
      },
      index: 83.81,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31219482421875,
      },
      index: 83.26,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.33966064453125,
      },
      index: 26.65,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29708862304688,
      },
      index: 88.99,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.34103393554688,
      },
      index: 31.98,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.3369140625,
      },
      index: 26.52,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.31082153320312,
      },
      index: 68.05,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33966064453125,
      },
      index: 33.95,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.32180786132812,
      },
      index: 68.87,
    },
    {
      corner: {
        leftUpLat: 27.321624755859375,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.32025146484375,
        rightDownLon: 105.34103393554688,
      },
      index: 15.0,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.33416748046875,
      },
      index: 26.67,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.3094482421875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31082153320312,
      },
      index: 76.84,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.2984619140625,
      },
      index: 90.55,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.31356811523438,
      },
      index: 50.88,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.32180786132812,
      },
      index: 27.03,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.30532836914062,
      },
      index: 87.7,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.32730102539062,
      },
      index: 40.02,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.32867431640625,
      },
      index: 55.37,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.303955078125,
      },
      index: 86.63,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31494140625,
      },
      index: 78.53,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.29571533203125,
      },
      index: 90.67,
    },
    {
      corner: {
        leftUpLat: 27.30926513671875,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.307891845703125,
        rightDownLon: 105.33966064453125,
      },
      index: 31.32,
    },
    {
      corner: {
        leftUpLat: 27.30377197265625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.302398681640625,
        rightDownLon: 105.33966064453125,
      },
      index: 38.3,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.31768798828125,
      },
      index: 68.7,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.30120849609375,
      },
      index: 84.97,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.33828735351562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.33966064453125,
      },
      index: 26.27,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.29434204101562,
      },
      index: 85.48,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.32867431640625,
      },
      index: 33.84,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.2984619140625,
      },
      index: 86.1,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.30120849609375,
      },
      index: 81.23,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.31219482421875,
      },
      index: 83.22,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.33554077148438,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.3369140625,
      },
      index: 47.72,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.30532836914062,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.30670166015625,
      },
      index: 58.16,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.32318115234375,
      },
      index: 73.54,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.3204345703125,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.32180786132812,
      },
      index: 39.21,
    },
    {
      corner: {
        leftUpLat: 27.310638427734375,
        leftUpLon: 105.29296875,
        rightDownLat: 27.30926513671875,
        rightDownLon: 105.29434204101562,
      },
      index: 86.83,
    },
    {
      corner: {
        leftUpLat: 27.301025390625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.299652099609375,
        rightDownLon: 105.2984619140625,
      },
      index: 88.87,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.32455444335938,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.325927734375,
      },
      index: 32.79,
    },
    {
      corner: {
        leftUpLat: 27.29278564453125,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.291412353515625,
        rightDownLon: 105.34103393554688,
      },
      index: 28.41,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.3369140625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33828735351562,
      },
      index: 18.3,
    },
    {
      corner: {
        leftUpLat: 27.294158935546875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.29278564453125,
        rightDownLon: 105.29983520507812,
      },
      index: 82.13,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29983520507812,
      },
      index: 91.61,
    },
    {
      corner: {
        leftUpLat: 27.299652099609375,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.29827880859375,
        rightDownLon: 105.29571533203125,
      },
      index: 90.42,
    },
    {
      corner: {
        leftUpLat: 27.316131591796875,
        leftUpLon: 105.29434204101562,
        rightDownLat: 27.31475830078125,
        rightDownLon: 105.29571533203125,
      },
      index: 87.55,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.30258178710938,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.303955078125,
      },
      index: 88.71,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.33279418945312,
      },
      index: 28.74,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29708862304688,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.2984619140625,
      },
      index: 85.06,
    },
    {
      corner: {
        leftUpLat: 27.32025146484375,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.318878173828125,
        rightDownLon: 105.33279418945312,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.313385009765625,
        leftUpLon: 105.33966064453125,
        rightDownLat: 27.31201171875,
        rightDownLon: 105.34103393554688,
      },
      index: 18.33,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31219482421875,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31356811523438,
      },
      index: 67.18,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.2984619140625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.29983520507812,
      },
      index: 76.1,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.32867431640625,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.33004760742188,
      },
      index: 28.65,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.32730102539062,
      },
      index: 58.54,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.325927734375,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.32730102539062,
      },
      index: 32.79,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.33279418945312,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.33416748046875,
      },
      index: 51.71,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.30807495117188,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.3094482421875,
      },
      index: 80.99,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.303955078125,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.30532836914062,
      },
      index: 54.0,
    },
    {
      corner: {
        leftUpLat: 27.307891845703125,
        leftUpLon: 105.29296875,
        rightDownLat: 27.3065185546875,
        rightDownLon: 105.29434204101562,
      },
      index: 91.05,
    },
    {
      corner: {
        leftUpLat: 27.296905517578125,
        leftUpLon: 105.3314208984375,
        rightDownLat: 27.2955322265625,
        rightDownLon: 105.33279418945312,
      },
      index: 46.29,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.30120849609375,
      },
      index: 90.09,
    },
    {
      corner: {
        leftUpLat: 27.322998046875,
        leftUpLon: 105.30120849609375,
        rightDownLat: 27.321624755859375,
        rightDownLon: 105.30258178710938,
      },
      index: 69.97,
    },
    {
      corner: {
        leftUpLat: 27.318878173828125,
        leftUpLon: 105.33004760742188,
        rightDownLat: 27.3175048828125,
        rightDownLon: 105.3314208984375,
      },
      index: 26.63,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.29571533203125,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.29708862304688,
      },
      index: 79.64,
    },
    {
      corner: {
        leftUpLat: 27.3175048828125,
        leftUpLon: 105.31082153320312,
        rightDownLat: 27.316131591796875,
        rightDownLon: 105.31219482421875,
      },
      index: 54.92,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.29296875,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.29434204101562,
      },
      index: 90.71,
    },
    {
      corner: {
        leftUpLat: 27.31475830078125,
        leftUpLon: 105.30670166015625,
        rightDownLat: 27.313385009765625,
        rightDownLon: 105.30807495117188,
      },
      index: 53.46,
    },
    {
      corner: {
        leftUpLat: 27.31201171875,
        leftUpLon: 105.29983520507812,
        rightDownLat: 27.310638427734375,
        rightDownLon: 105.30120849609375,
      },
      index: 77.19,
    },
    {
      corner: {
        leftUpLat: 27.3065185546875,
        leftUpLon: 105.31356811523438,
        rightDownLat: 27.305145263671875,
        rightDownLon: 105.31494140625,
      },
      index: 73.93,
    },
    {
      corner: {
        leftUpLat: 27.302398681640625,
        leftUpLon: 105.32730102539062,
        rightDownLat: 27.301025390625,
        rightDownLon: 105.32867431640625,
      },
      index: 40.32,
    },
    {
      corner: {
        leftUpLat: 27.291412353515625,
        leftUpLon: 105.31631469726562,
        rightDownLat: 27.2900390625,
        rightDownLon: 105.31768798828125,
      },
      index: 83.18,
    },
    {
      corner: {
        leftUpLat: 27.29827880859375,
        leftUpLon: 105.32180786132812,
        rightDownLat: 27.296905517578125,
        rightDownLon: 105.32318115234375,
      },
      index: 79.39,
    },
    {
      corner: {
        leftUpLat: 27.2955322265625,
        leftUpLon: 105.31768798828125,
        rightDownLat: 27.294158935546875,
        rightDownLon: 105.31906127929688,
      },
      index: 74.01,
    },
  ],
});
