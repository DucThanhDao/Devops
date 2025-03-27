'use client';
import { formatNameTitleToSlug } from '@/common/util/util';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

type ViewMoreButtonProps = {
  description: string;
  name: string;
  title: string;
};

const ViewMoreButton = ({ description, name, title }: ViewMoreButtonProps) => {
  const router = useRouter();

  useEffect(() => {
    const scrollY = sessionStorage.getItem('scrollPosition');
    if (scrollY) {
      window.scrollTo(0, parseInt(scrollY, 10));
      sessionStorage.removeItem('scrollPosition');
    }
  }, []);

  const handleNavigate = () => {
    sessionStorage.setItem('scrollPosition', String(window.scrollY));
    let url = `/about-us/`;
    if (name && title) {
      url += `${formatNameTitleToSlug(name, title)}`;
    }
    router.push(url);
  };

  return (
    <>
      {description && (
        <div className='view-more-button-container'>
          <button onClick={handleNavigate} className='view-more-button'>
            <small>View more</small>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default ViewMoreButton;
