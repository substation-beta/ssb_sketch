<template>
	<canvas ref="canvas"
		@mousemove="$emit('cursor', {x: ($event.offsetX / viewportRatio - viewportOffsetX).toFixed(2), y: ($event.offsetY / viewportRatio - viewportOffsetY).toFixed(2)})"
		@mouseleave="$emit('cursor', null)"
	/>
</template>

<style lang="scss" scoped>
	canvas {
		cursor: crosshair;
	}
</style>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		computed: {
			...mapFields([
				"commands",
				"lineWidth",
				"lineCap",
				"lineJoin",
				"viewportWidth",
				"viewportHeight",
				"viewportOffsetX",
				"viewportOffsetY"
			]),
			viewportRatio: {
				get() {
					return this.$refs.canvas.height / this.viewportHeight;
				},
				cache: false	// Canvas reference not watched for cache refresh
			}
		},
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
			const initCanvas = function() {
				const canvas = this.$refs.canvas,
					canvasParent = canvas.parentNode;
				canvas.setAttribute("width", canvasParent.offsetWidth);
				canvas.setAttribute("height", canvasParent.offsetHeight);
				this.viewportWidth = canvas.width / this.viewportRatio;
				draw.bind(this)();
			}.bind(this);
			initCanvas();
			window.addEventListener("resize", initCanvas);
		}
	};

	function draw() {
		// Canvas rendering reference: <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D>
		// Setup canvas
		const canvas = this.$refs.canvas,
			ctx = canvas.getContext("2d");
		ctx.fillStyle = "white";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.save();
		// Assign viewport
		ctx.scale(this.viewportRatio, this.viewportRatio);
		ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
		// Draw axis
		const axisLineWidth = this.viewportHeight / 200;
		ctx.fillStyle = "black";
		ctx.fillRect(-0.5, -this.viewportOffsetY, axisLineWidth, axisLineWidth * 4);
		ctx.fillRect(-this.viewportOffsetX, -0.5, axisLineWidth * 4, axisLineWidth);
		// Draw commands!
		
		// TODO: draw commands

		// Reset canvas
		ctx.restore();
	}
</script>