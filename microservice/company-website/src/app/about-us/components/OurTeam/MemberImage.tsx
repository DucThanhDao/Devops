import React from 'react';

const MemberImage = ({ image }: { image: string }) => {
  return (
    <div className="ratio ratio-1x1">
      <img src={image} className="h-100 w-100 object-fit-cover" loading="lazy" />
    </div>
  );
};

export default MemberImage;
