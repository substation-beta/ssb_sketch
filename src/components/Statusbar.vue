<template>
	<b-container fluid class="p-0">
		<b-row no-gutters>
			<b-col>
				<b-icon icon="cursor-fill" /> {{ cursor ? cursor.x + " / " + cursor.y : "" }}
			</b-col>
			<b-col cols="12" sm="auto">
				<b><b-icon icon="exclamation-circle" /> v{{ version }}</b> {{ $t('loaded_at') }} <i>{{ date }}</i>
			</b-col>
		</b-row>
	</b-container>
</template>

<script>
export default {
	props: [
		'cursor'
	],
	data: () => ({
		version: document.querySelector("html > head > meta[name='version']").content,
		date: new Date().toLocaleString()
	})
}
</script>
