import React from 'react';
import { Layout, theme } from 'antd';
import { Link } from 'react-router-dom'
import { Outlet } from "react-router-dom";
import { Menu } from 'antd';
import '../css/chatsidebar.css'
import {getChat} from "../services/chatService";
import {getUserInfo} from "../services/userInfoService";
const { Header, Content, Sider, Footer } = Layout;
export class ChatRouter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Cdata:[],
            user:[]
        }
      }
      userI = null;

      componentDidMount(){
          const callback1=(data)=>{
              this.state.Cdata = data;
              // console.log(data);
              console.log("set", this.state.Cdata);
              // this.state.Cdata.map((data)=>{
              //     console.log("receiver", data.receiver);
              //     getUser(data.receiver,callback2)
              // })
              let u = [], siz = this.state.Cdata.length;
              for (let i = siz - 1; i >= 0; i--) {
                // this.state.user.unshift(this.state.userI)
                  if (this.state.Cdata[i].senderInfo.userId != localStorage.getItem("userId")) {
                      // console.log("swap", localStorage.getItem("userId"), this.state.Cdata[i]);
                      this.state.Cdata[i].receiverInfo = this.state.Cdata[i].senderInfo;
                  }
              }
              this.setState({user:u});
              // console.log("callback1", this.state.Cdata, this.state.user);
              let sb = this.state.Cdata;
              this.setState({Cdata: sb});
              console.log(this.state.Cdata)
          }

          getChat(localStorage.getItem("userId"),callback1);
        // this.state.Cdata.map((data)=>{
        //     console.log("123");
        //     getUser(data.receiver,this.callback2)
        //     this.state.user.unshift(this.state.userI)
        // })
          // let u = [], siz = this.Cdata.length;
          // for (let i = siz - 1; i >= 0; i--) {
          //     getUser(this.Cdata[i].receiver, callback2)
          //   // this.state.user.unshift(this.state.userI)
          //     u[i] = this.userI;
          // }
          // this.setState({user:u});
      }

    render(){
          console.log(this.state.Cdata);
          const click=()=>{
              window.location.reload();
          }
        return(
            <div>
                <Layout className={"clayout"}>

                <Sider class="side" width={300} >
                {
                    this.state.Cdata.map((data,index)=>{
                        // console.log("1233", data);
                        return(
                            <div>
                                <Link to={{
                                    pathname: '/message/chat',
                                    search: '?sender=' + data.sender + '&receiver=' + data.receiver  +'&chatid=' +data.chatId,

                                }}
                                      target="_self"
                                >
                                    <div className="item1 item-left1">
                                        <div className="avatar1"><img src={data.receiverInfo.avatar}/></div>
                                        <div className="bubble1 bubble-left1">{data.receiverInfo.nickname}</div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                }
                </Sider>
                    <Outlet />

                </Layout>
            </div>
        );

    }
}
