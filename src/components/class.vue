<template>
    <div class="Componente">
        <h1 :class="{'titulo': true, 'menor': diminuir}">Aula 5 - Class e Style dinamicas</h1>
        utilizar o v-bind para estilizar com variaveis, true or false.
        e usando array na class para adicionar varias classes com v-bind<br>
        {'atributo': 'valor'} no v-bind:style
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

.titulo {
    color: rgb(10, 157, 198);
}

.menor {
    font-size: 25px
}
</style>

<script>
export default {
    name: "AulaCinco",
    data () {
        return {
            diminuir: true,
        }
    }
}
</script>