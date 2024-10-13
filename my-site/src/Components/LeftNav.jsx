import './LeftNav.css'
import TabSection from './TabSection'
import TabSectionThree from './TabSectionThree'
import TabSectionTwo from './TabSectionTwo'
const LeftNav = () => {
  return (
    <div className='left-nav-container'>
        <TabSection title='Pages'/>
        <TabSectionTwo title='Analitics'/>
        <TabSectionThree title='User'/>
    </div>
  )
}

export default LeftNav