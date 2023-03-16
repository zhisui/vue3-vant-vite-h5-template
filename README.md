# vue3-vant4-h5

此模板用于手机h5开发
## 初始化项目
基于[create-vue](https://github.com/vuejs/create-vue)初始化项目，可根据提示选择安装依赖，此模板已配置好vue-router、pinia、eslint、prettier。

 ## 安装UI库
手机端ui库使用 [vant4](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart)，引入方式采用按需引入
### 安装
```bash
# 默认安装v4版本
npm i vant
```
### 安装按需导入插件
```bash
# 通过 npm 安装
npm i unplugin-vue-components -D

# 通过 yarn 安装
yarn add unplugin-vue-components -D

# 通过 pnpm 安装
pnpm add unplugin-vue-components -D

```
### 配置vite.config.ts

```js
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
export default {
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};
```

Toast,Dialog函数组件引用方式详见[官网](https://vant-contrib.gitee.io/vant/#/zh-CN/quickstart)


## 代码检查和代码规范

在初始化项目中已引入eslint和prettier,并引入了针对vue语法检查的eslint-plugin-vue
### 引入[eslint-plugin-vue-scoped-css](https://github.com/future-architect/eslint-plugin-vue-scoped-css)

```js
npm install --save-dev eslint eslint-plugin-vue-scoped-css vue-eslint-parser
```
相关的规则可在.eslitric.js中配置，配置细则见[文档](https://future-architect.github.io/eslint-plugin-vue-scoped-css/rules/)







