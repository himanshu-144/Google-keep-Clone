import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Lightbulb,Archive, Delete} from '@mui/icons-material';
import { Link } from 'react-router-dom';


const NavList = () => {

    const navList = [
        { id: 1, name: 'Notes', icon: <Lightbulb />, route: "/" },
        { id: 2, name: 'Archives', icon: <Archive />, route :"/archive"},
        { id: 3, name: 'Trash', icon: <Delete />, route :"/delete" },
    ]

  return (
     <List>
        {
           navList.map((list)=>{
            return(
                <ListItem key={list.id}>
                      <Link to={`${list.route}`} style={{display:"flex", textDecoration:"none",color:"black"}}>
                      <ListItemIcon style={{ alignItems: 'center'}}>
                            {list.icon}
                        </ListItemIcon>
                        <ListItemText primary={list.name} />
                      </Link>
                        
                    
                </ListItem>
            )
           })
        }
        </List>
  )
}

export default NavList
