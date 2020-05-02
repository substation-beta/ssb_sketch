<template>
	<div class="vh-100 d-flex flex-column">
		<header class="text-white bg-dark">
			<ssb-toolbar />
		</header>
		<main class="flex-fill overflow-hidden">
			<ssb-canvas @cursor="canvasCursor = $event" />
		</main>
		<footer class="text-white bg-dark">
			<ssb-statusbar :cursor="canvasCursor" />
		</footer>
	</div>
</template>

<script>
import Toolbar from './Toolbar';
import Canvas from './Canvas';
import Statusbar from './Statusbar';

export default {
	components: {
		'ssb-toolbar': Toolbar,
		'ssb-canvas': Canvas,
		'ssb-statusbar': Statusbar
	},
	data: () => ({ canvasCursor: null })
}
</script>
