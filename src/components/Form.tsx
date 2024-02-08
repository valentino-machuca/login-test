import React, { useState } from 'react';
import s from './Form.module.scss';

import PasswordStrengthBar from 'react-password-strength-bar';

//types
import { user, errors } from '../types/types';

//validators
import { validator } from '../handlers/validator';

const Form = ({setRegister} : any) => {

    const [data, setData] = useState<user>({ //form state
        name: '',
        email: '',
        password: '',
    })

    const [status, setStatus] = useState<errors>({ //errores
        name: 'Waiting',
        email: 'Waiting',
    })

    const [score, setScore] = useState<number>(0) //password score

    //setea el estado del formulario
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>): void => {
        setStatus({
            ...status,
            [event.target.name] : validator(event.target.name, event.target.value),
        })

        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    }

    //Setea el stado del componente padre, para cambiar lo que se ve en pantalla
    const handleSubmit = (event : React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        setRegister(false);
    }

  return (
    <div className={s.container}>
        <form onSubmit={handleSubmit}>
            <div className={s.ibox}>
                <p className={status.name === 'Waiting' ? undefined : status.name === 'Required' ? s.required : status.name === 'Nice name' ? s.ok : s.error}>{status.name}</p>

                <input type="text" placeholder='Your name' name='name' onChange={e => handleChange(e)}/>

                <span>Full Name</span>
            </div>

            <div className={s.ibox}>
                <p className={status.email === 'Waiting' ? undefined :status.email === 'Required' ? s.required : status.email === 'Ok, looks good' ? s.ok : s.error}>{status.email}</p>

                <input type="email" placeholder='example@example.com' name='email' onChange={e => handleChange(e)}/>

                <span>Email</span>
            </div>

            <div className={s.ibox}>
                <PasswordStrengthBar password={data.password} scoreWords={['Weak!', 'Meh...', "ok, you're doing well", 'Good!', 'Fear of hackers']} className={s.strengthbar} shortScoreWord='Too short' onChangeScore={score => setScore(score)}/>

                <input type="password" placeholder='A good password' name='password' onChange={e => handleChange(e)}/>

                <span>Password</span>
            </div>

            <button type='submit' className={s.btn} disabled={(status.name === 'Nice name' && status.email === 'Ok, looks good' && score >= 3) ? false : true}>Register</button>
        </form>
    </div>
  )
}

export default Form;