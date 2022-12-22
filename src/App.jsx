import { login } from './utils';
import './index.css';
import { useState } from 'react';

export default function LoginForm() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [classes, setClasses] = useState('errorMessage d-none')

  const handleEmail = (event) => {
    setEmail(event.target.value)
    resetError()
  }

  const handlePassword = (event) => {
    setPassword(event.target.value)
    resetError()
  }

  const handleSubmit = () => {
    login({email, password}).then(() => {
      window.alert('Login succeeded 🥳')
    }).catch((error) => {
      setErrorMessage(error.message)
      setClasses('errorMessage')
    })
  }

  const resetError = () => {
    setErrorMessage('')
    setClasses('errorMessage d-none')
  }

  return (
    <div className='wrapper'>
      <div className='login-form'>
        <h1>Login Form 🐞</h1>
        <div className={classes}>{errorMessage}</div>
        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input onChange={handleEmail} value={email} id={'email'} type={'email'} autoComplete='off' />
        </div>
        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input onChange={handlePassword} value={password} id={'password'} type={'password'} />
        </div>
        <div className='button'>
          <button onClick={handleSubmit} disabled={email == '' || password.length < 6}>Login</button>
        </div>
      </div>
    </div>
  );
}
