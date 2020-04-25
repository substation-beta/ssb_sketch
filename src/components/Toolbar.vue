<template>
	<b-button-toolbar>
		<b-input-group>
			<b-input size="sm" :placeholder="$t('commands')" v-model="commands" />
			<b-input size="sm" :placeholder="$t('viewportWidth')" :value="viewportWidth.toFixed(2)" readonly />
			<b-input size="sm" :placeholder="$t('viewportHeight')" v-model="viewportHeight" />
			<b-input size="sm" :placeholder="$t('viewportOffsetX')" v-model="viewportOffsetX" />
			<b-input size="sm" :placeholder="$t('viewportOffsetY')" v-model="viewportOffsetY" />
		</b-input-group>
	</b-button-toolbar>
</template>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"commands",
			"viewportWidth",
			"viewportHeight",
			"viewportOffsetX",
			"viewportOffsetY"
		])
	}
</script>