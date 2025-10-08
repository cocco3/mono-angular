type Experience = {
  company: Company;
  positions: Position[];
};

type Company = {
  name: string;
  dates: string;
};

type Position = {
  title: string;
  location: string;
  dates?: string;
  points: string[];
  tech?: string[];
};

const experience: Experience[] = [
  {
    company: {
      name: 'Quantified AI',
      dates: 'Oct 2024 – Present',
    },
    positions: [
      {
        title: 'Front-end Engineer (Contract)',
        location: 'Remote',
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'Honor Education',
      dates: 'May 2022 – Sep 2024',
    },
    positions: [
      {
        title: 'Director, Engineering / Lead Engineer',
        location: 'San Francisco, CA',
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'DocuSign',
      dates: 'Apr 2013 – May 2022',
    },
    positions: [
      {
        title: 'Director, Engineering',
        location: 'San Francisco, CA',
        dates: 'Feb 2020 – May 2022',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Senior Engineering Manager',
        location: 'San Francisco, CA',
        dates: 'May 2017 – Feb 2020',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Engineering Manager',
        location: 'San Francisco, CA',
        dates: 'Aug 2015 – May 2017',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        dates: 'Apr 2013 – Aug 2015',
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'Cartavi (acquired by DocuSign)',
      dates: 'Jan 2010 – Apr 2013',
    },
    positions: [
      {
        title: 'Senior Software Engineer',
        location: 'Chicago, IL',
        tech: ['.NET MVC', 'jQuery'],
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'Guaranteed Rate',
      dates: 'Feb 2011 – Oct 2012',
    },
    positions: [
      {
        title: 'Product Engineer',
        location: 'Chicago, IL',
        tech: ['.NET MVC', 'jQuery'],
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'West Monroe Partners',
      dates: 'Jul 2007 – Feb 2011',
    },
    positions: [
      {
        title: 'Senior Integration Consultant',
        location: 'Chicago, IL',
        points: ['point 1,', 'point 2'],
      },
    ],
  },
];

export default experience;
