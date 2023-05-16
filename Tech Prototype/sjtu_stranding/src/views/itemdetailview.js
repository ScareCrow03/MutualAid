import Search from "antd/es/input/Search";
import "../css/itemdetailview.css";
import type, {Button, Tag} from "antd";
import {addFavorite} from "../services/favoriteService";
import {message} from "antd";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import {getUserInfo} from "../services/userInfoService";
import {getItem} from "../services/itemService";
import {addChat} from "../services/chatService";
import {useNavigate} from "react-router-dom";
import {addOrder} from "../services/orderService"

const Itemdetailview=(props)=>{
    const [user,setUser]=useState([]);
    const [messageApi, contextHolder] = message.useMessage();
    const [item,setItem]=useState([]);
    const params=useParams();
    // const item=props.item
    const navigate=useNavigate()
    // const user={
    //     userid:2,
    //     nickname:'ILoLy',
    //     telephone:'1501740364',
    //     email:'iloly10@sjtu.edu.cn',
    //     address:'SJTU-X12',
    //     score:'4.8',
    //     avatar:'http://img3m7.ddimg.cn/48/0/24106647-1_w_6.jpg',
    //     qq:'3440233385',
    //     description:'我是用户zyc！'
    // }
    useEffect(()=>{
        console.log(params.id)
        getItem(params.id,getitem_callback)
    },[])
    const getitem_callback=(data)=>{
        console.log(data)
        setItem(data)
        getUserInfo(data.userId,getuser_callback)
    }
    const getuser_callback=(data)=>{
        setUser(data)
    }
    function like_callback() {
        messageApi.open({
            type:'success',
            content:'收藏成功！'
        })
    }

    function like(){
        // console.log(localStorage.getItem("userId"))
        addFavorite(localStorage.getItem("userId"),item.itemId,like_callback)
    }

    const chatto=()=>{
        addChat(localStorage.getItem("userId"),user.userId,null)
        navigate('/message')
    }

    const trade=()=>{
        addOrder(item.itemId,localStorage.getItem("userId"),trade_callback)
    }

    const trade_callback=()=>{
        messageApi.open({
            type:'success',
            content:"已生成交易订单，等待卖家确认"
        })
    }

    return(
        <div>
            {contextHolder}
            <div className="itemdetail">
                <img src={item.image} className={"itemimage"}/>
                <div className={"description"}>
                    物品名称:  {item.name}<br/><br/>
                    用户评分:  {user.score}<br/><br/>
                    用户名称:  {user.nickname}<br/><br/>
                    简介: {item.description}<br/><br/>
                    标签1：{item.tag1?<Tag color={"green"}>{item.tag1}</Tag>:<Tag>暂无</Tag>}<br/><br/>
                    标签2：{item.tag2?<Tag color={"green"}>{item.tag2}</Tag>:<Tag>暂无</Tag>}<br/><br/>
                    标签3：{item.tag3?<Tag color={"green"}>{item.tag3}</Tag>:<Tag>暂无</Tag>}<br/><br/>
                </div>
                {
                    localStorage.getItem("userId")==user.userId?null:<div className={"buttons"}>
                        <Button type={"primary"} className={"button"} onClick={chatto}>私聊</Button>
                        <Button type={"primary"} className={"button"} onClick={trade}>交易</Button>
                        <Button type={"primary"} className={"button"} onClick={like}>喜欢</Button>
                    </div>
                }
            </div>
        </div>
    )
}
export default Itemdetailview