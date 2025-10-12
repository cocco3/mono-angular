type Experience = {
  company: Company;
  positions: Position[];
};

type Company = {
  name: string;
  start: string;
  end?: string;
};

type Position = {
  title: string;
  location: string;
  start?: string;
  end?: string;
  points: string[];
  tech?: string[];
};

const experience: Experience[] = [
  {
    company: {
      name: 'Quantified AI',
      start: '2024-10',
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
      start: '2022-05',
      end: '2024-09',
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
      start: '2013-04',
      end: '2022-05',
    },
    positions: [
      {
        title: 'Director, Engineering',
        location: 'San Francisco, CA',
        start: '2020-02',
        end: '2022-05',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Senior Engineering Manager',
        location: 'San Francisco, CA',
        start: '2017-05',
        end: '2020-02',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Engineering Manager',
        location: 'San Francisco, CA',
        start: '2015-08',
        end: '2017-05',
        points: ['point 1,', 'point 2'],
      },
      {
        title: 'Senior Software Engineer',
        location: 'San Francisco, CA',
        start: '2013-04',
        end: '2015-08',
        points: ['point 1,', 'point 2'],
      },
    ],
  },
  {
    company: {
      name: 'Cartavi (acquired by DocuSign)',
      start: '2010-01',
      end: '2013-04',
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
      start: '2011-02',
      end: '2012-10',
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
      start: '2007-07',
      end: '2011-02',
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
