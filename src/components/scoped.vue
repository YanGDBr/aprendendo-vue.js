<template>
    <div class="Componente">
        <h1>Aula 12 - CSS Scoped e Global</h1>
        dentro da camada style do vue, se não usarmos scoped no componente, ele irá ser global aplicando em toda pagina as mudanças
        <br>
        se colocar scoped, então aquele css só sera valido pra aquele arquivo.vue
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
    name: "AulaDoze"
}
</script>