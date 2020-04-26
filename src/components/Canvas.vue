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
		data: () => ({ viewportRatio: null }),
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
			])
		},
		watch: {
			commands: draw,
			lineWidth: draw,
			lineCap: draw,
			lineJoin: draw,
			viewportHeight() { this.updateViewportResolution(); draw.bind(this)(); },
			viewportOffsetX: draw,
			viewportOffsetY: draw
		},
		methods: {
			updateViewportResolution() {
				this.viewportRatio = this.$refs.canvas.height / this.viewportHeight;
				this.viewportWidth = this.$refs.canvas.width / this.viewportRatio;
			}
		},
		mounted() {
			const initCanvas = function() {
				const canvas = this.$refs.canvas,
					canvasParent = canvas.parentNode;
				canvas.setAttribute("width", canvasParent.offsetWidth);
				canvas.setAttribute("height", canvasParent.offsetHeight);
				this.updateViewportResolution();
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
		// Draw axis
		const axisSize = {width: 4, height: 12};
		ctx.fillStyle = "black";
		ctx.font = axisSize.height + "px 'Open Sans'";
		ctx.fillRect(this.viewportRatio * this.viewportOffsetX - axisSize.width / 2, 0, axisSize.width, axisSize.height);
		ctx.textAlign = "center";
		ctx.textBaseline = "top";
		ctx.fillText("0", this.viewportRatio * this.viewportOffsetX, axisSize.height + 1);
		ctx.fillRect(0, this.viewportRatio * this.viewportOffsetY - axisSize.width / 2, axisSize.height, axisSize.width);
		ctx.textAlign = "left";
		ctx.textBaseline = "middle";
		ctx.fillText("0", axisSize.height + 1, this.viewportRatio * this.viewportOffsetY);
		// Assign viewport
		ctx.scale(this.viewportRatio, this.viewportRatio);
		ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
		// Draw commands!
		
		// TODO: draw commands

		// Reset canvas
		ctx.restore();
	}
</script>