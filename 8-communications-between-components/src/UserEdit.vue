<template>
	<div class="component">
		<h3>You may edit the User here</h3>
		<p>Edit me!</p>
		<p>Age: {{ userAge }}</p>
		<button @click="editAge()">Edit Age</button>
		<!-- <button @click="changeAge">Edit Age</button> -->
	</div><!-- /.component -->
</template>
<script type="text/javascript">
	import { eventBus } from './main';
	export default {
		props: {
			userAge: {
				type: Number
			},
			changeAge: Function
		},
		methods: {
			editAge() {
				this.userAge = 30;
				// eventBus.$emit('changeAge', this.userAge);
				eventBus.changeAge(userAge);
			}
		}
	}
</script>
<style scoped>
	div {
		background-color: lightgreen; 
	}
</style>