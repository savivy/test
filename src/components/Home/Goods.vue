<template>
	<div class="goods">
		<header>
			<i class="iconfont icon-zuo" @click="back"></i>
			<img src="../../assets/images/logo.jpg" alt="">
			<i class="iconfont icon-19"></i>
		</header>
		<div class="search">
			<input type="text" placeholder="搜索商品" v-model="searchVal" @keydown.enter="search">
			<i class="iconfont icon-fangdajing" v-show="isShow"></i>
		</div>
		<ul>
			<li v-for="(item,index) in list" :key="item.id" @click="goDetail(item.id)">
				<div class="img-box">
					<img :src="`http://localhost:3000${item.img}`" >
				</div>
				<div class="content">
					<p class="title">{{item.goodsname}}</p>
					<p class="price">&yen;{{item.price}}</p>
					<p>333条评论</p>
				</div>
			</li>
		</ul>

	</div>
</template>

<script>
	import Head from '@/components/common/Head'
	export default {
		data() {
			return {
				list: [],
				searchVal: '',
				isShow: true
			}
		},
		components: {
			Head
		},
		mounted() {
			// console.log(this)
			let id = this.$route.query.id
			this.$http.get("getgoods", {
				fid: id
			}).then(res => {
				this.list = res.data.list
			})
		},
		methods: {
			search() {
				this.$http.get('/getgoods', {
					keyword: this.searchVal
				}).then(res => {
				console.log(res);
				this.list=res.data.list
				})
			},
			back(){
				 this.$router.go(-1) 
			},
			goDetail(id){
				this.$router.push('/detail?id='+id)
			}
			
		},
		watch: {
			searchVal(newVal) {
				if (!newVal) {
					this.isShow = true;
				} else {
					this.isShow = false
				}
			}
		}
	}
</script>

<style scoped lang="less">
	.goods {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		header {
			height: .88rem;
			display: flex;
			justify-content: space-between;
			padding: 0 .2rem;
			padding-top: .43rem;

			img {
				width: 1.5rem;
				height: .29rem;
			}

			i {
				font-size: .35rem
			}


		}

		.search {
			height: .8rem;
			margin: 0 auto;
			padding-top: .2rem;
			position: relative;

			input {
				padding: 0 .8rem 0 2rem;
				height: .77rem;
				border-radius: .37rem;
				background: #f26b11;
				font: .26rem/.77rem "微软雅黑";
				color: #f0f0ee;
				text-indent: .47rem;

				&::placeholder {
					color: #fff;
				}
			}

			.iconfont {
				position: absolute;
				left: 2rem;
				text-align: center;
				line-height: .77rem;
				color: #f0f0ee;
			}

		}

		ul {
			margin: .25rem 0 1.35rem 0;
			padding-bottom: 10rem;

			li {
				margin: .2rem .23rem .15rem .42rem;
				height: 1.96rem;
				display: flex;
				border-bottom: 1px solid #d1d1d1;

				.img-box {
					width: 1.47rem;
					height: 1.60rem;
					img {
						width: 1.47rem;
						height: 1.60rem;

					}
				}

				.content {
					flex: 1;
					font: .24rem/.41rem "微软雅黑";
					color: #999999;

					.title {
						font: .26rem/.38rem "微软雅黑";
						color: #333333;
					}

					.price {
						font: .3rem/.54rem "Arial";
						color: #e43a3d;
					}
				}
			}
		}
	}
</style>
