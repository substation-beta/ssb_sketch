<template>
	<canvas ref="canvas"
		@mouseenter="emitCursor"
		@mousemove="emitCursor($event); updateDrag($event)"
		@mouseleave="emitCursor($event); endDrag()"
		@mousedown="startDrag"
		@mouseup="endDrag"
		@wheel="zoomView"
	><code>Your browser has to support canvas for this application content!</code></canvas>
</template>

<style lang="scss" scoped>
	canvas {
		cursor: crosshair;
	}
</style>

<script>
import { mapFields } from 'vuex-map-fields';

export default {
	data: () => ({
		viewportRatio: null,
		drag: null
	}),
	computed: {
		...mapFields([
			'commands',
			'lineWidth',
			'lineCap',
			'lineJoin',
			'viewportWidth',
			'viewportHeight',
			'viewportOffsetX',
			'viewportOffsetY'
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
	mounted() {
		const initCanvas = function() {
			const canvas = this.$refs.canvas;
			const canvasParent = canvas.parentNode;
			canvas.setAttribute('width', canvasParent.offsetWidth);
			canvas.setAttribute('height', canvasParent.offsetHeight);
			this.updateViewportResolution();
			draw.bind(this)();
		}.bind(this);
		initCanvas();
		window.addEventListener('resize', initCanvas);
	},
	methods: {
		updateViewportResolution() {
			this.viewportRatio = this.$refs.canvas.height / this.viewportHeight;
			this.viewportWidth = this.$refs.canvas.width / this.viewportRatio;
		},
		emitCursor(evt) {
			this.$emit(
				'cursor',
				evt.type === 'mouseleave'
					? null
					: { x: (evt.offsetX / this.viewportRatio - this.viewportOffsetX).toFixed(2), y: (evt.offsetY / this.viewportRatio - this.viewportOffsetY).toFixed(2) }
			);
		},
		startDrag(evt) {
			this.drag = {
				lastPosition: { x: evt.offsetX, y: evt.offsetY },
				moveAccum: { x: 0, y: 0 }
			};
		},
		endDrag() {
			this.drag = null;
		},
		updateDrag(evt) {
			if (this.drag) {
				this.drag.moveAccum.x += (evt.offsetX - this.drag.lastPosition.x) / this.viewportRatio;
				if (Math.abs(this.drag.moveAccum.x) >= 1) {
					this.viewportOffsetX += this.drag.moveAccum.x < 0 ? Math.ceil(this.drag.moveAccum.x) : Math.floor(this.drag.moveAccum.x);
					this.drag.moveAccum.x %= 1;
				}
				this.drag.moveAccum.y += (evt.offsetY - this.drag.lastPosition.y) / this.viewportRatio;
				if (Math.abs(this.drag.moveAccum.y) >= 1) {
					this.viewportOffsetY += this.drag.moveAccum.y < 0 ? Math.ceil(this.drag.moveAccum.y) : Math.floor(this.drag.moveAccum.y);
					this.drag.moveAccum.y %= 1;
				}
				this.drag.lastPosition = { x: evt.offsetX, y: evt.offsetY };
			}
		},
		zoomView(evt) {
			const heightBase10 = Math.pow(10, Math.floor(Math.log10(this.viewportHeight)));
			const unitsBase10 = Math.floor(this.viewportHeight / heightBase10);
			const newHeight = heightBase10 * unitsBase10 + (evt.deltaY < 0 && unitsBase10 === 1 ? -heightBase10 / 10 : Math.sign(evt.deltaY) * heightBase10);
			this.viewportHeight = Math.max(Math.min(newHeight, 1000000), 1);
		}
	}
};

function draw() {
	// Canvas rendering reference: <https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D>
	// Prepare canvas
	const canvas = this.$refs.canvas;
	const ctx = canvas.getContext('2d');
	ctx.fillStyle = 'white';
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.save();
	// Draw axis
	const axisSize = { width: 4, height: 12 };
	ctx.fillStyle = 'black';
	ctx.font = axisSize.height + "px 'Open Sans'";
	ctx.fillRect(this.viewportRatio * this.viewportOffsetX - axisSize.width / 2, 0, axisSize.width, axisSize.height);
	ctx.textAlign = 'center';
	ctx.textBaseline = 'top';
	ctx.fillText('0', this.viewportRatio * this.viewportOffsetX, axisSize.height + 1);
	ctx.fillRect(0, this.viewportRatio * this.viewportOffsetY - axisSize.width / 2, axisSize.height, axisSize.width);
	ctx.textAlign = 'left';
	ctx.textBaseline = 'middle';
	ctx.fillText('0', axisSize.height + 1, this.viewportRatio * this.viewportOffsetY);
	// Assign viewport
	ctx.scale(this.viewportRatio, this.viewportRatio);
	ctx.translate(this.viewportOffsetX, this.viewportOffsetY);
	// Draw commands!
	ctx.fillStyle = 'blue';
	ctx.strokeStyle = 'red';
	ctx.miterLimit = this.viewportHeight;
	ctx.lineWidth = Math.max(this.lineWidth, Number.MIN_VALUE);
	ctx.lineCap = this.lineCap;
	ctx.lineJoin = this.lineJoin;
	ctx.globalAlpha = 0.5;

	// TODO: draw commands
	ctx.strokeRect(-10, -5, 20, 10);
	ctx.fillRect(-10, -5, 20, 10);

	// Reset canvas
	ctx.restore();
}
</script>
