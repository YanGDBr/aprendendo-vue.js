
<template>
    <div class="Componente">
        <h1>Aula 8-Propriedade computada, computed</h1>
        nova camada no export default: computed. <br>
        dentro coloca uma função que retorna algo, e se houver mudanças de valores nas variaveis tudo muda
    </div>
    <div class="Componente">
        <h1>Exemplos</h1>
        troque o valor da variavel nome, e toda a função muda
        <input v-model="nome" type="text"/>
        {{ Outra }}
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
    name: "AulaOito",
    data() {
        return {
            nome: "Yan",
        }
    },
    computed: {
        Outra() {
            return this.nome;
        }
    }

}
</script>