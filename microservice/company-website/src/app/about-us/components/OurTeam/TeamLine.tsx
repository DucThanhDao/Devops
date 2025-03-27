import { Employee, ROLE, fetchEmployees } from '@/landing/services/profile-service';
import React from 'react';
import MemberCard from './MemberCard';

type TeamLineProps = {
  params: { locale: string };
  title: string;
  role: string;
};

const TeamLine = async ({ params: { locale }, title, role }: TeamLineProps) => {
  const employees = await fetchEmployees(locale, role);

  return (
    <>
      <h4 className="mt-6 mb-4" style={{ fontSize: '1.8rem' }}>
        {title}
      </h4>
      <div className="row g-6 mb-3">
        {employees.map((item) => (
          <MemberCard {...item} key={item.name} />
        ))}
      </div>
    </>
  );
};

export default TeamLine;
