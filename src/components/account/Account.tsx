import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Styling
import '../formStyle.css'
import { Button } from '@material-ui/core';

interface AccountForm {
  username: string;
  password: string;
  email: string;
}

export const Account: React.FC<{}> = ({ submit }) => {

  const accountInitial: AccountForm = {
    username: '',
    password: '',
    email: '',
  };

  const submitForm = (values, actions) => {
    alert("nice")
  }

  const accountValidation = {
    username: Yup.string()
      .max(15, 'Must be 15 characters less')
      .min(5, 'Must be 5 characters long')
      .required('You forgot to enter Username'),
    password: Yup.string()
      .max(15, 'Must be 15 characters less')
      .min(5, 'Must be 5 characters long')
      .required('You forgot to enter Password'),
    email: Yup.string()
      .email("You've entered Invalid Email Address")
      .required('You forgot to enter Email')
  }

  return (
    <div
      className="form__body"
    >
      <Formik
        initialValues={ accountInitial }
        onSubmit={ (values, actions) => submitForm(values, actions) }
        validationSchema={ Yup.object(accountValidation) }
      > 
        <Form
          className="formTag"
        >
          <div className="formField">
            <label
              className="formLabel" 
              htmlFor="username">Username:</label>
            <Field 
              id="username" 
              name="username" 
              className="formInput"
              placeholder="Enter Username" 
            />
          </div>
          <div className="formError">
            <ErrorMessage name="username" />
          </div>
          
          <div className="formField">
            <label
              className="formLabel" 
              htmlFor="password">Password:</label>
            <Field 
              id="password" 
              name="password" 
              className="formInput"
              placeholder="Enter Password" 
            />
          </div>
          <div className="formError">
            <ErrorMessage name="password" />
          </div>
          
          <div className="formField">
            <label
              className="formLabel" 
              htmlFor="email">Email:</label>
            <Field 
              id="email" 
              name="email" 
              className="formInput"
              placeholder="Enter Email" 
            />
          </div>
          <div className="formError">
            <ErrorMessage name="email" />
          </div>

          <hr style={{
            width: "99%",
            backgroundColor: "black",
            borderColor: "black",
            borderWidth: "0.5px",
          }} />

          <Button 
            className="btn"
            variant="contained" 
            type="submit"
            size="small"
          >Submit</Button>

        </Form>
      </Formik>
    </div>
  )
}
