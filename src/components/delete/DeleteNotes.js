import React from 'react'
import { Box, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import { useDataContext } from '../../context/DataProvider'; 
import DeleteNote from './DeleteNote';

const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
  }));

const DeleteNotes = () => {
  
  const {deletedNotes} = useDataContext();

  return (
    <Box sx={{ display: 'flex',width:"100%" }}>
       <Box  sx={{  p: 3, width:"100%" }}>
       <DrawerHeader  />
     
        {
         
            <Grid container paddingTop={2}>
           {deletedNotes.map((note)=>{
            return(
            <Grid item>
            <DeleteNote note={note} key={note.id}/>
            </Grid>
            
          )
         })}
         </Grid>
           
        }
        
        
       
       </Box>
    </Box>
  )
}

export default DeleteNotes
