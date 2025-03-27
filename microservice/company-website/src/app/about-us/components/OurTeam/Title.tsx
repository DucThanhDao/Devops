import React from 'react';

type TitleProps = {
  title: string;
  description: string;
};

const Title = ({ title, description }: TitleProps) => {
  return (
    <div className="text-center">
      <h3 className="my-3 font-weight-bold display-3">{title}</h3>
      <p className="mx-auto mb-4">{description}</p>
    </div>
  );
};

export default Title;
