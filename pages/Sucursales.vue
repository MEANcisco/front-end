<template>
  <Sucursales />
</template>

<script>
import Sucursales from "../components/Sucursales.vue";

export default {
    name: "TheHome",
    vue: {
        config: {
            productionTip: false,
            devtools: true,
        },
    },
    components: { Sucursales }
}
</script>
