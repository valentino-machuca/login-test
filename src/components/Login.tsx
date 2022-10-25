import React, { useState } from 'react';
import s from './Login.module.scss';

import background from '../assets/background.gif';
import google from '../assets/google.png';

import { motion, AnimatePresence } from 'framer-motion';

import Form from './Form';

const Login = () => {
  const [register, setRegister] = useState<boolean>(true); //Mostar o no registro.

  return (
    //Para las animaciones de entrada y salida.
    <AnimatePresence>
    {
    register ? //si register es true, renderiza el registro.
    <motion.div className={s.container}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}} //exit para animación de salida.
      transition={{duration: 0.5}}
    >

       (<motion.div className={s.contform} initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} exit={{opacity: 0}}
                    transition={{duration: 0.5, delay: 0.5}}>
          <div className={s.title}>
            <h4>Create an account</h4>
            <p>Sign up to enjoy the best pixel art.</p>
          </div>

          <Form setRegister={setRegister}/>

          <div className={s.google}>
            <img src={google} alt="google" className={s.googleico}/>
            <p>Sign up with Google</p>
          </div>
        </motion.div>)
        <motion.div className={register ? s.background : `${s.background} ${s.complete}`}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration: 0.5}}
        >
          <div className={s.cover}>
              <span>Pixel</span>
              <h4>Place</h4>
          </div>
          <img src={background} alt="background" />
        </motion.div>
    </motion.div> : //Si es falso, esconde el registro.
        <motion.div className={s.container}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
        >
         <motion.div className={`${s.background} ${s.complete}`}
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           transition={{duration: 0.5}}
         >
           <div className={s.cover}>
               <span>Pixel</span>
               <h4>Place</h4>
           </div>
           <img src={background} alt="background" />
         </motion.div>
     </motion.div>
    }
    </AnimatePresence>
  )
}

export default Login