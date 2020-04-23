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