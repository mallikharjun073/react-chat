import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { ChatContext } from "../context/ChatContext";
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <button onClick={()=>signOut(auth)}>logout</button>
        </div>
      </div>
      <Messages />
      <Input/>
    </div>
  );
};

export default Chat;
