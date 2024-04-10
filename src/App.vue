<script lang="ts">
import Main from './components/Main.vue'
import { IState, IFilms, ISeances, IHalls, ISeats } from './Types';
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
		image: 'src/img/1.png',
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
		image: 'src/img/2.png',
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

let seats: ISeats[][]=[
	[{
	id:1,isBook:false,price:100
},
{
	id:2,isBook:false,price:100
},
{
	id:3,isBook:false,price:100
},
{
	id:4,isBook:false,price:100
},
{
	id:5,isBook:false,price:100
},{
	id:6,isBook:false,price:100
}],[{
	id:7,isBook:false,price:100
},
{
	id:8,isBook:false,price:100
},
{
	id:9,isBook:false,price:100
},
{
	id:10,isBook:false,price:100
},
{
	id:11,isBook:false,price:100
},{
	id:12,isBook:false,price:100
}]]

let halls: IHalls[]=[{id:1, adress:'Adress 1', seats:seats}]
export default {
	data(){	
		return{
			films:films,
			halls: halls,
		}
	}
	,
	components: {
	},

	created() {

		this.$cookies.set('states', states)

		this.$cookies.set('films', films)

		this.$cookies.set('seances', seances)

		this.$cookies.set('halls', halls)

		this.$cookies.set('seats', seats)
	},
}
</script>

<template>
	<header>
		<div class="header">
			<div class="mainDiv">
				<router-link to="/" class="main">КиноБара</router-link>
			</div>
			<nav>
				<router-link to="#">Акции</router-link>
				<router-link to="soon">Скоро выходит</router-link>
				<router-link to="contacts">Контакты</router-link>
			</nav>
		</div>

		<div class="seans">
			<div class="img">
				<img src="./assets/image 3capy.png" alt="">
			</div>
			<p class="soon">Ближайшие сеансы</p>
			<template  v-for="i in 4 ">
				<div class="film">
					<h2>
						{{ films[i-1].name }}
					</h2>
					<p>
						через {{ 40+(5*(i-1)) }} мин на
						<br>
						{{ halls[0].adress }}
					</p>
					<router-link to="#">Купить билет</router-link>
				</div>
			</template>
		</div>
	</header>

	<router-view class="layout"></router-view>
	<footer>© Все права защищены 2024</footer>
</template>

<style scoped>
.header{
	height: 140px
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
}
.main {
	font-size: 56px;
}
.seans{
	background-color: #4b4b4b;
	border: #98c15e 1px solid;
	border-radius: 10px;
	width: 1256px;
	display: grid;
	justify-self: center;
	height: 180px;
	grid-template-columns: repeat(6, max-content);
	padding: 0 32px;
}
p{
	margin: 0;
	padding: 0;
}

.soon{
	transform: rotateZ(-90deg);
	width: 180px;
	text-align: center;
	display: grid;
	align-self: center;
	color: #CDE735;
	overflow-wrap: break-word;
	font-size: 30px;
	border-top: #CDE735 1px solid;
	border-bottom: #CDE735 1px solid;
}

.img{
	display: grid;
	justify-content: center;
}

header{
	margin-bottom: 40px;
	height: max-content;
	display: grid;
	gap: 40px;
}

footer{
	display: grid;

	height: 140px;
	background-color:#4b4b4b;
	border-top: #98c15e 1px solid;
	color: #CDE735;
	font-size: 36px;
	justify-content: center;
	align-content: center;
}

.film{
	display: grid;
	justify-content: center;
	align-items: center;
	width: 210px;
	border-left: #CDE735 1px solid;
	border-right: #CDE735 1px solid;
	text-align: center;
	font-size: 20px;
	color: #CDE735;
}
.film h2{
	font-size: 28px;
}
.film a{
	font-size: 18px;
	height: max-content;
}
</style>
