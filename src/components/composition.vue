<template>
    <div class="Componente">
        <h1>Aula 22 - Mixin</h1>
        Mixin é uma nova camada no export default que simplesmente importa como se fosse componentes, importa somente as funções dentro do script, é apenas isso o Mixin
    </div>
    <div class="Componente">
        <h1>Aula 22 - Composition API - Setup</h1>
        É uma nova forma de fazer as coisas, os hooks,methods,data(){}, computed, watch tudo são substituidos por uma nova camada no export default<br>
        setup() {

        } não é reativo por padrão, tem que retornar as variaveis e as funções que quiser, se algo mudar, não muda na pagina por não ser reativo
    </div>
    <div class="Componente">
        <h1>Aula 23 - Composition API - Reatividade</h1>
        para tornar as variaveis reativas, usar ref<br>
        var a = ref(valor); <br>
        EX:
        const user = ref({<br>
            name: 'oi', <br>
            idade: 23<br>
        })<br>
        na hora de mudar o valor apenas no javascript, usar: nome-var.value


    </div>

    <div class="Componente">
        <h1>Aula 24 - Composition API - Watch e Computed</h1>
        Não muda nada, vc importa o watch e computed pelo 'vue' as funcionalidades permanecem a mesma um pouco diferente: <br>
        const funcao = computed(() => {<br>
            <br>
        })<br>
        watch(var para ser observada, () => { <br>
            funcao <br>
        }, {opções, se for um objeto precisa de deep:true})

    </div>
    <div class="Componente">
        <h1>Aula 25 - Composition API - Ciclo de Vida</h1>
        mesma coisa de sempre, só que tem que importar, nesse padrão -><br>
        onBeforeMount, onMounted etc.. <br> Utilização: <br>
        onBeforeMount(() => {

        })
    </div>
    <div class="Componente">
        <h1>Aula 26 - Composition API - Props e Emit</h1>
        os props não mudam, voce continua declarando ele no export default, e para acessar os valores no setup()<br>
        o primeiro parametros é os props, se usar setup(props), só usar props. que consegue acessar<br>
        e o segundo parametro é o contexto, setup(props, ctx), aonde vc pode usar para acessar emit e os slots<br>
        ctx.$emit
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
    name: "CompositionAulas",
}
</script>