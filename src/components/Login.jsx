import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = evt => {
    evt.preventDefault();
    if (email && password) {
      const registeredUser = JSON.parse(localStorage.getItem('registeredUser'));
      const { email: regEmail, password: regPassword } = registeredUser;
      if (email === regEmail && password === regPassword) {
        history.push('/home');
      } else {
        alert('Invalid Credentials...');
      }
      evt.target.reset();
    } else {
      alert('Please fill all the fields...');
    }
  };
  const handleChange = evt => {
    const fieldName = evt.target.name;
    switch (fieldName) {
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      default:
        return null;
    }
  };

  return (
    <div className='main'>
      <div className='container card'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='element'>
            <label htmlFor='email'>Email:</label>
            <br />
            <input
              type='email'
              name='email'
              id='email'
              onChange={handleChange}
            />
          </div>
          <div className='element'>
            <label htmlFor='password'>Password:</label>
            <br />
            <input
              type='password'
              name='password'
              id='password'
              onChange={handleChange}
            />
          </div>
          <button className='btn btn-primary'>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
