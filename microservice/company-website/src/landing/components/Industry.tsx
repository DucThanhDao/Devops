'use client';
import { Carousel } from 'react-bootstrap';
import { Testimonial } from '../services/landing-service';
import { FC, use } from 'react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { getPublicUrl } from '@/common/util/util';

const Industry = () => {
  const t = useTranslations('industries');
  const industries = [
    {
      href: '/portfolio?industries=Artificial%20Intelligent',
      label: t('artificialIntelligent'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/ai.png")}
          alt="Artificial Intelligence"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Blockchain',
      label: t('blockchain'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/blockchain.png")}
          alt="Blockchain"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Hospitality',
      label: t('hospitality'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/hospitality.png")}
          alt="Hospitality"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Productivity',
      label: t('productivity'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/productivity.png")}
          alt="Productivity"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Education',
      label: t('education'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/education.png")}
          alt="Education"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Healthcare',
      label: t('healthcare'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/healthcare.png")}
          alt="Healthcare"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Food%20%26%20Beverage',
      label: t('foodBeverage'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/food.png")}
          alt="Food & Beverage"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Real%20Estate',
      label: t('realEstate'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/realestate.png")}
          alt="Real Estate"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Travel',
      label: t('travel'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/travel.png")}
          alt="Travel"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Communication%20services',
      label: t('communicationServices'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/communication.png")}
          alt="Communication Services"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
    {
      href: '/portfolio?industries=Consumer%20services',
      label: t('consumerServices'),
      icon: (
        <img
          src={getPublicUrl("/assets/img/industries/consumer.png")}
          alt="Consumer Services"
          loading="lazy"
          width={'35%'}
          height={'auto'}
        />
      ),
    },
  ];
  return (
    <section className="py-8 industries-section">
      <div className="container text-center">
        <h2
          className="text-uppercase"
          style={{
            marginBottom: '2rem',
          }}
        >
          Tieu de
        </h2>
        <div className="grid-container">
          {industries.map((item, index) => (
            <a
              className="w-100 d-flex flex-column text-start ps-5 py-3"
              key={index}
              href={item.href}
            >
              <div className="w-100">{item.icon}</div>
              <p className="mt-2 text-black fs-4 fw-bold">
                {item.label} <i className="fs-6 fas fa-arrow-right ps-1"></i>
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Industry;
