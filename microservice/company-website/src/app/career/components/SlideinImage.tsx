'use client';

import { getPublicUrl } from '@/common/util/util';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideinImage = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  return (
    <div className="col-md-6">
      <motion.img
        ref={ref}
        src={getPublicUrl('/assets/img/annie-spratt.svg')}
        alt="img-blur-shadow"
        className={`img-fluid shadow rounded-3`}
        loading="eager"
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      />
      {/* <div
          className="colored-shadow"
          style={{
            backgroundImage:
              'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/buildings.jpg")',
          }}
        /> */}
    </div>
  );
};

export default SlideinImage;
