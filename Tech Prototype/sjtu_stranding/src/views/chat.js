import React, {useEffect, useState} from 'react';
import '../css/chat.css'
import {chat} from '../services/service'
import { user }from '../services/service'
import {getUserInfo} from "../services/userInfoService";
import {getChatInfo, sendChat} from "../services/chatService";
// const Chat=(props)=>{
//     const {userId1,userId2,chatId}=props
//     const [user1,setUser1]=useState()
//     const [user2,setUser2]=useState()
//     const [chatData,setChatData]=useState()
export class Chat extends React.Component{
    constructor(props){
        super(props)
        this.state={
            chatData:null,
            user1: null,
            user2: null
        }
    }
    callback1=(data)=>{
        //setUser1(data)
        this.state.user1 = data;
        this.setState({user1:data})
        console.log("callback1", this.state.user1);
        getUserInfo(this.props.user2, this.callback2);
    }

    callback2=(data)=>{
        //setUser2(data)
        this.state.user2 = data;
        this.setState({user2:data})
        console.log("callback2", this.state.user2);
        getChatInfo(this.props.chatid,this.callback3);
    }
    callback3=(data)=>{
        //setChatData(data)
        this.state.chatData = data;
        this.setState({chatData:data})
        console.log("callback3", this.state.chatData);
        // let height = document.body.scrollHeight;
        // document.body.scrollTop = height;
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.user2 !== this.props.user2){
            getUserInfo(this.props.user1, this.callback1);
            // let height = document.body.scrollHeight;
            // document.body.scrollTop = height;
        }
        // window.scrollTo(0,document.body.scrollHeight);
        // document.body.scrollTop = document.body.scrollHeight;
    }

    componentDidMount(){
        getUserInfo(this.props.user1, this.callback1);
        console.log("mount", this.props.user1, this.props.user2, this.state.chatData);
        // window.scrollTo(0,document.body.scrollHeight);
        // let height = document.body.scrollHeight;
        // document.body.scrollTop = height;
    }

    render(){
        const send=()=>{
           var res=document.getElementById("textarea").value;
            document.getElementById("textarea").value = "";
           console.log(res);
           sendChat(this.props.user1,this.props.user2,res,this.callback3);
            // window.scrollTo(0,document.body.scrollHeight);
            // let height = document.body.scrollHeight;
            // document.body.scrollTop = height;
        }
        return(
            (this.state.user1 == null || this.state.user2 == null || this.state.chatData == null) ? <div></div> :
            <div class="ccontainer">
            <div class="cheaders">
                <div class = "head">
                    {"\n"+"      "+this.state.user2.nickname}
                </div>
            </div>
            <div class="content">
                <div className="item item-center"><span>{"你已添加" + this.state.user2.nickname + "为好友"}</span></div>
             {

                this.state.chatData.map((data)=>{
                if(data.sender == this.props.user1 && data.receiver == this.props.user2){
                    let t = data.time.split(/[-T:.]/);
                     return (
                        <div>
                        <div class="item item-center"><span>{data.time.slice(0, 10) + ' ' + String(new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))).slice(16, 24)}</span></div>
                        <div class="item item-right"><div class="bubble bubble-right">{data.dialog}</div>
                            <div class="avatars"><img src = {this.state.user1.avatar} /></div>
                        </div>
                        </div>
                     )}

                if(data.sender == this.props.user2 && data.receiver == this.props.user1){
                    let t = data.time.split(/[-T:.]/);
                    return (
                        <div>
                           <div class="item item-center"><span>{data.time.slice(0, 10) + ' ' + String(new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))).slice(16, 24)}</span></div>
                           <div class="item item-left">
                               <div class="avatars"><img src={this.state.user2.avatar} /></div>
                               <div class="bubble bubble-left">{data.dialog}</div>
                           </div>
                        </div>
                           )}
               })
             }
        
        </div>
        <div class="input-area">
        <textarea name="text" id="textarea"></textarea>
        <div class="button-area">
        <button id="send-btn" onClick={send}>发 送</button>
        </div>
        </div>
    </div>
        );

    }
}
export default Chat;