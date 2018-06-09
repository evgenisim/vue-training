import Vue from 'vue';
import User from './User.vue';

export const eventBus = new Vue({
	methods: {
		changeAge(age) {
			this.$emit('ageWasEdited', age);
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(User)
})

