<template>
	<div>
		<div
			class="w3-container w3-content w3-padding-64"
			style="max-width: 800px; color: white"
			id="contact"
		>
			<h1 class="w3-wide w3-center">
				Please feel free to reach out to us with your questions and comments.
			</h1>
			<h2 class="w3-wide w3-center">CONTACT</h2>
			<div class="w3-row w3-padding-32">
				<div class="w3-col m6 w3-large w3-margin-bottom">
					<i class="fa fa-map-marker" style="width: 30px"></i> The beautiful
					TUNISIA<br />
					<i class="fa fa-phone" style="width: 30px"></i> Phone: +216 27 535
					699<br />
					<i class="fa fa-envelope" style="width: 30px"> </i> Email:
					skymage.team@gmail.com<br />
				</div>
				<div class="w3-col m6">
					<div class="w3-row-padding" style="margin: 0 -16px 8px -16px">
						<div class="w3-half">
							<input
								class="w3-input"
								style="color: white; border-color: white"
								type="text"
								placeholder="Name"
								required
								name="Name"
								v-model="name"
							/>
						</div>
						<div class="w3-half">
							<input
								class="w3-input"
								style="color: white; border-color: white"
								type="email"
								placeholder="email"
								required
								name="email"
								v-model="email"
							/>
						</div>
						<input
							class="w3-input"
							style="color: white; border-color: white"
							type="text"
							placeholder="Message"
							required
							name="message"
							v-model="message"
						/>
						<button
							@click="sendMessage"
							class="w3-button w3-orange w3-section w3-right"
						>
							SEND
						</button>
					</div>
				</div>
			</div>
		</div>
		<v-app-bar color="#6A76AB" prominent src="https://j.gifs.com/L73vD4.gif">
		</v-app-bar>
	</div>
</template>
<script>
export default {
	data: () => ({
		name: '',
		email: '',
		message: '',
	}),
	methods: {
		sendMessage() {
			let message = {
				name: this.name,
				email: this.email,
				message: this.message,
			};
			this.$store.dispatch('sendMessage', message).then(() => {
				this.name = '';
				this.email = '';
				this.message = '';
			});
		},
	},
};
</script>
