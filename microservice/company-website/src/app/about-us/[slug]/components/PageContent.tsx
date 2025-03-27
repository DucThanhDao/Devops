import React from 'react';

type PageContentPros = {
  image: string;
  name: string;
  title: string;
  description: { __html: string };
};

const PageContent = ({ image, name, title, description }: PageContentPros) => {
  return (
    <div className='page-container'>
      <div className='image-container'>
        <img src={image} alt={name} className="rounded-lg shadow-lg" />
      </div>
      <div className="p-4">
        <div className="mt-lg-n4">
          <h2 className="display-6 fw-bold text-primary mb-3 me-3">{title}</h2>
          <p className="lead text-black mb-4" dangerouslySetInnerHTML={description}></p>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
