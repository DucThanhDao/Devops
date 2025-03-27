'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { getPublicUrl } from '@/common/util/util';

const Data = () => {
  const t = useTranslations('data');
  const count1 = useMotionValue(150);
  const rounded1 = useTransform(count1, Math.round);
  const count2 = useMotionValue(100);
  const rounded2 = useTransform(count2, Math.round);
  const count3 = useMotionValue(0);
  const rounded3 = useTransform(count3, Math.round);
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsStartAnimation(entry.isIntersecting);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.8 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, []);

  useEffect(() => {
    if (isStartAnimation) {
      animate(count1, 200, { duration: 1 });
      animate(count2, 150, { duration: 1 });
      animate(count3, 15, { duration: 1 });
    }
  }, [count1, count2, count3, isStartAnimation]);

  return (
    <section className="pt-1 pt-lg-4 pb-lg-6 pt-lg-8 data position-relative" ref={sectionRef}>
      <img
        className="position-absolute left-0 w-7 d-none d-lg-block"
        style={{
          top: '2rem',
        }}
        src={getPublicUrl('/assets/img/line.svg')}
        alt="testimonials-line"
        loading="lazy"
      />
      <img
        className="position-absolute end-0 d-none d-lg-block"
        style={{
          bottom: '-1.5rem',
        }}
        src={getPublicUrl('/assets/img/Ellipse.png')}
        alt="ellipse"
        loading="lazy"
      />
      <div className="container mt-5">
        <div className="d-flex justify-content-center">
          <span className="badge rounded-pill text-bg-primary">{t('badge')}</span>
        </div>
        <h2 className="text-center my-2 font-weight-bold" style={{ color: '#000' }}>
          {t('heading')}
        </h2>
        <p className="text-center">Proven Expertise in Building Cutting-Edge Tech Products</p>
        <motion.div
          className="row w-100 mx-0 "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="col-4 text-center d-flex flex-column py-3 py-lg-5">
            <p className="mb-0">
              <motion.span className="fw-bolder mb-0 data-number">{rounded1}</motion.span>
              <span className="mb-0 data-plus">+</span>
            </p>
            <p className="data-title fw-bold text-black mb-0">{t('bottom1')} </p>
          </div>
          <div className="col-4 text-center d-flex flex-column my-3 my-lg-5 px-0">
            <p
              className="mb-0"
              style={{
                borderLeft: '1px solid #a0a7ad',
                borderRight: '1px solid #a0a7ad',
              }}
            >
              <motion.span className="fw-bolder mb-0 data-number">{rounded2}</motion.span>
              <span className="mb-0 data-plus">+</span>
            </p>
            <p className="data-title fw-bold text-black mb-0">{t('bottom2')} </p>
          </div>
          <div className="col-4 text-center d-flex flex-column py-3 py-lg-5">
            <p className="mb-0">
              <motion.span className="fw-bolder mb-0 data-number">{rounded3}</motion.span>
              <span className="mb-0  data-plus">+</span>
            </p>
            <p className="data-title fw-bold text-black mb-0">{t('bottom3')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Data;
