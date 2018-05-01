new Vue({
	el: '#app',
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameRunning: false,
		turns: []
	},
	methods: {
		startGame() {
			this.gameRunning = true;
			this.playerHealth = 100;
			this.monsterHealth = 100;
		},
		attack() {
			const damage = this.calculateDamage(3, 10);
			this.monsterHealth -= damage;
			this.turns.push({
				isPlayer: true,
				text: 'Player hits Monster for ' + damage
			});

			if (this.checkWin()) {
				return;
			}

			this.monsterAttacks();
		},
		specialAttack() {
			const damage = this.calculateDamage(10, 20);
			this.monsterHealth -= damage;
			this.turns.push({
				isPlayer: true,
				text: 'Player hits Monster with special attack for ' + damage
			});

			if (this.checkWin()) {
				return;
			}
			this.monsterAttacks();
		},
		heal() {
			if (this.playerHealth <= 90) {
				this.playerHealth += 10;
			} else {
				this.playerHealth = 100;
			}
			this.turns.push({
				isPlayer: true,
				text: 'Player heals with 10'
			});
			this.monsterAttacks();
		},
		giveUp() {
			this.gameRunning = false;
			this.turns = [];
		},
		monsterAttacks() {
			const damage = this.calculateDamage(5, 12);
			this.playerHealth -= damage;
			this.turns.push({
				isPlayer: false,
				text: 'Monster hits Player for ' + damage
			});
			this.checkWin();
		},
		calculateDamage(min, max) {
			return Math.floor(Math.random() * (max - min) + min);
		},
		checkWin() {
			if (this.monsterHealth <= 0) {
				if (confirm('You Won! New Game?')) {
					this.startGame();
					this.turns = [];
				} else {
					this.gameRunning = false;
					return true;
				}
			} else if (this.playerHealth <= 0) {
				if (confirm('You Lost! New Game?')) {
					this.startGame()
				} else {
					this.gameRunning = false;
					return true;
				}
			}

			return false;
		}
	}
});