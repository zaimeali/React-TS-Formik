import React from 'react'

// Material UI
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'

// Style
import './formStyle.css'

// Component
import CustomizedSteppers from './StepperForm'

export default function Form() {
  return (
    <Container className="form">
        <AppBar position="fixed" color="secondary">
          <Toolbar>
            <Typography>
              Multi-Step Formik Yup Form
            </Typography>
          </Toolbar>
        </AppBar>
        <CustomizedSteppers />
    </Container>
  )
}
