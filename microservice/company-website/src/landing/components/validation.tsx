import { useTranslations } from 'next-intl';

type ValidationErrors = {
  name: string;
  email: string;
  phone: string;
  content: string;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  content: string;
};

export default function Validation(data: FormData, t: (key: string) => string): ValidationErrors {
  const errors: ValidationErrors = {
    name: '',
    email: '',
    phone: '',
    content: '',
  };

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (data.name === '') {
    errors.name = t('errorMessages.name');
  }
  if (data.email === '') {
    errors.email = t('errorMessages.email');
  } else if (!email_pattern.test(data.email)) {
    errors.email = "Email didn't match";
  }
  if (data.content === '') {
    errors.content = t('errorMessages.content');
  }

  return errors;
}
