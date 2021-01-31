import React from 'react';
import { useForm } from './useForm.js';
import { validateInfo } from './validateInfo.js';
import './Form.css';

export const FormSignup = ({submitForm}) => {
  const { handleChange, handleSubmit, values, errors } = useForm(validateInfo, submitForm);

  return (
    <div className="form-content-right">
      <form
        className={'form'}
        onSubmit={handleSubmit}
        noValidate
      >
        <h1 className="form__title">
          Get started with us today!
          Create your account by filling out create information below.
        </h1>
        <div className="form__inputs">
          <label htmlFor="username" className="form__label">
            Username
          </label>
          <input
            id={'username'}
            type="text"
            name='username'
            className="input"
            placeholder={'Enter your name'}
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <span className={'input__error'}>{errors.username}</span>}
        </div>

        <div className="form__inputs">
          <label htmlFor="email" className="form__label">
            Email
          </label>
          <input
            id={'email'}
            type="email"
            name='email'
            className="input"
            placeholder={'Enter your email'}
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <span className={'input__error'}>{errors.email}</span>}
        </div>

        <div className="form__inputs">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input
            id={'password'}
            type="password"
            name='password'
            className="input"
            placeholder={'Enter your password'}
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <span className={'input__error'}>{errors.password}</span>}
        </div>

        <div className="form__inputs">
          <label htmlFor="password2" className="form__label">
            Confirm Password
          </label>
          <input
            id={'password2'}
            type="password"
            name='password2'
            className="input"
            placeholder={'Confirm password'}
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <span className={'input__error'}>{errors.password2}</span>}
        </div>

        <button
          className="form__btn"
          type={'submit'}
        >
        Sign up
        </button>
        <span className='form__login'>
          Already have an account? Login&nbsp;
          <a href={'#'}>here</a>
        </span>
      </form>
    </div>
  );
};
