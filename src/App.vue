
<template>
  <div>
    <el-container>
      <el-header>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button :label="false">展开</el-radio-button>
          <el-radio-button :label="true">收起</el-radio-button>
        </el-radio-group>
        <img src="images/icons/logo_home.png" alt>
        <div class="container-right">
          <div class="icon-head">
            <i class="el-icon-service"></i>
          </div>
          <div class="userinfo">
            <span>admin</span>
            <span>消息 ()</span>
          </div>
          <div class="close">
            <a href="javascript;"></a>
          </div>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>技能管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="skillColumn" >技能栏目管理</el-menu-item>
                <el-menu-item index="skillDetail">技能详情管理</el-menu-item>
                <el-menu-item index="rotation">轮播图管理</el-menu-item>
                <el-menu-item index="act">节目管理</el-menu-item>
                <el-menu-item index="actDetail">节目详情管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="vipMsg">会员信息管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>美妆镜功能</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="icon">首页icon管理</el-menu-item>
                <el-menu-item index="feedback">用户反馈管理</el-menu-item>
                <el-menu-item index="aim">化妆目的管理</el-menu-item>
                <el-menu-item index="about">关于我们</el-menu-item>
                <el-menu-item index="teach">妆容教程管理</el-menu-item>
                <el-menu-item index="keyWord">关键词管理</el-menu-item>
                <el-menu-item index="constellation">星座管理</el-menu-item>
                <el-menu-item index="tag">标签管理</el-menu-item>
                <el-menu-item index="advice">化妆建议管理</el-menu-item>
                <el-menu-item index="constellationDetail">星座详情管理</el-menu-item>
                <el-menu-item index="member">美妆镜会员信息</el-menu-item>
                <el-menu-item index="marking">妆容打分分类</el-menu-item>
                <el-menu-item index="classify">美妆测评分类管理</el-menu-item>
                <el-menu-item index="evaluating">美妆测评管理</el-menu-item>
                <el-menu-item index="search">热搜信息管理</el-menu-item>
                <el-menu-item index="module">美妆模块图管理</el-menu-item>
                <el-menu-item index="temperament">妆容定制气质管理</el-menu-item>
                <el-menu-item index="face">妆容定制五官管理</el-menu-item>
                <el-menu-item index="markingDetail">妆容打分描述</el-menu-item>
                <el-menu-item index="strategy">护肤攻略管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>产品相关</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="brand">品牌管理</el-menu-item>
                <el-menu-item index="product">产品分类管理</el-menu-item>
                <el-menu-item index="ingredient">化妆品成分管理</el-menu-item>
                <el-menu-item index="issue">肌肤问题管理</el-menu-item>
                <el-menu-item index="main">步骤主类管理</el-menu-item>
                <el-menu-item index="branch">步骤子类管理</el-menu-item>
                <el-menu-item index="makeup">化妆产品管理</el-menu-item>
                <el-menu-item index="color">产品色号管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户权限</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="part">角色管理</el-menu-item>
                <el-menu-item index="menu">菜单管理</el-menu-item>
                <el-menu-item index="user">后台用户管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统管理</span>
              </template>
              <el-menu-item-group></el-menu-item-group>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>系统监控</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="date">系统日志</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app,
html,
body {
  width: 100%;
  height: 100%;
}
.el-header {
  text-align: center;
}
.el-submenu .el-menu-item {
  min-width: 199px;
}
.el-radio-group {
  float: left;
  margin-top: 30px;
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  height: 100%;
  overflow: hidden;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.el-header {
  height: 100px !important;
  background-color: rgb(14, 127, 183);
  img {
    width: 340px;
    height: 44px;
    margin-top: 28px;
  }
  .container-right {
    width: 340px;
    height: 100%;
    float: right;
    div {
      float: left;
    }
    .icon-head {
      background-color: #fff;
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin: 10px 20px 0;
      i {
        width: 50px;
        height: 50px;
        font-size: 50px;
        padding: 15px;
        color: #0087b4;
      }
    }
    .userinfo {
      width: 160px;
      height: 46px;
      color: #fff;
      margin-top: 27px;
      span {
        display: block;
        height: 25px;
      }
    }
    .close {
      color: #fff;
      margin-top: 28px;
      a {
        display: inline-block;
        padding-left: 2px;
        margin-right: 10px;
        color: #fff;
        width: 40px;
        height: 44px;
        background: url(images/icons/btn_logout.png) no-repeat;
        background-size: 100% 100%;
      }
    }
  }
}
</style>