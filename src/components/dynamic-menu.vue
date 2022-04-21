<!--
 * @Author: liang
 * @Description: 左侧导航栏具体结构，通过递归方式快速生成结构,只能通过父组件爱你传递全部路由，不然递归会炸
  ____________________________________________________________________________________________________________________
   |      名称             |      描述        | 数据类型       |            来源                                       |
   |       menuList       |  侧边栏的所有路由 | Array[object]  |通过prop从父组件得到，当然你也可以直接从permission模块获取|        
   |     gotoRoute        |   去往指定的路由 |   Function     | 当前文件夹的methods                                   |
   |     sidebarMenu     |  侧边栏的所有路由 |  Array[object] |  store文件夹下的permission模块                        |
   |_____________________|_________________|________________|______________________________________________________|

   menuList结构如下
   [
     {
       component:Index(组件名称),
       childern:[...],
       meta:{
         icon:xx
         iconColor:xxx
         name:二级等标题
       }
       name:一级标题,
       path:路径
      }
   ]
-->
<template>
  <div class='menu-container'>
      <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
    <template v-for='v in menuList'>
      <!-- 有子路由在这渲染 -->
      <el-submenu
        :index='v.name'
        v-if='v.children&&v.children.length>0'
        :key='v.name'
      >
        <template slot='title'>
          <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon" style="margin-right:16px"></svg-icon>
          <span>{{v.meta.name}}</span>
        </template>
        <el-menu-item-group>
          <my-nav :menuList='v.children'></my-nav>
        </el-menu-item-group>
      </el-submenu>
      <!-- 没有子路由在这渲染 -->
      <el-menu-item
        :key='v.name'
        :index='v.name'
        @click='gotoRoute(v.name)'
        v-else
      >
       <!-- <i :class="v.meat.icon"></i> -->
        <!-- <i
          class='iconfont'
          :class='v.meta.icon'
          :style="v.meta.iconColor"
        ></i> -->
        <svg-icon v-if="v.meta&&v.meta.icon" :icon-class="v.meta.icon"></svg-icon>
        <span slot='title'>{{v.meta.name}}</span>
      </el-menu-item>
    </template>
      <!-- </el-scrollbar> -->
  </div>
</template>

<script>
export default {
    name: 'my-nav',
    props: {
        menuList: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods: {
        gotoRoute(name) {
            this.$router.push({ name })
        }
    }
}
</script>

<style lang='less'>

</style>
