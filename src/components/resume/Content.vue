<template>
  <div class="main-wrapper">
    {{ experienceSection.name5 }}
    <h3></h3>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ExperienceDescription } from "@/enum/ExperienceEnum";

export default defineComponent({
  name: "resume-content",
  components: {},
  setup() {
    const experienceSection = ref<ExperienceDescription>({
      subject: "123",
      list: ["1", "2"],
    });
    return {
      experienceSection,
    };
  },
});
</script>
