import React, {useEffect, useState} from "react";
import {delFavorite, getFavorite} from "../services/favoriteService";
import {Button, Card, Tag, message, Modal, Input, Form, Rate} from "antd";
import {getOrders, saveOrder, scoreOrder} from "../services/orderService";
import "../css/orderview.css"

// const State=(props)=>{
//     const {state,userId,orderId}=props
//     const [messageApi,contextHolder]=message.useMessage()
//     const callback=(data)=>{
//         messageApi.open({
//             type:"success",
//             content:"确认成功"
//         })
//     }
//     const confirm=()=>{
//         saveOrder(orderId,0,callback);
//     }
//     if(state==1){
//         return (
//             <div style={{float: "right", marginRight: 50}}>
//                 <Tag color={"green"}>
//                     交易已完成
//                 </Tag>
//             </div>
//         )
//     }
//     else if(state==0){
//         if(localStorage.getItem("userId")==userId){
//             return (
//                 <div style={{float: "right", marginRight: 50}}>
//                     <Button type={"primary"} onClick={confirm}>确认交易</Button>
//                 </div>
//             )
//         }
//         else{
//             return (
//                 <Tag color={"green"} style={{float: "right", marginRight: 50}}>等待卖家确认。。。</Tag>
//             )
//         }
//     }
//     else if(state==2){
//         return (
//             <div style={{float: "right", marginRight: 50}}>
//                 <Tag color={"red"}>
//                     卖家已拒绝交易
//                 </Tag>
//             </div>
//         )
//     }
//     else{
//         return (
//             <div style={{float: "right", marginRight: 50}}>
//                 <Tag color={"red"}>
//                     卖家已取消交易
//                 </Tag>
//             </div>
//         )
//     }
// }

const Orderview=()=> {
    let [orders, setOrders] = useState([])
    const [messageApi,contextHolder]=message.useMessage()
    const [isModalOpen,setIsModalOpen]=useState(false)
    const scoref=()=>{
        setIsModalOpen(true)
    }
    const State=(props)=>{
        const addscore=(value)=>{
            console.log(value)
            scoreOrder(orderId,value.score,score_callback)
            getOrders(localStorage.getItem("userId"), get_callback)
        }
        const score_callback=(data)=>{
            messageApi.open({
                type:"success",
                content:"评分成功！"
            })
            setIsModalOpen(false)
        }
        const {state,userId,orderId,score}=props
        const callback=(data)=>{
            messageApi.open({
                type:"success",
                content:"确认成功"
            })
            getOrders(localStorage.getItem("userId"), get_callback)
        }
        const callback_r=(data)=>{
            messageApi.open({
                type:"success",
                content:"拒绝成功"
            })
            getOrders(localStorage.getItem("userId"), get_callback)
        }
        const confirm=()=>{
            saveOrder(orderId,1,callback);
        }
        const reject=()=>{
            saveOrder(orderId,2,callback_r);
        }
        if(state==1){
            if(userId==localStorage.getItem("userId")){
                return (
                    <div style={{float: "right", marginRight: 50}}>
                        <Tag color={"green"}>
                            交易已完成
                        </Tag>
                        <br/>
                        <br/>
                        <div>
                            当前用户评分:{score==0?"用户暂未评分":score}
                        </div>
                    </div>
                )
            }
            else{
                return (
                    <>
                        <div style={{float: "right", marginRight: 50}}>
                            <Tag color={"green"}>
                                交易已完成
                            </Tag>
                            <br/>
                            <br/>
                            <Button onClick={scoref}>
                                为卖家打分
                            </Button>
                        </div>
                        <Modal title={"为卖家打分"} open={isModalOpen} footer={null} onCancel={()=>{setIsModalOpen(false)}}>
                            <Form onFinish={addscore}>
                                <Form.Item name="score" initialValue={score}>
                                    <Rate allowHalf />
                                </Form.Item>
                                <Form.Item>
                                    <Button type={"primary"} htmlType={"submit"} >提交</Button>
                                </Form.Item>
                            </Form>
                        </Modal>
                    </>

                )
            }
        }
        else if(state==0){
            if(localStorage.getItem("userId")==userId){
                return (
                    <div style={{float: "right", marginRight: 50}}>
                        <Button type={"primary"} onClick={confirm}>确认交易</Button>
                        <Button danger onClick={reject} style={{marginLeft:20}}>拒绝交易</Button>
                    </div>
                )
            }
            else{
                return (
                    <Tag color={"green"} style={{float: "right", marginRight: 50}}>等待卖家确认。。。</Tag>
                )
            }
        }
        else if(state==2){
            return (
                <div style={{float: "right", marginRight: 50}}>
                    <Tag color={"red"}>
                        卖家已拒绝交易
                    </Tag>
                </div>
            )
        }
        else{
            return (
                <div style={{float: "right", marginRight: 50}}>
                    <Tag color={"red"}>
                        卖家已取消交易
                    </Tag>
                </div>
            )
        }
    }
    function get_callback(data) {
        console.log(data)
        setOrders(data.reverse())
    }

    function del_callback(data) {
        getFavorite(localStorage.getItem("userId"), get_callback)
        // addFavorite(localStorage.getItem("userid"),)
    }

    useEffect(() => {
        getOrders(localStorage.getItem("userId"), get_callback)
    }, [])

    return (
        <div>
            {contextHolder}
            {
                orders?.map(order => {
                    return (
                        <Card className={"ocard"}>
                            <div>
                                <div style={{float: "left"}}>
                                    <img src={order.item.image} style={{width: 80, height: 100}}/>
                                </div>
                                <div style={{float: "left", marginLeft: 50}}>
                                    {order.item.name}
                                </div>
                                <div style={{float: "left", marginLeft: 50}}>
                                    {order.item.tag1 == null ? null : <Tag>{order.item.tag1}</Tag>}
                                    {order.item.tag2 == null ? null : <Tag>{order.item.tag2}</Tag>}
                                    {order.item.tag3 == null ? null : <Tag>{order.item.tag3}</Tag>}
                                </div>
                                <div>
                                    {localStorage.getItem("userId")==order.userId?<div>买家:{order.buyerInfo.nickname}</div>:<div>卖家:{order.userInfo.nickname}</div>}
                                </div>
                            </div>
                            {
                                // localStorage.getItem("userId")==order.userId?(<div style={{float: "right", marginRight: 50}}>
                                //     <Button type={"primary"} onClick={() => {
                                //         delFavorite(localStorage.getItem("userId"), order.item.itemId, del_callback)
                                //     }}>确认交易</Button>
                                // </div>):(<Tag color={"green"} style={{float: "right", marginRight: 50}}>等待卖家确认。。。</Tag>)1
                            }
                            <State state={order.state} userId={order.userId} orderId={order.orderId} score={order.score}></State>
                            {/*<div style={{float: "right", marginRight: 50}}>*/}
                            {/*    <Button type={"primary"} onClick={() => {*/}
                            {/*        delFavorite(localStorage.getItem("userId"), order.item.itemId, del_callback)*/}
                            {/*    }}>删除</Button>*/}
                            {/*</div>*/}
                        </Card>
                    )
                })
            }
        </div>
    )
}
export default Orderview