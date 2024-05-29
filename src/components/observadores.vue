<template>
    <div class="Componente">
        <h1>Aula 9 - Observadores, watch</h1>
        nova camada no export default, watch: {}<br>
        coloca uma var em observação, ex name() {
        }.
        sempre que name mudar de valor, vai executar oq tem dentro
    </div>
    <div class="Componente">
        <h1>Exemplos</h1>
        <p id="oi">Selecione o que vai acontecer</p>
        <select v-model="funcao">
            <option value="azul">Texto Azul</option>
            <option value="diminuir">Diminuir o texto</option>
            <option value="aumentar">Aumentar</option>
        </select>
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
    name: "AulaNove",
    data() {
        return {
            funcao: ''
        }
    },
    watch: {
        funcao(n) {
            var oi = document.getElementById('oi');
            if(n == 'azul') {
                oi.style.color = 'blue';
            }
            else if (n == 'diminuir') {
                oi.style.fontSize = '5px';
            }
            else if (n == 'aumentar') {
                oi.style.fontSize = '20px';
            }
        }
    },
}
</script>