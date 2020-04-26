<template>
	<div class="vh-100 d-flex flex-column">
		<header class="text-white bg-dark">
			<ssb-toolbar />
		</header>
		<main  class="flex-fill overflow-hidden text-black bg-light">
			<ssb-canvas @cursor="canvasCursor = $event" />
		</main>
		<footer class="text-white bg-dark">
			<b-icon icon="cursor" /> {{ canvasCursor ? canvasCursor.x + " / " + canvasCursor.y : "" }}
		</footer>
	</div>
</template>

<script>
	import Toolbar from "./Toolbar";
	import Canvas from "./Canvas";

	export default {
		data: () => ({canvasCursor: null}),
		components: {
			"ssb-toolbar": Toolbar,
			"ssb-canvas": Canvas
		}
	}
</script>