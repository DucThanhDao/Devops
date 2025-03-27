'use client';
import { useState, useTransition } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useTranslations } from 'use-intl';

function ModalCV() {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);
  const t = useTranslations('modalCV');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <div className="btn-apply-job" onClick={handleShow}>
        {t('applyForThisJob')}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="model-cv-tittle">{t('applyYourCV')}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>{t('name')}</Form.Label>
              <Form.Control type="text" placeholder="Your name" autoFocus required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>{t('emailAddress')}</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Label>{t('phone')}</Form.Label>
              <Form.Control type="phone" placeholder="Your telephone..." />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput4" className="mb-3">
              <Form.Label>{t('chooseYourCVFile')}</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button type="submit">{t('applyNow')}</Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>

          
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalCV;
