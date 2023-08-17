
import React, {  createContext, useContext, useState } from 'react'

const DataContextProvider = createContext();

const DataProvider = ({children}) => {

    const[notes, setNotes] = useState([]);
    const[archiveNotes, setArchiveNotes] = useState([]);
    const[deletedNotes, setDeletedNotes] = useState([]);
    


  return (
    <DataContextProvider.Provider value={{notes, setNotes, 
    archiveNotes, setArchiveNotes, deletedNotes, setDeletedNotes}}>
     {children}
    </DataContextProvider.Provider>
  )
}

export default DataProvider

export const useDataContext =()=>{
    return useContext(DataContextProvider);
}
