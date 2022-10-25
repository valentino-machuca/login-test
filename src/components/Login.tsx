import React from 'react';
import s from './Login.module.scss';

import background from '../assets/background.gif';
import google from '../assets/google.png';

import Form from './Form';

const Login = () => {
  return (
    <div className={s.container}>
        <div className={s.contform}>
          <div className={s.title}>
            <h4>Create an account</h4>
            <p>Sign up to enjoy the best pixel art.</p>
          </div>
          <Form />
          <div className={s.google}>
            <img src={google} alt="google" className={s.googleico}/>
            <p>Sign up with Google</p>
          </div>
        </div>
        <div className={s.background}>
          <div className={s.cover}>
              <span>Pixel</span>
              <h4>Place</h4>
          </div>
          <img src={background} alt="background" />
        </div>
    </div>
  )
}

export default Login