<template>
	<div>
		<h1>
			{{$t('hello')}}!
		</h1>
		<input v-model="commands" />
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
			"commands"
		]),
	}
</script>