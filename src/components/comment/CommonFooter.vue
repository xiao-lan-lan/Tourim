<template>
     <div class="footer">
            <div class="item">
            	<img src="../../../static/images/首页/logo_caise_home.png"/>
                <h3 class="title">首页 &nbsp; &nbsp;          | &nbsp; &nbsp;          文博资讯  &nbsp; &nbsp;         |  &nbsp; &nbsp;         文博视频     &nbsp; &nbsp;    |   &nbsp; &nbsp;        摄影大赛      &nbsp; &nbsp;     | &nbsp; &nbsp;          专家团队  &nbsp; &nbsp;         |    &nbsp; &nbsp;       关于我们</h3>
                <div>
                    © 2020- 北京瞄视界科技有限公司   京ICP备05687412号-1   技术支持：北京闪浪教育科技有限公司
                </div>
            </div>
            
            
        </div>
</template>
<script>
export default {
    name:"CommonFooter",
    data(){
        return{

        }
    }
}
</script>
<style  scoped>
.footer {
	background: #544840;
    width: 100%;
}
.footer .item {
    margin: 0 auto;
    width: 725px;
    height: 345px;
    text-align: center;
    font-size: 16px;
    
font-family:Source Han Sans CN;
font-weight:400;
color:rgba(244,244,244,1);

}
.footer .item img{
	margin-top: 76px;
	margin-bottom: 47px;
}
.footer .item .title{
    color: white;
    margin-bottom: 45px;
}
.footer .item div{
	color: white;
}
</style>