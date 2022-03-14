/*
 * @Author: liang
 * @Date: 2022-02-25 09:31:31
 * @LastEditors: liang
 * @LastEditTime: 2022-03-14 07:55:59
 * @Description: file content
 * @FilePath: \vue-cli3.0-vueadmin\src\icons\index.js
 */
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
// console.log(req)+
requireAll(req)
