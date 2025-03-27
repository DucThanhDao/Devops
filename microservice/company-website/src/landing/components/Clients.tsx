import { FC } from 'react';
import Link from 'next/link';
import { Client } from '../services/landing-service';
import Portfolio from '../../app/portfolio/page';
import { useTranslations } from 'next-intl';

interface ClientsProps {
  clients: Client[];
}

const Clients: FC<ClientsProps> = ({ clients }) => {
  const t = useTranslations('client');
  return (
    <section id="clients" className="pt-6 pt-lg-8">
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-center">
            <h3 className="close-margin font-weight-bold">
              We Work Closely
              <br />
            </h3>
            <h1 className="text-primary font-weight-bold"> As Partners</h1>
            <br />
            <p
              className="description"
              style={{
                fontSize: 'clamp(1rem, 0.948rem + 0.197vw, 1.125rem)',
              }}
            >
              {t('description1')} <br />
              {t('description2')}
            </p>
            <br />
          </div>
          <div className="col-12 col-lg-7">
            <div className="row mx-2 justify-content-start">
              {clients.map((item: Client, index) => {
                return (
                  <div
                    key={index}
                    className="col-6 col-md-3 d-flex justify-content-center align-items-center my-0"
                  >
                    {item.companyLogo &&
                      (item.link ? (
                        <a href={item.link} target="blank">
                          <img
                            className="image-clients mw-100"
                            src={item.companyLogo}
                            alt="client"
                            loading="lazy"
                          />
                        </a>
                      ) : (
                        <img
                          className="image-clients mw-100"
                          src={item.companyLogo}
                          alt="client"
                          loading="lazy"
                        />
                      ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clients;
