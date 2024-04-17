<script lang="ts">
export default {
	created() {
		this.$router.push('/film/' + this.$route.params.id)
	},
}
</script>
<template>
	<h1>Ожидайте вас скоро перенаправить</h1>
</template>
<style scoped></style>
