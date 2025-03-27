import { fetchProjects } from '../services/portfolio';
import WorksCarousel from './WorksCarousel';

interface WorksCarouselWrapperProps {
  locale: string;
}

async function WorksCarouselWrapper({ locale }: WorksCarouselWrapperProps) {
  const validLocale = (locale === 'en' || locale === 'vi' ? locale : 'en') as 'en' | 'vi';
  const projects = await fetchProjects(validLocale, 'All');

  return <WorksCarousel locale={locale} projects={projects} />;
}

export default WorksCarouselWrapper;
