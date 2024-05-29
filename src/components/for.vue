<template>
    <div class="Componente">
        <h1>Aula 3 - For</h1>
        FOR (msg, index) in Mensagens:
        <div style="display: flex;">
            <p v-for="(msg, index) in Mensagens" v-bind:key="msg.texto">
                ({{ index }}) --
                {{  msg.texto }}
            </p>
        </div>
        
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
</style>

<script>
export default {
    name: "AulaTres",
    data() {
        return {
            Mensagens: [
                {
                    texto: 'Texto 1'
                },
                {
                    texto: 'Texto 2'
                },
                {
                    texto: 'Texto 3'
                },
                {
                    texto: 'Texto 4'
                }
            ]
        }
    }
}
</script>