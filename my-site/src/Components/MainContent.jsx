import { blue, green, grey } from '@mui/material/colors';
import './MainContent.css'
import LaunchIcon from '@mui/icons-material/Launch';
import { Box, Divider, Grid, Typography } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import MovingIcon from '@mui/icons-material/Moving';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const MainContent = () => {
  return (
    <div className='content-container'>
        <div className='first-section'>
            <h1>Welcome</h1>
            <div className='right-side-buttons'>
                <div className="button">
                    <p>Eanings</p>
                    <LaunchIcon sx={{color:grey[600],fontSize:17}}/>
                </div>
                <div className="second-button">
                    <p>View Reports</p>
                </div>
            </div>
        </div>

        <div className="second-section">
            <Grid container spacing={2} gap={3}>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={3}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <GroupsIcon sx={{color:'violet'}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Competitions</p>
                        </div>
                    </div>
                </Grid>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={3}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <MovingIcon sx={{color:green[400]}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Votes today</p>
                        </div>
                    </div>
                </Grid>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={3}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <ScheduleIcon sx={{color:blue[500]}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Competitors</p>
                        </div>
                    </div>
                </Grid>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={3}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <MenuBookIcon sx={{color:blue[700]}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Categories</p>
                        </div>
                    </div>
                </Grid>
                
            </Grid>
        </div>

        <div className="third-section">
           <Box sx={{flex:2,width:{sx:'100%',lg:'50%',},display:'flex',height:'100%',flexDirection:'column', gap:2,alignItems:'center'}}>
            <Box boxShadow={1} className='current-progress-chart' sx={{width:'100%'}}>
                <Typography textAlign='center' sx={{fontWeight:'700',fontSize:18}}>Current progress chart</Typography>
                <Divider/>
                <Box className='data'>
                        <Typography sx={{color:grey[500],fontWeight:'700',fontSize:28}}>No Data</Typography>
                </Box>
            </Box>
            <Box sx={{width:'100%',height:'30%'}}>
                <Grid container gap={2}>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={5}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <MenuBookIcon sx={{color:blue[700]}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Categories</p>
                        </div>
                    </div>
                </Grid>
                <Grid boxShadow={1} item xs={12} sm={12} md={6} lg={5}>
                    <div className="grid-item">
                        <div className="icon-container">
                          <MenuBookIcon sx={{color:blue[700]}}/>
                        </div>
                        
                        <div className="right-side">
                            <h3 className="number">0</h3>
                            <p className="title">Categories</p>
                        </div>
                    </div>
                </Grid>
                </Grid>
            </Box>
          
           </Box>

           <Box boxShadow={1} className='progress' sx={{width:{xs:'100%',lg:'25%'},flex:1,height:'100%',display:'flex',flexDirection:'column',gap:2}}>
            <Box>

            </Box>
            <Typography sx={{fontWeight:'700',fontSize:18}}>Progress</Typography>
            <Divider/>
            <Box className='data' sx={{height:'90%'}}>
                <Typography sx={{color:grey[500],fontWeight:'700',fontSize:28}}>No data</Typography>
            </Box>
           </Box>
           <Box boxShadow={1} sx={{width:{xs:'100%',lg:'25%'},flex:1,p:2,height:'100%'}}>

            <Box sx={{display:'flex',gap:2}}>
                <Typography sx={{fontWeight:'700',fontSize:18}}>Recent Votes</Typography>
                <Box sx={{display:'flex',gap:1}}>
                <Typography sx={{color:grey[400],fontWeight:'700'}}>Descending</Typography>
                <ExpandMoreIcon sx={{color:grey[400],fontWeight:'700'}}/>
                </Box>
            </Box>
           
            
            
            <Divider/>
           </Box>
        </div>
    </div>
  )
}

export default MainContent