import React from'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import AddIcon from '@material-ui/icons/Add';
import { Avatar, IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarsOutlinedIcon from '@material-ui/icons/StarsOutlined';
function Header() {
  return (
    <div className='header'>
        <div className="header__left">
          <img src="https://e7.pngegg.com/pngimages/669/256/png-clipart-computer-icons-icon-design-child-green-star-miscellaneous-triangle.png" alt=""/>
          <div className="header__input">
            <SearchIcon />
            <input type ="text" />
          </div>

        </div>
        <div className="header__middle">
          <div className="header__option header__option__active">
            <HomeIcon fontsize="large" />
          </div>
          <div className="header__option">
            <FlagIcon fontsize="large" />
          </div>
          <div className="header__option">
            <SupervisedUserCircleIcon fontsize="large" />
          </div>
          <div className="header__option">
            <SubscriptionsOutlinedIcon fontsize="large" />
          </div>
          <div className="header__option">
            <StorefrontOutlinedIcon fontsize="large" />
          </div>
        </div>
        <div className="header__rating">
          <div className="header__rate">
          <StarsOutlinedIcon fontsize="large" />
          <h4>1.3</h4>
          </div>
        </div>
        <div className="header__right">
        <div className="header__info">
          <Avatar />
          <h4>Rob Drehmann</h4>

        </div>

        <IconButton>
          <AddIcon />
        </IconButton>
        <IconButton>
          <ForumIcon />
        </IconButton>
        <IconButton>
          <NotificationsActiveIcon />
        </IconButton>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
        </div>



    </div>
  )
}
export default Header;
