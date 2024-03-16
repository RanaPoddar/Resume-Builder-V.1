import * as React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Card, CardContent, CardHeader, Paper } from '@mui/material';
import CheckCircleOutline from '@mui/icons-material/CheckCircleOutline';



// const styles = (theme) => ({
//   margin: {
//     margin: theme.spacing(1.5),
//   },
//   padding: {
//     padding: theme.spacing(1),
//   },
// });




export default function Education({formData, setFormData}) {

// Trying to hide dd--mm--yyyy from date 
const [focus, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
// ---------------------------------------------

// Importing Hooks
// const {setStep, userData, setUserData} = React.useContext(multiStepContext);  

// college,
//         fromyear1,
//         toyear1,
//         qualification1,
//         description1,
//         school,
//         fromyear2,
//         toyear2,
//         qualification2,
//         description2,
  return (
    
    <Paper>
    <Card>
      <CardHeader title="Educational Details" style={{textAlign:"center"}}/>
    </Card>
      
      <CardContent>
      {/* Container ------> */}
      <Grid container spacing={2} alignItems='center' lg={12}>

      <Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutline/>
<span>     College Details</span>
</h5>
</Grid>
<Grid item xs={0} lg={8}/>

        <Grid item xs={12} md={4} sm={12} lg={4}>
          <TextField
             margin="dense"
                  variant="outlined"
                  name="college"
                  label="College/Unviersity"
                  style={{ width: "80%" }}
                  required
                  value={formData.college}
onChange={(e) => {
  setFormData({...formData , college: e.target.value})
}}
          />
        </Grid>

        {/* Date Input without dd-mm-yyyy  */}
        <Grid item xs={12} md={4} sm={12} lg={4}>
        <TextField
        required
  onFocus={onFocus}
  onBlur={onBlur}
  style={{ width: "80%" }}
  margin="dense"
  InputProps={{
    classes: {
      input: "CustomTextField"
    }
  }}
  onChange={(e) => {
    setFormData({...formData , fromyear1: e.target.value})
    if (e.target.value) setHasValue(true);
    else setHasValue(false);
  }}
  name='fromyear1'
  label="From Year"
  type={hasValue || focus ? "date" : "text"}
  value={formData.fromyear1}
/>
        </Grid>
{/* ---------------------------------------------------------------------------------------- */}
<Grid item xs={12} md={4} sm={12} lg={4}>
        <TextField
        required
  onFocus={onFocus}
  onBlur={onBlur}
  style={{ width: "80%" }}
  margin="dense"
  InputProps={{
    classes: {
      input: "CustomTextField"
    }
  }}
  onChange={(e) => {
    setFormData({...formData , toyear1: e.target.value})
    if (e.target.value) setHasValue(true);
    else setHasValue(false);
  }}
  name='toyear1'
  label="To Year"
  type={hasValue || focus ? "date" :   "text"}
  value={formData.toyear1}

/>
        </Grid>
       
{/* next row ----> Qualification and description */}
{/* Qualification ___________> */}
<Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="qualification1"
                  required 
                  value={formData.qualification1}
onChange={(e) => {
  setFormData({...formData , qualification1: e.target.value})
}}
                />
              </Grid>
{/* Description _____________> */}
<Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description1"
                  required
                  value={formData.description1}
onChange={(e) => {
  setFormData({...formData , description1: e.target.value})
}}
                />
              </Grid>

{/* Section two ___________---------------> School Details */}
<Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutline/>
<span>     Schooling Details</span>
</h5>
</Grid>
<Grid item xs={0} lg={8}/>

<Grid item xs={12} md={4} sm={12} lg={4}>
          <TextField
             margin="dense"
                  variant="outlined"
                  name="school"
                  label="School"
                  style={{ width: "80%" }}
                  required
                  value={formData.school}
onChange={(e) => {
  setFormData({...formData , school: e.target.value})
}}
          />
        </Grid>

        {/* Date Input without dd-mm-yyyy  */}
        <Grid item xs={12} md={4} sm={12} lg={4}>
        <TextField
        required
  onFocus={onFocus}
  onBlur={onBlur}
  style={{ width: "80%" }}
  margin="dense"
  InputProps={{
    classes: {
      input: "CustomTextField"
    }
  }}
  onChange={(e) => {
    setFormData({...formData , fromyear2: e.target.value})
    if (e.target.value) setHasValue(true);
    else setHasValue(false);
  }}
  name='fromyear2'
  label="From Year"
  type={hasValue || focus ? "date" : "text"}
  value={formData.fromyear2}
/>
        </Grid>
{/* ---------------------------------------------------------------------------------------- */}
<Grid item xs={12} md={4} sm={12} lg={4}>
        <TextField
        required
  onFocus={onFocus}
  onBlur={onBlur}
  style={{ width: "80%" }}
  margin="dense"
  InputProps={{
    classes: {
      input: "CustomTextField"
    }
  }}
  onChange={(e) => {
    setFormData({...formData , toyear2: e.target.value})
    if (e.target.value) setHasValue(true);
    else setHasValue(false);
  }}
  name='toyear2'
  label="To Year"
  type={hasValue || focus ? "date" :   "text"}
  value={formData.toyear2}

/>
        </Grid>
       
{/* next row ----> Qualification and description */}
{/* Qualification ___________> */}
<Grid item md={4} sm={12} xs={12} lg={4}>
                <TextField
                  margin="dense"
                  label="Qualification"
                  variant="outlined"
                  style={{ width: "80%" }}
                  name="qualification2"
                  required 
                  value={formData.qualification2}
onChange={(e) => {
  setFormData({...formData , qualification2: e.target.value})
}}
                />
              </Grid>
{/* Description _____________> */}
<Grid item md={8} sm={12} xs={12} lg={8}>
                <TextField
                  margin="dense"
                  label="Description"
                  variant="outlined"
                  style={{ width: "90%" }}
                  name="description2"
                  required
                  value={formData.description2}
onChange={(e) => {
  setFormData({...formData , description2: e.target.value})
}}
                />
              </Grid>


             



</Grid>

 </CardContent> 
  </Paper>
    
  );
}