import { Box, TextField } from '@mui/material'
import React from 'react'

const SearchIcon = ({search,setSearch}) => {
  return (
    <Box sx={{display:'flex',backgroundColor:'grey'
    ,flexDirection:'column',alignItems:'center',justifyContent:'center'
    ,position:'relative',ml:'300px',width:'60%',borderLeft:'2px solid black',borderRight:'2px solid black'
    }}>
    <form onSubmit={(e)=>e.preventDefault}>
        <TextField sx={{mt:'10px',border:'2px solid white'}} type='text' placeholder='SEARCH' value={search} onChange={(e)=> setSearch(e.target.value)} />
    </form>
    </Box>
  )
}

export default SearchIcon
