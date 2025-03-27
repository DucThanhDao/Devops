'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

interface FilterProps {
  onFilterChange: (filter: string) => void;
}

const Filter: React.FC<FilterProps> = ({ onFilterChange }) => {
  const searchParams = useSearchParams();
  const initialIndustry = searchParams.get('industries') || 'All';
  const [category, setCategory] = useState(initialIndustry);
  const containerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const t = useTranslations('filter');

  const industries = [
    'All',
    'Artificial Intelligent',
    'Blockchain',
    'Hospitality',
    'Education',
    'Healthcare',
    'Food & Beverage',
    'Digital Marketing',
    'Real Estate',
    'Communication services',
    'Consumer services',
    'Travel',
    'Productivity',
  ];

  useEffect(() => {
    const categoryParam = searchParams.get('industries') || 'All';
    if (categoryParam) {
      setCategory(categoryParam);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft + clientWidth < scrollWidth);

        const children = containerRef.current.children;
        for (let i = 0; i < children.length; i++) {
          const child = children[i] as HTMLElement;
          const childRect = child.getBoundingClientRect();
          const containerRect = containerRef.current.getBoundingClientRect();

          let opacity = 1;
          if (childRect.left < containerRect.left) {
            const overlap = containerRect.left - childRect.left;
            opacity = Math.max(0.2, 1 - overlap / 30);
          } else if (childRect.right > containerRect.right) {
            const overlap = childRect.right - containerRect.right;
            opacity = Math.max(0.2, 1 - overlap / 30);
          }

          child.style.opacity = `${opacity}`;
        }
      }
    };

    const checkScreenWidth = () => {
      if (containerRef.current) {
        const { scrollWidth, clientWidth } = containerRef.current;
        setShowRightArrow(clientWidth < scrollWidth);
      }
    };

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const activeItem = Array.from(containerRef.current.children).find(
        (child) => (child as HTMLElement).getAttribute('data-category') === category
      );
      if (activeItem) {
        const activeItemRect = (activeItem as HTMLElement).getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const offset = activeItemRect.left - containerRect.left;
        containerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  }, [category]);

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, item: string) => {
    event.preventDefault();
    setCategory(item);
    onFilterChange(item);
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="filter-container mb-4 mt-4">
      {category && (
        <div className="icon-container-wrapper">
          {showLeftArrow && (
            <i className="scroll-button left fas fa-chevron-left" onClick={scrollLeft}></i>
          )}
          <div className="icon-container" ref={containerRef}>
            {industries.map((item) => (
              <button
                key={item}
                className={`icon-item text-md text-dark text-nowrap ${
                  category === item ? 'active' : ''
                }`}
                onClick={(event) => handleButtonClick(event, item)}
                data-category={item}
              >
                {t(item)}
              </button>
            ))}
          </div>
          {showRightArrow && (
            <i className="scroll-button right fas fa-chevron-right" onClick={scrollRight}></i>
          )}
        </div>
      )}
    </div>
  );
};

export default Filter;
