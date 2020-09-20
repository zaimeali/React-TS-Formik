import React from 'react'

// Material UI
import { Container } from '@material-ui/core'

// Style
import './formStyle.css'

// Component
import CustomizedSteppers from './StepperForm'

export default function Form() {
  return (
    <Container className="form">
        <CustomizedSteppers />
    </Container>
  )
}
