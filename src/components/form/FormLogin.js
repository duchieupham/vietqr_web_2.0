import React from 'react';

import { useForm } from 'react-hook-form';
import styles from '~styles/Form.module.css';
import { message } from 'antd';
import { useTranslations } from 'next-intl';
import { ButtonGradient } from '../button';

function FormLogin() {
  const t = useTranslations();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className={styles.form} // form style
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* form header */}
      <div className={styles.form__header}>
        <h1 className={styles.form__header__text}>{t('loginForm')}</h1>
      </div>
      <div className={styles.form__group}>
        <input
          {...register('phoneNumber', {
            required: 'Phone number is required',
            pattern: {
              value: /(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g, // phone & mobile number
              message: 'Invalid phone number',
            },
          })}
          placeholder={t('phoneNumber')}
          type="phone"
          className={styles.form__control}
          id="phoneNumber"
          required
        />
      </div>
      <div className={styles.form__group}>
        <input
          {...register('password', {
            required: 'Password is required',
            minLength: 6,
          })}
          type="password"
          className={styles.form__control}
          id="password"
          placeholder={t('password')}
          autoComplete={() => {
            handleSubmit();
          }}
        />
      </div>
      <ButtonGradient type="submit" className="btn btn-primary">
        Login
      </ButtonGradient>
    </form>
  );
}

export default FormLogin;
