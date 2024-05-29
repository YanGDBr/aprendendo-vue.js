<template>
 <AulaUm/>
 <AulaDois/>
 <AulaTres/>
 <AulaQuatro/>
 <AulaCinco/>
 <AulaSeis/>
 <AulaSete/>
 <AulaOito/>
 <AulaNove/>
</template>

<script>
// @ is an alias to /src
import AulaUm from "@/components/Componentes.vue";
import AulaDois from "@/components/if-show.vue";
import AulaTres from "@/components/for.vue";
import AulaQuatro from "@/components/v-bind.vue";
import AulaCinco from "@/components/class.vue";
import AulaSeis from "@/components/v-model.vue";
import AulaSete from "@/components/eventos.vue";
import AulaOito from "@/components/computed.vue";
import AulaNove from "@/components/observadores.vue";

export default {
  name: 'HomeView',
  components: {
    AulaUm,
    AulaDois,
    AulaTres,
    AulaQuatro,
    AulaCinco,
    AulaSeis,
    AulaSete,
    AulaOito,
    AulaNove,
    
  }
}
</script>

<style>

</style>
