<template>
	<div class="component">
		<h3>You may view the User Details here</h3>
		<p>Many Details</p>
		<p>User Name: {{ name }}</p>
		<p>User Age: {{ userAge }}</p>
		<button @click="resetName">Reset Name</button>
		<button @click="resetFn">Reset Name</button>
	</div><!-- /.component -->
</template>

<script type="text/javascript">
	import { eventBus } from './main';
	export default {
		props: {
			name: {
				type: String,
				default: 'default'
			},
			resetFn: Function,
			userAge: Number	
		},
		methods: {
			switchName() {
				return this.name.split('').reverse().join('');
			},
			resetName() {
				this.name = 'Evgeni'
				this.$emit('nameReset', this.name);
			}
		},
		created() {
			eventBus.$on('changeAge', (age) => {
				this.userAge = age;
			});
		}
	}
</script>

<style scoped>
	div {
		background-color: lightcoral; 
	}
</style>