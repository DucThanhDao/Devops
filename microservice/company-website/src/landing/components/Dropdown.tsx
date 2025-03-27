import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { getPublicUrl } from '@/common/util/util';

interface DropdownProps {
  handleNavItemClick: () => void;
  type: 'industries' | 'services';
}

const Dropdown: React.FC<DropdownProps> = ({ handleNavItemClick, type }) => {
  const t = useTranslations('dropdown');
  const industriesColumns = [
    [
      {
        href: '/portfolio?industries=Artificial%20Intelligent',
        label: t('artificialIntelligent'),
      },
      { href: '/portfolio?industries=Blockchain', label: t('blockchain') },
      { href: '/portfolio?industries=Hospitality', label: t('hospitality') },
      {
        href: '/portfolio?industries=Productivity',
        label: t('productivity'),
      },
    ],
    [
      { href: '/portfolio?industries=Education', label: t('education') },
      { href: '/portfolio?industries=Healthcare', label: t('healthcare') },
      {
        href: '/portfolio?industries=Food%20%26%20Beverage',
        label: t('foodBeverage'),
      },
      { href: '/portfolio?industries=Real%20Estate', label: t('realEstate') },
    ],
    [
      { href: '/portfolio?industries=Travel', label: t('travel') },
      {
        href: '/portfolio?industries=Communication%20services',
        label: t('communicationServices'),
      },
      {
        href: '/portfolio?industries=Consumer%20services',
        label: t('consumerServices'),
      },
    ],
  ];

  const servicesColumns = [
    [
      { href: '/services/web-development', label: t('webDevelopment') },
      { href: '/services/app-development', label: t('appDevelopment') },
      {
        href: '/services/digital-transformation',
        label: t('digitalTransformation'),
      },
    ],
    [
      { href: '/services/cyber-security', label: t('cyberSecurity') },
      { href: '/services/cloud-computing', label: t('cloudComputing') },
      { href: '/services/product-strategy', label: t('productStrategy') },
    ],
  ];

  const columns = type === 'industries' ? industriesColumns : servicesColumns;
  const containerClass =
    type === 'industries' ? 'dropdown-container' : 'dropdown-container-services';
  const tag = type === 'industries' ? t('industries') : t('ourServices');

  return (
    <div className={`${containerClass}`}>
      <div
        className="d-flex flex-row"
        style={{
          // backgroundColor: "#fcfcfc",
          width: 'fit-content',
        }}
      >
        <div
          className="d-none d-lg-block border border-right-1"
          style={{
            // backgroundColor: "#fcfcfc",
            width: '200px',
          }}
        >
          <img
            src={getPublicUrl('/assets/img/industries.png')}
            alt="report cover"
            className={`mt-3 mb-3`}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover',
            }}
          />
        </div>
        <div className="d-flex flex-column">
          <h5
            className={`d-none d-lg-block border-dark pb-2 ms-5 fs-3`}
            style={{
              marginTop: '30px',
              width: 'fit-content',
            }}
          >
            {tag}
          </h5>
          <div className="d-flex flex-lg-row flex-column">
            {columns.map((column, columnIndex) => (
              <div className="dropdown-column" key={columnIndex}>
                {column.map((item, itemIndex) => (
                  <div className="dropdown-item" key={itemIndex}>
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="dropdown-link ps-lg-5 pb-lg-2"
                      onClick={handleNavItemClick}
                    >
                      {item.label}
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
