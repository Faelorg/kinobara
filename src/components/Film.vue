<script lang="ts">
import { IFilms, IState, ISeances, IHalls, ISeats } from '../Types'

let films: IFilms[]
let states: IState[]
let seances: ISeances[]
let halls: IHalls
let film: IFilms
let cost = 0
let count = 0
let email = ''
let error = ''
export default {
	data() {
		return {
			film,
			states,
			seances,
			halls,
			films,
			cost,
			count,
			email,
			error,
		}
	},

	created() {
		this.films = this.$cookies.get('films')
		this.film = this.$cookies
			.get('films')
			.find(x => x.id.toString() == this.$route.params.id)
		this.states = this.$cookies.get('states')
		this.seances = this.$cookies.get('seances')
		if (this.$cookies.get('hall' + this.$route.params.id) == null) {
			this.halls = {
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
							isBook: true,
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
			}

			this.$cookies.set('hall' + this.$route.params.id, this.halls)
		} else {
			this.halls = this.$cookies.get('hall' + this.$route.params.id)
		}
	},

	methods: {
		goToNext(id: number) {
			this.$router.push('/redir/' + id)
		},
		selectSeat(id: number) {
			let el: HTMLElement = this.$refs['seat' + id][0] as HTMLElement
			console.log(el)
			if (!el.classList.contains('checked')) {
				if (this.count < 5) {
					el.classList.add('checked')
					this.count++
					this.halls.seats.forEach(elem => {
						if (elem.find(x => x.id == id) != null) {
							this.cost += elem.find(x => x.id == id).price
							return
						}
					})
				}
			} else {
				el.classList.remove('checked')
				this.count--
				this.halls.seats.forEach(elem => {
					if (elem.find(x => x.id == id) != null) {
						this.cost -= elem.find(x => x.id == id).price
					}
				})
			}
		},

		buyTicket() {
			this.error = ''
			if (this.count > 0) {
				if (
					this.email != '' &&
					/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/.test(
						this.email
					)
				) {
					this.halls.seats.forEach(x => {
						x.forEach(seat => {
							let el = this.$refs['seat' + seat.id]

							if (el[0].classList.contains('checked')) {
								el[0].classList.remove('checked')
								el[0].classList.remove('seat')
								el[0].classList.add('booked')
								seat.isBook = true
							}
						})
					})
					this.$cookies.set('hall' + this.$route.params.id, this.halls)
					alert(
						`Спасибо за покупку. Билет будет выслан на почту ${this.email}.`
					)
					this.email = ''
					this.cost = 0
					this.count = 0
					let btn = this.$refs.close as HTMLElement
					btn.click()
					return
				}
				this.error = 'Введите коректный email!'
				return
			}
			this.error = 'Выберите место!'
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
			<button
				v-if="film.idState == 1"
				data-bs-toggle="modal"
				data-bs-target="#exampleModal"
			>
				Купить биллет
			</button>

			<div
				class="modal fade"
				id="exampleModal"
				tabindex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
			>
				<div class="modal-dialog modals mod">
					<div class="modal-content custommodal">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">Купить билет</h5>
							<button
								type="button"
								ref="close"
								class="btn-close close"
								data-bs-dismiss="modal"
								aria-label="Close"
							></button>
						</div>
						<div class="modal-body">
							<div class="hall">
								<div class="screen">Экран</div>
								<div class="seats">
									<template v-for="seats in halls.seats">
										<div class="row">
											<p>Ряд {{ halls.seats.indexOf(seats) + 1 }}</p>
											<template v-for="seat in seats">
												<div v-if="!seat.isBook">
													<p
														class="seat"
														:ref="'seat' + seat.id"
														@click="selectSeat(seat.id)"
													>
														{{ seat.id }}
													</p>
												</div>
												<div v-else>
													<p class="booked" :ref="'seat' + seat.id">
														{{ seat.id }}
													</p>
												</div>
											</template>
										</div>
									</template>
								</div>
							</div>
						</div>
						<div class="modal-footer foot">
							<div>
								<p>Количество билетов: {{ count }}</p>
								<p>Цена: {{ cost }} руб.</p>
								<p>
									Введите email:
									<input type="email" v-model="email" />
								</p>
								<p>{{ error }}</p>
							</div>
							<button
								type="button"
								class="btn btn-primary"
								@click="buyTicket()"
							>
								Оплатить
							</button>
						</div>
					</div>
				</div>
			</div>
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
.custommodal {
	border: #cde735 1px solid;
	border-radius: 15px;
	background-color: #4b4b4b;
}
* {
	text-decoration: none;
}
.seat {
	background-color: #cde735;
	width: 35px;
	height: 35px;
	border-radius: 10px;
	color: #363636;
	text-align: center;
	display: grid;
	justify-content: center;
	align-content: center;
}
.foot {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	font-size: 20px;
}
.booked {
	background-color: #363636;
	color: #4b4b4b;
	border: #363636 1px solid;
	width: 35px;
	height: 35px;
	border-radius: 10px;
	text-align: center;
	display: grid;
	justify-content: center;
	align-content: center;
	font-size: 22px;
}

.seat:hover {
	background-color: #363636;
	color: #cde735;
	border: #cde735 1px solid;
	transition: 0.2s;
}

.checked {
	background-color: #363636;
	border: #cde735 1px solid;
	color: #cde735;
}

.modal-footer button {
	font-size: 24px;
	width: 150px;
	height: max-content;
	padding: 10px;
}

.hall {
	display: grid;
	justify-content: center;
	justify-items: center;
	gap: 20px;
}

.row {
	font-size: 20px;

	display: grid;
	text-align: center;
	grid-template-columns: max-content repeat(8, 50px);
	gap: 5px;
}

.screen {
	width: 100%;
	background-color: #363636;
	border-radius: 15px 15px 10px 10px;
	text-align: center;
	border: #cde735 1px solid;
}

.modals {
	max-width: 40%;
}

.close {
	width: 30px;
	height: 30px;
	background-color: #cde735;
}

.main {
	background-color: #4b4b4b;
	border-radius: 15px;
	border: #cde735 1px solid;
	display: grid;
	width: 65vw;
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

@media screen and (max-width: 1600px) {
	.films {
		display: grid;
		align-items: center;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	.about {
		margin-top: 10px;
		margin-right: 10px;
	}

	.first {
		grid-template-columns: 35% 65%;
	}

	.first img {
		width: 100%;
		height: auto;
	}

	.first button {
		padding: 10px;
		width: auto;
		height: auto;
	}

	.about p {
		font-size: 24px;
	}
}

@media screen and (max-width: 1600px) {
	.about {
	}

	.about h2 {
		font-size: 56px;
	}

	.about h3 {
		font-size: 28px;
	}

	.first button {
		font-size: 28px;
	}
}

@media screen and (max-width: 1300px) {
	.mod {
		max-width: 75vw;
	}
}

@media screen and (max-width: 700px) {
	.mod {
		max-width: 90vw;
	}
}

@media screen and (max-width: 600px) {
	.row {
		font-size: 14px;
		gap: 0px;
		grid-template-columns: max-content repeat(8, max-content);
	}
	.row p {
		padding: 0 5px;
	}
	.row div {
		padding: 0 5px;
		max-width: max-content;
	}

	.row div p {
		padding: 0 5px;
	}
	.seat,
	.booked {
		width: 28px;
		height: 28px;
	}
	.mod {
		display: grid;
		justify-items: center;
	}
}

@media screen and (max-width: 380px) {
	.first button {
		display: none;
	}
}

@media screen and (max-width: 920px) {
	.about {
		justify-content: center;
		justify-items: center;
		padding: 0;
		margin: 0;
		text-align: center;
	}

	.about h2 {
		font-size: 32px;
	}

	.about h3 {
		font-size: 20px;
	}

	.first button {
		font-size: 16px;
	}

	.about p {
		font-size: 16px;
		display: grid;
		justify-self: center;
		justify-content: center;
	}

	.first {
		grid-template-columns: 100%;
		justify-content: center;
		justify-items: center;
	}
}

@media screen and (max-width: 600px) {
	.main {
		width: 90vw;
	}
	.second {
		justify-content: center;
		justify-items: center;
		text-align: center;
	}

	.films {
		display: grid;
		align-items: center;
		grid-template-columns: 1fr;
		gap: 10px;
	}
}
</style>
