import Tab from './Tab'
import './TabSection.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const TabSection = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
            <Tab icon={<DashboardIcon sx={{fontSize:20}}/>} title='Dashboard'/>
            <Tab icon={<HowToRegIcon sx={{fontSize:20}}/>} title='Nominations'/>
            <Tab icon={<SupervisorAccountIcon sx={{fontSize:20}}/>} title='Competitions'/>
            <Tab icon={<PersonIcon sx={{fontSize:20}}/>} title='Competitors'/>
            <Tab icon={<ThumbUpIcon sx={{fontSize:20}}/>} title='Votes'/>
        </div>
    </div>
  )
}

export default TabSection