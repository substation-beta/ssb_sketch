<template>
	<b-container fluid>
		<b-row>
			<b-col cols="7">
				<b-form-group :label="$t('commands')" :label-for="$id('commands')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-textarea :id="$id('commands')" autofocus v-model="commands" size="sm" rows="5" />
				</b-form-group>
			</b-col>
			<b-col cols="2">
				<b-form-group :label="$t('line.title')" :label-for="$id('lineWidth')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-form-group :label="$t('line.width') + ': '" :label-for="$id('lineWidth')" label-size="sm" label-cols="auto">
						<b-input :id="$id('lineWidth')" size="sm" placeholder="1" type="number" number min="0" max="100" step="0.01" v-model="lineWidth" />
					</b-form-group>
					<b-form-group :label="$t('line.cap') + ': '" :label-for="$id('lineCap')" label-size="sm" label-cols="auto">
						<b-select :id="$id('lineCap')" size="sm" :options="['butt', 'round', 'square']" v-model="lineCap" />
					</b-form-group>
					<b-form-group :label="$t('line.join') + ': '" :label-for="$id('lineJoin')" label-size="sm" label-cols="auto">
						<b-select :id="$id('lineJoin')" size="sm" :options="['bevel', 'round', 'miter']" v-model="lineJoin" />
					</b-form-group>
				</b-form-group>
			</b-col>
			<b-col cols="3">
				<b-form-group :label="$t('viewport.title')" :label-for="$id('viewportWidth')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-form-group :label="$t('viewport.size') + ': '" :label-for="$id('viewportHeight')" label-size="sm" label-cols="auto">
						<b-input-group size="sm">
							<b-input :id="$id('viewportWidth')" readonly :value="viewportWidth.toFixed(2)" />
							<b-input-group-prepend is-text>X</b-input-group-prepend>
							<b-input :id="$id('viewportHeight')" placeholder="100" type="number" min="1" max="1_000_000" step="1" v-model="viewportHeight" />
						</b-input-group>
					</b-form-group>
					<b-form-group :label="$t('viewport.offset') + ': '" :label-for="$id('viewportOffsetX')" label-size="sm" label-cols="auto">
						<b-input-group size="sm">
							<b-input :id="$id('viewportOffsetX')" placeholder="50" type="number" min="-100_000" max="100_000" step="1" v-model="viewportOffsetX" />
							<b-input-group-prepend is-text>X</b-input-group-prepend>
							<label :for="$id('viewportOffsetY')" class="d-none" />
							<b-input :id="$id('viewportOffsetY')" placeholder="50" type="number" min="-100_000" max="100_000" step="1" v-model="viewportOffsetY" />
						</b-input-group>
					</b-form-group>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
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