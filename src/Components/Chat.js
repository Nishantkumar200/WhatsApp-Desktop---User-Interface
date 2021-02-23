import React from "react";
import "../style/chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";

import MoodIcon from "@material-ui/icons/Mood";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chat___header">
        <div className="left">
          <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3bfNsJRRtwrs16z5CMyENvyAAE1GAmqE8ew&usqp=CAU" />
          <div className="info">
            <h2>Nishant Kumar</h2>
            <p>last seen Fri , 04 Sep 2020</p>
          </div>
        </div>

        <div className="rightIcon">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="chatbody">
        <div className="chatReciever">
          <p>
           When you are coming to campus ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chatSender">
          <p>
           Coming on Saturday ! bro {" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chatReciever">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chatSender">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chatSender">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chatSender">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chatReciever">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>

        <div className="chatReciever">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
        <div className="chatReciever">
          <p>
            How are you doing ?{" "}
            <span className="chatSendertime">{new Date().toUTCString()}</span>
          </p>
        </div>
      </div>

      <div className="bottombar">
        <div className="left__section">
          <MoodIcon />
          <AttachFileIcon />
        </div>
        <div className="middle_section">
          <input type="text" placeholder="Type a message" className="message" />
        </div>
        <div className="right__section">
          <MicIcon />
        </div>
      </div>
    </div>
  );
};

export default Chat;
