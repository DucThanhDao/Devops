import { useTranslations } from 'next-intl';
import ContentContainer from './ContentContainer';
import TitleContainer from './TitleContainer';

const Services = () => {
  const t = useTranslations('services');
  const iconPath = '/assets/img/services/star-blue.svg';

  return (
    <section className="services container mt-6 mt-lg-8">
      <div className="services-container text-center text-lg-start row mx-0">
        <TitleContainer />
        <ContentContainer />
      </div>
    </section>
  );
};
export default Services;
