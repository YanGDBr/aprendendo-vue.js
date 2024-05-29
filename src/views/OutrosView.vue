<template>
  <AulaDez/>
  <AulaOnze>
    <template v-slot:texto>
      <br>Texto top atribuido
    </template>
  </AulaOnze>
  <AulaDoze/>
  <AulaTreze valor="Texto modificado"/>
  <AulaQuatorze @destruir="aparecendo = false" v-if="aparecendo"/>
  <AulaQuinze/>
</template>

<script>
import AulaDez from "@/components/lifecycle.vue";
import AulaOnze from "@/components/slot.vue";
import AulaDoze from "@/components/scoped.vue";
import AulaTreze from "@/components/props.vue";
import AulaQuatorze from "@/components/emit.vue";
import AulaQuinze from "@/components/router.vue";

export default {
  name: 'OutrosView',
  components: {
    AulaDez,
    AulaOnze,
    AulaDoze,
    AulaTreze,
    AulaQuatorze,
    AulaQuinze,
  },
  data() {
    return {
      aparecendo: true,
    }
  }
}
</script>

<style>

</style>

