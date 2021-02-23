import React from "react";
import "../style/sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";

import Sidebarchat from '../Components/Sidebarchats';

import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import SearchIcon from "@material-ui/icons/Search";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTLZOs_FeAC9didUyEr5-6rzqfEXTMvTHdeA&usqp=CAU" />
        <div className="header_right">
          <IconButton>
            <ChatIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <DonutLargeIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <div className="search_header">
        <div className="boxcontainer">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="search or start new chat" className="searchbox" />
        </div>
      </div>

      <div className="sidebar__chats">
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
          <Sidebarchat />
      </div>
    </div>
  );
};

export default Sidebar;
