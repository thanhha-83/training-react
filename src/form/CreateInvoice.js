import styled from "styled-components";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import EmailField from "./EmailField"
import RatingField from "./RatingField"
import { useRef } from "react";

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
`
const CreateInvoiceForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`
const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`

const EmailFieldInput = styled(EmailField)`
  height: 40px;
  font-size: 24px;
`

const ProjectNameField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const BilledAmountField = styled(Field)`
  height: 40px;
  font-size: 24px;
`

const RatingFieldInput = styled(RatingField)`
  margin-top: 16px;
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

const FileInput = styled.input`
  margin-top: 10px;
  font-size: 16px;
`

const CreateInvoiceSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email can\'t be empty'),
  projectName: Yup.string().required('Project name can\'t be empty'),
  billedAmount: Yup.number().required('Billed amount can\'t be empty').min(1, 'Invalid aumont'),
  rating: Yup.number().min(1, 'Rating can\'t be empty')
});

function CreateInvoice() {
  const fileInput = useRef()
  const handleSubmit = () => {
    alert(fileInput.current.value)
  }
  return (
    <Container>
      <ContentContainer>
        <Title>{'Create Invoice'}</Title>
        <Formik initialValues={{ email: '', projectName: '', billedAmount: '', rating: 0 }}
            onSubmit={handleSubmit}
            validationSchema={CreateInvoiceSchema}>
          { props => (
            <CreateInvoiceForm>
              <EmailFieldInput name="email" type="email" label="Client's Email" />

              <Label>Project Name</Label>
              <ProjectNameField name="projectName" type="text" />
              <ErrorMessage name="projectName">
                {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <Label>Billed Amount (USD)</Label>
              <BilledAmountField name="billedAmount" type="number" />
              <ErrorMessage name="billedAmount">
                {error => <ErrorLabel>{error}</ErrorLabel>}
              </ErrorMessage>

              <RatingFieldInput name="rating" label="Project Rating" />

              <Label>Upload receipt(s)</Label>
              <FileInput type="file" ref={fileInput}/>

              <SubmitButton type="submit" disabled={props.isSubmitting} />
            </CreateInvoiceForm>
          )
        }
        </Formik>
      </ContentContainer>
    </Container>
  );
}

export default CreateInvoice;