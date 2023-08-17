import React from 'react'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import { Typography } from '@mui/material';
const EmptyNote = () => {
  return (
    <div style={{display:"flex", alignItems:"center", flexDirection:"column", margin:"80px 0px"}}>
      <LightbulbOutlinedIcon style={{fontSize:"8rem"}}/>
      <Typography style={{fontSize:"2rem", color:"gray"}}>Notes you add appear here</Typography>
    </div>
  )
}

export default EmptyNote
