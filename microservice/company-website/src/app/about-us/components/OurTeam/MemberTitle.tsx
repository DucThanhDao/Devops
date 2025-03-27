import { Employee } from '@/landing/services/profile-service';
import { ReactElement } from 'react';
import ViewMoreButton from './ViewMoreButton';

const formatNameToSlug = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, '-');
};

const formatSubtitle = (subtitle: string): ReactElement => {
  const parts = subtitle.split('-');
  if (parts.length === 1)
    return <p style={{ fontSize: '0.875rem', color: '#000', fontWeight: 500 }}>{subtitle}</p>;
  return (
    <p className="mt-2" style={{ fontSize: '0.875rem', color: '#000', fontWeight: 500 }}>
      <b>{parts[0]}</b>
      <br />
      {parts[1]}
    </p>
  );
};

const MemberTitle = ({ ...props }: Employee) => {
  const slug = formatNameToSlug(props.name);

  return (
    <div className="py-3 px-4 card-body d-flex flex-column justify-content-between">
      {/* NAME SECTION */}
      <div className="d-flex align-items-center gap-2">
        <h6 className="mb-0" style={{ fontSize: '1.1875rem', color: '#222222', fontWeight: 700 }}>
          {props.name}
        </h6>

        {/* SOCIAL LINKS */}
        {props.linkedin && (
          <a href={props.linkedin} target="_blank">
            <i className="fab fa-linkedin" style={{ fontSize: '1.125rem' }}></i>
          </a>
        )}
        {props.github && (
          <a href={props.github} target="_blank">
            <i className="fab fa-github" style={{ fontSize: '1.125rem', color: '#15191F' }}></i>
          </a>
        )}
      </div>
      {/* TITLE */}
      <div className="text-primary mt-1 mb-0 font-weight-bold">
        <small>{props.title}</small>
      </div>

      {/* SUBTITLE */}
      {props.subtitle && formatSubtitle(props.subtitle)}

      {/* VIEW MORE */}
      <ViewMoreButton description={props.description} name={props.name} title={props.title} />
    </div>
  );
};

export default MemberTitle;
