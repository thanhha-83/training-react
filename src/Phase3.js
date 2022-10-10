import './App.css'
import React from 'react';
import SignIn from './form/SignIn';
import SignInFormik from './form/SignInFormik';
import SignUpFormik from './form/SignUpFormik';
import SignUpYup from './form/SignUpYup';
import CreateInvoice from './form/CreateInvoice';

// Ví dụ trong khóa học Implementing Forms in React 17 trên phluralsight

function Phase3() {
  return (
    <>
      <section className='phluralsight'>
        <h2>V. Bài tập Form trong khóa ReactJS phluralsight</h2>

        <h3>2. Creating Form using Vanilla React</h3>
        <div className='wrapper-box'>
          <SignIn />
        </div>

        <h3>3. Creating Form using Formik</h3>
        <div className='wrapper-box'>
          <SignInFormik />
        </div>

        <h3>4. Implementing Data Validation</h3>
        <div className='wrapper-box'>
          <SignUpFormik />
          <SignUpYup />
        </div>

        <h3>5. Creating Reuseable Custom Form Elements</h3>
        <h3>6. Implementing Uncontrolled Forms Using Vanilla Reacts</h3>
        <div className='wrapper-box'>
            <CreateInvoice />
        </div>
      </section>
    </>
  );
}

export default Phase3;
