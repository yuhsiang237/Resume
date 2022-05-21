<template>
  <div class="wrapper mt-lg-5">
    <resume-sidebar />
    <resume-content />
  </div>
  <resume-footer />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Content from "@/components/resume/Content.vue";
import Sidebar from "@/components/resume/Sidebar.vue";
import Footer from "@/components/resume/Footer.vue";

export default defineComponent({
  name: "app-resume",
  components: {
    "resume-content": Content,
    "resume-sidebar": Sidebar,
    "resume-footer": Footer,
  },
});
</script>
