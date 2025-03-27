import { getRequestConfig } from 'next-intl/server';
import * as process from 'node:process';

export default getRequestConfig(async () => {
  const locale = process.env.DEFAULT_LOCALE;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
