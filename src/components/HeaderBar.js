import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { styled} from '@mui/material/styles';

const Header = styled(AppBar)`
   z-index :1201;
   background :#fff;
   height:70px;

`;
const Heading = styled(Typography)`
  color: #5F6368;
  font-size: 24px;
  margin-left: 20px;

`;

const HeaderBar = ({handleDrawer, open}) => {

  const logo = 'https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png';

  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        
        onClick={handleDrawer}
        edge="start"
        style={{marginRight:10}}
      >
        <MenuIcon />
      </IconButton>
      <img src={logo} alt="logo" style={{width: 30}} />
      <Heading>Keep</Heading>
    </Toolbar>
  </Header>
  )
}

export default HeaderBar
