import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = ({length}) => {
  return (
    <Box sx={{height:'100px',width:'60%',position:'sticky',backgroundColor:'black'
    ,ml:'300px',border:'5px solid yellowgreen'
    }}>
        <Typography variant='h3' sx={{position:'absolute',left:'300px',top:'10px',color:'white'}}> {length} No Of {length===0 ?"Item" : "Items"}  </Typography>
    </Box>
  )
}

export default Footer