import React from 'react';
import type { ValueContent } from './OurValue';

const OurValueItem = ({ image, title, description }: ValueContent) => {
  return (
    <div className="card shadow-none h-100">
      <div className="card-body p-4">
        <img src={image} alt={title} loading="eager" style={{ width: '4rem', height: '3.2rem' }} />
        <h4 className="fs-5 my-2">{title}</h4>
        <p style={{ fontSize: '0.875rem' }}>{description}</p>
      </div>
    </div>
  );
};

export default OurValueItem;
