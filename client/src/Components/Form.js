import { Button,Grid, Step, StepLabel, Stepper} from '@mui/material'
import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo';
import Education from './Education';
import Experience from './Experience';
import Extra from './Extra';
import axios from "axios";
import { saveAs } from "file-saver";
import Projects from './Projects';
// import HorizontalLinearAlternativeLabelStepper from './Navbar';
import { Box } from '@mui/system';
import Sucess from './Sucess';



function Form() {
    const steps = [
        'Personal',
        'Education',
        'Experience',
        'Projects',
        'Extras'
      ];
    
    
// const [sucess, setSucess] = useState(false);

const [formData, setFormData] = useState({
    // Profile-Information
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    website: "",
    github: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    instagram: "",

    // Education Information
    college: "",
    fromyear1: "",
    toyear1: "",
    qualification1 : "",
    description1: "",
    school: "",
    fromyear2: "",
    toyear2: "",
    qualification2: "",
    description2: "",

    // Project Information...
    title1: "",
    link1: "",
    projectDescription1: "",
    title2: "",
    link2: "",
    projectDescription2: "",
    title3: "",
    link3: "",
    projectDescription3: "",

    // Experience Information
    institute1: "",
    position1: '',
    duration1: "",
    experienceDescription1: "",
    institute2: "",
    position2: "",
    duration2: "",
    experienceDescription2: "",

    // Extra Information
    skill1: "",
    skill2: "",
    skill3: "",
    skill4: "",
    skill5: "",
    skill6: "",
    interest1: "",
    interest2: "",
    interest3: "",
    interest4: "",
    interest5: "",
    interest6: "",
});
const [page, setPage] = useState(0);

// Stepper Settings 
const [activeStep, setActiveStep] = useState(0);

const pageDisplay = () => {
    if (page === 0) {
        return <PersonalInfo formData={formData} setFormData={setFormData} />
    } else if (page === 1) {
        return <Education formData={formData} setFormData={setFormData} />
    } else if (page === 2) {
        return <Experience formData={formData} setFormData={setFormData} />
    } else if (page === 3) {
        return <Projects formData={formData} setFormData={setFormData} />
    } else if (page === 4) {
        return <Extra formData={formData} setFormData={setFormData} />
    }  else if (page === 5) {
        return <Sucess formData={formData} setFormData={setFormData} />
    }
}
  
return (
    <div>
{/* Stepper --------------------------- */}
<div style={{width: "70%" ,
             margin: "auto",
             padding: "20",
             paddingTop: "20",
             
                 }}
>
<Box sx={{ width: '100%', marginTop:"25px", marginButtom: "25px"}}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
</div>



{/* ------------------------------------ */}
<div style={{width: "70%" ,
             margin: "auto",
             padding: "20",
             paddingTop: "20",
             boxShadow: "5px 5px 10px rgba(0,0,0,0.5)"
                 }}>
<div className='progressbar'>

</div>
<div> {pageDisplay()} </div>
<div style={{marginTop:"10px",
             display:"flex",
             justifyContent:"center",
             
}}>
{/* Button --------------------> */}

<Grid item xs={12} sm={6} lg={6}>
     
{/* Back Button */}
<Button 
style={{marginRight:"10px",
        marginBottom: "50px",
        marginTop: "50px"        
}}
variant='contained' color='primary'
        disabled={page === 0 || page === 5}
        onClick={() => {
  
            setPage((currPage) => currPage - 1);
            setActiveStep((prevActiveStep) => prevActiveStep -1);
        }}          
          >  Back
          
          </Button>

{/* Next Button */}
<Button
style={{marginLeft:"10px",
        marginBottom: "50px",
        marginTop: "50px"        
}}
 variant='contained' 
        color='secondary'
        disabled = {page === 5}
          onClick={() => {
            if(page === 4){
                // State change when submit button clicked !! 
setPage(5);
// ------------ Then Post Request Send --------
                axios
                .post("http://localhost:4000/create-pdf" , formData)
                .then(() => 
               axios.get("http://localhost:4000/fetch-pdf", {
                responseType : "blob",
               })
                )
                .then((res) => {
                    const pdfBlob = new Blob([res.data], {type: "application/pdf"});
                    setSucess(true && res.Status === 200);
                    saveAs(pdfBlob, "Resume.pdf");
                    // setPage(5);
                });
             }  else {
                setPage((currPage) => currPage + 1);
                setActiveStep((prevActiveStep) => prevActiveStep + 1);
             }}
          }
>
{page ===4 ? "Submit" : "Next"}

</Button>
</Grid>


        
</div> 


</div> 
</div> /* Normal div*/
)

}

export default Form
