import { Link } from 'react-router-dom';
import Tab from './Tab'
import './TabSectionTwo.css'
import AssessmentIcon from '@mui/icons-material/Assessment';
import WorkIcon from '@mui/icons-material/Work';

const TabSectionTwo = ({title}) => {
  return (
    <div className='tab-section-container'>
        <h3>{title}</h3>
        <div>
           <Link style={{color:'inherit',textDecoration:'none'}} to='/login/dashboard/revenue'>
            <Tab icon={<WorkIcon sx={{fontSize:20}}/>} title='Revenue'/>
            </Link>

            <Link style={{color:'inherit',textDecoration:'none'}} to='/login/dashboard/reports'>
            <Tab icon={<AssessmentIcon sx={{fontSize:20}}/>} title='Reports'/>
            </Link>
        </div>
    </div>
  )
}

export default TabSectionTwo