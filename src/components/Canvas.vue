<template>
	<canvas ref="canvas" @mousemove="updateCursorPosition" @mouseleave="removeCursorPosition" />
</template>

<style lang="scss" scoped>
	canvas {
		cursor: crosshair;
	}
</style>

<script>
	import { mapFields } from "vuex-map-fields";

	export default {
		data: () => ({cursorPos: null}),
		computed: mapFields([
			"commands",
			"lineWidth",
			"lineCap",
			"lineJoin",
			"viewportWidth",
			"viewportHeight",
			"viewportOffsetX",
			"viewportOffsetY"
		]),
		watch: {
			cursorPos: draw,
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
		},
		methods: {
			updateCursorPosition: function(evt) { this.cursorPos = {x: evt.offsetX, y: evt.offsetY}; },
			removeCursorPosition: function() { this.cursorPos = null; }
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
		const ratio = canvas.height / this.viewportHeight;
		this.viewportWidth = canvas.width / ratio;
		ctx.scale(ratio, ratio);
		ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
		// Draw axis
		const axisLineWidth = this.viewportHeight / 200;
		ctx.fillStyle = "black";
		ctx.fillRect(-0.5, -this.viewportOffsetY, axisLineWidth, axisLineWidth * 4);
		ctx.fillRect(-this.viewportOffsetX, -0.5, axisLineWidth * 4, axisLineWidth);
		// Draw commands!
		
		// TODO: draw commands

		// Draw cursor position
		if(this.cursorPos) {
			ctx.restore();
			ctx.save();
			ctx.textAlign = "right";
			ctx.textBaseline = "bottom";
			ctx.fillStyle = "black";
			ctx.font = "1em 'Open Sans'";
			ctx.fillText(
				(this.cursorPos.x / ratio - this.viewportOffsetX).toFixed(2) + " / " + (this.cursorPos.y / ratio - this.viewportOffsetY).toFixed(2),
				canvas.width - 1,
				canvas.height - 1
			);
		}
		// Reset canvas
		ctx.restore();
	}
</script>