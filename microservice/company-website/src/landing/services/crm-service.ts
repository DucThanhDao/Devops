interface ContactForm {
  email: string;
  content: string;
  phone: string;
  name: string;
}
const CMS_API_URL = process.env.NEXT_PUBLIC_STRAPI_CMS_API + '/api/crm';
export const submitContactForm = async (contactForm: ContactForm) => {
  const rawData = await fetch(CMS_API_URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(contactForm),
  });
  const data = await rawData.json();
  return data;
};
