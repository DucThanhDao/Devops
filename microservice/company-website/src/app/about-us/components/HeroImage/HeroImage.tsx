import { getPublicUrl } from '@/common/util/util';

const HeroImage = () => {
  return (
    <section className="hero-image pb-6 pb-md-0 ">
      <div className="container h-100">
        <div className="row gx-0 gx-md-6 gy-2 h-100">
          {/* IMAGE SECTION */}
          {/* <div className="image-container col-12 col-md-5 order-md-2">
            <img
              src={getPublicUrl('/assets/img/why-join-us.jpg')}
              alt="Why join us image"
              className="w-100 object-fit-cover"
              loading="eager"
            />
          </div> */}
          {/* TEXT SECTION */}
          {/* <div className="content-container col-12 order-2 text-center d-md-flex flex-md-column justify-content-md-center">
           */}
          <div className="content-container text-center p-8 d-flex flex-column align-items-center">
            <h1 className="text-center font-weight-bold text-lg-start display-2">
              It&apos;s always
              <span className="display-2 font-weight-bold"> Dayone!</span>
            </h1>
            <p className="text-center">
              We are a team of passionate creatives and seasoned tech experts, bringing years of dedicated experience to the creation of innovative tech products. We're always on Dayone Mode: moving fast, acting decisively, and relentlessly pursuing excellence in every build.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImage;
