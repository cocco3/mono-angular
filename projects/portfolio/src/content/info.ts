type Info = {
  name: string;
  title: string;
  about: string;
  email: string;
  location: string;
  github: string;
  linkedIn: string;
  codePen: string;
};

function getTotalYears() {
  const now = new Date();
  const then = new Date('2007-07-01');

  const years = now.getFullYear() - then.getFullYear();
  const isBeforeAnniversary = now.getMonth() < then.getMonth();
  const totalYears = isBeforeAnniversary ? years - 1 : years;

  return totalYears;
}

const info: Info = {
  name: 'Joe Cocco',
  title: 'Front-end Web Engineer',
  location: 'San Francisco, CA',
  about: `I'm a front-end engineer with ${getTotalYears()}+ years of experience building design systems, component libraries, and responsive, accessible user interfaces at scale.`,
  email: 'cocco3@gmail.com',
  github: 'https://github.com/cocco3',
  linkedIn: 'https://www.linkedin.com/in/joecocco',
  codePen: 'https://codepen.io/cocco3',
};

export default info;
