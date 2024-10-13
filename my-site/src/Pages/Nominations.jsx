import { Box } from "@mui/material"
import HomeNominations from "../Components/HomeNominations"
import TopSection from "../Components/TopSection"

const Nominations = () => {
  return (
    <Box>
       <TopSection/>
       <Box sx={{paddingInline:'2%'}}>
       <HomeNominations/>
       </Box>
     
    </Box>
  )
}

export default Nominations