<template>
	<b-container fluid class="p-0 vh-100 d-flex flex-column bg-danger">
		<b-row no-gutters class="text-white bg-dark">
			<ssb-toolbar />
		</b-row>
		<b-row no-gutters class="flex-fill bg-light">
			<ssb-canvas />
		</b-row>
	</b-container>
</template>

<script>
	import Toolbar from "./Toolbar";
	import Canvas from "./Canvas";

	export default {
		components: {
			"ssb-toolbar": Toolbar,
			"ssb-canvas": Canvas
		}
	}
</script>