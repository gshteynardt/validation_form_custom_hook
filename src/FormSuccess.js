import React from 'react';
import './Form.css';

export const FormSuccess = () => {
  return (
      <div className='form-content-right'>
        <h1 className='form__title-success'>We have received your request!</h1>
        <img className='form__img-2' src='img/img-3.svg' alt='success-image'/>
      </div>
  );
};
