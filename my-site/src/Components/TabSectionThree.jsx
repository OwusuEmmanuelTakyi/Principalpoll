import Tab from './Tab'
import './TabSectionThree.css'
import MoneyIcon from '@mui/icons-material/Money';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

const TabSectionThree = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
            <Tab icon={<SettingsIcon sx={{fontSize:20}}/>} title='Settings'/>
            <Tab icon={<MoneyIcon sx={{fontSize:20}}/>} title='Wihdraw'/>
            <Tab icon={<HelpCenterIcon sx={{fontSize:20}}/>} title='Help'/>
        </div>
    </div>
  )
}

export default TabSectionThree