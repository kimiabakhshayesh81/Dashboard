import React from "react"
import './SideBar.css'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import MessageIcon from '@mui/icons-material/Message';
import './SideBar.css'
import {Link} from 'react-router-dom'

function SideBar(){
    return(
        <div className="sidebar">
            <div className="sidebarWrapper">

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to= '/' className="link">
                        <li className="sidebarListItem active">
                            <LineStyleIcon className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <TimelineIcon className="sidebarIcon"/>
                            Analytisc
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUpIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <Link to='/user' className="link">
                        <li className="sidebarListItem active">
                            <PersonIcon className="sidebarIcon"/>
                            User
                        </li>
                        </Link>

                        <Link to= '/newuser' className="link">
                        <li className="sidebarListItem">
                            <GroupIcon className="sidebarIcon"/>
                            NewUser
                        </li>
                        </Link>
                        
                        <Link to = '/product' className="link">
                        <li className="sidebarListItem">
                            <StorefrontIcon className="sidebarIcon"/>
                            Product
                        </li>
                        </Link>
                        
                        <li className="sidebarListItem">
                            <PaidIcon className="sidebarIcon"/>
                            Transaction
                        </li>
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>

                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutlineIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div>

                {/* <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <MailOutlineIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon"/>
                            Message
                        </li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default SideBar