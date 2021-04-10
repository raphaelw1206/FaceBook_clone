import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import facebook_logo  from './facebook_logo.png';
import HomeIcon from "@material-ui/icons/Home"; 
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SupervisedUserCircleRoundedIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { Avatar } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// npm install --save-dev @iconify/react @iconify-icons/mdi
import { Icon, InlineIcon } from '@iconify/react';
import facebookMessenger from '@iconify-icons/mdi/facebook-messenger';


function Header() {
    return (
      <div className="header">
        <div className="header-left">
          <img className="facebook-logo" src={facebook_logo} alt="" />

          <div className="header-input">
            <SearchIcon fontSize="large" /> <input placeholder='Search Facebook' type="text" />
          </div>
        </div>

        <div className="header-center">
          <div className="option-icon home">
            <HomeIcon fontSize="large" />
          </div>
          <div className="option-icon people">
            <PeopleAltIcon fontSize="large" />
          </div>
          <div className="option-icon tv">
            <LiveTvIcon fontSize="large" />
          </div>
          <div className="option-icon group">
            <SupervisedUserCircleRoundedIcon fontSize='large' />
          </div>
          <div className="option-icon game">
            <SportsEsportsIcon fontSize="large" />
          </div>
        </div>

        <div className="header-right">
          <div className="header-info">
            <div className="avatar-icon"></div>
              <Avatar  src="" />
              <h4>Raphael Waller</h4>
          </div>

          <div className="social-side">
            <div className="add-icon">
              <IconButton>
                <AddIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="forum-icon">
              <IconButton>
                <ForumIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="notification-icon">
              <IconButton>
                <NotificationsActiveIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="expand-icon">
              <IconButton>
                <ExpandMoreIcon fontSize="large" />
              </IconButton>
            </div>
            <div className="Facebook-icon">
              <IconButton>
                <Icon icon={facebookMessenger} height='36px' />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Header








