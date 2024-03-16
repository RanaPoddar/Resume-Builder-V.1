import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Card, CardContent, CardHeader, Paper } from '@mui/material';


export default function PersonalInfo({formData, setFormData}) {
// const {setStep, userData, setUserData} = React.useContext(multiStepContext); 

  return (
   
    <Paper>
<Card>
  <CardHeader title="Personal Information" style={{textAlign:"center"}}/>
</Card>
<CardContent>
<div>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
value={formData.firstname}
onChange={(e) => {
  setFormData({...formData , firstname: e.target.value})
}}
 />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={formData.lastname}
onChange={(e) => {
  setFormData({...formData , lastname: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
 InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <EmailIcon />
            </InputAdornment>
          ),
        }}
            required
            id="email"
            name="email"
            label="Email Id"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={formData.email}
onChange={(e) => {
  setFormData({...formData , email: e.target.value})
}}
          />
     
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
  endAdornment: (
            <InputAdornment position="end">
              <PhoneIcon />
            </InputAdornment>
          ),
        }}
            required
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="family-name"
            variant="outlined"
            value={formData.phone}
onChange={(e) => {
  setFormData({...formData , phone: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LanguageIcon />
            </InputAdornment>
          ),
        }}

            id="website"
            name="website"
            label="Your Website"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.website}
onChange={(e) => {
  setFormData({...formData , website: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <GitHubIcon />
            </InputAdornment>
          ),
        }}          
            id="github"
            name="github"
            label="Github"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.github}
onChange={(e) => {
  setFormData({...formData , github: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <LinkedInIcon />
            </InputAdornment>
          ),
        }} 
            id="linkedin"
            name="linkedin"
            label="LinkedIn"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.linkedin}
onChange={(e) => {
  setFormData({...formData , linkedin: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <TwitterIcon />
            </InputAdornment>
          ),
        }}           
            id="twitter"
            name="twitter"
            label="Twitter"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.twitter}
onChange={(e) => {
  setFormData({...formData , twitter: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <FacebookIcon />
            </InputAdornment>
          ),
        }}           
            id="facebook"
            name="facebook"
            label="FaceBook"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.facebook}
onChange={(e) => {
  setFormData({...formData , facebook: e.target.value})
}}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <InstagramIcon />
            </InputAdornment>
          ),
        }}            
            id="instagram"
            name="instagram"
            label="Instagram"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            value={formData.instagram}
onChange={(e) => {
  setFormData({...formData , instagram: e.target.value})
}}
          />
        </Grid>
       
      </Grid>
</div>
</CardContent>
      </Paper>
    
  );
}
