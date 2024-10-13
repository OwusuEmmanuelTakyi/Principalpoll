import './Tab.css'


const Tab = ({icon,title}) => {
  return (
    <div className='tab-container'>

        <div style={{marginTop:6}}>{icon}</div>
        <p>{title}</p>
    </div>
  )
}

export default Tab