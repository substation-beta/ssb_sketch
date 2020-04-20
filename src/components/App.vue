<template>
	<div>
		<h1>
			Hello world!
		</h1>
		<b-badge>New</b-badge>
		<input v-model="shape" />
	</div>
</template>

<style lang="scss" scoped>
	div {
		background-image: url(../assets/images/logo.png);
		width: 500px;
		height: 500px;
		h1 {
			color: red;
		}
	}
</style>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"shape"
		]),
	}
</script>