'use client';

import { slugify } from '@/common/util/util';
import { Project } from '../services/portfolio';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface WorksCarouselProps {
  locale: string;
  projects: Project[];
}

const FEATURED_PROJECTS = [
  'Xentrix Studios',
  'Doctoroncall',
  'LinkedCV',
  'Top Menu',
  'USC Card Stablecoin',
];

const WorksCarousel = ({ locale, projects }: WorksCarouselProps) => {
  const t = useTranslations('workCarousel');

  const featuredProjects = FEATURED_PROJECTS.map((name) =>
    projects.find((project) => project.name.toLowerCase() === name.toLowerCase())
  ).filter((project): project is Project => project !== undefined);

  // Only display 4 projects in a grid.
  const projectsToDisplay = featuredProjects.slice(0, 4);

  return (
    <section
      className="works-carousel mt-6 mt-lg-8 py-6 py-lg-6 px-4 px-lg-4"
      style={{ background: 'rgb(179 181 181 / 14%)' }}
    >
      <div className="works-header flex justify-content-between align-content-center mb-4">
        <div>
          <span className="badge rounded-pill text-bg-primary">{t('badge')}</span>
          <h2 className="font-weight-bold text-center text-black">{t('heading')}</h2>
        </div>
        <Link className="text-center align-content-center" href={`/portfolio`}>
          {t('link')} <i className="fas fa-arrow-right ps-2"></i>
        </Link>
      </div>
      <div className="works-grid">
        {projectsToDisplay.map((project, index) => (
          <div className="works-item" key={index}>
            <Link href={`/portfolio/${slugify(project.name)}`}>
              <motion.div
                className="card custom-card bg-white overflow-hidden d-flex"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                {/* Image side */}
                <div className="card-image overflow-hidden" style={{ flex: 1 }}>
                  <img
                    src={project.images[0]}
                    alt="Project Image"
                    className="img-fluid w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                </div>
                {/* Content side */}
                <div
                  className="card-content flex-grow-1 p-3 d-flex flex-column justify-content-between"
                  style={{ flex: 1 }}
                >
                  <div className="card-body custom-card-body">
                    <h3 className="card-title text-xl font-bold fw-bold text-dark">
                      {project.name}
                    </h3>
                    <p className="card-subtitle text-sm text-primary fw-bolder">
                      {project.projectTags.join(', ')}
                    </p>
                    <p className="card-text mt-2 text-muted">
                      {project.description.split(/\s+/).slice(0, 42).join(' ') +
                        (project.description.split(/\s+/).length > 42 ? '...' : '')}
                    </p>
                    <div className="mt-4">
                      {project.technologyTag.slice(0, 4).map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          className="badge me-2 mt-1"
                          style={{
                            border: '1px solid #0078D1',
                            color: '#0078D1',
                            fontWeight: 'normal',
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                  <span className="text-primary fw-bold ms-auto me-3">
                    {t('viewProject')}
                    <i className="fas fa-arrow-right ps-2"></i>
                  </span>
                </div>
              </motion.div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorksCarousel;
