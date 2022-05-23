interface Experience {
  jobTitle: string;
  company: string;
  location: string;
  workStart: string;
  workEnd: string;
  experienceDescription?: ExperienceDescription;
}

interface ExperienceDescription {
  subject?: string;
  list?: Array<string>;
}

export { Experience, ExperienceDescription };
