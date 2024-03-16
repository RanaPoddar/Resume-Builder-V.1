import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import activeStep from './Form';
import { useState } from 'react';

const steps = [
  'Personal',
  'Education',
  'Experience',
  'Projects',
  'Extras'
];

export default function HorizontalLinearAlternativeLabelStepper() {

    const [activeStep, setActiveStep] = useState(0);
  return (
    <Box sx={{ width: '30%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}