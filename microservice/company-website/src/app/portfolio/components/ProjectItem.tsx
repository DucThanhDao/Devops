'use client';
import React from 'react';
import { FC } from 'react';
import { Project } from '@/landing/services/portfolio';
import { Carousel } from 'react-bootstrap';

interface ProjectProps {
  project: Project;
}

export const ProjectItem: FC<ProjectProps> = ({ project }) => {
  return (
    <div className="row portfolio-carousel pb-5">
      <div className="col-lg-5  portfolio-info">
        <h1 className="section-heading-carousel">{project.name}</h1>
        <p className="section-category-carousel">{project.projectTags.join(', ')}</p>
        <p className="section-main-carousel">{project.description}</p>
        <ul className="list-unstyled portfolio-list--course">
          {project.technologyTag.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="col-lg-7">
        <Carousel
          data-bs-theme="dark"
          slide={false}
          interval={null}
          variant="dark"
          className="col-md-7 text-justify d-flex flex-wrap flex-column"
        >
          {project.images.map((item: string, index: number) => (
            <Carousel.Item className="" key={index}>
              <div className="shadow-sm w-100">
                <img src={item} className="rounded-lg" alt="image" />
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
};
