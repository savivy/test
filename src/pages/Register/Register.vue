<template>
	<div>
		<input type="text" v-model="nickname" />
		<br>
		<input type="text" v-model="phone" />
		<br>
		<input type="text" v-model="password" />
		<button @click="register">注册</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				nickname: '',
				phone: '',
				password: '',


			}
		},
		methods: {
			register() {
				this.$http.post("/register", {
					phone: this.phone,
					nickname: this.nickname,
					password: this.password
				}).then(res => {
					this.$router.push("/login")
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	input{
		width: 2rem;
		height: .6rem;
		margin-top: .5rem;
		border: .02rem solid #EEEEEE;
	}
	button{
		display: block;
		padding:0 .3rem;
		line-height: .88rem;
	}
</style>
