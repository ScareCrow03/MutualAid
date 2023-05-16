import {useNavigate, useParams} from "react-router-dom"
import "../css/communitydetailview.css"
import {Card,Button,Modal,Form,Input,message} from 'antd'
import {PlusCircleOutlined,HeartOutlined} from '@ant-design/icons';
import React, {useEffect, useState} from 'react'
import {savePost, getCommunityInfo,addSubscribe,checkSubscribe,delSubscribe} from "../services/communityService";
import {addChat} from "../services/chatService";
const Communitydetailview=()=>{
    const params=useParams();
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isSubscribed,setIsSubscribed]=useState()
    const {TextArea}=Input
    const [news,setNews]=useState()
    const [messageApi,contextHolder]=message.useMessage()
    const [messageApi2,contextHolder2]=message.useMessage()
    const navigate=useNavigate()
    useEffect(()=>{
        getCommunityInfo(params.id,callback)
        checkSubscribe(localStorage.getItem("userId"),params.id,check_callback)
    },[])
    function callback(data){
        setNews(data)
    }
    function check_callback(data){
        setIsSubscribed(data)
    }
    function showmodal(){
        setIsModalOpen(true)
    }
    function handlecancel(){
        setIsModalOpen(false)
    }
    function handleform(value){
        //TODO:发布post请求
        savePost(params.id,localStorage.getItem("userId"),value.info,add_callback)
        handlecancel()
    }
    function add_callback(data){
        getCommunityInfo(params.id,callback)
    }
    function add_subscribe(){
        addSubscribe(localStorage.getItem("userId"),params.id,subs_callback)
    }
    function del_subscribe(){
        delSubscribe(localStorage.getItem("userId"),params.id,del_subs_callback)
    }
    function subs_callback(){
        messageApi.open({
            type:"success",
            content:"关注成功！"
        })
        getCommunityInfo(params.id,callback)
        checkSubscribe(localStorage.getItem("userId"),params.id,check_callback)
    }
    function  del_subs_callback(){
        messageApi2.open({
            type:"success",
            content:"已取消关注!"
        })
        getCommunityInfo(params.id,callback)
        checkSubscribe(localStorage.getItem("userId"),params.id,check_callback)
    }
    // const news=[
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     },
    //     {
    //         userName:"Iloly",
    //         time:"2023-5-12 22:10:15",
    //         info:"我大郑老师阅片无数"
    //     }

    // ]
    return(
        <div className="news">
            {contextHolder}
            {contextHolder2}
            <Button icon={<PlusCircleOutlined />} onClick={showmodal}>
                我要发贴
            </Button>
            {
                isSubscribed?(<Button icon={<HeartOutlined />} onClick={del_subscribe} type={"primary"}>
                    取消关注
                </Button>):(<Button icon={<HeartOutlined />} onClick={add_subscribe}>
                    关注社群
                </Button>)
            }

            {news?.map(news=>{
                let t = news.time.split(/[-T:.]/);
                return(
                    <>
                        <Card className={"card"} style={{
                            marginTop:20
                        }}>
                            <div>
                                <div >发帖人:{news.user.nickname}</div>
                                <div >发帖时间:{news.time.slice(0, 10) + ' ' + String(new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]))).slice(16, 24)}</div>
                            </div>
                            <div className={"newsinfo"}>
                                {news.info}
                            </div>
                            {
                                news.user.userId==localStorage.getItem("userId")?null:<Button type={"primary"} onClick={()=>{
                                    addChat(localStorage.getItem("userId"),news.user.userId,null)
                                    navigate('/message')
                                }
                                }>私聊</Button>
                            }
                        </Card>
                    </>
                )
            })}
            <Modal open={isModalOpen} footer={null} title={"发布帖子"} onCancel={handlecancel}>
                <Form onFinish={handleform}>
                    <Form.Item name="info" rules={[{
                        required:true,
                        message:'请输入内容！'
                    }]}>
                        <TextArea rows={10}/>
                    </Form.Item>
                    <Form.Item>
                        <Button htmlType={'submit'}>发布</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default Communitydetailview