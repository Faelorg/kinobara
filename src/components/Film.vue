<script lang="ts">
import { IFilms, IState, ISeances, IHalls } from '../Types'

let films: IFilms[]
let states: IState[]
let seances: ISeances[]
let halls: IHalls[]
let film: IFilms
export default {
	data() {
		return {
			film,
			states,
			seances,
			halls,
			films,
		}
	},

	created() {
		this.films = this.$cookies.get('films')
		this.film = this.$cookies
			.get('films')
			.find(x => x.id.toString() == this.$route.params.id)
		this.states = this.$cookies.get('states')
		this.seances = this.$cookies.get('seances')
		this.halls = this.$cookies.get('halls')
	},

	methods: {
		goToNext(id: number) {
			this.$router.push('/redir/' + id)
		},
	},
}
</script>

<template>
	<div class="main">
		<div class="first">
			<img :src="'../' + film.image" alt="film" />

			<div class="about">
				<h2>{{ film.name }}</h2>
				<h3>Автор: {{ film.author }}</h3>
				<h3>Страна: {{ film.country }}</h3>
				<h3>Жанр: {{ film.type }}</h3>
				<h3>Возрастной рейтинг: {{ film.age }}+</h3>
				<p>Описание: {{ film.description }}</p>
			</div>
			<button>Купить биллет</button>
		</div>
		<div class="second">
			<h4>Похожие фильмы</h4>
			<div class="films">
				<template v-for="i in 4">
					<img
						:src="'../' + films[i - 1].image"
						alt="film"
						@click="goToNext(films[i - 1].id)"
					/>
				</template>
			</div>
		</div>
	</div>
</template>

<style scoped>
.main {
	background-color: #4b4b4b;
	border-radius: 15px;
	border: #cde735 1px solid;
	display: grid;
	gap: 15px;
	padding-bottom: 30px;
}
.first {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 30px;
}
img {
	border-radius: 15px;
	border: #cde735 1px solid;
}
.first img {
	width: 500px;
	height: 722px;
}
.about {
	margin-top: 50px;
	display: grid;
	gap: 10px;
	height: 50%;
}
.about h2 {
	font-size: 72px;
}
.about h3 {
	font-size: 36px;
}
.about p {
	font-size: 28px;
}

button {
	background-color: #cde735;
	color: #363636;
	font-size: 48px;
	border-radius: 20px;
	width: 470px;
	height: 94px;
	display: flex;
	justify-self: center;
	justify-content: center;
	align-items: center;
	border: #363636 1px solid;
}

button:hover {
	background-color: #363636;
	color: #cde735;
	border: #cde735 1px solid;
	transition: 0.2s;
}

.second {
	display: grid;
	justify-content: center;
	justify-items: center;
}

.second h4 {
	font-size: 48px;
}

.films {
	display: grid;
	grid-template-columns: max-content max-content max-content max-content;
	gap: 80px;
}
</style>
