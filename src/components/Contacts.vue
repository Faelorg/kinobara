<script lang="ts">
export default{}
</script>

<template>
    <div class="main">
        <h3>Контакты</h3>
        <div>
            <p>Контактное лицо: Иванов Иван Иваныч</p>
            <p>Телефон: +79521452525</p>
            <p>Email: example@mail.ru</p>
        </div>
    </div>
</template>

<style scoped>
html{
    height: 100vh;
}

h3{
    font-size: 72px;
    text-align: center;
    margin: 0 auto;
    height: max-content;
}

*{
    color: #cde735;
}

p{
    margin: 0 auto
}

.main{
    background-color: #4b4b4b;
    border-radius: 15px;
    border: 1px solid #98c15e;
    height: 450px;
    width: 1320px;
    display: grid;
    grid-template-rows: max-content 1fr;
    gap: 45px;
    padding: 10px;
    justify-content: center;
}

</style>