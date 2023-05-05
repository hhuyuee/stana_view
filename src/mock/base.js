/* eslint-disable */
import Mock from 'mockjs';
import { after, mergeOk } from './interceptor';

// /mock/diagnose
Mock.mock(
  /\/base\/reachablePolygon\//,
  mergeOk([
    { latitude: 39.91091324906697, longitude: 116.49275358891332 },
    { latitude: 39.926629381258344, longitude: 116.49275914977027 },
    { latitude: 39.926537829140834, longitude: 116.52109283274139 },
    { latitude: 39.910821700642124, longitude: 116.5210872283419 }
  ])
);
