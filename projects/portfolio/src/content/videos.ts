type Video = {
  type: 'youtube';
  videoId: string;
  name: string;
  date: string;
  description: string;
};

const videos: Video[] = [
  {
    type: 'youtube',
    videoId: 'th35WfqXasI',
    name: `DocuSign's Olive Design System`,
    date: '2019-09-26',
    description: `Creating DocuSign's homegrown design system that provides a set of visual standards, guidelines, and front-end components used across products.`,
  },
  {
    type: 'youtube',
    videoId: 'l5K01MAi2Ek',
    name: `DocuSign's Road to React`,
    date: '2018-03-27',
    description: `Migrating from Angular to React at DocuSign.`,
  },
];

export default videos;
