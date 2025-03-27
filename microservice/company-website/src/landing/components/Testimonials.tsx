'use client';
import { Testimonial } from '../services/landing-service';
import { FC } from 'react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useState } from 'react';
import { motion, PanInfo } from 'framer-motion';
import { getPublicUrl } from '@/common/util/util';
interface TestimonialProps {
  testimonials: Testimonial[];
  titleIsShown: boolean;
}

const spring = {
  type: 'tween',
  damping: 20,
  stiffness: 300,
};
const order = ['Rashied', 'Quinton', 'Leo', 'Ilias', 'Cuong'];
const compayInfo = [
  {
    name: 'Rashied',
    companyName: 'Nanaya',
    companyType: 'Predicting Service',
  },
  {
    name: 'Quinton',
    companyName: 'DBD',
    companyType: 'Business Company',
  },
  {
    name: 'Cuong',
    companyName: 'VinHMS',
    companyType: 'Management Business',
  },
  {
    name: 'Ilias',
    companyName: 'KoolCool App',
    companyType: 'F&B Service',
  },
  {
    name: 'Leo',
    companyName: 'Link Brokerages',
    companyType: 'Estate Company',
  },
];

const Testimonials: FC<TestimonialProps> = ({ testimonials, titleIsShown }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [orderedTestimonials, setOrderedTestimonials] = useState<Array<Testimonial>>([]);
  const [isStartAnimation, setIsStartAnimation] = useState(false);
  const t = useTranslations('testimonials');

  const handleMoveLastToFirst = () => {
    setOrderedTestimonials((prev: any[]) => {
      if (prev.length === 0) {
        return prev;
      } else {
        const newArray = [...prev];
        const lastElement: any = newArray.pop();
        if (lastElement) {
          newArray.unshift(lastElement);
        }
        return newArray;
      }
    });
  };

  const handleMoveFirstToLast = () => {
    setOrderedTestimonials((prev) => {
      if (prev.length === 0) return prev;

      const newArray = [...prev];
      const firstElement = newArray.shift();
      if (firstElement) {
        newArray.push(firstElement);
      }
      return newArray;
    });
  };

  const dragEndHandler = (dragInfo: PanInfo) => {
    const draggedDistance = dragInfo.offset.x;
    if (draggedDistance > 50) {
      handleMoveLastToFirst();
    } else if (draggedDistance < -50) {
      handleMoveFirstToLast();
    }
    setIsDragging(false);
  };

  const updateDraggableState = () => {
    setIsDraggable(window.innerWidth < 992);
  };

  useEffect(() => {
    const reorderData = (clients: Testimonial[], order: string[]) => {
      return clients.sort((a, b) => {
        const indexA = order.findIndex((name) => a.clientName.includes(name)) ?? Infinity;
        const indexB = order.findIndex((name) => b.clientName.includes(name)) ?? Infinity;
        return indexA - indexB;
      });
    };

    const moveLastTwoToFirst = (arr: Testimonial[]) => {
      if (arr.length < 2) return arr;
      const lastTwo = arr.slice(-2);
      const remaining = arr.slice(0, -2);
      return [...lastTwo, ...remaining];
    };

    const sortedClients = reorderData(testimonials, order);

    const indexedClients = sortedClients.map((client, index) => ({
      ...client,
      index,
    }));

    const reorderedWithLastTwoFirst = moveLastTwoToFirst(indexedClients);

    setOrderedTestimonials(reorderedWithLastTwoFirst);
  }, [testimonials]);

  useEffect(() => {
    updateDraggableState();

    window.addEventListener('resize', updateDraggableState);

    return () => {
      window.removeEventListener('resize', updateDraggableState);
    };
  }, []);

  useEffect(() => {
    if (isDragging || !isStartAnimation) return;
    const interval = setInterval(() => {
      handleMoveFirstToLast();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [isDragging, isStartAnimation]);

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
      { threshold: 0.5 }
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

  return (
    <section id="testimonials" className="new-testimonials pt-6" ref={sectionRef}>
      <div className="container">
        {titleIsShown && (
          <h2
            style={{ marginBottom: '2rem', paddingLeft: 40, paddingRight: 40 }}
            className="text-center"
          >
            {/* {t('description')} */}
            What our clients say
          </h2>
        )}
        <div className="w-100 mt-lg-5 testimonial-slider">
          <motion.ul
            className="d-flex h-100 px-0"
            drag={isDraggable ? 'x' : false}
            dragConstraints={isDraggable ? { left: 0, right: 0 } : undefined}
            onDrag={() => setIsDragging(true)}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          >
            {orderedTestimonials.map((item: Testimonial, index: number) => (
              <motion.li
                layout
                transition={spring}
                animate={{
                  scale: index == 2 ? 1 : 0.8,
                }}
                style={{
                  opacity:
                    index == 0
                      ? '0'
                      : index == 1
                        ? '0.8'
                        : index == 2
                          ? '1'
                          : index == 3
                            ? '0.8'
                            : '0',
                }}
                className={`d-flex align-items-center justify-content-center `}
                key={item.clientName}
              >
                <div
                  className="w-100 d-flex flex-column card-content"
                  onMouseEnter={() => setIsDragging(true)}
                  onMouseLeave={() => setIsDragging(false)}
                >
                  <div className="card-border"></div>
                  <div className="text-end company-logo d-flex flex-row justify-content-end align-items-end">
                    {item?.clientName && item?.companyType && (
                      <div className="h-100 pe-3 d-flex flex-column justify-content-between align-items-end">
                        <p className="company-name">{item.companyName}</p>
                        <p className="comapany-type">{item.companyType}</p>
                      </div>
                    )}
                    <div className="company-logo-image">
                      {item.companyLogo && (
                        <img src={item.companyLogo} alt="client company logo" loading="lazy" />
                      )}
                    </div>
                  </div>
                  <img
                    className="top-main-content"
                    src={getPublicUrl('/assets/img/top-main-content.svg')}
                    // loading="lazy"
                    alt="top-main-content"
                  />
                  <div className="main-content w-100 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between align-items-end">
                      <div className="position-relative">
                        <div className="client-avatar">
                          {item.clientAvatar && (
                            <img src={item.clientAvatar} alt="testimonials-client" loading="lazy" />
                          )}
                        </div>
                        {/* <img
                          className="client-rating"
                          src="/assets/img/stars.webp"
                          alt="stars"
                        /> */}
                      </div>
                      {/* <span className="text-uppercase testimonial-text text-end">
                        CLIENT TESTIMONIAL
                      </span> */}
                    </div>
                    <p className="text-white client-comment my-2">{`"${item.comment}"`}</p>
                    <p className="text-end mb-0 fw-bolder text-white client-name">
                      {item.clientName}
                    </p>
                    <p className="text-end mb-0 text-white client-role">{item.clientRole}</p>
                  </div>
                  {/* <img
                    className="bottom-main-content"
                    src="/assets/img/bottom-main-content.webp"
                    alt="bottom-main-content"
                  /> */}
                </div>
              </motion.li>
            ))}
          </motion.ul>
          <div className="left-layer">
            <button onClick={handleMoveLastToFirst} className="bg-transparent border-0 left-arrow">
              <img src={getPublicUrl('/assets/img/angle-left.svg')} alt="arrow-left" />
            </button>
          </div>
          <div className="right-layer">
            <button onClick={handleMoveFirstToLast} className="bg-transparent border-0 right-arrow">
              <img src={getPublicUrl('/assets/img/angle-right.svg')} alt="arrow-left" />
            </button>
          </div>
        </div>
        <div className="dot-group">
          {[...Array(orderedTestimonials.length)].map((item: number, index: number) => (
            <div
              className={orderedTestimonials[2].index == index ? 'active-dot' : 'dot'}
              key={item}
            ></div>
          ))}
        </div>

        <>
          {/* <img
          className="testimonials-line"
          src="/assets/img/line.svg"
          alt="testimonials-line"
          loading="lazy"
        />
        <img
          className="testimonials-snow w-3"
          src="/assets/img/technology/snow1.png"
          alt="snow"
          loading="lazy"
        />
        <img
          className="testimonials-ellipse w-3"
          src="/assets/img/Ellipse.png"
          alt="ellipse"
          loading="lazy"
        />
        <img
          className="testimonials-ellipse testimonials-ellipse--icon w-3"
          src="/assets/img/Ellipse1.png"
          alt="ellipse"
          loading="lazy"
        />
        <div className="container d-flex justify-content-center">
          <Carousel data-bs-theme="dark" slide={false} interval={null}>
            {sortedClients.map((item: Testimonial, index) => (
              <Carousel.Item className="feedbacks" key={index}>
                <Carousel.Caption className="row text-start">
                  <div className="col-md-7 d-flex flex-wrap flex-column">
                    <h2>
                      <i className="fas fa-quote-left testimonials-icon mx-3" />
                      <span>{item.tittle}</span>
                    </h2>
                    <p className="testimonials-text pl-md-4 px-lg-4">
                      {item.comment}
                    </p>
                    <div className="testimonials-client d-sm-flex flex-column align-items-center d-md-block">
                      <img
                        className="ml-md-5 testimonials-client-img"
                        alt="testimonials-client"
                        src={item.clientAvatar}
                        loading="lazy"
                      ></img>
                      <div className="testimonials-info ml-md-5 text-center text-md-left">
                        <h3>{item.clientName}</h3>
                        <p>{item.clientRole}</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5 d-xs-none flex justify-content-center align-items-center">
                    <img
                      alt="testimonials-client"
                      src={item.companyLogo}
                      loading="lazy"
                    />
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div> */}
        </>
      </div>
    </section>
  );
};
export default Testimonials;
