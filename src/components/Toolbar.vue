<template>
	<b-container fluid>
		<b-row align-h="center">
			<b-col cols="12" xl>
				<b-form-group :label="$t('commands')" :label-for="$id('commands')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-textarea :id="$id('commands')" v-model="commands" autofocus rows="5" no-resize />
				</b-form-group>
			</b-col>
			<b-col cols="auto">
				<b-form-group :label="$t('line.title')" :label-for="$id('lineWidth')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-form-group :label="$t('line.width') + ': '" :label-for="$id('lineWidth')" label-size="sm" label-cols="3" label-align="right">
						<b-input :id="$id('lineWidth')" v-model="lineWidth" placeholder="1" type="number" number min="0" max="100" step="0.01" />
					</b-form-group>
					<b-form-group :label="$t('line.cap') + ': '" :label-for="$id('lineCap')" label-size="sm" label-cols="3" label-align="right">
						<b-select :id="$id('lineCap')" v-model="lineCap" :options="['butt', 'round', 'square']" />
					</b-form-group>
					<b-form-group :label="$t('line.join') + ': '" :label-for="$id('lineJoin')" label-size="sm" label-cols="3" label-align="right">
						<b-select :id="$id('lineJoin')" v-model="lineJoin" :options="['bevel', 'round', 'miter']" />
					</b-form-group>
				</b-form-group>
			</b-col>
			<b-col cols="auto">
				<b-form-group :label="$t('viewport.title')" :label-for="$id('viewportWidth')" label-align="center" label-class="font-weight-bold" label-size="lg">
					<b-form-group :label="$t('viewport.size') + ': '" :label-for="$id('viewportHeight')" label-size="sm" label-cols="2" label-align="right">
						<b-input-group>
							<b-input :id="$id('viewportWidth')" readonly :value="viewportWidth.toFixed(2)" />
							<b-input-group-prepend is-text>X</b-input-group-prepend>
							<b-input :id="$id('viewportHeight')" v-model="viewportHeight" placeholder="100" type="number" min="1" max="1_000_000" step="1" />
						</b-input-group>
					</b-form-group>
					<b-form-group :label="$t('viewport.offset') + ': '" :label-for="$id('viewportOffsetX')" label-size="sm" label-cols="2" label-align="right">
						<b-input-group>
							<b-input :id="$id('viewportOffsetX')" v-model="viewportOffsetX" placeholder="50" type="number" min="-100_000" max="100_000" step="1" />
							<b-input-group-prepend is-text>X</b-input-group-prepend>
							<label :for="$id('viewportOffsetY')" class="sr-only">.</label><!-- Pleasure analysis tool ("every input needs a label") -->
							<b-input :id="$id('viewportOffsetY')" v-model="viewportOffsetY" placeholder="50" type="number" min="-100_000" max="100_000" step="1" />
						</b-input-group>
					</b-form-group>
				</b-form-group>
			</b-col>
		</b-row>
	</b-container>
</template>

<style lang="scss" scoped>
	.container-fluid {
		max-height: 12.7rem;
		overflow-y: auto;
	}
</style>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
	computed: mapFields([
		'commands',
		'lineWidth',
		'lineCap',
		'lineJoin',
		'viewportWidth',
		'viewportHeight',
		'viewportOffsetX',
		'viewportOffsetY'
	])
}
</script>
