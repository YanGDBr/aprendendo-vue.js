<template>
    <div class="Componente">
        <h1>Aula 7 - Eventos, v-on</h1>
        v-on:... -> capture quando ... <br>
        v-on:click ->
        <button @click="clicou">Clique</button>
        <p id="aparecer"></p>
        -> trocar v-on por @, @click
    </div>
    <div class="Componente">
        <h1>Exemplos</h1>
        @mouseover
        <p id="kk" @mouseover="mexido">Passe o mouse em cima de mim</p>
        são muitos eventos, pesquisar
    </div>

    <!-- <div class="Componente">
        <h1 id="kk">v-on e v-model</h1>
        <select v-model="funcao">
            <option value="azul">Função azul</option>
        </select>
        <button v-on:click="clicado"></button>
    </div> -->

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
    name: "AulaSete",
    methods: {
        clicou() {
            document.getElementById('aparecer').innerHTML = 'Uhu eu apareci';
        },
        mexido() {
            document.getElementById('kk').style.color = 'blue';
        }
        // clicado() {
        //     if (funcao == '') {
        //         document.getElementById('aparecer').innerHTML = 'Uhu eu apareci';
        //     }
        //     else if (funcao == 'azul'){
        //         document.getElementById('kk').style.color = 'blue'
        //     }
        // }
    },
    // data() {
    //     return {
    //         funcao: '',
    //     }
    // }
} 
</script>