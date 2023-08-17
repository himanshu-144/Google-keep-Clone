import React from 'react'
import { CardContent,Typography, CardActions } from '@mui/material'
import { Restore , Delete } from '@mui/icons-material'
import { useDataContext } from '../../context/DataProvider'


const DeleteNote = ({note}) => {

  
  const {deletedNotes, setNotes,setDeletedNotes}  = useDataContext();

  const removeNote=(note)=>{
    const deletedNote= deletedNotes.filter((f)=>f.id !== note.id );
    setDeletedNotes(deletedNote);
    
  };

  const restoreNote=(note)=>{

      const updatedNotes = deletedNotes.filter((f)=>f.id !== note.id );
      setDeletedNotes(updatedNotes);
      setNotes(prev=>[note, ...prev]);
  };
 

  return (
   <div style={{border:" 1px solid #e0e0e0",borderRadius :"8px", width:"240px", margin:"8px", boxShadow:"none"}}>
     <CardContent>
      <Typography>{note.heading}</Typography>
      <Typography>{note.text}</Typography>
     </CardContent>
    <CardActions>

    <Delete style={{ marginLeft: 'auto',cursor:"pointer" }} 
        fontSize="small"
        onClick={() => removeNote(note)}
    />
      <Restore  
        fontSize="small" 
        style={{cursor:"pointer"}}  
        onClick={() => restoreNote(note)}
    />
     
    </CardActions>
    </div>
   
  )
}

export default DeleteNote
