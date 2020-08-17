<template>
	<div class="cart">
		<CommonHead>
			<span>购物车</span>
		</CommonHead>
		<ul>
			<li v-for="(item, index) in list" :key="item.id" ref="lis" @touchstart="start" @touchend="end(index,$event)">
				<div class="content">
					<i @click="checkOne(item)" :class="{'active': item.checked}" class="iconfont icon-quanxuan1"></i>
					<img :src="'http://localhost:3000' + item.img" />
					<div>
						<p>{{item.goodsname}}</p>
						<p>{{item.price}}</p>
					</div>
					<div>
						<button>-</button>
						<span>{{item.num}}</span>
						<button>+</button>
					</div>
				</div>
				<div class="del">删除</div>
			</li>
		</ul>
		<div class="total">
			<i @click="changeAll" class="iconfont icon-quanxuan1" :class="{'active': checkAll}"></i>
			<div>
				总计：{{totalPrice}}
			</div>
			<button>去结算({{totalNum}}件)</button>
		</div>
	</div>
</template>

<script>
	import CommonHead from '@/components/common/commonHead'
	export default {
		components: {
			CommonHead
		},
		data() {
			return {
				list: [],
				checkAll: false,
				startX:''
				
			}
		},
		computed: {
			user() {
				return this.$store.state.user
			},
			totalPrice(){
				let sum=0;
				this.list.forEach(item=>{
					if(item.checked)
					sum+= (item.price * item.num)
				})
				return sum
			},
			totalNum(){
			 return	this.list.filter(item=>{
					return item.checked
				}).length
			}
		},
		watch: {
			list: {
				deep: true,
				handler() {
					this.checkAll = this.list.every(item => {
						return item.checked
					})
				}
			}
		},
		methods: {
			checkOne(item) {
				item.checked = !item.checked
			},
			changeAll() {
				this.checkAll = !this.checkAll;
				this.list.forEach(item=>{
					item.checked=this.checkAll
				})
			},
			start(e){
				console.log(e)
				this.startX=e.touches[0].clientX
			},
			end(i,e){
				console.log(e)
				let endX=e.changedTouches[0].clientX
				if(this.startX-endX>50){
					this.$refs.lis[i].style.transform="translateX(-1rem)"
				}
			}
		},
		mounted() {
			this.$http.get("/cartlist", {
				uid: this.user.uid
			}).then(res => {
				console.log(res)
				if (res.data.code == 200) {
					this.list = res.data.list
					this.list = this.list.map(item => {
						return { ...item,
							checked: false
						}
					})
					// console.log(this.list)
				}
			})
		}
	}
</script>

<style lang="less" scoped>
	.cart {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		ul {
			flex: 1;
			overflow-y: auto;
			overflow-x: hidden;

			li {
				width: 100%;
				height: 1.7rem;
				position: relative;
				padding: 0 .3rem;

				.content {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;

					i {
						font-size: .4rem;

						&.active {
							color: #f26b11;
						}
					}

					img {
						width: 1.4rem;
						height: 1.4rem;
					}

					button {
						width: .6rem;
						height: .4rem;
					}
				}

				.del {
					width: 1rem;
					height: 100%;
					background-color: #BD2C00;
					color: #FFFDEF;
					line-height: 1.7rem;
					text-align: center;
					position: absolute;
					right: -1rem;
					top: 0;
					transition: all 1s;
				}
			}
		}


		.total {
			height: 1rem;
			display: flex;
			justify-content: space-between;
			padding-left:.3rem;

			i {
				&.active {
					color: #f26b11;
				}
			}

			button {
				
				margin-left: .34rem;
				padding: 0 .48rem;
				font: .3rem/1.14rem "微软雅黑";
				color: #fff;
				background-color: #f26b11;
			}
		}
	}
</style>
