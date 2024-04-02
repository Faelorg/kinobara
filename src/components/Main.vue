<script lang="ts">
import { IFilms, IState } from '../Types'

let films: IFilms[]
let states: IState[]

export default {
	data() {
		return {
			films,
			states,
		}
	},

	created() {
		this.films = this.$cookies.get('films')
		this.states = this.$cookies.get('states')
	},
}
</script>
<template>
	<div class="container">
		<template v-for="film in films">
			<div v-if="film.idState == 1" class="film">
				<img :src="film.image" alt="film" />
				<div class="film_text">
					<h1>{{ film.name }}</h1>
				</div>
			</div>
		</template>
	</div>
</template>
<style scoped>
.container {
	display: grid;
	width: 1256px;
	border-radius: 15px;
	border: #98c15e 1px solid;
	background: #4b4b4b;
	gap: 46px;
	padding: 40px 31px;
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

.film_text {
	padding-top: 10px;
}

h1 {
	font-size: 42px;
	color: #cde735;
	font-weight: bold;
}
</style>
