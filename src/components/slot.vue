<template>
    <div class="Componente">
        <h1>Aula 11 - Componente Slots, v-slot</h1>
        são componentes personalizados como se fosse uma tag.
        dentro do componenete coloca a tag slot />, e na hora de usar, podemos passar um texto dentro
        exemplo: < TheHeader > texto que vai ser substituido no slot < TheHeader > <br>
        quando usar mais de um slot, vc nomeia com name e na hora de usar chama template com v-slot:nome e passa valor
        ex: <br>
        <slot name="texto"/>
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
    name: "AulaOnze"
}
</script>