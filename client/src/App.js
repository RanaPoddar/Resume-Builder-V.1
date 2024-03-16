import React from 'react'
import Form from './Components/Form';


function App() {
  return (
    <Form/>
  )
}

export default App


// // import DisplayData from "./Components/DisplayData"

// function App() {

//   function showStep(step){
// switch(step) {
//   case 1: 
//          return <PersonalInfo/>
//   case 2: 
//          return <Education/>  
//   case 3: 
//          return <Projects/>
//   case 4: 
//          return <Experience/>
//   case 5: 
//          return <Extra/>                  
// }}

// const {currentStep, finalData} = useContext(multiStepContext);


//   return (
//   <React.Fragment>
// {/* Showing Steps on Header */}




// <Grid item xs={12} lg={12} alignItems='center' margin='40px 40px' >
// <Stepper style={{width: '18%'}}
//          activeStep={currentStep - 1} 
//          orientation='horizontal'>
// <Step>
//   <StepLabel></StepLabel>
// </Step>
// <Step>
//   <StepLabel></StepLabel>
// </Step>
// <Step>
//   <StepLabel></StepLabel>
// </Step>
// <Step>
//   <StepLabel></StepLabel>
// </Step>
// <Step>
//   <StepLabel></StepLabel>
// </Step>
// </Stepper>

// </Grid>

// <Grid item xs={12} lg={12}>
// {showStep(currentStep)}
// </Grid>

// </React.Fragment>
    
//   );
// }

// export default App;
