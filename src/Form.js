import React, { useState } from 'react';
import { FormSignup } from "./FormSignup";
import { FormSuccess } from "./FormSuccess";

export const Form = () => {
  const [ isSubmitted, setIsSubmitted ] = useState(false);

  const submitForm = () => {
    setIsSubmitted(true);
  }

  return (
    <>
      <div className="form-container">
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.svg' alt='spaceship' />
        </div>

        {!isSubmitted
          ? <FormSignup submitForm={submitForm}/>
          : <FormSuccess/>
        }
      </div>
    </>

  );
};
