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
			<div v-if="film.idState == 1" class="film">
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
						<p>{{ halls[0].adress }}</p>
						<div class="time">
							<template v-for="seance in seances">
								<div class="t" v-if="seance.idFilm == film.id">
									{{ seance.time }}
								</div>
							</template>
						</div>
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

.seances {
	display: flex;
	justify-content: space-between;
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
	border: #cde735 1px solid;
	border-radius: 5px;
	padding: 10px;
	background-color: #363636;
}

.time {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 12px;
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
</style>
