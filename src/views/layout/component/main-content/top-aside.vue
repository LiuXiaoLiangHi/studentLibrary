<template>
  <!-- 头部 top -->
  <aside class="aside__top">
    <!-- 折叠 -->
    <span
      class="toggleNavCollapse"
      :class="{ active: isSidebarNavCollapse }"
      @click="toggleNavCollapse"
    >
      <img src="@/style/image/iconNav.png" alt="" />
    </span>
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
        <template v-for="(route, i) in crumbList">
          <el-breadcrumb-item
            :key="route.name"
            :to="{ name: route.name }"
            v-if="route.name != 'home' && route.meta.name != '首页'"
            :class="{ 'is-last-link': i == crumbList.length - 1 }"
          >
            {{ route.meta.name }}
          </el-breadcrumb-item>
        </template>
      </transition-group>
    </el-breadcrumb>
    <!-- 右侧用户信息以及退出 -->
    <div class="aside__top--right">
      <!-- 用户 -->
      <div class="user-msg">
        <img class="user-img" :src="avatar" alt="" />
        <span class="user-name">{{ account }}</span>
        <!-- 点击出现 -->
        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!--  -->
      </div>
      <!-- 退出 -->
      <div class="quit-system" @click="loginOut">
        <span class="iconfont icon-quit">
          <img src="@/style/image/退出.png" alt="" width="24px" height="24px" />
        </span>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "crumbList"]),
    ...mapState("permission", ["avatar", "account"]),
  },
  methods: {
    toggleNavCollapse() {
      this.$store.commit("toggleNavCollapse");
    },
    loginOut() {
      this.$store.commit("LOGIN_OUT");
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload();
    },
  },
};
</script>

<style lang="less" scoped>
// 头部样式
.aside__top {
  border-bottom: 1px solid #dcdfe6;
  height: 50px;
  line-height: 50px;
  background: #fff;
  z-index: 1000;
  // 固定定位
  position: fixed;
  left: 200px;
  top: 0;
  right: 0;
  //切换折叠时的速度
  transition: left 0.25s;
  // 垂直方向元素都居中
  display: flex;
  align-items: center;
  // 折叠样式
  .toggleNavCollapse {
    display: inline-block;
    margin-left: 8px;
    padding: 0 10px;
    font-size: 26px;
    vertical-align: middle;
    color: #333;
    cursor: pointer;
    transition: all 0.5s;
    // 被点击后旋转90度
    &.active {
      transform: rotate(90deg);
    }
  }
//右侧总体样式
  .aside__top--right {
    position: absolute;
    right: 10px;
    top: -1px;
    bottom: 0px;
    .quit-system{
      height: 50px;
    }
    > div {
      position: relative;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      padding: 0 15px;
      cursor: pointer;

      &:hover::after {
        transform-origin: 0 0;
        transform: scaleX(1);
      }
      // 第一个div让左侧斜杠(边框)访问前消失
      &:first-child:before {
        border: none;
      }
      // 当前元素访问后下面出现红线
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ef4747;
        transform: scaleX(0);
        transform-origin: right 0;
        transition: transform 0.5s;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        top: 50%;
        left: -8px;
        margin-top: -10px;
        border-left: 1px solid #ccc;
      }
      &.email {
        i {
          position: absolute;
          left: 18px;
          top: -12px;
          border-radius: 20px;
          background: red;
          color: #fff;
          text-align: center;
          font-size: 12px;
          line-height: 1.5;
          min-width: 20px;
          min-height: 20px;
        }
      }
      &.user-msg {
        .user-img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-name {
          color: #758eb5;
          padding: 0 4px;
        }
      }
      .iconfont {
        position: relative;
        font-size: 24px;
        color: #758eb5;
      }
    }
  }
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
