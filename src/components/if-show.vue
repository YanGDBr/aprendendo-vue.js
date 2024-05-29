<template>
<div class="Componente">
    <h1> Aula 2 - V-IF, V-SHOW</h1>
    IF -> Não tem elemento, SHOW -> Display None<br>
    IF: <button v-if="condicao"></button>
    SHOW: <button v-show="condicao"></button>
</div>

</template>

<style scoped>
    * {
        font-family: sans-serif;
        text-align: center

    }
    .Componente {
        width: 250px;
        height: 200px;
        border: 1px solid black;
        margin-left: 20px;
        margin-top: 20px;
    }
</style>

<script>
export default {
    name: "AulaDois",
    data() {
        return {
            condicao: true,
        }
    }
     
}

</script>