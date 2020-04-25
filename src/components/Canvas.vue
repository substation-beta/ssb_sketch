<template>
	<canvas ref="canvas" class="bg-white" />
</template>

<style lang="scss" scoped>
	canvas {
		cursor: crosshair;
	}
</style>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: mapFields([
			"commands",
			"lineWidth",
			"lineCap",
			"lineJoin",
			"viewportHeight",
			"viewportOffsetX",
			"viewportOffsetY"
		]),
		watch: {
			commands: draw,
			fillColor: draw,
			strokeColor: draw,
			lineWidth: draw,
			lineCap: draw,
			lineJoin: draw,
			viewportHeight: draw,
			viewportOffsetX: draw,
			viewportOffsetY: draw
		},
		mounted: function() {
			const canvas = this.$refs.canvas,
				canvasParent = canvas.parentNode,
				drawWithContext = draw.bind(this),
				initCanvas = () => {
					canvas.style.width = canvasParent.offsetWidth + "px";
					canvas.style.height = canvasParent.offsetHeight + "px";
					drawWithContext();
				};
			initCanvas();
			window.addEventListener("resize", initCanvas);
		}
	};

	function draw() {
		// Get clean canvas
		const canvas = this.$refs.canvas,
			ctx = canvas.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		// Set viewport
		ctx.save();
		const ratio = canvas.height / this.viewportHeight;
		ctx.scale(ratio, ratio);
		ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
		// Draw!
		ctx.fillStyle = "green";
		ctx.fillRect(0, 0, 100, 100);
		// Unset viewport
		ctx.restore();
	}
</script>