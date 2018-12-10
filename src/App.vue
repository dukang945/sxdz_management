<template>
  <div id="app">
    <el-container>
      <el-header>
        <img src="./images/icons/logo_home.png" alt>
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
      <el-main>Main</el-main>
    </el-container>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
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
        width: 36px;
        height: 44px;
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
