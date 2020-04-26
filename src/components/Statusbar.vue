<template>
	<div>
		<b-icon icon="cursor" /> {{ cursor ? cursor.x + " / " + cursor.y : "" }}
	</div>
</template>

<script>
	export default {
		props: [
			"cursor"
		]
	}
</script>