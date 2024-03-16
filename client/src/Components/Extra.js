import {Card, CardContent, CardHeader, Grid, InputAdornment, Paper, TextField } from '@mui/material'
import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function Extra({formData, setFormData}) {
// const {setStep, userData, setUserData}= useContext(multiStepContext);

  return (
    <Paper>
<Card>
  <CardHeader title='Extra Details' style={{textAlign:"center"}}/>
</Card>
<CardContent>
<div>
<Grid container spacing={2} alignItems='center' lg={12}>
<Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutlineIcon/>
<span>     Skills/Language </span>
</h5>
</Grid>
<br/>
<Grid item xs={0} lg={8}/>

{/* Section Starts Here ------ */}
<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill1'
  label='Skill 1' 
  style={{ width: "90%" }}
  value={formData.skill1}
onChange={(e) => {
  setFormData({...formData , skill1: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>

                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill2'
  label='Skill 2' 
  style={{ width: "90%" }}
  value={formData.skill2}
onChange={(e) => {
  setFormData({...formData , skill2: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill3'
  label='Skill 3' 
  style={{ width: "90%" }}
  value={formData.skill3}
onChange={(e) => {
  setFormData({...formData , skill3: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

{/* Row 2 Start from Here ----- */}
<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill4'
  label='Skill 4' 
  style={{ width: "90%" }}
  value={formData.skill4}
onChange={(e) => {
  setFormData({...formData , skill4: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>

                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill5'
  label='Skill 5' 
  style={{ width: "90%" }}
  value={formData.skill5}
onChange={(e) => {
  setFormData({...formData , skill5: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='skill6'
  label='Skill 6' 
  style={{ width: "90%" }}
  value={formData.skill6}
onChange={(e) => {
  setFormData({...formData , skill6: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

{/* Interest Section */}

<Grid item xs={12} lg={4} alignItems='flex-end' alignContent='flex-end'>
<h5>
<CheckCircleOutlineIcon/>
<span>     Interest </span>
</h5>
</Grid>
<br/>
<Grid item xs={0} lg={8}/>

{/* Section Starts Here ------ */}
<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest1'
  label='Interest 1' 
  style={{ width: "90%" }}
  value={formData.interest1}
onChange={(e) => {
  setFormData({...formData , interest1: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>

                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest2'
  label='Interest 2' 
  style={{ width: "90%" }}
  value={formData.interest2}
onChange={(e) => {
  setFormData({...formData , interest2: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest3'
  label='Interest 3' 
  style={{ width: "90%" }}
  value={formData.interest3}
onChange={(e) => {
  setFormData({...formData , interest3: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

{/* Row 2 Start from Here ----- */}
<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest4'
  label='Interest 4' 
  style={{ width: "90%" }}
  value={formData.interest4}
onChange={(e) => {
  setFormData({...formData , interest4: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>

                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest5'
  label='Interest 5' 
  style={{ width: "90%" }}
  value={formData.interest5}
onChange={(e) => {
  setFormData({...formData , interest5: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>

<Grid item xs={12} sm={12} md={6} lg={4}>
  <TextField variant='outlined'margin='dense' name='interest6'
  label='Interest 6' 
  style={{ width: "90%" }}
  value={formData.interest6}
onChange={(e) => {
  setFormData({...formData , interest6: e.target.value})
}}

  InputProps={{
               endAdornment: (
                <InputAdornment position='start'>
                  
                </InputAdornment>
               )
                  }}
                />
</Grid>






</Grid> {/* Container Grid End */}
</div>
</CardContent>


    </Paper>
  )
}

export default Extra