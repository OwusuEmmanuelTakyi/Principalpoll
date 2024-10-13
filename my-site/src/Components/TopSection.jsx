import { Avatar } from '@mui/material';
import './TopSection.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuIcon from '@mui/icons-material/Menu';
import { grey } from '@mui/material/colors';

const TopSection = () => {
  return (
    <div className='nav-container'>
        <h3>Logo.name</h3>
        <div className='right-side'>
            <NotificationsNoneIcon sx={{color:grey[600],fontSize:24,':hover':{cursor:'pointer'}}}/>
            <Avatar sx={{':hover':{cursor:'pointer'}}}/>
        </div>
        <div className="menu-icon-container">
            <MenuIcon sx={{color:grey[600],fontSize:30,':hover':{cursor:'pointer'}}}/>
        </div>
    </div>
  )
}

export default TopSection