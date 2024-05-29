<template>
    <div class="Componente" id="ola">
        <h1>Aula 10 - Life Cycle, Hooks</h1>
        São as fases de vida antes de gerar o site -> <br>
        Criação: <br>
        Antes de ser criado -> beforeCreate() {} <br>
        Criado -> created() {} <br>
        Montagem do site, Atualização de vars etc e Desmontagem de elementos etc
        beforeMount, mounted, beforeUnmount, unmounted, beforeUpdate, updated.
        Depois de montar o site eu quero que mude a cor desta borda pra azul
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
    name: "AulaDez",
    mounted() {
        document.getElementById("ola").style.border = "1px solid blue";
    }
}
</script>