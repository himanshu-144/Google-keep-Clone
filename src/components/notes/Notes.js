import React from 'react'
import { Box, Grid} from '@mui/material'
import { styled } from '@mui/material/styles';
import Form from './Form';
import DisplayNote from './DisplayNote';
import { useDataContext } from '../../context/DataProvider'; 
import EmptyNote from './EmptyNote';
import { DragDropContext, Draggable, Droppable   } from 'react-beautiful-dnd';


const DrawerHeader = styled('div')(({ theme }) => ({

    ...theme.mixins.toolbar,
  }));

   const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};

const Notes = () => {

  const {notes,setNotes} = useDataContext();

  const onDragEnd=(result)=>{
    if (!result.destination) 
    return;

  const items = reorder(notes, result.source.index, result.destination.index);    
  setNotes(items);
  };


  return (
    <Box sx={{ display: 'flex',width:"100%" }}>
       <Box  sx={{  p: 3, width:"100%" }}>
       <DrawerHeader  />
        <Form />
        { notes.length > 0 ? 
                    <DragDropContext onDragEnd={onDragEnd}>
                        <Droppable droppableId="droppable">
                            {(provided, snapshot) => (
                                <Grid container style={{ marginTop: 16}}
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                {
                                    notes.map((note, index) => (
                                        <Draggable key={note.id} draggableId={note.id} index={index}>
                                            {(provided, snapshot) => (
                                                <Grid ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    item
                                                >
                                                    <DisplayNote note={note} />
                                                </Grid>
                                            )}
                                        </Draggable>
                                    ))
                                }
                                </Grid>
                            )}
                        </Droppable>
                    </DragDropContext>
                : <EmptyNote /> }
        
       
       </Box>
    </Box>
  )
}

export default Notes
