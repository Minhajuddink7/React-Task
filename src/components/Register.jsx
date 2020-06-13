import React, { useState } from 'react';
import './main.css';
import { Link, useHistory } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = evt => {
    evt.preventDefault();
    if (name && email && mobile && password) {
      localStorage.setItem(
        'registeredUser',
        JSON.stringify({ name, email, mobile, password })
      );
      evt.target.reset();
      alert(`${name}, Your Sign Up was Successful!!!`);
      history.push('/login');
    } else {
      alert('Please Fill all the Form fields before Submitting...');
    }
  };
  const handleChange = evt => {
    const fieldName = evt.target.name;
    switch (fieldName) {
      case 'name':
        setName(evt.target.value);
        break;
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'mobile':
        setMobile(evt.target.value);
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
        <h2>Register Page:</h2>
        <form onSubmit={handleSubmit}>
          <div className='element'>
            <label htmlFor='name'>Name:</label>
            <br />
            <input type='text' name='name' id='name' onChange={handleChange} />
          </div>
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
            <label htmlFor='mobile'>Mobile:</label>
            <br />
            <input
              type='number'
              name='mobile'
              id='mobile'
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
          <button className='btn btn-primary'>Register</button>
        </form>
        <h3>
          If you already have account.... <Link to='/login'>Login</Link>
        </h3>
      </div>
    </div>
  );
};
export default Register;
