<template>
<div class="web_top">
   <div class="header">
            <div class="container">
                <ul class="nav">
                    <li style=" padding: 0">
                    <span>走近瞄世界-展示你的风采</span>
                    </li>
                </ul>
                <ul class="nav">
                    <li>
                     <router-link :to="{ path: '/login'}"><span style="margin-right：10px">登录    |</span></router-link>  
                     <router-link :to="{ path: '/register'}">   <span>  注册</span></router-link>
                    </li>
                    <li>
                        <span>你好，田老师</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="body-1">
            <!-- 导航栏 -->
            <ul class="nav">
                <li class="left-nav">
                	<img src="../../../static/images/首页/logo_caise_home.png"/>
                </li>
                <li class="li" :class="[{active:num==1}]">首页</li>
                <li class="li" :class="[{active:num==2}]">文博咨询</li>
                <li class="li" :class="[{active:num==3}]">文博视频</li>
                <li class="li" :class="[{active:num==4}]">摄影大赛</li>
                <li class="li" :class="[{active:num==5}]">专家团队</li>
                <li class="li" :class="[{active:num==6}]">关于我们</li>
            </ul>
        </div>
        </div>
</template>
<script>
export default {
  name: "CommonHeader",
  props:['num'],
  data() {
    return {};
  }
};
</script>
<style  scoped>
.web_top{
    min-width: 1170px;
    background: white;
}
/* 头部导航部分 */
.web_top .header{
    width: 100%;
    background-color:#F4F0E5;
}
.web_top .header .container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1258px;
    height: 40px;  
    margin: 0 auto;
    line-height: 40px;
}
.web_top .header .container .nav {
    display: flex;
}
.web_top .header .container .nav li{
    padding: 0 14px;
    display: flex;
}
.web_top .header .container .nav li span{
    position: relative;
    font-size: 12px;
    cursor: pointer; 
    text-decoration: none;
    font-size:14px;
font-family:Source Han Sans CN;
font-weight:400;
color:rgba(71,71,71,1);
}
.web_top .header .container .nav span:hover{
    color:#f40;
    text-decoration: underline;
}

/* 内容区域 */
.web_top .body-1{
    width: 100%;
    margin: 0 auto;
    background: url('../../../static/images/首页/hong_bg_home.png');
}
.body-1 .nav{
    display: flex;
    height:60px;
    line-height: 60px;
    width: 1258px;
	margin: 0 auto;
	
}
.body-1 .nav .li{
    display: flex;
    height: 60px;
    margin: 0 22px;
    color: #fff;
    font-size: 16px;
    font-weight: 500;
}
.body-1 .nav .li:hover{
	color: #FFBE6B;
	border-bottom: 4px solid #E3A14D;
	cursor: pointer;
}
.body-1 .nav .left-nav{
    width: 300px;
    line-height: 60px;
}
.body-1 .nav .active{
	color: #FFBE6B;
	border-bottom: 4px solid #E3A14D;
}
.body-1 .nav .left-nav img{
	width: 95px;
    margin-top: 10px;
}
</style>