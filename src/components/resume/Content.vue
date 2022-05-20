<template>
  <div class="main-wrapper">
    {{ experienceSection.jobName }}
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { ExperienceSection } from "@/enum/ExperienceEnum";

export default defineComponent({
  name: "resume-content",
  components: {},
  setup() {
    const experienceSection = ref<ExperienceSection>({
      jobName: "a1",
      company: "a2",
      location: "a3",
      workStart: "a4",
      workEnd: "a5",
      descriptionList: [
        {
          subject: "b1",
          list: ["c1", "c2"],
        },
      ],
    });
    return {
      experienceSection,
    };
  },
});
</script>
