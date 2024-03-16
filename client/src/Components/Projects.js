import React from 'react';
import { CardHeader, Paper, Card, CardContent, Grid, TextField, InputAdornment, Divider} from '@mui/material';
import TitleIcon from '@mui/icons-material/Title';
import LinkIcon from '@mui/icons-material/Link';
import DescriptionIcon from '@mui/icons-material/Description';

function Projects({formData, setFormData}) {
// const styles = theme => ({
//     margin : {
//         margin: theme.spacing(1.5),
//     },
//     padding: {
//         padding: theme.padding(1),
//     }
// });

// const {classes} = this.props;

// const {setStep, userData, setUserData} = useContext(multiStepContext);

  return (
    <React.Fragment>
<Paper>
        <Card>
            <CardHeader title="Projects Developed" style={{textAlign:"center"}}/>
        </Card>

<CardContent>
    <div>
        <Grid container spacing={2} alignItems='center' lg={12}>
<Grid item xs={12} lg={12} > 
<h5>Project 1</h5>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='title1'
label='Title'
style={{width: '80%'}}
required
value={formData.title1}
onChange={(e) => {
  setFormData({...formData , title1: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <TitleIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='link1'
label='Link'
style={{width: '80%'}}
required
value={formData.link1}
onChange={(e) => {
  setFormData({...formData , link1: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <LinkIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='description1'
label='Description'
style={{width: '80%'}}
required
value={formData.description1}
onChange={(e) => {
  setFormData({...formData , description1: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <DescriptionIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
 </Grid>
<br/>
<Divider/>
<br/>

{/* For Second Section of Projects . i.e, Project 2 */}
<Grid container spacing={2} alignItems='center' lg={12}>
<Grid item xs={12} lg={12} > 
<h5>Project 2</h5>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>

<TextField
margin='dense'
variant='outlined'
name='title2'
label='Title'
style={{width: '80%'}}
required
value={formData.title2}
onChange={(e) => {
  setFormData({...formData , title2: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <TitleIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='link2'
label='Link'
style={{width: '80%'}}
required
value={formData.link2}
onChange={(e) => {
  setFormData({...formData , link2: e.target.value})
}}


InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <LinkIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='description2'
label='Description'
style={{width: '80%'}}
required
value={formData.description2}
onChange={(e) => {
  setFormData({...formData , description2: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <DescriptionIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
 </Grid>

{/* Third Section for Project -----> Project 3 */}
<Grid container spacing={2} alignItems='center' lg={12}>
<Grid item xs={12} lg={12} > 
<h5>Project 3</h5>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='title3'
label='Title'
style={{width: '80%'}}
required
value={formData.title3}
onChange={(e) => {
  setFormData({...formData , title3: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <TitleIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='link3'
label='Link'
style={{width: '80%'}}
required
value={formData.link3}
onChange={(e) => {
  setFormData({...formData , link3: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <LinkIcon/>
    </InputAdornment>
)
}}
/>
</Grid>
<Grid item xs={12} sm={12} md={12} lg={12}>
<TextField
margin='dense'
variant='outlined'
name='description3'
label='Description'
style={{width: '80%'}}
required
value={formData.description3}
onChange={(e) => {
  setFormData({...formData , description3: e.target.value})
}}

InputProps={{
endAdornment : (
    <InputAdornment position='start'>
        <DescriptionIcon/>
    </InputAdornment>
)
}}
/>
</Grid>



 </Grid>


    </div>
</CardContent>
            </Paper>
    </React.Fragment>
    
  )
}

export default Projects