<template>
	<div class="index">
		<header>
			<div class="img-box">
				<img src="../../assets/images/logo.jpg" alt />
			</div>
			<input type="text" />
			<i class="iconfont icon-19"></i>
		</header>
		<nav class="navbar">
			<ul>
				<li class="first">推荐</li>
				<li>女装</li>
				<li>鞋包</li>
				<li>居家</li>
				<li>母婴儿童</li>
				<li>美食</li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
			<p class="arrow"></p>
		</nav>
		<div class="banner">
			<Swiper ref="mySwiper" :options="swiperOptions">
				<Swiper-slide v-for="(item, index) in bannerList" :key="item.id">
					<img :src="'http://localhost:3000' + item.img" alt />
				</Swiper-slide>
			</Swiper>
		</div>


		<div class="toolBar">
			<ul>
				<li v-for="(item, index) in barList" :key="index" @click="goCategory(index)">
					<i :class="['iconfont', item.icon]"></i>
					<p>{{item.title}}</p>
				</li>
			</ul>
		</div>
		<div class="pubLine"></div>
		<div class="timesLimit">
		            <div class="tLeft">
		                <h3>限时秒杀</h3>
		                <p>每天零点场 好货秒不停</p>
		                <div class="time">
		                    <ul >
		                        <li>02</li>
		                        <li>16</li>
		                        <li>45</li>

		                    </ul>
		                    <p class="shop">
		                        秒杀

		                     </p>
		                </div>
		                <div class="display">
		                    <img src="../../assets/images/shop_5.jpg" alt="shop">
		                    <p><i>&yen;</i>14.8</p>
		                </div>
		            </div>
		            <div class="tRight">
		                <div class="floor">
		                    <div>
		                        <h3>品牌上新</h3>
		                        <p>每日9点 抢大牌</p>
		                        <img src="../../assets/images/brand.jpg" alt="brand">
		                    </div>
		                    <img src="../../assets/images/indexshop.jpg" alt="brand">
		                </div>
		                <ul class="sec">
		                    <li>
		                        <h3>每日十件</h3>
		                        <p>只为你选好货</p>
		                        <img src="../../assets/images/shop_2.jpg" alt="brand">
		                    </li>
		                    <li>
		                        <h3>拼啊</h3>
		                        <p>每日9点 抢大牌</p>
		                        <img src="../../assets/images/shop_3.jpg" alt="brand">
		                    </li>
		                </ul>
		            </div>
		 </div>
		<div class="pubLine"></div>
		 <div class="ads">
		            <img src="../../assets/images/bar.jpg" alt="bar">
		        </div>
		<div class="pubLine"></div>
		<div class="goods-tab">
			<div class="tab">
				<ul>
					<li v-for="(item,index) in arr" :key="index" :class="{'active': index == ind}" @click="changeTab(index)">{{item}}</li>
				</ul>
			</div>
			<div class="goods">
				<ul v-if="goodsList.length > 0">
					<li v-for="(item, index) in goodsList[ind].content" :key="item.id">
						<div class="img-box">
							<img :src="'http://localhost:3000' + item.img" alt />
						</div>
						<div class="content">
							<p>{{ item.goodsname }}</p>
							<p class="price">&yen;{{ item.price }}</p>
							<p class="count">已售8000件</p>
							<div>立即抢购</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import {
		Swiper,
		SwiperSlide,
		directive
	} from "vue-awesome-swiper";
	import "swiper/css/swiper.css";
	export default {
		methods: {
			// tag切换
			changeTab(i) {
				this.ind = i;
			},
			// 跳到分类页面
			goCategory(i) {
				if (i == 3) {
					this.$router.push("/category");
				}
			}
		},
		data() {
			return {
				arr: ["最新商品", "最热商品", "全部商品"],
				ind: 0,
				goodsList: [],
				barList: [{
						title: "限时抢购",
						icon: "icon-xianshiqianggou"
					},
					{
						title: "积分商城",
						icon: "icon-jifenshangcheng"
					},
					{
						title: "联系我们",
						icon: "icon-lianxiwomen"
					},
					{
						title: "商品分类",
						icon: "icon-shangpinfenlei"
					}
				],
				bannerList: [],
				swiperOptions: {
					autoplay: {
						delay: 3000
					}
					// Some Swiper option/callback...
				}
			};
		},
		mounted() {
			// 调用获取轮播图接口
			this.$http.get("/getbanner").then(res => {
				// console.log(res);
				this.bannerList = res.data.list;
			});

			// 调用获取商品信息接口
			this.$http.get("/getindexgoods").then(res => {
				// console.log(res);
				this.goodsList = res.data.list;
			});
		},
		components: {
			Swiper,
			SwiperSlide
		},
		directives: {
			swiper: directive
		}
	};
</script>

<style lang="less" scoped>
	.index{
		header{
			    width: 100%;
			    height: 0.88rem;
			    border-bottom: 0.02rem solid #EEEEEE;
			    display: flex;
			    justify-content: space-between;
			    align-items: center;
			    padding: 0 0.2rem;
			.img-box{
				img{
					width: 1.5rem;
					height: 0.29rem;
				}
			}
			input{
				      width: 3.04rem;
				      height: 0.39rem;
				      background-color: #eeeeee;
				      font: 0.18rem '微软雅黑';
				      text-align: center;
			}
			.iconfont{
				      font-size: 0.5rem;
				      color: #000;
			}
		}
		.navbar{
			 position: relative;
			  overflow: hidden;
			  padding-left: 0.12rem;
			  background-color: #fff;
			ul{
				 display: flex;
				 margin-top: 0.05rem;
				li{
					      position: relative;
					      flex-shrink: 0;
					      padding: 0 0.2rem;
					      display: block;
					      font: 0.28rem / 0.67rem '微软雅黑';
					      color: #323232;
					      border-bottom: 0.04rem solid transparent;
					      &:first-child::after{
							  content: '';
							  width:0.01rem;
							  height:0.32rem;
							  background-color: #f1f1f1;
							  position:absolute;
							  right:0;
							  top:50%;
							  transform:translateY(-50%);
						  }
				}
				.first{
					 border-bottom-color:#ff064f;
					 color:#ff064f;
				}
			}
			.arrow{
				    width:0.75rem;
				    height:0.67rem;
				    background:#fff url('../../assets/images/arrow.jpg') no-repeat center / 0.35rem 0.21rem;
				    position:absolute;
				    right:0;
				    top:50%;
				    transform:translateY(-50%);
			}
		}
		.banner{
			.swiper-container{
				width:100%;
				height:2.38rem;
				overflow:hidden;
				img{
				   width:100%;
				}
			  }

		}
		.toolBar{
			 width:100%;
			 height:1.7rem;
			ul{
				 width:100%;
				 height:100%;
				 background-color:#fff;
				 display:flex;
				li{
					flex:1;
					text-align:center;
					align-self:center;
					.iconfont{
						font-size:0.5rem;
					}
					p{
						font: 0.28rem / 0.68rem '微软雅黑';
						 color:#5c5c5c;
					}
				}
			}
		}
		.goods-tab{
			.tab{
				ul{
					 display:flex;
					li{
						 flex:1;
						 height:0.7rem;
						 text-align:center;
						 line-height:0.7rem;
						 font: .28rem/.68rem "微软雅黑";
						 margin-left: -0.01rem;
						 border:0.01rem solid #eeeeee;
						 &.active{
									color:#f26b11;
								}

					}
				}
			}
			.goods{
				ul{

					li{
						  display:flex;
						  height:2.96rem;
						.img-box{
							    width:2.9rem;
							    height:100%;
							img{
								 width:100%;
								 height:100%;
							}
						}
						.content{
								  display:flex;
								  flex-direction:column;
								  padding:0.25rem 0;
								  justify-content:space-around;
								  font-size:0.34rem;
								  color:#212121;
									.price{
										 font-size:0.3rem;
										  color:#f52a3e;
									}
									.count{
										font-size:0.22rem;
										 color:#9d9d9d;

									}
									div{
										  width:1.6rem;
										  height:0.5rem;
										  background-color:#f26b11;
										  font-size:0.24rem;
										  color:#fff;
										  border-radius:0.06rem;
										  text-align:center;
										  line-height:0.5rem;
									}
						}
					}
				}
			}
		}

		.pubLine{
			width: 100%;
			height: .3rem;
			background-color: rgb(241,241,241);
		}
		.timesLimit{
		        display: flex;
		        background-color: #fff;
		        overflow: hidden;
		        .tLeft{
		            padding:.15rem .42rem 0 .2rem;
		            border-right: 1px solid #f1f1f1;

		            h3{
		                font: .3rem/.36rem "微软雅黑";
		                color: #ff1765;
		                background: #fff url(../../assets/images/timer.jpg) no-repeat left;
		                background-size: .33rem ;
		                text-indent: .42rem;
		            }
		           >p{
		                font: .22rem/.29rem "微软雅黑";
		                color: #787878;
		            }
		            .time{
		                display: flex;
		                ul{
		                    margin-top: .04rem;
		                    display: flex;
		                    li{
		                        width: .42rem;
		                        height: 0.42rem;
		                        border-radius: .07rem;
		                        background-color: #27272f;
		                        font: .24rem/.42rem "Arial";
		                        color:#fdfeff;
		                        text-align: center;
		                        margin-right: .23rem;
		                        &:nth-child(1){
		                            position: relative;
		                        }
		                       &:nth-child(1)::after{
		                           content: ":";
		                           position: absolute;
		                           left:.5rem;
		                           top: 0;
		                           font: bold .24rem/.42rem "Arial";
		                           color: #27272f;
		                       }
		                       &:nth-child(2){
		                        position: relative;
		                    }
		                   &:nth-child(2)::after{
		                       content: ":";
		                       position: absolute;
		                       left:.5rem;
		                       top: 0;
		                       font: bold .24rem/.42rem "Arial";
		                       color: #27272f;
		                   }


		                    }
		                }
		                .shop{
		                    margin-top: .05rem;
		                    padding: 0 .28rem 0 .2rem;
		                    font: .26rem/.41rem "微软雅黑";
		                    color: #1e1905;
		                    background: url(../../assets/images/bg.jpg) no-repeat center top;
		                    background-size: .96rem .4rem;
		                }
		            }

		             .display{
		                 margin-top: .15rem;
		                 position: relative;
		                 width: 2.36rem;
		                 height: 2rem;
		                 padding-bottom: .17rem;
		                 img{
		                     width: 100%;
		                     height: auto;
		                     margin-left: .46rem;
		                 }
		                 p{
		                     position:absolute;
		                     left: 2.44rem;
		                     bottom: .3rem;
		                     width: .85rem;
		                     height: .85rem;
		                     border-radius: 50%;
		                     background-color: #ff3179;
		                     font: .3rem/.85rem "Arial";
		                     color: #fff;
		                     text-align: center;
		                     i{
		                         font-size: .13rem;
		                     }
		                 }
		             }

		        }
		        .tRight{
		            width: 3.78rem;
		            .floor{
		              display: flex;
		              border-bottom: 1px solid #f1f1f1;
		              padding:.14rem 0 0 .2rem;
		                >div{
		                    height: 1.78rem;
		                    h3{
		                        font: .3rem/.36rem "微软雅黑";
		                        color: #ff1765;
		                        position: relative;
		                    }
		                    h3::after{
		                        display: inline-block;
		                        content: "折";
		                        width: .34rem;
		                        text-align: center;
		                        background-color: #f91459;
		                        font: .17rem/.25rem "微软雅黑";
		                        color: #ffdcea;
		                        position: absolute;
		                        left:1.3rem ;
		                        top:0.08rem;
		                    }
		                    p{
		                        font: .22rem/.29rem "微软雅黑";
		                        color: #787878;
		                    }
		                    >img{
		                        margin-top: .26rem;
								text-align: center;
		                    }
		                }
		                >img{
							flex: 1;
		                    width: 1.28rem;
							height: auto;
		                }
		            }
		            .sec{
		                display: flex;
		                li{
							display: flex;
							flex-direction: column;
		                    width: 1.87rem;
		                    height: 1.87rem;
		                    margin: .18rem 0 0 .17rem;
							overflow: hidden;
		                   &:nth-child(1){
		                        border-right: 1px solid #f1f1f1;
		                    }
		                    h3{
		                        font: .3rem/.36rem "微软雅黑";
		                        color: #ff1765;

		                    }
		                    p{
		                        font: .22rem/.29rem "微软雅黑";
		                         color: #787878;
		                    }
		                    img{
								align-self: center;
								margin: .08rem 0;
		                        width: 1.1rem;
								height: auto;
		                    }

		                }
		            }
		        }
		    }
		.ads{
		        img{
		            width: 100%;
		            height: auto;
		        }
		    }
	}
</style>
