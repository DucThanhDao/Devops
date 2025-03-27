import React from 'react';
import DesignContainer from './DesignContainer';
import WebMobileContainer from './WebMobileContainer';
import ProductStrategy from './ProductStrategy';
import EngineerTeam from './EngineerTeam';

const ContentContainer = () => {
  return (
    <div className="col-xl-6 col-lg-7 col-md-12 row p-0 bg-right g-0">
      <div className="services-container-right row">
        <div className="d-flex flex-column col-xl-6 col-lg-6 col-md-6 position">
          <DesignContainer />
          <WebMobileContainer />
        </div>
        <div className="d-flex flex-column col-xl-6 col-lg-6 col-md-6 card-right">
          <ProductStrategy />
          <EngineerTeam />
        </div>
      </div>
    </div>
  );
};

export default ContentContainer;
