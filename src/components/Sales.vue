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
	<div class="container">
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
.container {
	display: grid;
	border-radius: 15px;
	border: #98c15e 1px solid;
	background: #4b4b4b;
	gap: 46px;
	padding: 40px 31px;
}

.sale {
	display: grid;
	grid-template-columns: max-content max-content;
	gap: 10px;
}

img {
	border-radius: 15px;
	border: #cde735 solid 1px;
}

.tags {
	margin-top: 24px;
	display: grid;
	grid-template-columns: max-content max-content max-content;
	gap: 40px;
	font-size: 30px;
	color: #cde735;
}

h1 {
	font-size: 52px;
	color: #cde735;
	font-weight: bold;
}
p {
	font-size: 28px;
	color: #cde735;
	width: 60%;
}
</style>
