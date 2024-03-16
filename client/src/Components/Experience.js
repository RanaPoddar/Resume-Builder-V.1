import {Card, CardContent, CardHeader, Grid, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'
import BusinessIcon from '@mui/icons-material/Business';
import ChairIcon from '@mui/icons-material/Chair';
import TimelapseIcon from '@mui/icons-material/Timelapse';

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Experience({formData, setFormData}) {
// const {setStep, userData, setUserData} = useContext(multiStepContext);

// Experience Information 
// institute1,
//         position1,
//         duration1,
//         experienceDescription1,
//         institute2,
//         position2,
//         duration2,
//         experienceDescription2,


  return (
    <Paper>
<Card>
  <CardHeader title='Experience Details' style={{textAlign:"center"}}/>
</Card>
<CardContent>
<div>
<Grid container spacing={2} alignItems='center' lg={12}>
<Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutlineIcon/>
<span>     Experience 1</span>
</h5>
</Grid>
<Grid item xs={0} lg={8}/>

{/* For Institution or Organisation  */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' variant='outlined' 
name='institute1' 
label='Institution/Organisation' 
style={{width: '90%'}} required

value={formData.institute1}
onChange={(e) => {
  setFormData({...formData , institute1: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<BusinessIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>

{/* For Position  */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' 
variant='outlined' 
name='position1' 
label='Position' 
style={{width: '90%'}} required

value={formData.position1}
onChange={(e) => {
  setFormData({...formData , position1: e.target.value})
}}


InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<ChairIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>
{/* For Duration */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' variant='outlined' name='duration1' 
label='Duration' style={{width: '90%'}} required

value={formData.duration1}
onChange={(e) => {
  setFormData({...formData , duration1: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<TimelapseIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>

{/* Description ------- */}
<Grid item md={4} sm={12} xs={12} lg={12}>
<TextField
margin='dense' variant='outlined' name='experienceDescription1' 
label='Destription' style={{width: '90%'}} required
value={formData.experienceDescription1}
onChange={(e) => {
  setFormData({...formData , experienceDescription1: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<TimelapseIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>

{/* Section 1 Ends Here  */}
{/* Section 2 Starts from Here ------------- */}
<Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutlineIcon/>
<span>     Experience 2</span>
</h5>
</Grid>
<Grid item xs={0} lg={8}/>

{/* For Institution or Organisation  */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' variant='outlined' name='institute2' 
label='Institution/Organisation' style={{width: '90%'}} required
value={formData.institute2}
onChange={(e) => {
  setFormData({...formData , institute2: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<BusinessIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>

{/* For Position  */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' variant='outlined' name='position2' 
label='Position' style={{width: '90%'}} required
value={formData.position2}
onChange={(e) => {
  setFormData({...formData , position2: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<ChairIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>
{/* For Duration */}
<Grid item md={4} sm={12} xs={12} lg={4}>
<TextField
margin='dense' variant='outlined' name='duration2' 
label='Duration' style={{width: '90%'}} required
value={formData.duration2}
onChange={(e) => {
  setFormData({...formData , duration2: e.target.value})
}}

InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<TimelapseIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>

{/* Description ------- */}
<Grid item md={4} sm={12} xs={12} lg={12}>
<TextField
margin='dense' variant='outlined' name='experienceDescription2' 
label='Destription' style={{width: '90%'}} required
value={formData.experienceDescription2}
onChange={(e) => {
  setFormData({...formData , experienceDescription2: e.target.value})
}}


InputProps={{
  endAdornment: (
    <InputAdornment position='start'>
<TimelapseIcon/>
    </InputAdornment>
  )
}}
/>
</Grid>






</Grid>   {/*Container Closing Grid */}
</div>
</CardContent>
    </Paper>
  )
}

export default Experience