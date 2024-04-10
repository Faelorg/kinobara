<script lang="ts">
import { IFilms, IState, ISeances, IHalls } from '../Types';

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
			<div v-if="film.idState == 2 || film.idState == 3 || film.idState == 4" class="film">
				<img :src="film.image" alt="film" />
				<div class="film_text">
					<h1>{{ film.name }}</h1>
					<div class="tags">

						<p>{{ film.country }}</p>
						<p>{{ film.type }}</p>
						<p>{{ film.age }}+</p>

					</div>
					
					<div class="seances">
						<template v-for="state in states">

							<div class="t" v-if="state.id==film.idState">
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
	width: 1256px;
	border-radius: 15px;
	border: #98c15e 1px solid;
	background: #4b4b4b;
	gap: 46px;
	padding: 40px 31px;
}

.seances{
	display: flex;
	justify-content:center;
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

.t{
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

.tags{
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
