import React from 'react';
import Chat  from './chat.js'
import "../css/chatview.css"
import { useSearchParams } from "react-router-dom";

export function ChatView(props) {
    const [search] = useSearchParams();
    let chatid =parseInt(search.get("chatid"));
    let sender =parseInt(search.get("sender"));
    let receiver =parseInt(search.get("receiver"));
    console.log("sender", sender)
    console.log("receiver", receiver)
    console.log("chatid", chatid)
    return(
        <div className="container1">
            <Chat user1 = {sender} user2 = {receiver} chatid = {chatid}/>
        </div>
    );
}