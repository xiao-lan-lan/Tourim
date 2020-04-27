<template>
     <!-- 个人中心-修改资料 -->
    <div class='personReviseBox'>
        <CommonHeader></CommonHeader>
        <div class='personRevise'>
          <div class='container'>
              <div class='personReviseNav'>
                  <p class='titleNav'>首页 > 个人中心-修改资料</p>
                  <div class='headImg'>
                      <img src='../../static/images/morentouxiang_dsbm.png'>
                  </div>
                  <div class='size'>设置头像建议尺寸：150*150</div>
                  <div class='line'></div>
                  <div class='name same'>
                      <span>设置昵称</span>
                      <input placeholder="请输入昵称">
                  </div>
                  <div class='same form'>昵称由汉字或数字或字母组成</div>
                  <div class='phone same'>
                      <span>设置手机</span>
                      <input placeholder="请输入手机号">
                  </div>
                  <div class='verification'>
                      <input placeholder="请输入验证码">
                      <span>获取验证码</span>
                  </div>
                  <div class='local'>
                      <span>地域设置</span>
                      <select name="">
                          <option :vlaue='item' v-for='(item,index) in area' :key='index'>{{item.selectprovinc}}</option>
                      </select>
                      <select name="" class='second'>
                          <option :vlaue='item' v-for='(item,index) in area[0].city' :key='index'>{{item}}</option>
                      </select>
                  </div>
                  <div class='introduce'>
                      <span>个人介绍</span>
                      <textarea></textarea>
                  </div>
                  <div class='promit'>提交</div>
              </div>
          </div> 
      </div>
      <CommonFooter></CommonFooter>
    </div>
</template>
<script>
import CommonFooter from './comment/CommonFooter.vue'
import CommonHeader from './comment/CommonHeader.vue'
export default {
  components: {
    CommonFooter,
    CommonHeader
  },
  mounted(){
  },
   data(){
     return{
        area:[
            {
                selectprovinc:'选择省',
                city:[
                    '选择市'
                ]
            },
            {
            selectprovinc:'河北省',
            city:[
                "廊坊市",'秦皇岛市'
            ]
            },
            {
            selectprovinc:'福建省',
            city:[
                "厦门市",'泉州市'
            ]
            },
            {
            selectprovinc:'山东省',
            city:[
                "青岛市",'济南市'
            ]
            },
        ],
        selectprovinc:'选择省',
        selectcity:'选择市'
     }
   },
   methods:{
   }
}
</script>
<style scoped>
   .personRevise{
       width: 100%;
       font-family: 'SourceHanSansCN-Regular';
       overflow: hidden;
       padding-bottom:127px;
   }
   .personRevise .container{
     height: 100%;
     width: 1258px;
     margin:0 auto;
     position: relative;
   }
   .personRevise .titleNav{
       font-size:14px;
       margin:27px 0 74px 38px;
       color:#474747;
   }
   .personRevise .headImg{
       height: 97px;
       width: 97px;
       padding:27px;
       background-color: #EEEEEE;
       margin:0 auto 26px auto;
   }
   .personRevise .headImg img{
       height: 100%;
       width: 100%;
   }
   .personRevise .size{
       width: 230px;
       height: 17px;
       font-size:13px;
       margin:0 auto 46px auto;
       color:#474747;
       text-align: center;
   }
   .personRevise .line{
       background-color: #E0E0E0;
       height: 1px;
       width: 100%;
       margin-bottom:54px;
   }
   .personRevise .same{
       width: 578px;
       margin: 0 auto 27px auto;
       display: flex;
       align-items: center;
       color:#474747;
   }
   .personRevise .same input{
       width: 468px;
       outline: none;
       text-indent: 10px;
       color:#A2A2A2;
       font-size:14px;
       height: 26px;
       margin-left:30px;
   }
   .personRevise .same input::placeholder{
       text-indent: 10px;
       color:#A2A2A2;
       font-size:14px;
   }
   .personRevise .same span{
       font-size:18px;
       color:#474747;
   }
   .personRevise .form{
       display: block;
       text-align: right;
       font-size:14px;
       color:#474747;
   }
   .personRevise .verification{
       width: 578px;
       margin: 0 auto 27px auto;
       display: flex;
       align-items: center;
       justify-content: flex-end;
       color:#474747;
   }
   .personRevise .verification input{
       width: 301px;
       outline: none;
       text-indent: 10px;
       color:#A2A2A2;
       font-size:14px;
       height: 26px;
       margin-right:10px
   }
   .personRevise .verification span{
       width: 161px;
       height: 30px;
       background-color: #E3A14D;
       color:white;
       font-size:14px;
       text-align: center;
       line-height: 30px;
   }
   .personRevise .local{
       width: 578px;
       margin: 0 auto 27px auto;
       display: flex;
       align-items: center;
       color:#474747;
   }
   .personRevise .local span{
       font-size:18px;
       color:#474747;
   }
   .personRevise .local select{
       width: 231px;
       outline: none;
       text-indent: 10px;
       color:#A2A2A2;
       font-size:14px;
       height: 30px;
       margin-left:29px;
   }
   .personRevise .local  .second{
       margin-left:14px;
   }
   .personRevise .introduce{
       display: flex;
       height: 140px;
       margin: 0 auto 77px auto;
       color:#474747;
       width: 578px;
   }
   .personRevise .introduce span{
       font-size: 18px;
       color: #474747;
       margin-right:29px;
   }
   .personRevise .introduce textarea{
       width: 474px;
       height: 129px;
   }
   .personRevise .promit{
     width: 486px;
     height: 40px;
     line-height: 40px;
     color:#FFFFFE;
     font-size:18px;
     letter-spacing:16px;
     background-color: #872625;
     text-align: center;
     margin-left:437px;
   }
</style>
