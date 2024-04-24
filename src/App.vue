<script lang="ts">
import Main from './components/Main.vue'
import { IState, IFilms, ISeances, IHalls, ISeats, ISales } from './Types'
let states: IState[] = [
	{ id: 1, text: 'В прокате' },
	{ id: 2, text: 'Выйдет в июле 2024' },
	{ id: 4, text: 'Выйдет в августе 2024' },
	{ id: 3, text: 'Выйдет в октябре 2024' },
	{ id: 5, text: 'Выйдет в январе 2024' },
]

let films: IFilms[] = [
	{
		id: 1,
		age: 18,
		author: 'Автор 1',
		country: 'США',
		description:
			'12-летняя Шарлотта живет со своей мамой, отчимом Итаном и новорожденным младшим братом.',
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
		description: '1942 год. Высокогорное село в Северной Осетии.',
		idState: 1,
		name: 'Кино 2',
		type: 'Мультфильм',
		image: 'src/img/2.png',
	},

	{
		id: 4,
		age: 18,
		author: 'Автор 4',
		country: 'США',
		description: '1942 год. Высокогорное село в Северной Осетии.',
		idState: 2,
		name: 'Кино 4',
		type: 'Хоррор',
		image: 'src/img/1.png',
	},

	{
		id: 5,
		age: 6,
		author: 'Автор 5',
		country: 'Россия',
		description:
			'12-летняя Шарлотта живет со своей мамой, отчимом Итаном и новорожденным младшим братом.',
		idState: 3,
		name: 'Кино 5',
		type: 'Мультфильм',
		image: 'src/img/2.png',
	},
]

let seances: ISeances[] = [
	{ id: 1, time: '20:00', idHall: 1, idFilm: 1 },
	{ id: 2, time: '20:00', idHall: 1, idFilm: 2 },
	{ id: 3, time: '20:00', idHall: 1, idFilm: 3 },

	{ id: 4, time: '22:40', idHall: 1, idFilm: 1 },
	{ id: 5, time: '22:45', idHall: 1, idFilm: 2 },
	{ id: 6, time: '22:50', idHall: 1, idFilm: 3 },

	{ id: 7, time: '01:20', idHall: 1, idFilm: 1 },
	{ id: 8, time: '01:25', idHall: 1, idFilm: 2 },
	{ id: 9, time: '01:30', idHall: 1, idFilm: 3 },
]

let halls: IHalls[] = [
	{
		id: 1,
		adress: 'Adress 1',
		seats: [
			[
				{
					id: 1,
					isBook: false,
					price: 100,
				},
				{
					id: 2,
					isBook: false,
					price: 100,
				},
				{
					id: 3,
					isBook: false,
					price: 100,
				},
				{
					id: 4,
					isBook: false,
					price: 100,
				},
				{
					id: 5,
					isBook: false,
					price: 100,
				},
				{
					id: 6,
					isBook: false,
					price: 100,
				},
				{
					id: 7,
					isBook: false,
					price: 100,
				},
				{
					id: 8,
					isBook: false,
					price: 100,
				},
			],
			[
				{
					id: 9,
					isBook: false,
					price: 100,
				},
				{
					id: 10,
					isBook: false,
					price: 100,
				},
				{
					id: 11,
					isBook: false,
					price: 100,
				},
				{
					id: 12,
					isBook: false,
					price: 100,
				},
				{
					id: 13,
					isBook: false,
					price: 100,
				},
				{
					id: 14,
					isBook: false,
					price: 100,
				},
				{
					id: 15,
					isBook: false,
					price: 100,
				},
				{
					id: 16,
					isBook: false,
					price: 100,
				},
			],
			[
				{
					id: 17,
					isBook: false,
					price: 100,
				},
				{
					id: 18,
					isBook: false,
					price: 100,
				},
				{
					id: 19,
					isBook: false,
					price: 100,
				},
				{
					id: 20,
					isBook: false,
					price: 100,
				},
				{
					id: 21,
					isBook: false,
					price: 100,
				},
				{
					id: 22,
					isBook: false,
					price: 100,
				},
				{
					id: 23,
					isBook: false,
					price: 100,
				},
				{
					id: 24,
					isBook: false,
					price: 100,
				},
			],
			[
				{
					id: 25,
					isBook: false,
					price: 100,
				},
				{
					id: 26,
					isBook: false,
					price: 100,
				},
				{
					id: 27,
					isBook: false,
					price: 100,
				},
				{
					id: 28,
					isBook: false,
					price: 100,
				},
				{
					id: 29,
					isBook: false,
					price: 100,
				},
				{
					id: 30,
					isBook: false,
					price: 100,
				},
				{
					id: 31,
					isBook: false,
					price: 100,
				},
				{
					id: 32,
					isBook: false,
					price: 100,
				},
			],
		],
	},
]

let sales: ISales[] = [
	{
		id: 1,
		condition: 'Возраст: 6-18 лет',
		description:
			'Только для школьников и студентов! Приходите в наш кинотеатр и получите скидку 20% на билеты в любой день недели. Наслаждайтесь просмотром лучших фильмов по выгодной цене!',
		name: 'Студентам и школьникам',
		sale: 20,
		image: 'src/img/sale1.png',
	},
]
export default {
	data() {
		return {
			films: films,
			halls: halls,
		}
	},
	components: {},

	created() {
		this.$cookies.set('states', states)

		this.$cookies.set('films', films)

		this.$cookies.set('seances', seances)

		this.$cookies.set('halls', halls)

		this.$cookies.set('sales', sales)
	},
}
</script>

<template>
	<header>
		<div class="header" v-if="$route.meta.header == 0">
			<div class="mainDiv">
				<router-link to="/">КиноБара</router-link>
			</div>
			<nav>
				<router-link to="/sales">Акции</router-link>
				<router-link to="/soon">Скоро выходит</router-link>
				<router-link to="/contacts">Контакты</router-link>
			</nav>
		</div>
		<div class="header" v-if="$route.meta.header == 1">
			<div class="mainDiv">
				<div class="main">КиноБара</div>
			</div>
			<nav>
				<router-link to="/sales">Акции</router-link>
				<router-link to="/soon">Скоро выходит</router-link>
				<router-link to="/contacts">Контакты</router-link>
			</nav>
		</div>
		<div class="header" v-if="$route.meta.header == 2">
			<div class="mainDiv">
				<router-link to="/">КиноБара</router-link>
			</div>
			<nav>
				<router-link to="/sales">Акции</router-link>
				<div class="main">Скоро выходит</div>
				<router-link to="/contacts">Контакты</router-link>
			</nav>
		</div>
		<div class="header" v-if="$route.meta.header == 3">
			<div class="mainDiv">
				<router-link to="/">КиноБара</router-link>
			</div>
			<nav>
				<router-link to="/sales">Акции</router-link>
				<router-link to="/soon">Скоро выходит</router-link>
				<div class="main">Контакты</div>
			</nav>
		</div>
		<div class="header" v-if="$route.meta.header == 4">
			<div class="mainDiv">
				<router-link to="/">КиноБара</router-link>
			</div>
			<nav>
				<div class="main">Акции</div>
				<router-link to="/soon">Скоро выходит</router-link>
				<router-link to="/contacts">Контакты</router-link>
			</nav>
		</div>
		<div class="seans">
			<div class="img">
				<img src="./assets/image 3capy.png" alt="" />
			</div>
			<template v-for="i in 4">
				<div class="film">
					<h2>
						{{ films[i - 1].name }}
					</h2>
					<p>
						через {{ 40 + 5 * (i - 1) }} мин на
						<br />
						{{ halls[0].adress }}
					</p>
					<router-link
						:to="{
							path: '/redir/' + films[i - 1].id,
						}"
						>Купить билет</router-link
					>
				</div>
			</template>
		</div>
	</header>

	<router-view class="layout"></router-view>
	<footer>© Все права защищены 2024</footer>
</template>

<style scoped>
.header {
	height: 120%;
}

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
	margin-bottom: 87px;
	width: 65vw;
}
* {
	text-decoration: none;
}
.main {
	font-size: 56px;
	color: #cde735;
	border-bottom: #cde735 4px solid;
}
.seans {
	background-color: #4b4b4b;
	border: #98c15e 1px solid;
	border-radius: 10px;
	display: grid;
	width: 75vw;
	justify-self: center;
	height: 180px;
	grid-template-columns: max-content repeat(4, 1fr);
	padding: 0 32px;
}
p {
	margin: 0;
	padding: 0;
}

.img {
	display: grid;
	justify-content: center;
}

header {
	margin-bottom: 40px;
	height: max-content;
	display: grid;
	gap: 40px;
}

footer {
	display: grid;

	height: 140px;
	background-color: #4b4b4b;
	border-top: #98c15e 1px solid;
	color: #cde735;
	font-size: 36px;
	justify-content: center;
	align-content: center;
}

.film {
	display: grid;
	justify-content: center;
	align-items: center;
	width: 100%;
	border-left: #cde735 1px solid;
	border-right: #cde735 1px solid;
	text-align: center;
	font-size: 20px;
	color: #cde735;
	padding: 5px;
}
.film h2 {
	font-size: 28px;
}
.film a {
	font-size: 18px;
	height: max-content;
}

@media screen and (max-width: 1300px) {
	header {
		margin-left: 15px;
		margin-right: 15px;
	}
	.seans {
		width: 100%;
	}

	.header {
		width: 100%;
	}

	.main {
		font-size: 36px;
	}

	a {
		font-size: 32px;
	}
}

@media screen and (max-width: 830px) {
	.seans {
		display: none;
	}
	.mainDiv {
		padding: 5px;
	}
}
@media screen and (max-width: 680px) {
	.main {
		font-size: 28px;
	}

	a {
		font-size: 24px;
	}
}

@media screen and (max-width: 530px) {
	nav {
		display: grid;
		grid-template-columns: 1fr;
		justify-items: right;
		padding: 5px;
	}
	.main {
		font-size: 24px;
	}

	a {
		font-size: 20px;
	}

	footer {
		font-size: 24px;
	}
}
</style>
