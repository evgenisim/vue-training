<template>
	<div>
		<div class="title">
			<slot name="title"></slot>
			<span>
				<slot name="subtitle">The subtitle</slot>
			</span>
		</div>

		<div class="content">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['quote']
	}
</script>

<style scoped>
	div {
		border: 1px solid  #ccc;
		width: 100%; 
        box-shadow: 1px 1px 2px #000;
        padding: 30px; 
        margin: 30px auto; 
        text-align: center; 
	}

	h2 {
		color: red;
	}

	.title {
		font-style: italic;
	}
</style>