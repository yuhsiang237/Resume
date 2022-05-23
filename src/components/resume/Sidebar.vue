<template>
  <div class="sidebar-wrapper">
    <div class="profile-container">
      <img
        class="profile"
        style="width: 100%"
        v-bind:src="profile.img"
        alt=""
      />
      <h1 class="name">{{ profile.name }}</h1>
      <h3 class="tagline">{{ profile.tagline }}</h3>
    </div>
    <!--//profile-container-->
    <div class="contact-container container-block">
      <ul class="list-unstyled contact-list">
        <li v-if="concact.email" class="email">
          <i class="fas fa-envelope"></i
          ><a :href="'mailto: ' + concact.email">{{ concact.email }}</a>
        </li>
        <li v-if="concact.phone" class="phone">
          <i class="fas fa-phone"></i
          ><a href="tel:0123 456 789">0123 456 789</a>
        </li>
        <li v-if="concact.website" class="website">
          <i class="fas fa-globe"></i
          ><a :href="'https://' + concact.website" target="_blank">{{
            concact.website
          }}</a>
        </li>
        <li v-if="concact.linkedin" class="linkedin">
          <i class="fab fa-linkedin-in"></i
          ><a
            :href="'https://www.linkedin.com/in/' + concact.linkedin"
            target="_blank"
            >linkedin.com/in/{{ concact.linkedin }}</a
          >
        </li>
        <li v-if="concact.github" class="github">
          <i class="fab fa-github"></i
          ><a :href="'https://github.com/' + concact.github" target="_blank"
            >github.com/{{ concact.github }}</a
          >
        </li>
      </ul>
    </div>
    <!--//contact-container-->
    <div class="languages-container container-block">
      <h2 class="container-block-title">Languages</h2>
      <ul class="list-unstyled interests-list">
        <li :key="index" v-for="(item, index) in languageList">
          {{ item.name }}<span class="lang-desc">({{ item.desc }})</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Profile } from "@/models/ProfileModel";
import { Concact } from "@/models/ConcactModel";
import { Language } from "@/models/LanguageModel";

export default defineComponent({
  name: "resume-sidebar",
  setup() {
    const profile = ref<Profile>({
      img: "https://avatars.githubusercontent.com/u/12533553?v=4",
      name: "Yu Hsiang",
      tagline: "Software Engineer",
    });
    const concact = ref<Concact>({
      email: "umworksite@gmail.com",
      website: "yuhsiang237.github.io",
      linkedin: "yu-hsiang-lin-6046ab22b",
      github: "yuhsiang237",
    });
    const languageList = ref<Language[]>([
      {
        name: "Tradition Chinese",
        desc: "Native",
      },
      {
        name: "English",
        desc: "Conversational",
      },
    ]);
    return {
      profile,
      concact,
      languageList,
    };
  },
});
</script>
