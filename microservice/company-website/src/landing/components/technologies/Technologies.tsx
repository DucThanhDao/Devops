'use client';
import { useTranslations } from 'next-intl';
import TechnologyLine from './TechnologyLine';
import Title from './Title';
import Description from './Description';
import { getPublicUrl } from '@/common/util/util';

// const sliderTransition = {
//   duration: 1,
//   ease: [0.56, 0.03, 0.12, 1.04],
// };

const TECHNOLOGIES = [
  {
    id: 0,
    width: 55,
    src: getPublicUrl('/assets/img/technology/react.svg'),
    alt: 'React',
  },
  {
    id: 1,
    width: 85,
    src: getPublicUrl('/assets/img/technology/react-native.svg'),
    alt: 'React Native',
  },
  {
    id: 2,
    width: 40,
    src: getPublicUrl('/assets/img/technology/nodejs.svg'),
    alt: 'Node.js',
  },
  {
    id: 3,
    width: 60,
    src: getPublicUrl('/assets/img/technology/vuejs.svg'),
    alt: 'Vue.js',
  },
  {
    id: 4,
    width: 50,
    src: getPublicUrl('/assets/img/technology/amazon.svg'),
    alt: 'Amazon',
  },
  {
    id: 5,
    width: 70,
    src: getPublicUrl('/assets/img/technology/gcp.svg'),
    alt: 'Google Cloud Platform',
  },
  {
    id: 6,
    width: 70,
    src: getPublicUrl('/assets/img/technology/Docker.png'),
    alt: 'Docker',
  },
  {
    id: 7,
    width: 70,
    src: getPublicUrl('/assets/img/technology/mongodb.svg'),
    alt: 'MongoDB',
  },
  {
    id: 8,
    width: 35,
    src: getPublicUrl('/assets/img/technology/mysql.svg'),
    alt: 'MySQL',
  },
  {
    id: 9,
    width: 65,
    src: getPublicUrl('/assets/img/technology/postgres.svg'),
    alt: 'PostgreSQL',
  },
  {
    id: 10,
    width: 70,
    src: getPublicUrl('/assets/img/technology/elastic-stack.svg'),
    alt: 'Elastic Stack',
  },
  {
    id: 11,
    width: 70,
    src: getPublicUrl('/assets/img/technology/odoo.webp'),
    alt: 'odoo',
  },
  {
    id: 12,
    width: 40,
    src: getPublicUrl('/assets/img/technology/java-2.svg'),
    alt: 'Java',
  },
  {
    id: 13,
    width: 70,
    src: getPublicUrl('/assets/img/technology/laravel.svg'),
    alt: 'Laravel',
  },
  {
    id: 14,
    width: 40,
    src: getPublicUrl('/assets/img/technology/go.svg'),
    alt: 'Go',
  },
  {
    id: 15,
    width: 70,
    src: getPublicUrl('/assets/img/technology/kubernets-logo.webp'),
    alt: 'kubernets',
  },
  {
    id: 16,
    width: 40,
    src: getPublicUrl('/assets/img/technology/typescript.svg'),
    alt: 'TypeScript',
  },
  {
    id: 17,
    width: 40,
    src: getPublicUrl('/assets/img/technology/next-js.svg'),
    alt: 'Next.js',
  },
  {
    id: 18,
    width: 40,
    src: getPublicUrl('/assets/img/technology/tailwind.svg'),
    alt: 'Tailwind CSS',
  },
  {
    id: 19,
    width: 45,
    src: getPublicUrl('/assets/img/technology/strapi.svg'),
    alt: 'Strapi',
  },
  {
    id: 20,
    width: 50,
    src: getPublicUrl('/assets/img/technology/nuxt.svg'),
    alt: 'Nuxt',
  },
  {
    id: 21,
    width: 40,
    src: getPublicUrl('/assets/img/technology/python.svg'),
    alt: 'Python',
  },
];

const Technologies = () => {
  const t = useTranslations('technologies');

  const firstLine = TECHNOLOGIES.slice(0, 7);
  const secondLine = TECHNOLOGIES.slice(7, 14);
  const thirdLine = TECHNOLOGIES.slice(14, 21);

  return (
    <section id="technologies" className="pt-6 pt-lg-8">
      <div className="technologies container text-center">
        <Title />
        <Description />
        <TechnologyLine initDirection={-1} technologies={firstLine} />
        <TechnologyLine initDirection={1} technologies={secondLine} />
        <TechnologyLine initDirection={-1} technologies={thirdLine} />
      </div>
    </section>
  );
};
export default Technologies;
