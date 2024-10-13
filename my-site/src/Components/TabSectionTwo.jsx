import Tab from './Tab'
import './TabSectionTwo.css'
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

const TabSectionTwo = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
            <Tab icon={<WorkIcon sx={{fontSize:20}}/>} title='Revenue'/>
            <Tab icon={<AssessmentIcon sx={{fontSize:20}}/>} title='Reports'/>
        </div>
    </div>
  )
}

export default TabSectionTwo