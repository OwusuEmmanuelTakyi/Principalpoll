
import { Box } from "@mui/material"
import HomeDashboard from "../Components/HomeDashboard"
import TopSection from "../Components/TopSection"

const Dashboard = () => {
  return (
    <Box>
       <TopSection/>
       <Box sx={{paddingInline:'2%'}}>
       <HomeDashboard/>
       </Box>
     
    </Box>
     

  )
}

export default Dashboard