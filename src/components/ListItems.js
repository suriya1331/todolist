import { Box, Button, Card, CardContent, CardMedia, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ListItems = ({events,handleDelete,handlecheck}) => {

  return (
     
    <Box sx={{display:'flex',flexDirection:'column', backgroundColor:'grey',
    alignItems:'center',justifyContent:'center' ,
    height:'450px',width:'60%',borderLeft:'2px solid black',borderRight:'2px solid black'
    ,position:'relative',ml:"300px"
    }}>
        {(events.length)?(
        <FormGroup sx={{display:'flex',flexDirection:'column',justifyContent:'space-between',color:'white'
        
        ,alignItems:'center',mt:'100px'}}>
            {events.map((item)=>(
                <Box sx={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
            <FormControlLabel key={item.id} onChange={()=>handlecheck(item.id)} control={<Checkbox checked={item.check}/>} label={item.item} 
            sx={{display:'flex',flexDirection:'row'}}/>
            
            <Button onClick={ ()=> handleDelete(item.id)}> {<DeleteForeverIcon sx={{color:'orange'}}/>} </Button>

            </Box>
            ))}
        </FormGroup>
        ):(
            <Typography>No List Items</Typography>
        )}
        </Box>
    
  )
}

export default ListItems