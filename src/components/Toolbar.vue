<template>
	<b-button-toolbar>
		<b-input-group>
			<b-input :placeholder="$t('commands')" v-model="commands" />
			<b-input :placeholder="$t('viewportHeight')" v-model="viewportHeight" />
			<b-input :placeholder="$t('viewportOffsetX')" v-model="viewportOffsetX" />
			<b-input :placeholder="$t('viewportOffsetY')" v-model="viewportOffsetY" />
		</b-input-group>
	</b-button-toolbar>
</template>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"commands",
			"viewportHeight",
			"viewportOffsetX",
			"viewportOffsetY"
		])
	}
</script>