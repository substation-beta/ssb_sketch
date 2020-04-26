<template>
	<div>
		<span class="float-left">
			<b-icon icon="cursor" /> {{ cursor ? cursor.x + " / " + cursor.y : "" }}
		</span>
		<span class="float-right">
			<b>v{{ version }}</b> {{ $t('loaded_at') }} <i>{{ date }}</i>
		</span>
	</div>
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