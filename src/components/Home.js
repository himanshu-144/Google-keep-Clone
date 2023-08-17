import React from 'react'
import SwipeDrawer from './SwipeDrawer'
import Notes from './notes/Notes';
import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Archives from './archives/Archives';
import DeleteNotes from './delete/DeleteNotes';
const Home = () => {
  return (
    <BrowserRouter>
    <Box display="flex" width="100%">
        
         <SwipeDrawer />
            <Routes>
              <Route path='/' element={<Notes />}/>
              <Route path='/archive' element={<Archives />}/>
              <Route path='/delete' element={<DeleteNotes />}/>
                

            </Routes>
       
    </Box>
    </BrowserRouter>
  )
}

export default Home 
