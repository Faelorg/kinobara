<script lang="ts">
import Main from './components/Main.vue'
import { IState, IFilms, ISeances } from './Types'

export default {
	components: {
		Main,
	},

	created() {
		let states: IState[] = [
			{ id: 1, text: 'В прокате' },
			{ id: 2, text: 'Скоро в прокате' },
			{ id: 3, text: 'Выйдет в 2025' },
			{ id: 4, text: 'Выйдет в 2027' },
			{ id: 5, text: 'Выйдет в 2026' },
		]

		let films: IFilms[] = [
			{
				id: 1,
				age: 18,
				author: 'Автор 1',
				country: 'США',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 1,
				name: 'Кино 1',
				type: 'Хоррор',
				image: 'src/img/1.png',
			},

			{
				id: 2,
				age: 6,
				author: 'Автор 2',
				country: 'Россия',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 1,
				name: 'Кино 2',
				type: 'Мультфильм',
				image: 'src/img/2.png',
			},

			{
				id: 3,
				age: 16,
				author: 'Автор 3',
				country: 'Великобритания',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 1,
				name: 'Кино 3',
				type: 'Хоррор',
				image: 'src/img/3.png',
			},

			{
				id: 4,
				age: 18,
				author: 'Автор 4',
				country: 'США',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 2,
				name: 'Кино 4',
				type: 'Хоррор',
				image: '../img/1.png',
			},

			{
				id: 5,
				age: 6,
				author: 'Автор 5',
				country: 'Россия',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 3,
				name: 'Кино 5',
				type: 'Мультфильм',
				image: '../img/2.png',
			},

			{
				id: 6,
				age: 16,
				author: 'Автор 6',
				country: 'Великобритания',
				description:
					'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, et.',
				idState: 4,
				name: 'Кино 3',
				type: 'Хоррор',
				image: '../img/2.png',
			},
		]

		let seances: ISeances[] = [
			{ id: 1, time: '22:40', idHall: 1, idFilm: 1 },
			{ id: 2, time: '22:45', idHall: 1, idFilm: 2 },
			{ id: 2, time: '22:50', idHall: 1, idFilm: 3 },
		]

		this.$cookies.set('states', states)

		this.$cookies.set('films', films)

		this.$cookies.set('seances', seances)
	},
}
</script>

<template>
	<header>
		<div class="header">
			<div class="mainDiv">
				<router-link to="" class="main">КиноБара</router-link>
			</div>
			<nav>
				<router-link to="#">Акции</router-link>
				<router-link to="#">Скоро выходит</router-link>
				<router-link to="#">Контакты</router-link>
			</nav>
		</div>

		<div class="seans"></div>
	</header>

	<router-view class="layout"></router-view>
	<footer></footer>
</template>

<style scoped>
.mainDiv {
	display: grid;
	width: 100%;
	justify-content: center;
	align-content: center;
	height: 100%;
	border-right: #98c15e solid 1px;
}
.layout {
	margin: 0 auto;
}
.main {
	font-size: 56px;
}
</style>
