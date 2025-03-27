'use client';
import { getPublicUrl } from '@/common/util/util';
import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

export default function GuaranteeSuccess() {
  const t = useTranslations('howWeWork');
  useEffect(() => {
    // Adjust video playback speeds
    const setPlaybackSpeed = (selector: string, speed: number) => {
      const videos = document.querySelectorAll<HTMLVideoElement>(selector);
      if (videos) {
        videos.forEach((video) => {
          video.playbackRate = speed;
        });
      }
    };

    setPlaybackSpeed('.speed-20', 2);
    setPlaybackSpeed('.speed-15', 1.5);
  }, []);

  return (
    <section className="p-xl-6 p-3 container">
      <h2 className="fw-bolder text-center text-lg-start mb-5">{t('guaranteeSection.heading')}</h2>
      <div className="row">
        <div className="col-lg-4 d-lg-flex align-items-center d-none">
          <div className="w-100 ratio ratio-1x1 rounded-circle overflow-hidden guarantee-shadow">
            <img
              src={getPublicUrl('/assets/img/landing/image-1.webp')}
              alt="guarantee picutre"
              className="w-100 object-fit-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="row my-2 ms-lg-4 me-lg-5">
            <div className="guarantee-icon mx-auto mb-3">
              <video className="speed-15" autoPlay loop muted playsInline>
                <source
                  src="/assets/img/how-we-work/video/customer-understanding.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg justify-content-center d-flex flex-column text-start">
              <p
                className="text-black text-lg-start text-center font-weight-bold mb-0"
                style={{
                  fontSize: 'clamp(1rem, 0.948rem + 0.5vw, 1.5rem)',
                }}
              >
                {t('guaranteeSection.step1.title')}
              </p>
              <p className="guarantee-description">{t('guaranteeSection.step1.description')}</p>
            </div>
          </div>
          <div className="row mb-2 ms-lg-7 me-lg-2">
            <div className="guarantee-icon mx-auto mb-3">
              <video className="speed-20" autoPlay loop muted playsInline>
                <source src="/assets/img/how-we-work/video/international.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg justify-content-center d-flex flex-column text-start">
              <p
                className="text-black text-lg-start text-center font-weight-bold mb-0"
                style={{
                  fontSize: 'clamp(1rem, 0.948rem + 0.5vw, 1.5rem)',
                }}
              >
                {t('guaranteeSection.step2.title')}
              </p>
              <p className="guarantee-description">{t('guaranteeSection.step2.description')}</p>
            </div>
          </div>
          <div className="row mb-2 ms-lg-9">
            <div className="guarantee-icon mx-auto mb-3">
              <video autoPlay loop muted playsInline>
                <source src="/assets/img/how-we-work/video/friendship.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg justify-content-center d-flex flex-column text-start">
              <p
                className="text-black text-lg-start text-center font-weight-bold mb-0"
                style={{
                  fontSize: 'clamp(1rem, 0.948rem + 0.5vw, 1.5rem)',
                }}
              >
                {t('guaranteeSection.step3.title')}
              </p>
              <p className="guarantee-description">{t('guaranteeSection.step3.description')}</p>
            </div>
          </div>
          <div className="row mb-2 ms-lg-7 me-lg-2">
            <div className="guarantee-icon mx-auto mb-3">
              <video className="speed-20" autoPlay loop muted playsInline>
                <source
                  src={getPublicUrl('/assets/img/how-we-work/video/collaborate.mp4')}
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-lg justify-content-center d-flex flex-column text-start">
              <p
                className="text-black text-lg-start text-center font-weight-bold mb-0"
                style={{
                  fontSize: 'clamp(1rem, 0.948rem + 0.5vw, 1.5rem)',
                }}
              >
                {t('guaranteeSection.step4.title')}
              </p>
              <p className="guarantee-description">{t('guaranteeSection.step4.description')}</p>
            </div>
          </div>
          <div className="row mb-2 ms-lg-4 me-lg-5">
            <div className="guarantee-icon mx-auto mb-3">
              <video className="speed-20" autoPlay loop muted playsInline>
                <source src="/assets/img/how-we-work/video/midnight.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-lg justify-content-center d-flex flex-column text-start">
              <p
                className="text-black text-lg-start text-center font-weight-bold mb-0"
                style={{
                  fontSize: 'clamp(1rem, 0.948rem + 0.5vw, 1.5rem)',
                }}
              >
                {t('guaranteeSection.step5.title')}
              </p>
              <p className="guarantee-description">{t('guaranteeSection.step5.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
