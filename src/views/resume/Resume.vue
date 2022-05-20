<template>
  <div class="wrapper mt-lg-5">
    <resume-sidebar />
    <resume-content />
  </div>
  <div class="mt-3">
    <resume-footer />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import Content from "@/components/resume/Content.vue";
import Sidebar from "@/components/resume/Sidebar.vue";
import Footer from "@/components/resume/Footer.vue";

export default defineComponent({
  components: {
    "resume-content": Content,
    "resume-sidebar": Sidebar,
    "resume-footer": Footer,
  },
  setup() {},
});
</script>
