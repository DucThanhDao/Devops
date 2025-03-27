'use client';

import Link from 'next/link';
import { useTranslations } from 'use-intl';

const Contact = () => {
  const t = useTranslations('contactSection');
  return (
    <section id="contact" className="position-relative pt-8">
      <div className="container sizing">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            <h2 className="text-uppercase">{t('title')}</h2>
            <p className="text-lg">{t('description')}</p>
            <Link href="/contact-us">
              <span
                className={
                  'btn text-uppercase fs-6 rounded px-3 py-2 btn-primary text-white my-0 mt-4'
                }
              >
                {t('buttonText')}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
