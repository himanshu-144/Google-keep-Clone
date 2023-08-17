import React, { useState,useRef } from 'react'
import { Box, TextField } from '@mui/material'
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { useDataContext } from '../../context/DataProvider';
import { v4 as uuidv4 } from 'uuid';


const Form = () => {
 
   const value = useRef();

   const[showTextField, setShowTextField] = useState(false);
   const[addNotes, setAddNotes] = useState({
    id :uuidv4(),
    heading : "",
    text :""
   });

   const {notes,setNotes} =useDataContext();

   const handleTextArea =()=>{
       setShowTextField(true);
       value.current.style.minheight ="70px"  
   };

   const handleClickAway=()=>{
      setShowTextField(false);
      value.current.style.minheight ="30px"
      setAddNotes({
        id :uuidv4(),
        heading : "",
        text :""
      })
      if(addNotes.heading!=="" || addNotes.text!=="" ){

        setNotes((prev)=>[addNotes, ...prev]);
      }
};

   const textChange=(e)=>{
      setAddNotes({...addNotes, [e.target.name] :e.target.value});
        
   };
  
   

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
    <Box display="flex" flexDirection="column" borderRadius="8px" borderColor="#e0e0e0"
    width={600} boxShadow=" 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);"
    padding="10px 15px" min-minHeight="30px" margin="auto" ref={value}
    >
    {showTextField && 
     <TextField placeholder='Title' variant='standard' 
      style={{marginBottom:10}}  name='heading'  InputProps={{ disableUnderline: true }}
      onChange={(e)=>textChange(e)}  value={addNotes.heading}
      />
    }
    
     <TextField placeholder="Take a note..." maxRows={Infinity}
        multiline variant="standard"  name='text' 
         InputProps={{ disableUnderline: true }}
         onClick={handleTextArea}
         onChange={(e)=>textChange(e)} value={addNotes.text}
     />

    </Box>
    </ClickAwayListener>
  )
}

export default Form
