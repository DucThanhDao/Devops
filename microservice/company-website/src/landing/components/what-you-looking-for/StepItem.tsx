import { getPublicUrl } from '@/common/util/util';

type StepItemProps = {
  title: string;
  description: string;
  icon: string;
};

const StepItem = ({ title, description, icon }: StepItemProps) => {
  return (
    <div className="step">
      <div className="icon">
        <img
          className="title-icon"
          src={getPublicUrl(`/assets/img/landing/${icon}.webp`)}
          alt={icon}
        />
      </div>
      <div className="w-100">
        <h5 className="text-lg-start text-center heading mb-0">{title}</h5>
        <p className="text-white mb-0 description">{description}</p>
      </div>
    </div>
  );
};

export default StepItem;
