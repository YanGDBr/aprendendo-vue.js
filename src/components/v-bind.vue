<template>
    <div class="Componente">
        <h1>Aula 4 - v-bind</h1>
        Torna a propriedade dinamica, podendo interpretar variaveis
        abreviado com apenas : ex: :id ou v-bind:id
        exemplo:
        <button v-bind:id="idbotao">Id com variavel</button>
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
    name: "AulaQuatro",
    data() {
        return {
            idbotao: "BotaoTop"
        }
    }
}
</script>