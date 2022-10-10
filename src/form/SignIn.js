import { useState } from "react";

function SignIn() {
  const [state, setState] = useState({
    email: '',
    password: '',
    rememberMe: false,
    emailError: '',
    passwordError: ''
  })

  const handleEmailInputChange = (e) => {
    setState({
      ...state,
      email: e.target.value,
      emailError: ''
    })
  }

  const handlePasswordInputChange = (e) => {
    setState({
      ...state,
      password: e.target.value,
      passwordError: ''
    })
  }

  const handleRememberMeInputChange = (e) => {
    setState({
      ...state,
      rememberMe: e.target.checked
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let emailError = ''
    let passwordError = ''
    if (!state.email) {
      emailError = 'Please enter your email'
    }
    if (!state.password) {
      passwordError = 'Please enter your password'
    } else if (state.password.length < 8) {
      passwordError = 'Password must be at least 8 characters'
    }
    if (emailError || passwordError) {
      setState({
        ...state,
        emailError,
        passwordError
      })
    }
    else {
      alert(JSON.stringify(state))
    }
  }
  return (
    <form className="w-md-50" onSubmit={handleSubmit}>
      <div className="form-outline mb-4">
        <input type="email" id="sign-in-email" className={state.emailError ? 'form-control is-invalid' : 'form-control'} value={state.email} onChange={handleEmailInputChange} />
        <div className="invalid-feedback">
          {state.emailError}
        </div>
        <label className="form-label" htmlFor="sign-in-email">Email address</label>
      </div>
      <div className="form-outline mb-2">
        <input type="password" id="sign-in-password" className={state.passwordError ? 'form-control is-invalid' : 'form-control'} value={state.password} onChange={handlePasswordInputChange} />
        <div className="invalid-feedback">
          {state.passwordError}
        </div>
        <label className="form-label" htmlFor="sign-in-password">Password</label>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center mb-2">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="sign-in-remember" checked={state.rememberMe} onChange={handleRememberMeInputChange}/>
            <label className="form-check-label" htmlFor="sign-in-remember"> Remember me </label>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center mb-2">
          <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
        </div>
      </div>
    </form>
  );
}

export default SignIn;