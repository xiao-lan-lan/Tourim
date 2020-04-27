<template>
  <div>
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
              <router-link :to="{ path: '/login'}">
                <span style="margin-right：10px">登录 |</span>
              </router-link>
              <router-link :to="{ path: '/register'}">
                <span>注册</span>
              </router-link>
            </li>
            <li>
              <span>你好，田老师</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="body-bg">
      <div class="body-1">
        <!-- 导航栏 -->
        <ul class="nav">
          <li class="left-nav">
            <img src="../../static/images/首页/logo_caise_home.png" />
          </li>
          <li class="li right-first">首页</li>
          <li class="li">文博咨询</li>
          <li class="li">文博视频</li>
          <li class="li">摄影大赛</li>
          <li class="li">专家团队</li>
          <li class="li">关于我们</li>
        </ul>
      </div>
     
      
 <div class='centers'>
        <ul class="tab" @mouseenter="showRightLeft" @mouseleave="hideRightLeft">
              <li v-for="(item,index) in dataimg" :key="index" :class="{'active':currentIndex==index}">
                <img :src="item.images">
              </li>
        </ul>
        <div :class="leftRight?'centerLeft active':'centerLeft'" @click="centerLeft" @mouseenter="hideT" @mouseleave="showT">
              <
        </div>
        <div :class="leftRight?'centerRight active':'centerRight'" @click="centerRight" @mouseenter="hideT" @mouseleave="showT">
               >
        </div>
        <ul class="list">
                <li v-for="(item,index) in dataimg" :key="index" :class="{'active':currentIndex==index}"  @mouseenter="changeImg(index)" @mouseleave="showT"></li>
        </ul>
    </div>
    </div> 
    <!-- 轮播图 -->
   
    <div class="body-bg">
      <div class style="margin-top: 36px;">
        <img style="width: 100%;" src="../../static/images/首页/bg1_home.png" />

        <ul class="article" style="top: 23px;">
          <li class>
            <img src="../../static/images/首页/image1_home.png" />
            <div>
              <img src="../../static/images/首页/bf_icon_home.png" />
              “瞄世界”项目丹麦推介及大会签约 促进中国文化走向世界
            </div>
          </li>
          <li class>
            <img src="../../static/images/首页/image2_home.png" />
            <div>“瞄世界”项目第一站走近欧洲促进走偶文化交流</div>
          </li>
          <li class>
            <img src="../../static/images/首页/image3_home.png" />
            <div>瞄世界博物馆儿童教育计划与中国教育电视台战略</div>
          </li>
        </ul>
        <ul class="article" style="bottom: 23px;">
          <li>
            <img src="../../static/images/首页/image4_home.png" />
            <div>国际5.18博物馆日丹麦腓特烈堡来自东方的问候</div>
          </li>
        </ul>
      </div>
    </div>
	<div class="body-bg" style="margin-top: 60px;min-height: 480px;background: url(../../static/images/首页/bg2_home.png);padding-top: 90px;padding-bottom: 50px;background-repeat: no-repeat;"><!--display: flex;justify-content: center;-->
			<!--<img style="width: 100%;" src="../../static/images/首页/bg2_home.png"/>-->
        	<div class="first_photo">
        		<img class="image5_home" src="../../static/images/首页/image5_home.png"/>
        		<div class="up_work">
        			<p>上传</br>作品</p>
        			
        		</div>
        		<div class="up_work" style="margin-left: 139px;">
        			<p>大赛</br>现场</p>
        		</div>
        		<div class="red_div">
        			<h3>首届摄影大赛</h3>
        			<p>征集时间：</br>2020年2月2日 至 2020年4月16日</p>
                    <p>展览时间：</br>2020年6月0日 至 2020年8月20日</p>
					<p>展览主旨：5.18博物馆日恭王府博物馆非遗演出</p>
					<p>展览形式：开放式欧洲巡展</p>
					<p>主办单位：</br>中国民族文化艺术发展基金会</p>
					<p>承办单位：</br>丹麦国家历史博物馆，北京星光灿烂影视文化发展有限公司，北京星光灿烂影视文化发展有限公司</p>
					<p>其它文字:</br>由于参观人数较多，请提前到场签到</p>
        		</div>
        	</div>
        	
        </div>
        <div class="body-2">
            <div class="item">
                <div class="text">
	        		<h3>文博资讯</h3>
	        	</div>
                
                <ul class="zixun content">
	        		<li class="content-item" v-for="(item,index) in Culturalbloginformation" :key="index">
		        		<img :src="item.img"/>
                	<img class="fd" :src="item.img1"/>
		        		<div class="message">
		        			<h3>{{item.title}}</h3>
		        			<p class="message_p">{{item.describe}}</p>
		        			<hr />
                            <div class="duanping">
                                <p v-for="(item1,index) in item.child" :key="index">{{item1.text}}<span  class="data">{{item1.time}}</span></p>
                            </div>
		                    
						
		        		</div>
		        	</li>
	        	</ul>
            </div>
            
        </div>
        
    <div class="body-2" style="margin: 0px auto 0; background: #F4F4F4;">
      <div class="item">
        <div class="text">
          <h3>文博视频</h3>
        </div>
        <ul class="zixun content">
          <li class="content-item" v-for="(item,index) in Culturalblogvideo" :key="index">
            <img :src="item.img" />
            <div class="message">
              <img :src="item.img1" />
              <h3>{{item.title}}</h3>
              <p class="message_p">{{item.describe}}</p>
              <div>
                <a href="#">进入》</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="body-3">
      <div class="text" style="text-align: center;">
        <h3>专家阵容</h3>
      </div>
      <div class="text" style="text-align: center;margin-top: 15px;">
        <span :class="[{active:num==1}]" @click="change(1)">【顾问委员会】</span>
        <img
          style="margin: 0 52px 0 44px;"
          src="../../static/images/首页/fengexian_zhuanjiazhenrong_home.png"
        />
        <span :class="[{active:num==2}]" @click="change(2)">评审委员会</span>
      </div>
      <div class="content" v-show="num==1">
        <div class="item" v-for="(item,index) in expert" :key="index">
          <img :src="item.img" alt />
          <div>
            <h3>{{item.name}}</h3>
            <p class="desc-1">{{item.profession}}</p>
            <p class="desc-2">
              {{item.school}}
              <br />
              {{item.unit}}
            </p>
          </div>
        </div>
      </div>
      <div class="content" v-show="num==2">
        <div class="item" v-for="(item,index) in Committee" :key="index">
          <img :src="item.img" alt />
          <div>
            <h3>{{item.name}}</h3>
            <p class="desc-1">{{item.profession}}</p>
            <p class="desc-2">
              {{item.school}}
              <br />
              {{item.unit}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="body-bg bghou">
      <!--display: flex;justify-content: center;
      <img style="width: 100%;min-height: 355px;" src="../../static/images/首页/bg4_home.png"/>-->
      <div class="section">
        <img class="image5_home" src="../../static/images/首页/image12_home.png" />
        <div class>
          <p style="font-size: 12px;display: flex;justify-content: space-between;">
            <text style="font-size: 12px;">海报故事第1期</text>
            <text style="font-size: 12px;">2020/03/07</text>
          </p>
          <p style="font-size: 18px;margin-top: 10px;">瞄世界走近丹麦腓特烈堡</p>
          <hr style="margin: 10px 0 26px 0;" />

          <p
            style="font-size: 14px;color: #767676;"
          >“瞄世界博物馆儿童教育计划”，将通过博物馆内容播出，寻找并整合优质资源文博内容，设计打造专属于孩子们的展览。我们将“融”博物馆馆藏资源，“拓”展览科技应用新思路，“创”孩子带家长去看展的新理念。</p>
        </div>

        <div class="message title">
          <p>第1期 喵世界走近丹麦腓特烈堡堡</p>
          <p>第2期 标题标题标题标题标题标题</p>
          <p>第3期 标题标题标题标题标题标题</p>
          <p>第4期 标题标题标题标题标题标题</p>
        </div>
      </div>
    </div>

    <CommonFooter></CommonFooter>
  </div>
</template>
<script>
import CommonHeader from "./comment/CommonHeader";
import CommonFooter from "./comment/CommonFooter";
export default {
  name: "index",
  mounted(){
    let that=this
    this.t=setInterval(that.playImg,3000)
  },
  data() {
    return {
      num: "1",
      dataimg:[{images:"./static/images/banner_gywm.png"},{images:"./static/images/banner_zbdw.png"},{images:"./static/images/首页/banner_home.png"}],
      Culturalbloginformation: [
        {
          img: "./static/images/首页/image6_home.png",
          img1: "../../static/images/文博资讯/zixun_wbzx.png",
          title: "“瞄世界”项目丹麦推介及大会签约",
          describe:
            "项目自2016年在文化部恭王府博物馆首播连线丹麦腓特烈堡将博物馆以来至今……",
          child: [
            { text: "“北海之龙”从全球视角看维京时……", time: "2020-02-25" },
            { text: "中国设计在丹麦展现文化中国", time: "2020-02-25" },
            { text: "七夕，博物馆的正确打开方式", time: "2020-02-25" },
            { text: "圆明园考古现场首次网络直播", time: "2020-02-25" }
          ]
        },
        {
          img: "./static/images/首页/image7_home.png",
          img1: "../../static/images/文博资讯/lvyou_wbzx.png",
          title: "国宝深夜脱口秀：博物馆直播也带货",
          describe:
            "晚上8点钟，坐在自家客厅，一个人，用一部手机和一台iPad，白雪松开始“国宝深夜脱口秀”……",
          child: [
            { text: "“孔子的智慧”文化展", time: "2020-02-25" },
            { text: "“摄影师镜头中的智化寺”摄影作品", time: "2020-02-25" },
            { text: "“美无止境——韩美林的雕塑世界”", time: "2020-02-25" },
            { text: "清明节期间北京地区博物馆活动总览", time: "2020-02-25" }
          ]
        },
        {
          img: "./static/images/首页/image8_home.png",
          img1: "../../static/images/文博资讯/xianchang_wbzx.png",
          title: "网上工业博物馆大有可为",
          describe:
            "近年来，随着工业遗产保护利用越来越受到关注，对于工业博物馆的讨论也越多也日益增高。",
          child: [
            { text: "红色文物 记录红色历程", time: "2020-02-25" },
            { text: "过年来看这个展，正合适！", time: "2020-02-25" },
            { text: "国宝“虎鎣”昨日在国博现真容", time: "2020-02-25" },
            { text: "资讯标题资讯标题资讯标题 ", time: "2020-02-25" }
          ]
        }
      ],

      Culturalblogvideo: [
        {
          img: "./static/images/首页/image9_home.png",
          img1: "./static/images/首页/bf_icon_wenhuoshipin_home",
          title: "“瞄世界”项目丹麦推介及大会签约",
          describe:
            "项目自2016年在文化部恭王府博物馆首播连线丹麦腓特烈堡将博物馆以来至今……"
        },
        {
          img: "./static/images/首页/image10_home.png",
          img1: "./static/images/首页/bf_icon_wenhuoshipin_home",
          title: "国宝深夜脱口秀：博物馆直播也带货",
          describe:
            "晚上8点钟，坐在自家客厅，一个人，用一部手机和一台iPad，白雪松开始“国宝深夜脱口秀”……"
        },
        {
          img: "./static/images/首页/image11_home.png",
          img1: "./static/images/首页/bf_icon_wenhuoshipin_home",
          title: "网上工业博物馆大有可为",
          describe:
            "近年来，随着工业遗产保护利用越来越受到关注，对于工业博物馆的讨论也越多也日益增高。"
        }
      ],

      expert: [
        {
          img: "./static/images/首页/tx1_image_home.png",
          name: "田修铭",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx2_image_home.png",
          name: "张晓宁",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx3_image_home.png",
          name: "高广旭",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx4_image_home.png",
          name: "郝金亭",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        }
      ],

      Committee: [
        {
          img: "./static/images/首页/tx1_image_home.png",
          name: "田修铭1",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx2_image_home.png",
          name: "张晓宁",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx3_image_home.png",
          name: "高广旭",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        },
        {
          img: "./static/images/首页/tx4_image_home.png",
          name: "郝金亭",
          profession: "新闻传播专家 | 教育心理专家",
          school: "毕业院校：XXX大学新闻传播专业",
          unit: "任职单位：XXXX中心主任,XXXX董事长"
        }
      ],
      currentIndex:0,
      t:'',
      leftRight:false,
    };
  },
  methods: {
    change(num) {
      this.num = num;
    },
    playImg(){
      if(this.currentIndex<2){
        this.centerRight()
      }else{
        this.currentIndex=0
      }  
    },
    centerLeft(){
      if(this.currentIndex>0){
        this.currentIndex=this.currentIndex-1
      }else{
        alert('已经是第一张了~')
      }
    },
    centerRight(){
      if(this.currentIndex<2){
        this.currentIndex=this.currentIndex+1
      }else{
        alert('已经是最后一张了~')
      }
    },
    hideT(){
      clearInterval(this.t)
      this.leftRight=true
    },
    showT(){
      let that=this
      this.t=setInterval(that.playImg,3000)
    },
    showRightLeft(){
      this.leftRight=true
    },
    hideRightLeft(){
      this.leftRight=false
    },
    changeImg(index){
      this.currentIndex=index
      clearInterval(this.t)
    },
    hideTs(){
      clearInterval(this.ts)
    },
    showTs(){
      this.ts=setInterval(this.playImgs,3000,240,this.classes)
    },
  },
  components: {
    CommonHeader: CommonHeader,
    CommonFooter: CommonFooter
  }
};
</script>
<style  scoped>
.web_top {
  min-width: 1170px;
  background: white;
}
/* 头部导航部分 */
.web_top .header {
  width: 100%;
  background-color: #f4f0e5;
}
.web_top .header .container {
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
.web_top .header .container .nav li {
  padding: 0 14px;
  display: flex;
}
.web_top .header .container .nav li span {
  position: relative;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: rgba(71, 71, 71, 1);
}
.web_top .header .container .nav span:hover {
  color: #f40;
  text-decoration: underline;
}

/* 内容区域 */
.body-bg .body-1 {
  width: 100%;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}
.body-1 .nav {
  display: flex;
  height: 60px;
  line-height: 60px;
  width: 1258px;
  margin: 0 auto;
}
.body-1 .nav .li {
  display: flex;
  height: 60px;
  margin: 0 22px;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}
.body-1 .nav .li:hover {
  color: #ffbe6b;
  border-bottom: 4px solid #e3a14d;
  cursor: pointer;
}
.body-1 .nav .left-nav {
  width: 300px;
  line-height: 60px;
}
.body-1 .nav .right-first {
  color: #ffbe6b;
  border-bottom: 4px solid #e3a14d;
}
.body-1 .nav .left-nav img {
  width: 95px;
  margin-top: 10px;
}
.body-bg {
  width: 100%;
  margin: 0 auto;
  position: relative;
}
.body-bg div {
  width: 1258px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.body-bg .article {
  width: 939px;
  position: absolute;
  left: 319px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.body-bg .article li {
  width: 300px;
  margin-left: 20px;
}
.body-bg .article li:hover {
  opacity: 0.7;
  cursor: pointer;
}
.body-bg .article li:nth-child(1) {
  margin-left: 0px;
}
.body-bg .article li > img {
  width: 300px;
}
.body-bg .article li div {
  width: 100%;
  height: 84px;
  margin-top: -4px;
  line-height: 30px;
  color: white;
  padding: 10px 20px;
}
.body-bg .article li:nth-child(1) div {
  background: url("../../static/images/首页/huang_bg_home.png");
}
.body-bg .article li:nth-child(2) div {
  background: url("../../static/images/首页/ka_bg_home.png");
}
.body-bg .article li:nth-child(3) div {
  background: url("../../static/images/首页/hong_bg_home.png");
}
.body-bg .article li:nth-child(4) div {
  background: url("../../static/images/首页/lan_bg_home.png");
}
.body-bg .article li div img {
  width: 42px;
  position: absolute;
  bottom: 150px;
  left: 129px;
}

/*摄影大赛*/
.body-bg .first_photo {
  /*position: absolute;
	top: 100px;*/
  width: 1116px;
  overflow: hidden;
}
.first_photo .image5_home {
  width: 100%;
}
.first_photo .up_work {
  color: #dcb682;
  position: absolute;
  bottom: 20px;
  left: 45px;
  width: 77px;
  cursor: pointer;
  transition: All 0.6s ease-in-out;
  -webkit-transition: All 0.6s ease-in-out;
  -moz-transition: All 0.6s ease-in-out;
  -o-transition: All 0.6s ease-in-out;
}

.first_photo .up_work:hover {
  transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -o-transform: rotate(360deg);
  -ms-transform: rotate(360deg);
}

.first_photo .up_work p {
  background: url("../../static/images/首页/icon_home.png");
  width: 77px;
  height: 77px;
  background-repeat: no-repeat;
  text-align: center;
  padding-top: 16px;
}
.first_photo .up_work img {
  width: 77px;
}
.first_photo .red_div {
  padding: 50px;
  width: 399px;
  height: 99.1%;
  position: absolute;
  top: 0;
  right: 0;
  background: #ae3523;
  opacity: 0.7;
  cursor: pointer;
}
.first_photo .red_div:hover {
  opacity: 0.9;
}
.first_photo .red_div h3 {
  color: white;
}
.first_photo .red_div h3:before {
  background: url("../../static/images/首页/zuo_biaoti_home.png");
  content: "";
  padding-left: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}
.first_photo .red_div h3:after {
  background: url("../../static/images/首页/you_biaoti_home.png");
  content: "";
  padding-right: 16px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}
.first_photo .red_div p {
  font-size: 14px;
  color: white;
  margin: 10px 0px;
}
.zixun {
  display: flex;
  justify-content: center;
}
.zixun hr {
  width: 196px;
}

.body-2 .text {
  text-align: center;
  margin: 42px auto;
}

.text h3 {
  margin: 0 auto;
  font-size: 26px;
  font-weight: inherit;
}
.text h3:before {
  background: url("../../static/images/首页/zuo_biaoti_home.png");
  content: "";
  padding-left: 30px;
  background-size: contain;
  background-repeat: no-repeat;
}
.text h3:after {
  background: url("../../static/images/首页/you_biaoti_home.png");
  content: "";
  padding-right: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
}

.message h3 {
  margin: 20px 0 5px;
  text-align: center;
  font-size: 20px;
}
.message hr {
  margin: 17px 0;
  background-color: #f5f1e6;
  width: 100%;
}
.message p {
  font-size: 14px;
  line-height: 28px;
  display: flex;
  justify-content: space-between;
}
.message p:before {
  content: "";
  width: 6px;
  height: 6px;
  border: 1px #bcb093 solid;
  border-radius: 6px;
  margin-right:5px;
  position: relative;
  top: 10px;
}
.message_p {
  color: #767676;
  line-height: normal !important;
}
.message_p:before {
  content: none !important;
}
.message p .data {
  color: #939393;
  font-size: 12px;
}
.body-2 .item .content-item {
  position: relative;
}
.body-2 .item .content-item .fd {
  position: absolute;
  top: 110px;
  left: 256px;
  display: block;
  width: 40px;
  height: 100px;
}
.body-2 .item .content-item .message img {
  width: 66px;
  position: absolute;
  top: 110px;
  left: 150px;
}
.body-2 .item .content-item .message div {
  text-align: right;
}
.body-2 .item .content-item .message a {
  font-size: 14px;
  color: #ae3523;
}
.body-2 .item .content-item .message a:hover {
  text-decoration: underline;
}

.body-2 {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0px auto 0;
  background: #f5f1e6;
}
.body-2 .item {
  width: 1116px;
  padding: 25px 0;
}
.body-2 .item .content {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 5px;
}
.body-2 .item .content-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 358px;
  padding: 10px;
  position: relative;
}
.body-2 .item .content-item:hover {
  box-shadow: 0 6px 12px 5px #ddd;
  cursor: pointer;
}
.body-2 .item .content-item img {
  width: 338px;
  height: auto;
}

.body-3 {
  width: 1116px;
  margin: 60px auto 0;
  background: #fff;
}
.body-3 .content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 35px;
}
.body-3 .content .item {
  display: flex;
  align-items: center;
  width: 527px;
  height: 195px;
  background: url("../../static/images/首页/bg3_zhuanjiazhenrong_home.png");
  padding: 12px;
  cursor: pointer;
  margin-top: 35px;
}

.body-3 .content .item:hover {
  box-shadow: 0 6px 12px 5px #ddd;
}
.body-3 .content .item div h3 {
  font-size: 20px;
}
.body-3 .content .item div p {
  font-size: 14px;
}
.body-3 .content .item img {
  width: 164px;
  height: auto;
  margin-right: 28px;
}
.body-3 .content .item p {
  width: 100%;
  margin-top: 5px;
}
.body-3 .content .item .desc-1 {
  margin: 14px 0 29px;
}
.body-3 .content .item .desc-2 {
  color: #767676;
}

.body-bg .section {
  /*position: absolute;*/
  width: 760px;
  overflow: hidden;
  bottom: 35px;
}
.section img,
.section div {
  float: left;
}
.section img {
  width: 200px;
  margin-right: 34px;
}
.section div:nth-child(2) {
  width: 210px;
  position: absolute;
  bottom: 0;
  left: 244px;
}
.section div:nth-child(3) {
  width: 240px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.bghou {
  margin-top: 70px;
  background: #f4f4f4;
  background: url("../../static/images/首页/bg4_home.png");
  padding-top: 80px;
  background-repeat: no-repeat;
  background-size: 100% 110%;
}
.title p:hover {
  color: #ae3523;
  cursor: pointer;
}
.active {
  color: #ae3523;
}
.duanping p {
  text-align: left;
   display: flex;
  justify-content: flex-start;
  text-indent:1em;
}
.duanping p:hover {
  color: #ae3523;
  cursor: pointer;
}
.centers{
        width: 100% !important;
        height: 500px;
        position: relative !important;
        margin-top:60px;
}
.centers        .centerLeft{
          top:160px;
          left:20px;
          position: absolute;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-color: black;
          opacity: 0.5;
          align-items: center;
          justify-content: center;
          display: none;
          transition: all 2s;
}
  .centers       .centerLeft        i{
            font-size:20px;
            color:white; 
          
        }
 .centers       .centerRight{
          position: absolute;
          right:20px;
          top:160px;
          height: 50px;
          width: 50px;
          border-radius: 50%;
          background-color: black;
          opacity: 0.5;
          align-items: center;
          justify-content: center;
          display: none;
 }
  .centers       .centerRight        i{
            font-size:20px;
            color:white; 
          }
        
    .centers       .active{
          display: flex;
        }
     .centers    .tab{
          margin:0;
          padding:0;
          width: 100%;
          position: relative;
          height: 100%;
     }
     .centers    .tab      li{
            height: 100%;
            width: 100%;
            list-style: none;
            margin:0;
            opacity: 0;
            position: absolute;
            top:0;
            left:0;
            transition: all 1s;
     }
       .centers    .tab      li      img{
              height: 100%;
              width: 100%;
            
          }
       .centers    .tab          .active{
            opacity: 1;
          }
        
     .centers    .list{
          position: absolute;
          bottom:10px;
          left:50%;
          transform: translateX(-50%);
          display: flex;
     }
     .centers    .list     li{
            list-style: none;
            width: 8px;
            height: 8px;
            border-radius:50%;
            background-color: white;
            margin:0 10px;
          }
     .centers    .list     .active{
            background-color: #55b929;
          }
</style>