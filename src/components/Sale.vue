<script lang="ts">
import { ISales } from '../Types'

let sale: ISales
export default {
	data() {
		return {
			sale,
		}
	},

	created() {
		this.sale = this.$cookies
			.get('sales')
			.find(x => x.id.toString() == this.$route.params.id)
	},
}
</script>

<template>
	<div class="containe">
		<img :src="'../' + sale.image" alt="sale" />
		<div class="text">
			<h1>
				{{ sale.name }}
			</h1>
			<div class="about">
				<div>
					{{ sale.condition }}
				</div>
				<div>Размер скидки: {{ sale.sale }}</div>
				<p>Описание: {{ sale.description }}</p>
			</div>
		</div>
	</div>
</template>

<style scoped>
img {
	border-radius: 15px;
	border: #cde735 1px solid;
	width: 100%;
}
.text {
	max-width: 90%;
}
.containe {
	background-color: #4b4b4b;
	border-radius: 15px;
	border: #cde735 1px solid;
	display: grid;
	grid-template-columns: 35% 65%;
	gap: 30px;
}
h1 {
	font-size: 72px;
	color: #cde735;
}
* {
	text-decoration: none;
}
.about {
	color: #cde735;
	display: grid;
	gap: 10px;
}

.about div {
	font-size: 42px;
}

.about p {
	font-size: 28px;
}

@media screen and (max-width: 1300px) {
	h1 {
		font-size: 56px;
		color: #cde735;
	}
	.about div {
		font-size: 32px;
	}

	.about p {
		font-size: 18px;
	}
}

@media screen and (max-width: 1050px) {
	h1 {
		font-size: 40px;
		color: #cde735;
	}
	.about div {
		font-size: 24px;
	}

	.about p {
		font-size: 14px;
	}
}

@media screen and (max-width: 780px) {
	h1 {
		font-size: 30px;
		color: #cde735;
	}
	.about div {
		font-size: 20px;
	}
	.containe {
		grid-template-columns: 1fr;
		justify-content: center;
		justify-items: center;
		justify-self: center;
		text-align: center;
	}
}
</style>
