import './HomeDashboard.css'
import LeftNav from './LeftNav'
import MainContent from './MainContent'
const HomeDashboard = () => {
  return (
    <div className='container'>
        <LeftNav/>
        <MainContent/>
    </div>
  )
}

export default HomeDashboard