'use client';
import { useTranslations } from 'next-intl';
import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const spring = {
  type: 'tween',
  damping: 20,
  stiffness: 300,
};

export default function WorkingProcess({ workingProcessData }: any) {
  const t = useTranslations('howWeWork');
  const [workingProcesses, setWorkingProcesses] = useState([...workingProcessData]);
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const [selectedProcess, setSelectedProcess] = useState(workingProcessData[0]);
  const sectionRef = React.useRef<HTMLDivElement>(null);

  const handleStartHover = (process: any) => {
    setIsStartAnimation(false);
    setSelectedProcess(process);
  };

  const handleEndHover = () => {
    setIsStartAnimation(true);
    setSelectedProcess(workingProcesses[0]);
  };

  useEffect(() => {
    const currentSectionRef = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWorkingProcesses([...workingProcessData]);
            setSelectedProcess(workingProcessData[0]);
          }
          setIsStartAnimation(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (currentSectionRef) {
      observer.observe(currentSectionRef);
    }

    return () => {
      if (currentSectionRef) {
        observer.unobserve(currentSectionRef);
      }
    };
  }, [workingProcessData]);

  useEffect(() => {
    const handleMoveLastToFirst = () => {
      setWorkingProcesses((prev: any[]) => {
        let newArray = [];
        if (prev.length === 0) {
          newArray = prev;
        } else {
          const lastElement: any = prev.pop();
          prev.unshift(lastElement);
          newArray = prev;
        }
        setSelectedProcess(newArray[0]);
        return newArray;
      });
    };
    if (isStartAnimation) {
      const interval = setInterval(() => {
        handleMoveLastToFirst();
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [isStartAnimation]);

  return (
    <section className="container py-5 p-lg-5 mb-5" ref={sectionRef}>
      <div className="col-lg-12 mx-auto text-center mb-5">
        <p
          className="fw-bolder h2"
          style={{
            color: '#011A58',
          }}
        >
          {t('workingProcessSection.heading')}
        </p>
        <p className="fs-5">{t('workingProcessSection.subheading')}</p>
      </div>
      <div
        className="d-flex flex-lg-row flex-column-reverse justify-content-between py-4 px-lg-5"
        style={{
          background: 'linear-gradient(90deg, #007ae7, #38b6ff)',
          borderRadius: '20px',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            className={`col-lg-6 align-self-center pe-lg-5 px-3 px-lg-0 ${selectedProcess.title}`}
            key={selectedProcess.id}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <p className="fw-bolder h3 text-white">{selectedProcess.title}</p>
            <p className="fs-6  text-white">{selectedProcess.description}</p>
          </motion.div>
        </AnimatePresence>
        <div className="col-lg-6 position-relative">
          <div className="w-lg-60 w-100 ratio ratio-1x1 ms-auto working-process">
            <ul className="list-unstyled h-100">
              {workingProcesses.map((process: any, index: number) => (
                <motion.li
                  key={process.id}
                  className={`rounded-circle position-absolute overflow-hidden step-${index}`}
                  layout
                  transition={spring}
                  onMouseEnter={() => handleStartHover(process)}
                  onMouseLeave={handleEndHover}
                  animate={{
                    scale: process.id === selectedProcess.id ? 2 : 1.3,
                  }}
                >
                  <div className="w-100 h-100 position-relative">
                    <img
                      src={process.image}
                      className="h-100 w-100 object-fit-cover"
                      alt="Working process image"
                    />
                    <div
                      className="position-absolute h-100 w-100 z-5 top-0"
                      style={{
                        opacity: process.id === selectedProcess.id ? '0' : '0.5',
                        background: '#000000',
                      }}
                    ></div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
