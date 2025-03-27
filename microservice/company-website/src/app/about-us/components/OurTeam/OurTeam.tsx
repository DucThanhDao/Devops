import { ROLE } from '@/landing/services/profile-service';
import React from 'react';
import OurValue from './OurValue';
import TeamLine from './TeamLine';
import Title from './Title';
import * as process from 'node:process';

const OurTeam = async () => {
  const locale: string = process.env.DEFAULT_LOCALE!;

  return (
    <section className="our-team py-4 mb-5">
      <OurValue />
      <div className="container px-4">
        <Title
          title="Meet our team"
          description="Get to know the wonderful team who's building our product and supporting our customers."
        />
        <TeamLine title="Leaderships" params={{ locale }} role={ROLE.LEADER} />
        <TeamLine title="Human Capital Development" params={{ locale }} role={ROLE.HR} />
        <TeamLine title="Technology Services" params={{ locale }} role={ROLE.DEVELOP} />
      </div>
    </section>
  );
};

export default OurTeam;
