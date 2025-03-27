'use client';
import { FC, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04],
};

interface TechnologyLineProps {
  initDirection: number;
  technologies: Array<any>;
}

const TechnologyLine: FC<TechnologyLineProps> = ({ initDirection, technologies }) => {
  const [leftIndex, setLeftIndex] = useState(0);
  const [[imageCount, direction], setImageCount] = useState([1, 1]);
  const [sliderVariants, setSliderVariants] = useState({
    incoming: (direction: number) => ({
      x: direction > 0 ? '19.5%' : '-19.5%',
    }),
    active: { x: 0, scale: 1, opacity: 1 },
    exit: (direction: number) => ({
      x: direction > 0 ? '-19.5%' : '19.5%',
    }),
  });
  const [isDrag, setIsDrag] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);
  const swipeToImage = (swipeDirection: number) => {
    setImageCount([imageCount + swipeDirection, swipeDirection]);
  };

  const checkIntersections = (swipeDirection: number) => {
    const divElement = divRef.current;
    if (!divElement) return;
    const border = divElement.getBoundingClientRect();
    const liItems = divElement.querySelectorAll('li');

    liItems.forEach((item: HTMLLIElement) => {
      const itemRect = item.getBoundingClientRect();
      const intersectsLeft = itemRect.right > border.left && itemRect.left < border.left;

      if (intersectsLeft) {
        const liKey = parseInt(item.getAttribute('data-key') || '1');
        if (swipeDirection > 0) {
          if (border.width < 960) {
            setLeftIndex(liKey - 1);
          } else {
            setLeftIndex(liKey - 4);
          }
        } else if (swipeDirection < 0) {
          if (border.width < 960) {
            setLeftIndex(liKey - 2);
          } else {
            setLeftIndex(liKey - 5);
          }
        }
      }
    });
  };

  const setSliderVariantHandler = (coefficient: number) => {
    const divElement = divRef.current;
    let startPercent = 19.5;
    if (divElement) {
      const border = divElement.getBoundingClientRect();
      if (border.width < 960) {
        startPercent = Math.abs(coefficient) * 50 - 0.5;
      } else {
        startPercent = Math.abs(coefficient) * 20 - 0.5;
      }
    } else {
      startPercent = Math.abs(coefficient) * 20 - 0.5;
    }

    setSliderVariants({
      incoming: (direction: number) => ({
        x: direction > 0 ? `${startPercent}%` : `-${startPercent}%`,
      }),
      active: { x: 0, scale: 1, opacity: 1 },
      exit: (direction: number) => ({
        x: direction > 0 ? `-${startPercent}%` : `${startPercent}%`,
      }),
    });
  };

  const dragHandler = (dragInfo: PanInfo) => {
    setIsDrag(true);
    const draggedDistance = dragInfo.offset.x;
    if (draggedDistance > 0) {
      checkIntersections(-1);
    } else if (draggedDistance < 0) {
      checkIntersections(1);
    }
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    if (draggedDistance > 50) {
      setImageCount([wrap(0, technologies.length, leftIndex), -1]);
    } else if (draggedDistance < -50) {
      setImageCount([wrap(0, technologies.length, leftIndex), 1]);
    }
    setIsDrag(false);
    setSliderVariantHandler(1);
  };

  useEffect(() => {
    setSliderVariantHandler(leftIndex - imageCount);
  }, [leftIndex]);

  useEffect(() => {
    setSliderVariantHandler(1);
  }, [divRef.current?.getBoundingClientRect()?.width]);

  useEffect(() => {
    if (isDrag) return;
    const interval = setInterval(() => {
      swipeToImage(initDirection);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, [imageCount, isDrag]);

  return (
    <div className="technologies text-center">
      <div
        ref={divRef}
        className="overflow-hidden w-100"
        style={{
          height: '100px',
        }}
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.ul
            key={imageCount}
            custom={direction}
            variants={sliderVariants}
            initial="incoming"
            animate="active"
            exit="exit"
            transition={sliderTransition}
            className=" d-flex h-100 w-100  w-100"
            style={{
              marginLeft: '-100%',
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDrag={(_, dragInfo) => dragHandler(dragInfo)}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount)].id}-${imageCount}`}
              data-key={imageCount}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 1)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 1)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 1)].id}-${imageCount + 1}`}
              data-key={imageCount + 1}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 2)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 2)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 2)].id}-${imageCount + 2}`}
              data-key={imageCount + 2}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 3)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 3)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 3)].id}-${imageCount + 3}`}
              data-key={imageCount + 3}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 4)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 4)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 4)].id}-${imageCount + 4}`}
              data-key={imageCount + 4}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 5)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 5)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 5)].id}-${imageCount + 5}`}
              data-key={imageCount + 5}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 6)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 6)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 6)].id}-${imageCount + 6}`}
              data-key={imageCount + 6}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 7)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 7)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 7)].id}-${imageCount + 7}`}
              data-key={imageCount + 7}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 8)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 8)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 8)].id}-${imageCount + 8}`}
              data-key={imageCount + 8}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 9)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 9)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 9)].id}-${imageCount + 9}`}
              data-key={imageCount + 9}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 10)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 10)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 10)].id}-${imageCount + 10}`}
              data-key={imageCount + 10}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 11)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 11)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 11)].id}-${imageCount + 11}`}
              data-key={imageCount + 11}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 12)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 12)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 12)].id}-${imageCount + 12}`}
              data-key={imageCount + 12}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 13)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 13)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 13)].id}-${imageCount + 13}`}
              data-key={imageCount + 13}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 14)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 14)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 14)].id}-${imageCount + 14}`}
              data-key={imageCount + 14}
            ></motion.li>
            <motion.li
              style={{
                backgroundImage: `url(${
                  technologies[wrap(0, technologies.length, imageCount + 15)].src
                })`,
                backgroundSize: `${
                  technologies[wrap(0, technologies.length, imageCount + 15)].width
                }%, auto`,
              }}
              className="d-flex align-items-center justify-content-center"
              key={`${technologies[wrap(0, technologies.length, imageCount + 15)].id}-${imageCount + 15}`}
              data-key={imageCount + 15}
            ></motion.li>
          </motion.ul>
        </AnimatePresence>
      </div>
    </div>
  );
};
export default TechnologyLine;
