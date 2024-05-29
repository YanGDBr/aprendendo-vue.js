<template>
    <div class="Componente">
        <h1>Aula 17 - VUEX - State</h1>
        é uma blibioteca do vue, VUEX e agora falaremos sobre State <br>
        resumidamente vc define variaveis dentro do state que são totalmente globais, sendo possiveis de acessar em todos os arquivos vue <br>
        em todas as camadas (menos no style). <br>
        usando -> $store.state.nome-var <br>
        Exemplo:
        Eu sou {{ $store.state.criador.nome }} e tenho {{ $store.state.criador.idade }} anos
    </div>
    <div class="Componente">
        <h1>Aula 18 - VUEX - Mutations pt.1</h1>
        Resumidamente são funções que tem o intuito de mudar o valor das variaveis no state, aquelas que são totalmente globais.
    <br>
        criar uma função que recebe obrigatoriamente o parametro (state) e geralmente mais um que é o novo valor ou seja (state, valor)<br>
        e para acessar essa função vc usa: <br>
        $store.commit("nomedafuncao", valor); <br>
        e desse jeito vc muda o valores: <br>
        EXEMPLO: <br>
        Eu sou {{ $store.state.criador.nome }} e tenho {{  $store.state.criador.idade }} anos
        <button @click="trocar()">Clique em mim</button>
    </div>
    <div class="Componente">
        <h1>Aula 19 - VUEX - Mutations pt.2</h1>
        PRODUTOS <br>
        <div v-for="p in $store.state.produtos">
            {{ p.nome }} id: {{ p.id }} <br>
        </div>
        Adicionar produto:<br>
        <button @click="adicionar()">+</button>
        <button @click="remover()">-</button>
    </div>
    <div class="Componente">
        <h1>Aula 20 - VUEX - Getters</h1>
        Mesma coisa que o computed, porém é totalmente global, se a dependencia muda, o return muda em todas as paginas
        EX:
        {{  $store.state.valor }} + {{ $store.state.valortwo }} = {{ $store.getters.total }}
        <button @click="this.$store.state.valor += 1">Aumentar primeiro valor</button>
        <button @click="this.$store.state.valortwo += 1">Aumentar segundo valor</button>
    </div>
    <div class="Componente" style="font-size: 15px;">
        <h1>Aula 21 - VUEX - Actions</h1>
        Você executa quaisquer ações que quiser, são funções. <br>
        recebem o state, e data opcionalmente. <br>
        usando -> $store.dispatch("nomedaaction") <br>
        A DIFERENÇA DO ACTION PRO MUTATION É QUE ELE NÃO MUDA OS DADOS DA STATE, E NÃO É ASSINCRONO, o programa continua enquanto executa sua tarefa, geralmente usando sempre promises nas actions. <br>
        A MUTATION PARA O PROGRAMA PARA EXECUTAR, logo é recomendado que atráves do action vc use o commit para mudar o valor do state, pois ele vai executar porem não ira parar o programa
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
    name: "VuexAulas",
    data() {
        return{
            id: 3
        }
    },
    methods: {
        trocar() {
            this.$store.commit("mudarvalor", {nome: "John", idade: 99})
            console.log(this.$store.state.criador.idade)
        },
        adicionar() {
            this.id += 1
            this.$store.commit("adicionar", {nome: "Produto", id: this.id});
        },
        remover() {
            this.$store.commit("remover", this.id);
            this.id -= 1;
        }
    }
}
</script>