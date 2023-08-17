import React from 'react'
import { Box, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Archive from "./Archive"

import { useDataContext } from '../../context/DataProvider'; 


const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
  }));

const Archives = () => {
  
  const {archiveNotes} = useDataContext();

  return (
    <Box sx={{ display: 'flex',width:"100%" }}>
       <Box  sx={{  p: 3, width:"100%" }}>
       <DrawerHeader  />
    
        
          <Grid container paddingTop={2}>
           {archiveNotes.map((note)=>{
            return(
            <Grid item>
              <Archive note={note} key={note.id}/>
            </Grid>
            
          )
         })}
         </Grid>
           
        
        
        
       
       </Box>
    </Box>
  )
}

export default Archives

