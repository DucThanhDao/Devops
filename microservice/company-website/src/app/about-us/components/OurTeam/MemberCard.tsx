import { Employee, ROLE } from '@/landing/services/profile-service';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactElement } from 'react';
import MemberTitle from './MemberTitle';
import MemberImage from './MemberImage';

const MemberCard = ({ ...props }: Employee) => {
  return (
    <div className="col-md-6 col-xl-3">
      <div className="position-relative h-100">
        {/* SHADOW DIV */}
        <div
          className="position-absolute w-100 h-100 rounded-3"
          style={{
            backgroundColor: 'rgb(77, 141, 203, 0.45)',
            bottom: '-0.75rem',
            right: '-0.75rem',
          }}
        ></div>
        <div
          className="card border-0 shadow-sm overflow-hidden p-0 rounded-3 h-100"
          style={{ borderRadius: 0 }}
        >
          <MemberImage image={props.image} />
          <MemberTitle {...props} />
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
