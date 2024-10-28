import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Link } from 'react-router-dom';

const DashboardPages = [
    {
        title: 'Dashboard',
        icon: <DashboardIcon/>,
        link: '/dashboard'
    },
    {
        title: 'Nominations',
        icon: <PeopleIcon/>,
        link: '/dashboard/nominations'
    },
    {
        title:'Events',
        icon: <EventIcon/>,
        link: '/dashboard/events'
    },
    {
        title:'Contestants',
        icon: <GroupsIcon/>,
        link: '/dashboard/contestants'
    },
    {
        title:'Votes',
        icon: <ThumbUpIcon/>,
        link: '/dashboard/votes'
    },
    {
        title:'Cashout',
        icon: <AssuredWorkloadIcon/>,
        link: '/dashboard/cashout'
    },
    {
        title:'Settings',
        icon: <SettingsApplicationsIcon/>,
        link: '/dashboard/settings'
    },
    {
        title:'Help',
        icon: <HelpCenterIcon/>,
        link: '/dashboard/help'
    }
]
const SideBar = () => {
  return (
    <div className=" w-[100%] bg-gray-100 h-[100%] p-8">
        {
            DashboardPages.map((page,index) => (
                <div key={index} >
                    <Link to={page.link}>
                        <div className="flex gap-3 items-center p-3 rounded-md hover:bg-gray-400 ease-in-out duration-500 cursor-pointer ">
                            <div>{page.icon}</div>
                            <h3>{page.title}</h3>
                        </div>
                    </Link>
                </div>
            ))
        }

    </div>
  )
}

export default SideBar