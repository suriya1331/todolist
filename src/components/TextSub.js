import { useRef } from 'react';
import { Box, TextField,Button } from '@mui/material'
import React from 'react'
import AddIcon from '@mui/icons-material/Add';

const TextSub = ({submitItem,setSubmitItem,handlesubmit}) => {

  const inputRef = useRef()
    
  return (
    <Box sx={{display:'flex',flexDirection:'column',backgroundColor:'grey'
    ,width:'60%',ml:'300px'
    ,justifyContent:'center',alignItems:'center',borderLeft:'2px solid black',borderRight:'2px solid black'
    }}>
    <form onSubmit={handlesubmit}>
        <TextField  autoFocus ref={inputRef}
        sx={{mt:'10px',border:'2px solid white'}} 
        type='text' placeholder='Add Items' required value={submitItem} onChange={(e)=> setSubmitItem(e.target.value)}
        />
       <Button variant='text' sx={{mt:'15px', ml:'5px'}} onClick={()=>inputRef.current.focus()} > 
       <AddIcon sx={{color:'yellowgreen'}}/>
        </Button>
    </form>
    
    </Box>
  )
}

export default TextSub