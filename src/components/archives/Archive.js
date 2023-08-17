import React from 'react'
import { CardContent,Typography, CardActions } from '@mui/material'
import { Archive as ArchiveIcon, Delete } from '@mui/icons-material'
import { useDataContext } from '../../context/DataProvider'


const Archive = ({note}) => {

  const { setNotes,archiveNotes,setArchiveNotes,setDeletedNotes}  = useDataContext();

  const archiveNote=(note)=>{

      const updatedNotes = archiveNotes.filter((f)=>f.id !== note.id );
      setArchiveNotes(updatedNotes);
      setNotes(prev=>[note, ...prev]);
  };
  const deleteNote=(note)=>{
    const deletedNotes = archiveNotes.filter((f)=>f.id !== note.id );
    setArchiveNotes(deletedNotes);
    setDeletedNotes(prevArr => [note, ...prevArr]);
  };

  return (
   <div style={{border:" 1px solid #e0e0e0",borderRadius :"8px", width:"240px", margin:"8px", boxShadow:"none"}}>
     <CardContent>
      <Typography>{note.heading}</Typography>
      <Typography>{note.text}</Typography>
     </CardContent>
    <CardActions>
      <ArchiveIcon 
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

export default Archive
