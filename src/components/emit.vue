<template>
    <div class="Componente">
        <h1>Aula 14 - Emit</h1>
        basicamente cria um evento personalizado, v-on, ou seja @. como @click
        exemplo, um botão dentro do componente que destrói o componente, emitindo um evento para o pai se destruir
        <button @click="feche()">Destrua esse componente</button>
    </div>

</template>

<style scoped>
* {
    font-family: sans-serif;
    text-align: center;
}

.Componente {
    width: 350px;
    height: 300px;
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
    name: "AulaQuatorze",
    methods: {
        feche() {
            this.$emit("destruir");
        }
    }
}
</script>