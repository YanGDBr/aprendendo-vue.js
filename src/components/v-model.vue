<template>
    <div class="Componente">
        <h1>Aula 6 - Ligação de dados bidirecional v-model</h1>
        Geralmente para elementos de formulatios, atualiza o valor da var em tempo real
        <input type="text" v-model="text"/>
        {{ text }}
        
    </div>
    <div class="Componente">
        <h1>Exemplos de v-model</h1>
        <h2 :style="{'color': cor}">Texto daora</h2>
        insira cores ->
        <input type="text" v-model="cor"/>
    </div>
</template>

<style scoped>
* {
    font-family: sans-serif;
    text-align: center;
}

.Componente {
    width: 250px;
    height: 200px;
    border: 1px solid black;
    margin-left: 20px;
    margin-top: 20px;
}
h1 {
    font-size: 20px;
}

</style>

<script>
export default {
    name: "AulaSeis",
    data() {
        return {
            text: '',
            cor: '',
        }
    }
}
</script>