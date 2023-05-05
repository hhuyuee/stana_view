### 相关网址

- 线上地址:http://test-uc.urban-computing.cn/generalSelectArea/
- 设计稿: https://lanhuapp.com/web/#/item/project/board?pid=f2fca219-3673-4b9e-bbee-fa224c14f863&see=all
- 原型图: https://o7nvqb.axshare.com/#g=1&p=%E9%80%9A%E7%94%A8%E9%80%89%E5%9D%80%EF%BC%88%E6%96%B0%EF%BC%89
- 接口地址: https://cf.jd.com/pages/viewpage.action?pageId=214527754
- 坐标转化插件地址： https://github.com/hujiulong/gcoord#crs

### 项目人员

- 前端: 肖昭颢， 赵文浩
- 后端: 王棚
- 产品: 颜萍，王涵
- 数据: ...

### 上线流程

- dev分支，登录jenkins: http://ucinfo.jd.com/jenkins/job/hlj-generalSelectArea-qianduan/ ,点击立即构建


## 二期
### 开发环境
#### 装包

```bash
# 安装jnpm
npm install @jd/jnpm -g --registry=http://registry.m.jd.com

# 用jnpm装包
jnpm i
```

* 修改本地host
``` bash
127.0.0.1 local.jd.com
10.222.8.232 back.jd.com
```