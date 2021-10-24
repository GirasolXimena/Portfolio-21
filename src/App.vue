<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld title="Robert Andrade"  subtitle="Front End Developer" />
</template>
<style>
:root {
	--navy: #0c0c4a;
	--dark-navy: #060726;
	--pink: rgba(213, 84, 213, 1);
	--pink2: rgba(213, 84, 213, 0.7);
}
#app {
	width: 100%;
	height: 75%;
	display: grid;
	place-items: center;
	grid-template-columns: repeat(2, 1fr);
}

body {
	width: 100vw;
	height: 100vh;
	background: black;
	display: grid;
	place-items: center;
	filter: saturate(130%) contrast(125%);
}
</style>