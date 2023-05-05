/**
 * mock 数据模块
 * 可以拦截 ajax 请求，通过 mock 模块返回模拟数据，避免开发过程中因接口未完成导致进度阻塞
 * mockjs 文档: https://github.com/nuysoft/Mock/wiki
 */

import Mock from 'mockjs';

import './base';
import './customer';
import './area';
import './transport';
import './pop';
import './product';

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({ timeout: Math.random() * 300 });
Mock.XHR.prototype.withCredentials = true;

export default Mock;
