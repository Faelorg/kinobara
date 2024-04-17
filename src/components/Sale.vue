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
	<div class="container">
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
	width: 544px;
}
.container {
	background-color: #4b4b4b;
	border-radius: 15px;
	border: #cde735 1px solid;
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 30px;
}
h1 {
	font-size: 72px;
	color: #cde735;
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
</style>
