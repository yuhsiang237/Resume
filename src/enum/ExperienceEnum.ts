interface ExperienceSection {
  jobName: string;
  company: string;
  location: string;
  workStart: string;
  workEnd: string;
  descriptionList?: Array<ExperienceDescription>;
}

interface ExperienceDescription {
  subject?: string;
  list?: Array<string>;
}
export { ExperienceSection, ExperienceDescription };
