import React from 'react';
import s from './Form.module.scss';

import { validator } from '../handlers/validator';

const Form = () => {
  return (
    <div className={s.container}>
        <form>
            <div className={s.ibox}>
                <input type="text" placeholder='Your name'/>
                <span>Name</span>
            </div>

            <div className={s.ibox}>
                <input type="email" placeholder='example@example.com'/>
                <span>Email</span>
            </div>

            <div className={s.ibox}>
                <input type="password" placeholder='A good password'/>
                <span>Password</span>
            </div>

            <button type='submit' className={s.btn}>Register</button>
        </form>
    </div>
  )
}

export default Form;