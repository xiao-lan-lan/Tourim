<template>
<!-- 注册页面 -->
  <div class="hello">
    <CommonHeader></CommonHeader>
    <div class="content">
      <div class="inner">
        <div class="reg">
          <img src="../../static/images/logo_dl.png" alt />
          <form>
            <label style="margin:0 66px 0 30px">
              <input v-model="registerData.userType" name="Reg" type="radio" value='0' />个人注册
            </label>

            <label>
              <input v-model="registerData.userType" name="Reg" type="radio" value='1' />机构/团体注册
            </label>
            <input @input="loginNameChange" v-model="registerData.loginName" type="text" placeholder="请输入个人/机构全称" /><i v-show="userNameIfExist !== '0' " style="color:red;position:absolute;font-size:14px;">该名称已被使用</i>
            <select v-model="registerData.provinceId" style="width: 320px;height: 36px;margin-bottom: 10px;">>
              <option 
                style="padding-left: 11px;"
                v-for="(item,index) in address"
                :key="index"
                :value="item.provinceId"
              >
                {{item.province}}
              </option>
            </select>
            <input v-model="registerData.pwd" type="password" placeholder="请输入密码" />
             <input v-model="registerData.param1" type="password" placeholder="请确认密码" />
            <input v-model="registerData.mobile" type="text"  placeholder="请输入你的手机号"/>
             <input v-model="registerData.msgCode" type="text"  placeholder="请输入验证码" style="width:197px; margin-right:12px" /><span :class="{'send-code': !isSendCode}" @click="onSendCode">{{isSendCode ? '获取验证码' : `${second}秒后重新获取`}}</span>
             <button @click="onRegister">注册</button>
          </form>
          <p>已有账号，直接登录</p>
        </div>
      </div>
    </div>
    <CommonFooter></CommonFooter>
  </div>
</template>

<script>
import CommonHeader from "./comment/CommonHeader";
import CommonFooter from "./comment/CommonFooter";
import { registerPost, sendCodePost, getUserNameIfExistPost } from '../api/use'
export default {
  name: "register",
 data(){
   return{
    second: 0,
    userNameIfExist: "0",
    address:[
      {provinceId: '1', province:"北京"},
      {provinceId: '2', province:"天津"}
    ],
    registerData: {
      loginName: '', //'帐号名，机构名 必传'
      pwd: '', // 密码
      userType: 0, // 用户注册类型，0个人，1机构
      mobile: '', // 手机
      provinceId: '1', //'省份编码'
      province: '', // 省份名
      msgCode: '', // 临时验证码
      param1: '', // 确认密码临时参数
    }
   }
 },
  components: {
    CommonHeader: CommonHeader,
    CommonFooter: CommonFooter
  },
  computed: {
    isSendCode() {
      return !this.second
    }
  },
  methods: {
    async loginNameChange() {
      const formData = new FormData()
      formData.append('name', this.registerData.loginName)
      const { data } =await getUserNameIfExistPost()
      
      if (data.code !== 0) return
      this.userNameIfExist = data.data

    },
    async onRegister() {

      const provinceFlag = this.address.find(item => item.provinceId === this.registerData.provinceId )
      if (!provinceFlag) return
      this.registerData.province = provinceFlag.province

      const formData = new FormData()
      for (const key in this.registerData) {
        formData.append(key, this.registerData[key])
      }
      const { data } = await registerPost(formData)
      
      alert(data.msg)
      // 判断是否注册成功
      if (data.code !== 0) return

      this.$router.push('/login')
    },
    async onSendCode() {
      const formData = new FormData()
      formData.append('mobile', this.registerData.mobile)
      const { data } = await sendCodePost(formData)
      
      alert(data.msg)
      // 判断是否注册成功
      if (data.code !== 0) return

      this.second = 10
      const intervalFlag = setInterval(()=>{
        this.second -= 1
        if (this.isSendCode) clearInterval(intervalFlag)
      }, 1000 )
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{
    margin: 0px;
    padding: 0px;
    list-style: none;
    text-decoration: none;
    font-size: 16px;
    color:#474747;
    box-sizing: border-box;
    /* background: rgb(245, 238, 238) ; */
}
.content {
  width: 100%;
  height: 778px;
  background-image: url("../../static/images/bg_dl.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.content .inner {
  height: 778px;
  position: relative;
}
.content .inner .reg {
  width: 481px;
  height: 560px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 5px 9px 30px 0px rgba(191, 191, 191, 0.3);
  border-radius: 10px;
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
  padding: 30px 80px 0 80px;
}
.content .inner .reg img {
  display: block;
  width: 112px;
  height: 45px;
  margin: 0 auto;
  margin-bottom: 15px;
}
.content .inner .reg form{
  overflow: hidden;
  margin-bottom: 22px;
}
.content .inner .reg form label {
  float: left;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(71, 71, 71, 1);
  margin-bottom: 10px;
}
.content .inner .reg form label input {
  width: 16px;
  height: 16px;
  border: 1px solid rgba(188, 176, 147, 1);
  margin-right: 3px;
  border-radius: 50%;
}

.content .inner .reg form input {
  width: 320px;
  height: 36px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(162, 162, 162, 1);
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 11px;
}
.content .inner .reg form span{
  display: inline-block;
  width:111px;
height:36px;
background:rgba(227,161,77,1);
border:1px solid rgba(227, 161, 77, 1);
border-radius:5px;
font-size:14px;
font-family:Source Han Sans CN;
font-weight:500;
color:rgba(255,255,255,1);
text-align: center;
line-height: 36px;
}
.content .inner .reg form span.send-code {
  background-color: #f5f5f5 ;
  border-color: #ccc;
  color: #ccc;
}
.content .inner .reg form button{
  margin-top: 30px;
  width:320px;
height:42px;
background:rgba(135,38,37,1);
border:1px solid rgba(135, 38, 37, 1);
border-radius:5px;
font-size:18px;
font-family:Source Han Sans CN;
font-weight:400;
color:rgba(255,255,254,1);
text-align: center;
line-height: 42px;
}
.content .inner .reg p{
 
  width:130px;
height:20px;
font-size:14px;
font-family:Source Han Sans CN;
font-weight:400;
color:rgba(71,71,71,1);
margin: 0 auto;
line-height: 20px;
}
</style>
