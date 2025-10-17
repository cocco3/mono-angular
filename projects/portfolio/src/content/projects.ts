type Project = {
  name: string;
  description: string;
  tech: string[];
  url: string;
  githubUrl: string;
  bannerSrc?: string;
};

const projects: Project[] = [
  {
    name: 'joecocco.com',
    description: `Portfolio site showcasing professional experience and personal projects.`,
    tech: ['angular', 'typescript', 'netlify'],
    url: 'https://joecocco.com',
    githubUrl:
      'https://github.com/cocco3/mono-angular/tree/main/projects/portfolio',
  },
  {
    name: 'CountdownApp',
    description: `Countdowns integrated with Google Calendar.`,
    tech: ['angular', 'typescript', 'google api', 'netlify'],
    url: 'https://cocco-countdown.netlify.app',
    githubUrl:
      'https://github.com/cocco3/mono-angular/tree/main/projects/countdown',
  },
  {
    name: 'Vampire Survivors',
    description: `Weapon evolution chart for the video game Vampire Surivors.`,
    tech: ['angular', 'typescript', 'netlify'],
    url: 'https://vamps-evolutions.netlify.app/',
    githubUrl:
      'https://github.com/cocco3/mono-angular/tree/main/projects/vampire-survivors',
  },
  {
    name: 'Angular UI Library',
    description: `Angular components documented with Storybook.`,
    tech: ['angular', 'typescript', 'storybook', 'github actions'],
    url: 'https://cocco3.github.io/mono-angular',
    githubUrl: 'https://github.com/cocco3/mono-angular/tree/main/projects/ui',
  },
  {
    name: 'postcss-disabled',
    description: `A postcss plugin to add the :disabled selector.`,
    tech: ['postcss', 'javascript'],
    url: 'https://www.npmjs.com/package/postcss-disabled',
    githubUrl: 'https://github.com/cocco3/postcss-disabled',
  },
];

export default projects;
