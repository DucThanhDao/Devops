import { useTranslations } from 'next-intl';

import React from 'react';

const Title = () => {
  const t = useTranslations('technologies');

  return <h2 className="text-primary">Technologies</h2>;
};

export default Title;
