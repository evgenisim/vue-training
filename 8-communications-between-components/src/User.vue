<template>
	<div class="component">
		<h1>The User Component</h1>
		<p>I'm an awesome User!</p>
		<button @click="changeName">Change Name</button>
		<p>{{ name }}</p>
		<hr>
		<div class="row">
			<div class="col-xs-12 col-sm-6">
				<app-user-detail
					:name="name"
					@nameReset="name = $event"
					:resetFn="resetName"
					:userAge="age"></app-user-detail>
			</div><!-- /.col-xs-12 col-sm-6 -->
			<div class="col-xs-12 col-sm-6">
				<app-user-edit
					:userAge="age"
					:changeAge="editAge"></app-user-edit>
			</div><!-- /.col-xs-12 col-sm-6 -->
		</div><!-- /.row -->
	</div><!-- /.component -->
</template>

<script type="text/javascript">
	import UserDetail from './UserDetail.vue';
	import UserEdit from './UserEdit.vue';

	export default {
		data: function() {
			return {
				name: 'Evgeni',
				age: 25
			}
		},
		methods: {
			changeName() {
				this.name = 'Test';
			},
			resetName() {
				this.name = 'Evgeni'
			},
			editAge() {
				this.age = 30;
			}
		},
		components: {
			appUserDetail: UserDetail,
			appUserEdit: UserEdit
		}
	}
</script>
