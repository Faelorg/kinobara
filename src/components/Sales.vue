<script lang="ts">
import { ISales } from '../Types'

let sales: ISales[]

export default {
	data() {
		return {
			sales,
		}
	},

	created() {
		this.sales = this.$cookies.get('sales')
	},
}
</script>
<template>
	<div class="containe">
		<template v-for="sale in sales">
			<div class="sale">
				<img :src="'../' + sale.image" alt="sale" />
				<div class="sale_text">
					<h1>
						<router-link
							:to="{
								name: 'sale',
								params: {
									id: sale.id,
								},
							}"
						>
							{{ sale.name }}
						</router-link>
					</h1>
					<p>{{ sale.description }}</p>
				</div>
			</div>
		</template>
	</div>
</template>
<style scoped>
.containe {
	display: grid;
	border-radius: 15px;
	border: #98c15e 1px solid;
	background: #4b4b4b;
	gap: 46px;
	padding: 40px 31px;
}

.sale {
	display: grid;
	grid-template-columns: max-content 1fr;
	gap: 10px;
}
* {
	text-decoration: none;
}
img {
	border-radius: 15px;
	border: #cde735 solid 1px;
}

h1 {
	font-size: 52px;
	color: #cde735;
	font-weight: bold;
}
p {
	font-size: 20px;
	color: #cde735;
	width: 60%;
}

@media screen and (max-width: 1300px) {
	.sale {
		grid-template-columns: 35% 65%;
	}

	.sale img {
		width: 100%;
	}

	a {
		font-size: 30px;
	}

	.sale_text h1 {
		font-size: 40px;
	}
}

@media screen and (max-width: 1070px) {
	.sale_text p {
		font-size: 16px;
		width: 90%;
	}
}

@media screen and (max-width: 900px) {
	.sale {
		grid-template-columns: 1fr;
	}
}

@media screen and (max-width: 500px) {
	.sale_text h1 {
		font-size: 28px;
	}
	.sale_text p {
		font-size: 12px;
		width: 95%;
	}
}
</style>
