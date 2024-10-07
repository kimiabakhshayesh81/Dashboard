import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import './TopBar.css'

export default function TopBar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className='logo'>Dashboard Admin</span>
            </div>
            
            <div className='topRight'>

                <div className='topbarIcon'>
                    <NotificationsIcon/>
                    <span className='topbarBadge'>2</span>
                </div>

                <div className='topbarIcon'>
                    <LanguageIcon/>
                    <span className='topbarBadge'>4</span>
                </div>

                <div className='topbarIcon'>
                    <SettingsApplicationsIcon/>
                </div>
                <img src='download.png' alt='' className='topbar-img'/>

            </div>
        </div>
      
    </div>
  )
}
