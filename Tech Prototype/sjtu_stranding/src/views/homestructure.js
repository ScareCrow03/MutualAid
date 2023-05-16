import {Button, Layout, Menu} from 'antd'
import "../css/homestructure.css"
import {
    DesktopOutlined,
    FileOutlined, PayCircleOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    ReadOutlined, HeartOutlined
} from '@ant-design/icons';
import {Link, Outlet} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getUserInfo} from "../services/userInfoService";
import loginview from "./loginview";

const  {Header,Content,Sider} = Layout;
const Homestructure=(props)=>{
    const [user,setUser]=useState()
    const [name,setName]=useState()
    let res
    const getItem=(label, key, icon, children)=>{
        return {
            key,
            icon,
            children,
            label,
        };
    };
    useEffect(()=>{
        console.log("in")
        getUserInfo(localStorage.getItem('userId'),get_callback)
    })
    const get_callback=(data)=>{
        // console.log(data.nickname)
        setName(data.nickname)
    }
    let items = [
        getItem(<Link to="/">主页</Link>, '/',<PayCircleOutlined />),
        getItem(<Link to="/community">社群</Link>, '/community',<DesktopOutlined />),
        getItem(<Link to="/message">消息</Link>, '/message',<TeamOutlined />),
        getItem(<Link to="/favorite">我喜欢的</Link>,'/favorite',<HeartOutlined />),
        getItem(<Link to="/order">交易记录</Link>,'/order',<HeartOutlined />),
        getItem(<Link to="/myview">个人信息</Link>, '/myview', <PieChartOutlined />),
    ];
    return(
        <div classname="home">
            <div className="header">
                <div>
                    <div className={"header-left"}>
                        <div className="title">SJTU Stranding</div>
                        <div>
                            <div className="username" style={{display:"inline-block"}}>WELCOME,{name}</div>
                            <Link to={"/login"} style={{display:"inline-block",marginLeft:50}}>
                                登出
                            </Link>
                        </div>
                    </div>
                    <div className="logo">
                        <img src={require("../pictures/logo.png")} alt={"logo"} className={"logoimg"}/>
                    </div>
                </div>
            </div>
            <Layout>
                <Sider width={200} className="sider" style={{float:"left"}}
                       collapsible={true}>
                    <Menu theme="dark" mode="inline" items={items} >
                    </Menu>
                </Sider>
                <Layout>
                    <Content className="content">
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}
export default Homestructure