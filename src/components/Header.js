import React from 'react'
import{ Box, Typography }from '@mui/material'

const Header = () => {
  return (
    <Box sx={{height:'100px',width:'60%',backgroundColor:'black',position:'sticky',ml:'300px',border:'5px solid yellowgreen'}}>
        <Typography variant='h3' sx={{position:'absolute',left:'300px',top:'10px',color:'white'}}> To Do List </Typography>
        <img src='Images/1.png' alt='pi' height="200px" width="200px"/>
    </Box>
  )
}

export default Header