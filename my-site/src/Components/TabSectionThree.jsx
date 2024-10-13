import Tab from './Tab'
import './TabSectionThree.css'
import MoneyIcon from '@mui/icons-material/Money';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import { Link } from 'react-router-dom';

const TabSectionThree = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
           <Link to='/login/dashboard/settings' style={{color:'inherit',textDecoration:'none'}}>
           <Tab icon={<SettingsIcon sx={{fontSize:20}}/>} title='Settings'/>
           </Link> 

           <Link to='/login/dashboard/withdraw' style={{color:'inherit',textDecoration:'none'}}>
            <Tab icon={<MoneyIcon sx={{fontSize:20}}/>} title='Wihdraw'/>
            </Link>

            <Link to='/login/dashboard/help' style={{color:'inherit',textDecoration:'none'}}>
            <Tab icon={<HelpCenterIcon sx={{fontSize:20}}/>} title='Help'/>
            </Link>
        </div>
    </div>
  )
}

export default TabSectionThree