<template>
	<b-container fluid class="p-0">
		<span class="float-left">
			<b-icon icon="cursor-fill" /> {{ cursor ? cursor.x + " / " + cursor.y : "" }}
		</span>
		<span class="float-right">
			<b><b-icon icon="exclamation-circle" /> v{{ version }}</b> {{ $t('loaded_at') }} <i>{{ date }}</i>
		</span>
	</b-container>
</template>

<script>
	export default {
		props: [
			"cursor"
		],
		data: () => ({
			version: document.querySelector("html > head > meta[name='version']").content,
			date: new Date().toLocaleString()
		})
	}
</script>