import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import Ella_Mai from './Ella_Mai.png';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FlagIcon from '@material-ui/icons/Flag';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import HistoryTwoToneIcon from '@material-ui/icons/HistoryTwoTone';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';





function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow src={Ella_Mai} fontSize='large' title='Ella Mai'/>
            {/*  <SidebarRow src={user.photoURL} title={user.displayname}/>  */}
            <div className=''> <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/></div>
            <SidebarRow Icon={PeopleAltIcon} title='Friends'/>
            <SidebarRow Icon={SupervisedUserCircleRoundedIcon} title='Groups'/>
            <SidebarRow Icon={LiveTvIcon} title='Watch' />
            <SidebarRow Icon={CalendarTodayIcon} title='Events'/>
            <SidebarRow Icon={HistoryTwoToneIcon } title='Memories' />
            <SidebarRow Icon={BookmarkIcon} title='Saved' />
            <SidebarRow Icon={FlagIcon} title='Pages'/>
            <SidebarRow Icon={ExpandMoreIcon} title='More'/>
            <SidebarRow Icon='' title=''/>
            


        </div>
    );
    
}

export default Sidebar;
