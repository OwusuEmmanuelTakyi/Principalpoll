import Tab from './Tab'
import './TabSection.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';

const TabSection = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
          <Link style={{color:'inherit',textDecoration:'none'}} to='/login/dashboard'>
          <Tab icon={<DashboardIcon sx={{fontSize:20}}/>} title='Dashboard'/>
          </Link> 

          <Link style={{color:'inherit',textDecoration:'none'}}  to='/login/dashboard/nominations'>
          <Tab icon={<HowToRegIcon sx={{fontSize:20}}/>} title='Nominations'/>
          </Link>
          <Link style={{color:'inherit',textDecoration:'none'}}  to='/login/dashboard/competitions'>
            <Tab icon={<SupervisorAccountIcon sx={{fontSize:20}}/>} title='Competitions'/>
            </Link>

            <Link style={{color:'inherit',textDecoration:'none'}}  to='/login/dashboard/competitors'>
            <Tab icon={<PersonIcon sx={{fontSize:20}}/>} title='Competitors'/>
            </Link>

            <Link style={{color:'inherit',textDecoration:'none'}}  to='/login/dashboard/votes'>
            <Tab icon={<ThumbUpIcon sx={{fontSize:20}}/>} title='Votes'/>
            </Link>
        </div>
    </div>
  )
}

export default TabSection