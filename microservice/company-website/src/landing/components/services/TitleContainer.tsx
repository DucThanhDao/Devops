import React from 'react';
import Badge from './Badge';
import Title from './Title';
import Description from './Description';
import Explore from './Explore';

const TitleContainer = () => {
  return (
    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12 d-flex align-items-center">
      <div className="pe-lg-5">
        <Badge />
        <Title />
        <Description />
        <Explore />
      </div>
    </div>
  );
};

export default TitleContainer;
