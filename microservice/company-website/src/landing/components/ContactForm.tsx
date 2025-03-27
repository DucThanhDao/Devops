'use client';
import { submitContactForm } from '@/landing/services/crm-service';
import { useState } from 'react';
import { Spinner, Modal, Alert } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import Validation from './validation';
import { useTranslations } from 'next-intl';
import { set } from 'lodash';

declare global {
  interface Window {
    gtag: any;
  }
}
const ContactForm = () => {
  const t = useTranslations('contactForm');
  const [isSubmitting, setSubmitting] = useState(false);
  const [showThankYouCard, setShowThankYouCard] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    content: '',
  });
  const [data, setData] = useState({
    name: '',
    email: '',
    phone: '',
    content: '',
  });
  const isValidEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phone: any) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };
  const showToastMessage = (status: boolean, message: string) => {
    if (!status) {
      toast.error(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } /* else {
      toast.success(message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      }); 
    }*/
  };

  const handleOnSubmit = async () => {
    setSubmitting(true);
    if (!data.name.trim() || !data.email.trim() || !data.content.trim()) {
      showToastMessage(false, 'Please fill out required information in the form');

      setSubmitting(false);
      return;
    }
    if (!isValidEmail(data.email.trim())) {
      setSubmitting(false);
      return;
    }
    try {
      const dataResponse = await submitContactForm(data);

      showToastMessage(dataResponse.status, dataResponse.message);

      window.gtag('event', 'conversion', {
        send_to: 'AW-16639680583/qZS8CKqIzsEZEMfAtf49',
      });
      if (dataResponse.status) {
        setData({
          name: '',
          email: '',
          phone: '',
          content: '',
        });
      }
      setShowThankYouCard(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleOnChange = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let validationError = Validation(data, t);
    setErrors(validationError);
    if (validationError.name || validationError.email || validationError.content) {
      return;
    }
    handleOnSubmit();
  };

  const handleCloseModal = () => {
    setShowThankYouCard(false);
  };

  return (
    <section id="contact" className="position-relative pt-8">
      <div className="container sizing">
        <div className="row">
          <div className="col-lg-6 mx-auto text-center">
            {/* <h2 className="font-weight-bold">{t('contactSection.title')}</h2> */}
            <h2 className="font-weight-bold">Contact Us</h2>
            <p>Share your vision. Let's explore how we can help.</p>
            {/*             {showThankYouCard && (
              <Alert
                variant="success"
                onClose={() => setShowThankYouCard(false)}
                dismissible
              >
                Thank you for reaching out! Please check your email for further
                details. Please check your email for further details. Please check your email for further details.
              </Alert>
            )}*/}
          </div>
        </div>
        {showThankYouCard && (
          <div className="notifications-container ms-auto me-auto col-lg-6">
            <div className="success">
              <div className="flex">
                <div className="flex-shrink-0 mt-0">
                  <svg
                    className="succes-svg"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <div className="success-prompt-wrap">
                  <p className="success-prompt-heading mb-1">
                    Thank you for connecting with Dayone!
                  </p>
                  <div className="success-prompt-prompt">
                    <p className="mb-0">
                      We’ve sent an email from <b>success@dayoneteams.com</b> to begin your
                      conversation with our leadership team. <br />
                      Please check your email inbox (including junk/spam folder). <br />
                      We’re excited to continue our conversation there!
                    </p>
                  </div>
                </div>
                <div className="button-close" onClick={handleCloseModal}>
                  <svg
                    height="20"
                    viewBox="0 0 20 20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m15.8333 5.34166-1.175-1.175-4.6583 4.65834-4.65833-4.65834-1.175 1.175 4.65833 4.65834-4.65833 4.6583 1.175 1.175 4.65833-4.6583 4.6583 4.6583 1.175-1.175-4.6583-4.6583z"
                      fill="#2B641E"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="row mt-3">
          <div className="col-lg-10 mx-auto">
            <div className="card card-dicrection">
              <div className="row">
                <div className="col-lg-5 d-flex">
                  <div className="card-left">
                    <div className="card-body p-lg-5 position-relative">
                      <h3 className="text-white" style={{ fontSize: '2.1rem' }}>
                        {/* {t('contactInformation.heading')} */}
                        Let's Connect
                      </h3>
                      <p className="text-white text-lg mb-0 mb-lg-4">
                        {/* {t('contactInformation.subheading')} */}
                        Share your questions or project details, and we'll be in touch
                      </p>
                      <hr className="hr hr-blurry bg-white" />

                      <div className="ps-2 text-white">
                        <i className="fas fa-envelope text-sm fs-6" style={{ marginRight: 8 }}></i>
                        <span>contact@dayoneteams.com</span>
                      </div>
                      <div className="d-flex p-2 text-white">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            x="0px"
                            y="0px"
                            width="16"
                            viewBox="0,0,256,256"
                          >
                            <g
                              fill="#ffffff"
                              fillRule="nonzero"
                              stroke="none"
                              strokeWidth="1"
                              strokeLinecap="butt"
                              strokeLinejoin="miter"
                              strokeMiterlimit="10"
                              strokeDasharray=""
                              strokeDashoffset="0"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                            >
                              <g transform="scale(5.12,5.12)">
                                <path d="M25,2c-12.682,0 -23,10.318 -23,23c0,3.96 1.023,7.854 2.963,11.29l-2.926,10.44c-0.096,0.343 -0.003,0.711 0.245,0.966c0.191,0.197 0.451,0.304 0.718,0.304c0.08,0 0.161,-0.01 0.24,-0.029l10.896,-2.699c3.327,1.786 7.074,2.728 10.864,2.728c12.682,0 23,-10.318 23,-23c0,-12.682 -10.318,-23 -23,-23zM36.57,33.116c-0.492,1.362 -2.852,2.605 -3.986,2.772c-1.018,0.149 -2.306,0.213 -3.72,-0.231c-0.857,-0.27 -1.957,-0.628 -3.366,-1.229c-5.923,-2.526 -9.791,-8.415 -10.087,-8.804c-0.295,-0.389 -2.411,-3.161 -2.411,-6.03c0,-2.869 1.525,-4.28 2.067,-4.864c0.542,-0.584 1.181,-0.73 1.575,-0.73c0.394,0 0.787,0.005 1.132,0.021c0.363,0.018 0.85,-0.137 1.329,1.001c0.492,1.168 1.673,4.037 1.819,4.33c0.148,0.292 0.246,0.633 0.05,1.022c-0.196,0.389 -0.294,0.632 -0.59,0.973c-0.296,0.341 -0.62,0.76 -0.886,1.022c-0.296,0.291 -0.603,0.606 -0.259,1.19c0.344,0.584 1.529,2.493 3.285,4.039c2.255,1.986 4.158,2.602 4.748,2.894c0.59,0.292 0.935,0.243 1.279,-0.146c0.344,-0.39 1.476,-1.703 1.869,-2.286c0.393,-0.583 0.787,-0.487 1.329,-0.292c0.542,0.194 3.445,1.604 4.035,1.896c0.59,0.292 0.984,0.438 1.132,0.681c0.148,0.242 0.148,1.41 -0.344,2.771z"></path>
                              </g>
                            </g>
                          </svg>
                        </div>
                        <div className="ps-2">
                          <span>
                            (+84) 96 314 3713 - WhatsApp & Telegram
                            <br />
                            Hao Tang - Founder & CEO
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <form id="contact-form" method="post" autoComplete="off" onSubmit={handleSubmit}>
                    <ToastContainer />
                    <div className="card-body position-relative p-3">
                      <div className="row mt-4">
                        <div className="col-md-12">
                          <label htmlFor="name">{t('formFields.name')}</label>
                          <div className="mb-4">
                            <input
                              id="name"
                              className="form-control"
                              name="name"
                              aria-label={t('formFields.name')}
                              value={data.name || ''}
                              type="text"
                              onChange={handleOnChange}
                              placeholder={t('placeHolders.name')}
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                          </div>
                        </div>
                      </div>
                      <div>
                        <label htmlFor="email">{t('formFields.email')}</label>
                        <div className="mb-4">
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="form-control"
                            value={data.email || ''}
                            onChange={handleOnChange}
                            placeholder={t('placeHolders.name')}
                          />
                          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label htmlFor="phone">{t('formFields.phone')}</label>
                        <div className="mb-4">
                          <input
                            name="phone"
                            id="phone"
                            type="text"
                            className="form-control"
                            value={data.phone || ''}
                            placeholder={t('placeHolders.phone')}
                            onChange={(e) => {
                              const value = e.target.value;
                              if (/^\d*$/.test(value)) {
                                handleOnChange(e);
                              }
                            }}
                          />
                          {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
                        </div>
                      </div>
                      <div className="form-group mt-4 mb-3">
                        <label htmlFor="content">{t('formFields.content')}</label>
                        <textarea
                          id="content"
                          name="content"
                          className="form-control"
                          rows={4}
                          value={data.content}
                          onChange={handleOnChange}
                          placeholder={t('placeHolders.content')}
                        ></textarea>
                        {errors.content && <p style={{ color: 'red' }}>{errors.content}</p>}
                      </div>
                      <div className="text-end">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="btn fs-6 rounded px-4 py-2 btn-submit text-white my-0"
                          onClick={!isSubmitting ? handleSubmit : () => {}}
                        >
                          {t('submitButton.default')}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
