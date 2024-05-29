<template>
    <div class="Componente">
        <h1>Aula 15 - Vue router</h1>
        redirecionar a outras paginas,  <br>
        router-view para que de certo <br>
        router-link to "path" <br>
        ir no router > index.js > adicionar caminhos <br>
        component: () => import('../views/nome.vue') para fazer com que só renderize a pagina quando entrar nela, proporcionando desempenho
        <br>
        usando $router: <br>
        <button @click="mudar()">Clique aqui</button>
    </div>
    <div class="Componente">
        <h1>Aula 16 - Vue Router pt.2</h1>
        passar parametros para a pagina <br>
        no index.js na hora de colocar o path, colocar :nome-parametro<br>
        ex: "/login/:username" <br>
        na hora de acessar o valor desse parametro, podemoms usar $route.params.username <br>
        usando $router para acessar funcionalidades, por exemplo push para redirecionar automaticamento pra outra pagina <br>
        $route para pegar valores <br>
        valor do parametro: <br>
        {{ $route.params.valor }}
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
    name: "AulaQuinze",
    methods: {
        mudar() {
            this.$router.push("/")
        }
    }
}
</script>