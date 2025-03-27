'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Filter from '@/landing/components/Filter';
import ProjectList from '@/landing/components/ProjectList';
import { Project } from '@/landing/services/portfolio';
import { swap } from '@/common/util/util';

interface PortfolioClientProps {
  projects: Project[];
  searchParams: { industries: string };
}

const PortfolioClient: React.FC<PortfolioClientProps> = ({ projects, searchParams }) => {
  const router = useRouter();
  const [updateProjects, setUpdateProjects] = useState<Project[]>([]);
  const filterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchData = async () => {
      let updatedProjects = [...projects];
      if (updatedProjects.length >= 18) {
        swap(updatedProjects, 0, 15);
        swap(updatedProjects, 3, 10);
        swap(updatedProjects, 6, 20);
        swap(updatedProjects, 9, 5);
        swap(updatedProjects, 12, 15);
        swap(updatedProjects, 10, 15);
      }
      setUpdateProjects(updatedProjects);
    };
    fetchData();
  }, [projects]);

  useEffect(() => {
    if (searchParams.industries) {
      const element = filterRef.current;
      if (element && window.scrollY === 0) {
        const top = 0.8 * element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, [searchParams]);

  const handleFilterChange = (selectedFilter: string) => {
    if (selectedFilter === 'All') {
      router.push('/portfolio', { scroll: false });
    } else {
      const encodedItem = encodeURIComponent(selectedFilter);
      router.push(`?industries=${encodedItem}`, { scroll: false });
    }
  };

  return (
    <>
      <div ref={filterRef}>
        <Filter onFilterChange={handleFilterChange} />
      </div>
      <ProjectList projects={updateProjects} />
    </>
  );
};

export default PortfolioClient;
