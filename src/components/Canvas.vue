<template>
	<canvas ref="canvas" />
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
					canvas.setAttribute("width", canvasParent.offsetWidth);
					canvas.setAttribute("height", canvasParent.offsetHeight);
					drawWithContext();
				};
			initCanvas();
			window.addEventListener("resize", initCanvas);
		}
	};

	function draw() {
		// Prepare canvas
		const canvas = this.$refs.canvas,
			ctx = canvas.getContext("2d");
		ctx.fillStyle = "white";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		// Assign viewport
		const ratio = canvas.height / this.viewportHeight,
			viewportWidth = canvas.width / ratio;
		console.log(viewportWidth);
		ctx.scale(ratio, ratio);
		ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
		// Draw axis
		const axisLineWidth = this.viewportHeight / 200;
		ctx.fillStyle = "black";
		ctx.fillRect(-0.5, -this.viewportOffsetY, axisLineWidth, axisLineWidth * 4);
		ctx.fillRect(-this.viewportOffsetX, -0.5, axisLineWidth * 4, axisLineWidth);
		// Draw commands!
		
		// TODO

		// Reset canvas
		ctx.restore();
	}
</script>