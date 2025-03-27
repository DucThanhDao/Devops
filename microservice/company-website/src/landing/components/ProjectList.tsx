'use client';

import { Project } from '@/landing/services/portfolio';
import { slugify } from '@/common/util/util';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

interface ProjectListProps {
  projects: Project[];
}

const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const t = useTranslations('portfolio');

  let buffer: JSX.Element[] = [];
  projects.forEach((project, index) => {
    switch (index % 6) {
      case 0:
      case 3:
        buffer.push(
          <div key={index}>
            <div
              className={`d-flex justify-content-center project-details row ${
                index === 0 ? `mt-5` : `mt-3`
              }`}
            >
              <div
                className={`${
                  index % 6 === 0 ? `px-lg-5 px-xl-6` : `pe-lg-5 pe-xl-6`
                } col-12 col-lg-6 d-flex align-items-center mt-2 mt-lg-0`}
              >
                <div>
                  <Link href={`/portfolio/${slugify(project.name)}`}>
                    <h3 className="text-capitalize mb-2 text-dark">{project.name}</h3>
                  </Link>
                  <h3 className="fs-6 text-lg text-primary">
                    {project.projectTags
                      .reduce((prev, current) => `${prev}, ${current}`, '')
                      .slice(2)}
                  </h3>

                  <p className="text-dark text-lg mt-3 mb-0">
                    {project.description.split(/\s+/).slice(0, 50).join(' ') +
                      (project.description.split(/\s+/).length > 50 ? '...' : '')}
                  </p>
                  <div className="d-flex align-items-center text-primary flex-wrap mb-4">
                    {project.technologyTag.map((techTag, indexStack) => (
                      <div
                        key={`${index}-${indexStack}`}
                        className="tech-stack text-primary me-2 rounded mt-3"
                      >
                        <div>{techTag}</div>
                      </div>
                    ))}
                  </div>
                  <Link
                    className="text-primary fw-bold "
                    href={`/portfolio/${slugify(project.name)}`}
                  >
                    <span className="view-project-button pb-1 w-30 ">
                      {t('viewProject')}
                      <i className="fas fa-arrow-right ps-2"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div
                className={`${index % 6 === 0 ? 'order-lg-first' : ''} 
                col-12 col-lg-6 d-flex justify-content-center align-items-center`}
              >
                <div>
                  <img
                    src={project?.images.length ? project?.images[0] : '/assets/img/DOC.png'}
                    alt="img-blur-shadow"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
            {index + 1 > projects.length - 1 ? null : <hr className="horizontal dark my-6"></hr>}
          </div>
        );
        break;
      case 1:
      case 4:
        buffer.push(
          <div key={index}>
            <div className="project-details row mt-6">
              <div className="col-12 col-lg-6 d-flex align-items-start mt-4 mt-lg-0">
                <div className="row pe-lg-3">
                  <div className="project-content col-12 pt-5">
                    <Link href={`/portfolio/${slugify(project.name)}`}>
                      <h3 className="text-capitalize font-weight-bold mb-2 text-dark">
                        {project.name}
                      </h3>
                    </Link>
                    <h3 className="fs-6 text-lg text-primary">
                      {project.projectTags
                        .reduce((prev, current) => `${prev}, ${current}`, '')
                        .slice(2)}
                    </h3>
                    <p className="text-dark text-lg mt-3 mb-0">
                      {project.description.split(/\s+/).slice(0, 35).join(' ') +
                        (project.description.split(/\s+/).length > 35 ? '...' : '')}
                    </p>
                    <div className="d-flex align-items-center flex-wrap mt-3">
                      {project.technologyTag.map((techTag, indexStack) => (
                        <div
                          key={`${index}-${indexStack}`}
                          className="tech-stack me-2 rounded mb-3"
                        >
                          <div>{techTag}</div>
                        </div>
                      ))}
                    </div>
                    <Link
                      className="text-primary fw-bold"
                      href={`/portfolio/${slugify(project.name)}`}
                    >
                      <span className="view-project-button pb-1 w-30">
                        {t('viewProject')}
                        <i className="fas fa-arrow-right ps-2"></i>
                      </span>
                    </Link>
                  </div>
                  <div className="project-image order-lg-first col-12 mh-40">
                    <img
                      src={
                        project.images.length
                          ? project.images.length > 1
                            ? project.images[1]
                            : project.images[0]
                          : '/assets/img/DOC.png'
                      }
                      alt="img-blur-shadow"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
              {index + 1 < projects.length ? (
                <div className="col-12 col-lg-6 d-flex align-items-start mt-2 mt-lg-0">
                  <div className="row ps-lg-3">
                    <div className="project-content col-12 pt-5">
                      <Link href={`/portfolio/${slugify(projects[index + 1]?.name)}`}>
                        <h3 className="text-capitalize font-weight-bold mb-2 text-dark">
                          {projects[index + 1]?.name}
                        </h3>
                      </Link>
                      <h3 className="fs-6 text-lg text-primary">
                        {projects[index + 1].projectTags
                          .reduce((prev, current) => `${prev}, ${current}`, '')
                          .slice(2)}
                      </h3>
                      <p className="text-dark text-lg mt-3 mb-0">
                        {projects[index + 1]?.description.slice(
                          0,
                          projects[index + 1]?.description
                            .replaceAll('\n', '')
                            .slice(0, 500)
                            .lastIndexOf(' ')
                        ) + ' ...'}
                      </p>
                      <div className="d-flex align-items-center flex-wrap mt-3">
                        {projects[index + 1]?.technologyTag.map((techTag, indexStack) => (
                          <div
                            key={`${index}-${indexStack}`}
                            className="tech-stack me-2 rounded mb-3"
                          >
                            <div>{techTag}</div>
                          </div>
                        ))}
                      </div>
                      <Link
                        className="text-primary fw-bold"
                        href={`/portfolio/${slugify(projects[index + 1].name)}`}
                      >
                        <span className="view-project-button pb-1 w-30">
                          {t('viewProject')}
                          <i className="fas fa-arrow-right ps-2"></i>
                        </span>
                      </Link>
                    </div>
                    <div className="project-image order-lg-first col-12 mh-40">
                      <img
                        src={
                          projects[index + 1]?.images.length
                            ? projects[index + 1].images.length > 1
                              ? projects[index + 1].images[1]
                              : projects[index + 1].images[0]
                            : '/assets/img/DOC.png'
                        }
                        alt="img-blur-shadow"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
            {index + 2 > projects.length - 1 ? null : <hr className="horizontal dark my-6"></hr>}
          </div>
        );
        break;
    }
  });

  return <>{buffer}</>;
};

export default ProjectList;
