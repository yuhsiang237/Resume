<template>
  <div class="main-wrapper">
    <section class="section experiences-section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fas fa-briefcase"></i></span
        >Experiences
      </h2>
      <div class="item" :key="index" v-for="(item, index) in experienceList">
        <div class="meta">
          <div class="upper-row">
            <h3 class="job-title">{{ item.jobTitle }}</h3>
            <div class="time">{{ item.workStart }} - {{ item.workEnd }}</div>
          </div>
          <div class="upper-row">
            <div class="company">{{ item.company }}</div>
            <div class="time">{{ item.location }}</div>
          </div>
        </div>
        <div class="details">
          <p>{{ item.experienceDescription.subject }}</p>
          <ul>
            <li
              :key="index"
              v-for="(item, index) in item.experienceDescription.list"
            >
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="section projects-section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fas fa-archive"></i></span>Projects
      </h2>
      <div class="item" :key="index" v-for="(item, index) in projectList">
        <span class="project-title"
          ><a :href="item.href" target="_blank">{{ item.projectName }}</a></span
        >
        -
        <span class="project-tagline">{{ item.description }} </span>
      </div>
    </section>
    <section class="skills-section section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fas fa-rocket"></i></span>Skills
        &amp; Proficiency
      </h2>
      <div class="skillset">
        <span
          :key="index"
          v-for="(item, index) in skillList"
          class="label label-default"
          >{{ item.name }}</span
        >
      </div>
    </section>
    <section class="education-section section">
      <h2 class="section-title">
        <span class="icon-holder"><i class="fa fa-graduation-cap"></i></span
        >Education
      </h2>
      <div class="educationset">
        <div class="item" :key="index" v-for="(item, index) in eduList">
          <div class="meta">
            <div class="upper-row">
              <h3 class="degree">{{ item.degree }}</h3>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="college">{{ item.college }}</div>
          </div>
          <div class="details">
            <p></p>
            <ul>
              <li :key="index" v-for="(item, index) in item.list">
                {{ item }}
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Experience } from "@/models/ExperienceModel";
import { Project } from "@/models/ProjectModel";
import { Skill } from "@/models/SkillModel";
import { Edu } from "@/models/EduModel";

export default defineComponent({
  name: "resume-content",
  setup() {
    const experienceList = ref<Experience[]>([
      {
        jobTitle: "Software Engineer",
        company: "Wistron ITS",
        location: "Taipei, Taiwan",
        workStart: "Feb. 2022",
        workEnd: `Present (${
          new Date().getMonth() - new Date("2022-02-01 00:00:00").getMonth() + 1
        } mos)`,
        experienceDescription: {
          subject: "Stationed at E.SUN Commercial Bank, Ltd.",
          list: [
            "Build the financial loan system (E.SUN Commercial Bank, Ltd.)",
            "Create the procedure of finance in PostgreSQL and Microsoft SQL Server",
            "Design and create the table schema of financial system",
            "Create and run unit test in the programs, using Xunit and Moq(mock the fake object)",
            "Use API call to other microservices of E.SUN bank",
            "Develop the backend using C# and the frontend using Vue3",
            "Use C# with ASP.NET Core and Vue3 with Typescript",
            "Run CI/CD on Azure DevOps Server",
            "Manage the code using git on Gitlab/Azure DevOps Server",
            "Connect database with Dapper, and operate data with LINQ",
            "Get the realtime log report of bug with Kibana",
            "Use Redis as a cache",
            "Use design pattern of DI(dependency injection) in project",
          ],
        },
      },
      {
        jobTitle: "Programming Tutor",
        company: "Self employed",
        location: "Taipei, Taiwan",
        workStart: "Mar. 2022",
        workEnd: `Present (${
          new Date().getMonth() - new Date("2022-02-01 00:00:00").getMonth() + 1
        } mos)`,
        experienceDescription: {
          list: [
            "The teaching content of javascript framework includes vue3 and react",
            "Programming languages include Javascript(ES6) and Typescript",
            "Teach twice a week",
          ],
        },
      },
      {
        jobTitle: "Freelance",
        company: "Self employed",
        location: "Kaohsiung City, Taiwan",
        workStart: "Sep. 2020",
        workEnd: "Jun. 2021 (10 mos)",
        experienceDescription: {
          list: [
            "Assist the project with Flutter",
            "Assist the software outsourcing",
          ],
        },
      },
      {
        jobTitle: "Software Engineer",
        company: "Linkchain",
        location: "Kaohsiung City, Taiwan",
        workStart: "Aug. 2018",
        workEnd: "Aug 2020 (2 yrs 1 mos)",
        experienceDescription: {
          list: [
            "Develop the government project of agriculture",
            "Develop the report using React and C# ASP.NET Core",
            "Develop the management system of farm with React Javascipt ES6  and C# ASP.NET Core",
            "All 7 projects I participated in were successfully completed",
          ],
        },
      },
      {
        jobTitle: "Software Engineer(Intern)",
        company: "3drens",
        location: "Taipei, Taiwan",
        workStart: "Mar. 2018",
        workEnd: "Jun. 2018 (4 mos)",
        experienceDescription: {
          list: [
            "Develop the Internet of Vehicles System Development",
            "Build the system with Node.js and React",
            "Manage the code using git on Bitbucket",
            "Integrate the program with Google Map",
          ],
        },
      },
      {
        jobTitle: "Software Engineer(Intern)",
        company: "Institute for Information Industry, III",
        location: "Taipei, Taiwan",
        workStart: "Dec. 2015",
        workEnd: "Jun. 2016(7 mos)",
        experienceDescription: {
          list: [
            "Develop VisCa LRS, a course system with Java",
            "Develop the API with Java",
            "Develop the viewing angle function",
            "Build charts using Highcharts and Bootstrap",
            "Improve API speed by modifying database statements",
            "Use MongoDB and Mysql to store data",
          ],
        },
      },
    ]);

    const projectList = ref<Project[]>([
      {
        projectName: "Order System",
        description:
          "Manage commodity incoming, outgoing, ordering, inventory systems",
        href: "https://github.com/yuhsiang237/Order-System",
      },
      {
        projectName: "Resume",
        description:
          "The resume created with Vue3 and Typescript, and has workflow(CI/CD pipeline) on github",
        href: "https://github.com/yuhsiang237/Resume",
      },
    ]);

    const skillList = ref<Skill[]>([
      {
        name: "C#",
      },
      {
        name: "Javascript & ES6",
      },
      {
        name: "Typescript",
      },
      {
        name: "Java",
      },
      {
        name: "Microsoft SQL Server",
      },
      {
        name: "PostgreSQL",
      },
      {
        name: "Vue3",
      },
      {
        name: "React (Hook)",
      },
    ]);

    const eduList = ref<Edu[]>([
      {
        degree: "BSc in Computer Science",
        time: "2014 - 2018",
        college: "Chinese Culture University",
        list: ["Study Software Engineering"],
      },
    ]);

    return {
      experienceList,
      projectList,
      skillList,
      eduList,
    };
  },
});
</script>
