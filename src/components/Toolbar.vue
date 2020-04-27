<template>
	<b-button-toolbar>
		<b-input-group :prepend="$t('commands')" size="sm">
			<b-input v-model="commands" />
		</b-input-group>
		<b-input-group :prepend="$t('lineWidth')" size="sm">
			<b-input placeholder="1" type="number" min="0" max="100" step="0.01" v-model="lineWidth" />
		</b-input-group>
		<b-input-group :prepend="$t('lineCap')" size="sm">
			<b-select :options="['butt', 'round', 'square']" v-model="lineCap" />
		</b-input-group>
		<b-input-group :prepend="$t('lineJoin')" size="sm">
			<b-select :options="['bevel', 'round', 'miter']" v-model="lineJoin" />
		</b-input-group>
		<b-input-group :prepend="$t('viewportWidth')" size="sm">
			<b-input readonly :value="viewportWidth.toFixed(2)" />
		</b-input-group>
		<b-input-group :prepend="$t('viewportHeight')" size="sm">
			<b-input placeholder="100" type="number" min="1" max="1_000_000" step="1" v-model="viewportHeight" />
		</b-input-group>
		<b-input-group :prepend="$t('viewportOffsetX')" size="sm">
			<b-input placeholder="0" type="number" min="-100_000" max="100_000" step="1" v-model="viewportOffsetX" />
		</b-input-group>
		<b-input-group :prepend="$t('viewportOffsetY')" size="sm">
			<b-input placeholder="0" type="number" min="-100_000" max="100_000" step="1" v-model="viewportOffsetY" />
		</b-input-group>
	</b-button-toolbar>
</template>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"commands",
			"lineWidth",
			"lineCap",
			"lineJoin",
			"viewportWidth",
			"viewportHeight",
			"viewportOffsetX",
			"viewportOffsetY"
		])
	}
</script>