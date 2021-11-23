import React, { useState } from 'react';
 
                                         
let FV=()=> {
  const      [user, setUser] = useState({});
  const      [formErrors, setFormErrors] = useState({});
 
                                                             
 
        
    return (
      <div className='App container col-6'>
        <h3>New User Registration Form</h3>
        <form noValidate>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor='firstName'>First Name</label>
              <input
                className='form-control'
                placeholder='First Name'
                type='text'
                name='firstName'
                noValidate
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                className='form-control'
                placeholder='Last Name'
                type='text'
                name='lastName'
                noValidate
              />
            </div>
          </div>
 
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              placeholder='Email'
              type='email'
              name='email'
              noValidate
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              placeholder='Password'
              type='password'
              name='password'
              noValidate
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='confirmpassword'>Confirm Password</label>
            <input
              className='form-control'
              placeholder='Password'
              type='password'
              name='confirmpassword'
              noValidate
            />
          </div>
          <div className='mb-3'>
            <button type='submit'>Create Account</button>
          </div>
        </form>
      </div>
    );
        
}
export default FV;