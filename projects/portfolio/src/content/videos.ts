type Video = {
  name: string;
  url: string;
  date: string;
  description: string;
};

const videos: Video[] = [
  {
    name: `DocuSign's Olive Design System`,
    url: 'https://www.youtube.com/embed/th35WfqXasI',
    date: '2019-09-26',
    description: `Creating DocuSign's homegrown design system that provides a set of visual standards, guidelines, and front-end components used across products.`,
  },
  {
    name: `DocuSign's Road to React`,
    url: 'https://www.youtube.com/embed/l5K01MAi2Ek',
    date: '2018-03-27',
    description: `Migrating from Angular to React at DocuSign.`,
  },
];

export default videos;
