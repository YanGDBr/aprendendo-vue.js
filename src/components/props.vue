<template>
    <div class="Componente">
        <h1>Aula 13 - Props</h1>
        defino propriedades para passar na tag do componente, exemplo:<br>
        < tag propriedade="" /> <br>
        é uma camada np export default, pode ser mais especifica ou mais simples, aonde declara uma array com todas as props, ou um objeto especificando o valor padrão e o tipo da var
        exemplo: <br>
        {{ valor }}
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
    name: "AulaTreze",
    props: {
        valor: {
            type: String,
            default: "Texto padrão"
        }
    }
}
</script>