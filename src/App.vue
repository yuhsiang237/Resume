<template>
  <RouterView />
</template>
<style>
@import "@/assets/bootstrap.min.css";
@import "@/assets/base.scss";
@import "@/assets/custom.scss";
</style>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterView } from "vue-router";
export default defineComponent({
  name: "app-layout",
  components: {
    RouterView,
  },
});
</script>
