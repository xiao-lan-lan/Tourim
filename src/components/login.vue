<template>
  <!-- 登录页面 -->
  <div class="boxLogin">
    <CommonHeader></CommonHeader>
    <div class="login">
      <div class="container">
        <div class="loginbar">
          <div class="logo">
            <img src="../../static/images/logo_dl.png" />
          </div>
          <div class="phone same">
            <img src="../../static/images/shouji_icon_dl.png" />
            <input placeholder="请输入您的手机号" v-model="mobile" />
          </div>
          <div class="password same">
            <img src="../../static/images/mima_icon_dl.png" />
            <input
              placeholder="请输入密码"
              type="password"
              v-model="password"
            />
          </div>
          <div class="verification">
            <input placeholder="请输入验证码" v-model="verification"/>
            <img :src="src" alt=""/>
          </div>
          <div class="change" @click="changeCode">看不清楚?换一个</div>
          <div class="sign" @click="toLogin">登录</div>
          <div class="managePassword">
            <div class="rememberPassword">
              <input type="checkbox" />
              <p>记住密码</p>
            </div>
            <div class="forgotPassword">忘记密码</div>
          </div>
          <div class="exit">已有账号？<span>直接登录</span></div>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
import CommonFooter from "./comment/CommonFooter.vue";
import CommonHeader from "./comment/CommonHeader.vue";
import { login, createValidateCode } from "../api/use.js";
export default {
  components: {
    CommonFooter,
    CommonHeader
  },
  data() {
    return {
      mobile: "",
      password: "",
      verification: "",
      src: ''
    };
  },
  methods: {
    //  登录
    async toLogin() {
      const fd = new FormData();
      fd.append("mobile", this.mobile);
      fd.append("password", this.password);
      fd.append("validateCode", this.verification);
      const res = await login(fd);
      //  this.$router.push({ path: 'login', name: 'login'})
    },
    //  验证码
    changeCode() {
      console.log(11);
      this.src = 'https://miao.inthink.com.cn/api/user/createValidateCode?num='+Math.random()
    }
  },
  created () {
    this.changeCode()
  }
};
</script>
<style scoped>
.login {
  background-image: url("../../static/images/bg_dl.png");
  height: 778px;
  width: 100%;
  background-size: 100% 100%;
}
.login .container {
  height: 100%;
  width: 1258px;
  margin: 0 auto;
  position: relative;
}
.login .container .loginbar {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 560px;
  width: 481px;
  background-color: white;
}
.login .container .loginbar .logo {
  height: 45px;
  width: 112px;
  margin: 58px auto 40px auto;
}
.login .container .loginbar .logo img {
  width: 100%;
  height: 100%;
}
.login .container .loginbar .same {
  margin: 0 auto 27px auto;
  width: 320px;
  height: 36px;
  position: relative;
  line-height: 36px;
}
.login .container .loginbar .same input {
  width: 316px;
  height: 32px;
  border: 1px solid #a2a2a2;
  text-indent: 38px;
  font-size: 14px;
  color: #afafaf;
  outline: none;
}
.login .container .loginbar .same input::placeholder {
  font-size: 14px;
  color: #afafaf;
}
.login .container .loginbar .same img {
  position: absolute;
  height: 22px;
  width: 15px;
  top: 7px;
  left: 11px;
}
.login .container .loginbar .verification {
  height: 36px;
  width: 316px;
  position: relative;
  line-height: 36px;
  margin: 0 auto 14px auto;
}
.login .container .loginbar .verification img {
  width: 80px;
  height: 30px;
}
.login .container .loginbar .verification input {
  height: 32px;
  border: 1px solid #a2a2a2;
  text-align: center;
  font-size: 14px;
  width: 197px;
  outline: none;
  float: left;
}
.login .container .loginbar .verification input::placeholder {
  text-align: center;
  font-size: 14px;
}
.login .container .loginbar .verification p {
  height: 32px;
  width: 103px;
  border: 1px solid #a2a2a2;
  float: left;
  margin: 0 0 0 12px;
  text-align: center;
}
.login .container .loginbar .change {
  height: 14px;
  width: 320px;
  margin: 0 auto 44px auto;
  color: #474747;
  font-size: 14px;
  text-align: right;
}
.login .container .loginbar .sign {
  width: 320px;
  height: 42px;
  line-height: 42px;
  color: #fffffe;
  font-size: 18px;
  letter-spacing: 16px;
  background-color: #872625;
  margin: 0 auto 27px auto;
  text-align: center;
}
.login .container .loginbar .managePassword {
  width: 320px;
  height: 27px;
  margin: 0 auto 44px auto;
  font-size: 14px;
  line-height: 27px;
}
.login .container .loginbar .managePassword .rememberPassword {
  width: 100px;
  float: left;
}
.login .container .loginbar .managePassword .rememberPassword input {
  height: 13px;
  width: 13px;
  margin-right: 6px;
  border: 1px solid #a2a2a2;
  float: left;
  margin-top: 7px;
}
.login .container .loginbar .managePassword .rememberPassword p {
  float: left;
  margin: 0;
}
.login .container .loginbar .managePassword .forgotPassword {
  float: right;
}
.login .container .loginbar .exit {
  height: 14px;
  width: 150px;
  margin: 0 auto;
  color: #474747;
  font-size: 14px;
}
.login .container .loginbar .exit span {
  color: #872625;
  font-size: 14px;
}
</style>
