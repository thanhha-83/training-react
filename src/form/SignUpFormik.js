import { Formik, Field, Form, ErrorMessage } from 'formik'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`

const Title = styled.h1`
  white-space: preline;
`
const SignUpForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`
const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const SubmitButton = styled.input`
  height: 40px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`

const ErrorLabel = styled.div`
  font-size: 26px;
  color: red;
`

function SignUpFormik() {
  const handleSubmit = (values, actions) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
        alert(JSON.stringify(values))
      }, 1000)
    })
  }
  const handleValidation = (values) => {
    const errors = {}
    if (!values.email) {
      errors.email = 'Please enter your email'
    }
    return errors
  }

  const validatePassword = (value) => {
    if (!value) {
      return "Please enter your password"
    } else if (value.length < 5) {
      return "Password is very weak"
    } else if (value.length < 8) {
      return "Password is weak"
    }
    return undefined
  }
  return (
    <Container>
      <ContentContainer>
        <Title>{'Sign Up'}</Title>
        <Formik initialValues={{ email: '', password: '', confirmPassword: false }}
            onSubmit={handleSubmit}
            validate={handleValidation}>
          { props => (
            <SignUpForm>
              <Label>Email</Label>
              <EmailField name="email" type="email" />
              <ErrorMessage name="email">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Password</Label>
              <PasswordField name="password" validate={validatePassword} type="password" />
              <ErrorMessage name="password">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Confirm Password</Label>
              <PasswordField name="confirmPassword" validate={validatePassword} type="password" />
              <ErrorMessage name="confirmPassword">
                  {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <SubmitButton type="submit" disabled={props.isSubmitting} />
            </SignUpForm>
          )
        }
        </Formik>
      </ContentContainer>
    </Container>
  );
}

export default SignUpFormik;