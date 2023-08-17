import React from 'react'
import { CardContent,Typography, CardActions } from '@mui/material'
import { Archive, Delete } from '@mui/icons-material'
import { useDataContext } from '../../context/DataProvider'
const DisplayNote = ({note}) => {

  const {notes, setNotes,setArchiveNotes,setDeletedNotes}  = useDataContext();

  const archiveNote=(note)=>{

      const updatedNotes = notes.filter((f)=>f.id !== note.id );
      setNotes(updatedNotes);
      setArchiveNotes(prev=>[note, ...prev]);
  };
  const deleteNote=(note)=>{
    const deletedNotes = notes.filter((f)=>f.id !== note.id );
    setNotes(deletedNotes);
    setDeletedNotes(prev=>[note, ...prev]);
  };

  return (
   <div style={{border:" 1px solid #e0e0e0",borderRadius :"8px", width:"240px", margin:"8px", boxShadow:"none"}}>
     <CardContent>
      <Typography>{note.heading}</Typography>
      <Typography>{note.text}</Typography>
     </CardContent>
    <CardActions>
      <Archive 
        fontSize="small" 
        style={{ marginLeft: 'auto',cursor:"pointer" }} 
        onClick={() => archiveNote(note)}
    />
     <Delete style={{cursor:"pointer"}}
        fontSize="small"
        onClick={() => deleteNote(note)}
    />
    </CardActions>
    </div>
   
  )
}

export default DisplayNote
