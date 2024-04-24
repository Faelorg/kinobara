<script lang="ts">
import { IFilms, IState, ISeances, IHalls } from '../Types'

let films: IFilms[]
let states: IState[]
let seances: ISeances[]
let halls: IHalls[]
export default {
	data() {
		return {
			films,
			states,
			seances,
			halls,
		}
	},

	created() {
		this.films = this.$cookies.get('films')
		this.states = this.$cookies.get('states')
		this.seances = this.$cookies.get('seances')
		this.halls = this.$cookies.get('halls')
	},
}
</script>
<template>
	<div class="container">
		<template v-for="film in films">
			<div
				v-if="film.idState == 2 || film.idState == 3 || film.idState == 4"
				class="film"
			>
				<img :src="film.image" alt="film" />
				<div class="film_text">
					<h1>
						<router-link
							:to="{
								name: 'film',
								params: {
									id: film.id,
								},
							}"
						>
							{{ film.name }}
						</router-link>
					</h1>
					<div class="tags">
						<p>{{ film.country }}</p>
						<p>{{ film.type }}</p>
						<p>{{ film.age }}+</p>
					</div>

					<div class="seances">
						<template v-for="state in states">
							<div class="t" v-if="state.id == film.idState">
								{{ state.text }}
							</div>
						</template>
					</div>
				</div>
			</div>
		</template>
	</div>
</template>
<style scoped>
.container {
	display: grid;
	border-radius: 15px;
	border: #98c15e 1px solid;
	background: #4b4b4b;
	gap: 46px;
	padding: 40px 31px;
}
* {
	text-decoration: none;
}
.seances {
	display: flex;
	justify-content: center;
	font-size: 30px;
	margin-top: 24px;
	color: #cde735;
	border: #cde735 1px solid;
	border-radius: 10px;
	background-color: #4b4b4b;
	align-items: center;
	padding: 15px 30px;
	margin-right: 37px;
}

.t {
	padding: 10px;
}

.film {
	display: grid;
	grid-template-columns: max-content 1fr;
	background-color: #363636;
	border-radius: 15px;
	border: solid 1px #cde735;
	gap: 33px;
}

img {
	border-radius: 15px;
	border: #cde735 solid 1px;
}

.tags {
	margin-top: 24px;
	display: grid;
	grid-template-columns: max-content max-content max-content;
	gap: 40px;
	font-size: 30px;
	color: #cde735;
}

.film_text {
	padding-top: 10px;
}

h1 {
	font-size: 42px;
	color: #cde735;
	font-weight: bold;
}

@media screen and (max-width: 1300px) {
	.seances {
		display: grid;
		justify-content: center;
		justify-items: center;
	}
	.seances {
		font-size: 24px;
		padding: 5px 15px;
	}

	.tags {
		font-size: 26px;
		margin-top: 5px;
	}
	a {
		font-size: 30px;
	}
}

@media screen and (max-width: 1070px) {
	.containe {
		padding: 20px 15px;
	}

	.film {
		grid-template-columns: repeat(2, max-content);
	}

	.film img {
		width: 50%;
	}

	.film {
		width: 100%;
		padding: 0 10px;
		grid-template-columns: 100%;
		justify-self: center;
		justify-content: center;
		justify-items: center;
	}

	.film_text {
		display: grid;
		justify-content: center;
		justify-items: center;
		justify-self: center;
	}

	.seances {
		display: grid;
		justify-items: center;
		justify-content: center;
		justify-self: center;
		margin: 5px;
	}
}

@media screen and (max-width: 650px) {
	.tags {
		grid-template-columns: max-content;
		justify-content: center;
		justify-items: center;
		gap: 5px;
	}

	.tags p {
		margin: 0;
	}
}

@media screen and (max-width: 650px) {
	.time {
		display: grid;
		grid-template-columns: 100%;
	}

	.seances {
		font-size: 20px;
		padding: 2px 5px;
	}

	.film {
		padding: 0;
	}

	.film_text {
		padding: 0;
	}

	.tags {
		font-size: 22px;
		margin-top: 5px;
	}
	h1 {
		font-size: 24px;
		height: max-content;
	}
	a {
		font-size: 24px;
	}

	.film img {
		width: 100%;
	}
}
</style>
