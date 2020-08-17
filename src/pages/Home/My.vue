<template>
  <div class="wrap">
   <CommonHead>
	   <span>我的</span>
   </CommonHead>
    <div class="mInfo">
      <div class="left">
        <div class="head">
          <img src="../../assets/images/mine.png" alt="mine" />
        </div>
        <div class="user">
          <p>悠溯</p>
          <p class="level">V1</p>
        </div>
      </div>
      <div class="right">每日签到</div>
    </div>
    <div class="shopInfo">
      <div class="items">
        <img src="../../assets/images/iconMine_tel.jpg" alt="icon" />
        <a href="#">全部订单</a>
      </div>
      <div class="items">
        <img src="../../assets/images/iconMine_2.jpg" alt="icon" />
        <a href="#">待付款</a>
      </div>
      <div class="items">
        <img src="../../assets/images/iconMine_3.jpg" alt="icon" />
        <a href="#">待收货</a>
      </div>
    </div>
    <div class="contain">
      <ul>
        <li>
          <p>地址管理</p>
          <a href="#"
            ><img src="../../assets/images/arrowRight.jpg" alt="arrow"
          /></a>
        </li>
        <li>
          <p>我的钱包</p>
          <span>200余额</span>
          <a href="#"
            ><img src="../../assets/images/arrowRight.jpg" alt="arrow"
          /></a>
        </li>
        <li>
          <p>我的优惠券</p>
          <a href="#"
            ><img src="../../assets/images/arrowRight.jpg" alt="arrow"
          /></a>
        </li>
        <li>
          <p>我的二维码</p>
          <a href="#"
            ><img src="../../assets/images/arrowRight.jpg" alt="arrow"
          /></a>
        </li>
        <li>
          <p>我的小伙伴</p>
          <a href="#"
            ><img src="../../assets/images/arrowRight.jpg" alt="arrow"
          /></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	 import CommonHead from '@/components/common/commonHead'
export default {
	components:{
		CommonHead
	}
};
</script>

<style scoped lang="less">

.wrap{
    max-width: 7.5rem;
    margin: 0 auto;
    min-width: 3.2rem;
   
	.mInfo{
	        background-color: #f26b11;
	        display: flex;
	        justify-content: space-between;
	        .left{
	            margin:.3rem 0 .25rem .23rem;
	            display: flex;
	            .head{
	                width: 1.42rem;
	                height: 1.42rem;
	                border-radius: 50%;
	                border: .05rem solid #fff;
	                overflow: hidden;
	                img{
	                    width:100%;
	                    height: auto;
	                }
	            }
	            .user{
	                margin:.3rem 0 .28rem.25rem;
	                p{
	                    font: .3rem/.54rem "微软雅黑";
	                    color: #fff;
	                }
	               .level{
	                    font: .28rem/.44rem "Arial";
	                    color: #000;
	                    font-style: italic;
	                }
	                
	
	            }
	        }
	        .right{
	            height: .7rem;
	            padding: 0 .3rem;
	            font:.26rem/.7rem "微软雅黑" ;
	            color: #f26b11;
	            background-color: #fff;
	            margin: .75rem .38rem 0 0;
	        }
	    }
	.shopInfo{
	        display: flex;
	        justify-content: space-around;
	        background-color: #fff;
			align-items: center;
	        .items{
	            flex:1;
				text-align: center;
				margin-top: .36rem;
	            img{
	                width: .34rem;
	                height: auto;
	
	            }
	            a{
	                display: block;
	                font: .24rem/.6rem "微软雅黑";
	                color: #616161;
	
	            }
	        }
	    }
	.contain{
	        margin-top: .25rem;
	        background-color: #fff;
	        padding-bottom: 10rem;
	        ul{
	            li{
	                position: relative;
	                border-bottom: .01rem solid #f1f1f1;
	                p{
	                    font: .26rem/1.1rem "微软雅黑";
	                    color: #616161;
	                    text-indent: .94rem;
	                    background: url(../../assets/images/iconMine_4.jpg) no-repeat .3rem center;
	                    background-size: .36rem .4rem;
	                   
	                }
	                &:nth-child(2) p{
	                    background: url(../../assets/images/iconMine_5.jpg) no-repeat .3rem center;
	                    background-size: .36rem .4rem;
	                }
	                &:nth-child(3) p{
	                    background: url(../../assets/images/iconMine_6.jpg) no-repeat .3rem center;
	                    background-size: .36rem .4rem;
	                }
	                &:nth-child(4) p{
	                    background: url(../../assets/images/iconMine_7.jpg) no-repeat .3rem center;
	                    background-size: .36rem .4rem;
	                }
	                &:nth-child(5) p{
	                    background: url(../../assets/images/iconMine_8.jpg) no-repeat .3rem center;
	                    background-size: .36rem .4rem;
	                }
	                a{
	                    display: block;
	                    position: absolute;
	                    right: .33rem;
	                    top: .44rem;
	                    img{
	                        width: .19rem;
	                        height: auto;
	                    }
	                }
	                span{
	                    font: .24rem "微软雅黑";
	                    color: #f26b11;
	                   position: absolute;
	                   right:.7rem ;
	                   top: .44rem;
	                }
	            }
	        }
	    }
}

</style>
