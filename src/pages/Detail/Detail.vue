<template>
	<div class="detail">
		<CommonHead>
			<span>商品详情</span>
		</CommonHead>
		<main v-if="detailList.length>0">
			<div class="top">
				<div class="img-box">
					<img :src="'http://localhost:3000'+detailList[0].img" alt="">
				</div>
				<h3 class="title">{{detailList[0].goodsname}}</h3>
				<p class="price">&yen;{{detailList[0].price}}<i>(此价格不余套尊贵优惠同享)</i></p>
			</div>

		</main>
		<footer>
			<div class="cart" @click="goCart">
				<i class="iconfont icon-gouwuche"></i>
				<span class="count">{{num}}</span>
			</div>
			<div class="btns">
				<div class="addCart" @click="addCart">加入购物车</div>
				<div class="buy">立即购买</div>
			</div>
		</footer>
		<van-popup v-model="show" position="bottom" :style="{ height: '60%' }">
			<div v-if="detailList.length > 0">
				<div class="img-box">
					<img :src="'http://localhost:3000' + detailList[0].img" />
					<div>
						<p>{{detailList[0].goodsname}}</p>
						<p>{{detailList[0].price}}</p>
					</div>
				</div>
				<div class="color">
					<p>{{detailList[0].specsname}}</p>
					<ul>
						<li :class="{'active': item ==color}" @click="changeColor(item)" v-for="(item, index) in spec" :key='index'>
							{{item}}
						</li>
					</ul>
				</div>
				<div class="count">
					<p>购买数量</p>
					<div class="count-box">
						<div @click="decrement">-</div>
						<span>{{ num }}</span>
						<div @click="increment">+</div>
					</div>
				</div>
				<div class="sure" @click="sure">确定</div>
			</div>
		</van-popup>
	</div>
</template>

<script>
	import CommonHead from '@/components/common/commonHead'
	import {Toast} from 'vant';
	import {
		Icon
	} from 'vant';
	export default {
		data() {
			return {
				detailList: [],
				show: false,
				spec: [],
				color: "",
				num: 1
			}
		},
		computed: {
			user() {
				return this.$store.state.user
			}
		},
		components: {
			CommonHead
		},
		methods: {
			decrement() {
				if (this.num == 1) return
				this.num--
			},
			increment() {
				this.num++
			},
			goCart() {
				this.$router.push("/home/cart")
			},
			changeColor(item) {
				this.color = item
			},
			addCart() {
				this.show = true
			},
			sure() {
				// 判断登录状态
				// 登录成功之后存在了本地存储和vuex
				if (this.user.uid) {
					if (this.color) {
						// 调用添加购物车的接口
						this.$http.post("/cartadd", {
							uid: this.user.uid,
							goodsid: this.detailList[0].id,
							num: this.num
						}).then(res => {
							console.log(res)
							if (res.data.code == 200) {
								Toast("添加成功")
								this.show = false;
							}
							// this.$router.push('/home/cart')
						})
					} else {
						Toast({
							message: '请选择商品规格',
							icon: 'fail',
						});
					}
				} else {
					Toast({
						message: '将在两秒钟之后跳转到登录页',
						icon: 'fail',
					});
					setTimeout(() => {
						this.$router.push("/login")
					}, 2000)
				}
			}
		},
		mounted() {
			let id = this.$route.query.id
			this.$http.get('/getgoodsinfo', {
				id: id
			}).then(res => {
				this.detailList = res.data.list
				this.spec = this.detailList[0].specsattr.split(",")
			})
		}
	}
</script>

<style lang="less" scoped>
	.detail {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		main {
			flex: 1;
			overflow-y: auto;

			.img-box {
				width: 100%;
				height: 7.5rem;

				img {
					width: 100%;
					height: 100%;
				}
			}

			.title {
				margin-top: .12rem;
				padding: 0 .45rem 0 .35rem;
				font: .3rem/.6rem "微软雅黑";
				color: #343434;
			}

			p {
				padding: 0 .45rem 0 .35rem;
				font: .3rem/.86rem "Arial";
				color: #e3393c;

				i {
					font: .22rem/.86rem "微软雅黑";
					color: #868686;
				}
			}
		}

		footer {
			height: 1rem;
			display: flex;
			line-height: 1rem;

			.cart {
				width: 1.7rem;
				text-align: center;
				position: relative;

				.count {
					display: block;
					width: .3rem;
					height: .3rem;
					border-radius: .15rem;
					background-color: #DD4A68;
					color: #fff;
					line-height: .3rem;
					position: absolute;
					top: .2rem;
					right: .4rem;
				}
			}

			.btns {
				flex: 1;
				display: flex;

				div {
					flex: 1;
					text-align: center;
					color: #fff;

					&.addCart {
						background-color: #f26b11;
					}

					&.buy {
						background-color: #BD2C00;
					}
				}
			}
		}

		.img-box {
			display: flex;

			img {
				width: 2.2rem;
				height: 2.2rem;
			}

			div {
				flex: 1;
				padding-left: .3rem;
			}
		}

		.color {
			ul {
				display: flex;
				height: .88rem;

				li {

					width: 1.9rem;
					height: 0.6rem;
					line-height: .6rem;
					text-align: center;
					background-color: #eee;
					margin-right: .2rem;
					&.active {
						border: .01rem solid #f26b11;
						color: #f26b11;
					}

				}

			}

		}


		.count-box {
			display: flex;

			div {
				width: .6rem;
				height: .6rem;
				background-color: #EEEEEE;
				text-align: center;
				line-height: .6rem;
			}

			span {
				margin: 0 .2rem;
				font-size: .3rem;
				line-height: .6rem;
			}
		}

		.sure {
			width: 6rem;
			height: .8rem;
			border-radius: .4rem;
			background-color: #f26b11;
			line-height: .8rem;
			text-align: center;
			color: #fff;
			margin: 0 auto;
			margin-top: 3rem;
		}
	}
</style>
