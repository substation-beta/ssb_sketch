<template>
	<canvas ref="canvas" class="m-auto bg-white" />
</template>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"commands",
			"fillColor",
			"strokeColor",
			"lineWidth",
			"lineCap",
			"lineJoin",
			"viewportOffsetX",
			"viewportOffsetY",
			"viewportWidth",
			"viewportHeight"
		]),
		mounted: draw,
		watch: {
			commands: draw,
			fillColor: draw,
			strokeColor: draw,
			lineWidth: draw,
			lineCap: draw,
			lineJoin: draw,
			viewportOffsetX: draw,
			viewportOffsetY: draw,
			viewportWidth: draw,
			viewportHeight: draw
		}
	};

	function draw() {
		// Prepare canvas
		const canvas = this.$refs.canvas;
		canvas.style.width = this.viewportWidth + "px";
		canvas.style.height = this.viewportHeight + "px";
		// Draw!
		const ctx = canvas.getContext("2d");
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
</script>