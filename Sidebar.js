import React from'react'
import "./Sidebar.css"
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

function Sidebar() {
  return (
    <div className="Sidebar">
      <SidebarRow src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
      title='JoHn DoE' />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
      <SidebarRow Icon={PeopleIcon} title='Friends'/>
      <SidebarRow Icon={ChatIcon}title='Messenger'/>
      <SidebarRow Icon={StorefrontIcon}title='MarketPlace'/>
      <SidebarRow Icon={VideoLibraryIcon}title='Videos'/>
      <SidebarRow Icon={ExpandMoreOutlinedIcon}title='More'/>




    </div>
  )
}
export default Sidebar;
