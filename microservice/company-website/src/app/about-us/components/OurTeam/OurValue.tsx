import OurValueItem from './OurValueItem';

export type ValueContent = {
  image: string;
  title: string;
  description: string;
};
const valueContent: Array<ValueContent> = [
  {
    image: '/assets/img/about-us/IntegrityIcon.png',
    title: 'Integrity',
    description:
      'Trust is the foundation of every partnership. We uphold honesty, transparency, and the highest professional standards to deliver quality solutions.',
  },
  {
    image: '/assets/img/about-us/CollaborationIcon.png',
    title: 'Collaboration',
    description:
      "We don’t just deliver services — we build lasting partnerships. Aligning with our clients' goals, we provide expert guidance to drive long-term success.",
  },
  {
    image: '/assets/img/about-us/OwnershipIcon.png',
    title: 'Ownership',
    description:
      'We take full responsibility for our work, proactively solving problems andoffering strategic insights to help clients refine their products and processes.',
  },
  {
    image: '/assets/img/about-us/ServiceExcellenceIcon.png',
    title: 'Execution Excellence',
    description:
      "Our clients' success is our top priority. Our clients’ success comes first. We deliver customer-focused solutions with dedication, impact, and a commitment to exceeding expectations.",
  },
];

const OurValue = () => {
  return (
    <div className="container px-md-5">
      <div className="row gx-md-5 gy-5 mt-n8 mb-6">
        {valueContent.map((value) => (
          <div className="col-12 col-md-6 col-xl-3 px-5 px-md-3">
            <OurValueItem image={value.image} title={value.title} description={value.description} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurValue;
