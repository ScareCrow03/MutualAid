import "../css/loginview.css"
import {Button, Card, Checkbox, Form, Input, message, Modal, Result, Steps} from "antd";
import {UserOutlined,LockOutlined} from "@ant-design/icons";
import * as PropTypes from "prop-types";
import {userLogin, userRegister_check, userRegister_complete} from "../services/userInfoService";
import {createBrowserHistory} from 'history'
import {useState} from 'react'

const Loginview=(props)=>{
    const history=createBrowserHistory()
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [userId,setUserId]=useState()
    const [messageApi,contextHolder]=message.useMessage()
    const [current, setCurrent] = useState(0);
    const steps = [
        {
            title: '注册账号和密码',
            content: 'First-content',
        },
        {
            title: '完善个人信息',
            content: 'Second-content',
        },
        {
            title: '注册完成',
            content: 'Second-content',
        },
    ];
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));
    function onFinish(value) {
        userLogin(value.username,value.password,login_callback)
    }

    function login_callback(data){
        if(data==-1){
            console.log("NONE");
            alert("账号密码错误！");
        }
        else{
            localStorage.setItem("userId",data)
            history.push('/')
            history.go(0)
        }
    }

    function showmodal(){
        setIsModalOpen(true)
    }

    function reg(value) {
        userRegister_check(value.username,value.password,check_callback)
    }

    function check_callback(data){
        console.log(data)
        if(data.status==0){
            messageApi.open({
                type:"success",
                content:"注册成功！请继续完善您的信息！"
            })
            setUserId(data.data.userId)
            setCurrent(1)
        }
        else{
            messageApi.open({
                type:"error",
                content:"用户名已经存在！"
            })
        }
    }

    function complete_callback() {
        messageApi.open({
            type:"success",
            content:"完成！"
        })
        setCurrent(2)
    }

    function reg2(value) {
        userRegister_complete(userId,value.nickname,value.telephone,value.email,value.address,"http://img3m9.ddimg.cn/75/6/25067469-1_u_2.jpg",value.qq,value.description,complete_callback)
    }

    return (
        <div className={"login"}>
            <Card className={"login-container"}>
                <Form
                    className="login-form"
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码！',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="密码"
                        />
                    </Form.Item>
                    {/*<Form.Item>*/}
                    {/*    <Form.Item name="remember" valuePropName="checked" noStyle>*/}
                    {/*        <Checkbox>Remember me</Checkbox>*/}
                    {/*    </Form.Item>*/}

                    {/*    <a className="login-form-forgot" href="">*/}
                    {/*        Forgot password*/}
                    {/*    </a>*/}
                    {/*</Form.Item>*/}

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" block={true}>
                            登录
                        </Button>
                        或 <Button style={{marginTop:20}} type={"primary"} onClick={showmodal}>立即注册!</Button>
                    </Form.Item>
                </Form>
            </Card>
            <Modal open={isModalOpen} footer={null} onCancel={()=>{setIsModalOpen(false)}}>
                <Steps current={current} items={items} style={{marginTop:30}}/>
                {contextHolder}
                {
                    current==0&&(
                        <Form onFinish={reg} style={{marginTop:30}}>
                            <Form.Item label={"用户名"} name="username" rules={[{required:true,message:"输入用户名！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"密码"} name="password" rules={[{required:true,message:"输入密码！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType={"submit"}>注册</Button>
                            </Form.Item>
                        </Form>
                    )
                }
                {
                    current==1&&(
                        <Form onFinish={reg2} style={{marginTop:30}}>
                            <Form.Item label={"昵称"} name="nickname" rules={[{required:true,message:"输入昵称！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"电话"} name="telephone" rules={[{required:true,message:"输入手机号！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"邮箱"} name="email" rules={[{required:true,message:"输入邮箱！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"地址"} name="address" rules={[{required:true,message:"输入地址！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"qq"} name="qq" rules={[{required:true,message:"输入qq！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item label={"介绍"} name="description" rules={[{required:true,message:"输入简介！"}]}>
                                <Input/>
                            </Form.Item>
                            <Form.Item>
                                <Button htmlType={"submit"}>完成！</Button>
                            </Form.Item>
                        </Form>
                    )
                }
                {
                    current==2&&(<Result
                            status="success"
                            title="注册成功！"
                        />
                    )
                }
                {/*<Form onFinish={reg}>*/}
                {/*    <Form.Item label={"用户名"} name="username" rules={[{required:true,message:"输入用户名！"}]}>*/}
                {/*        <Input/>*/}
                {/*    </Form.Item>*/}
                {/*    <Form.Item label={"密码"} name="password" rules={[{required:true,message:"输入密码！"}]}>*/}
                {/*        <Input/>*/}
                {/*    </Form.Item>*/}
                {/*    /!*<Form.Item label={"昵称"} name="nickname" rules={[{required:true,message:"输入昵称！"}]}>*!/*/}
                {/*    /!*    <Input/>*!/*/}
                {/*    /!*</Form.Item>*!/*/}
                {/*    /!*<Form.Item label={"昵称"} name="nickname" rules={[{required:true,message:"输入昵称！"}]}>*!/*/}
                {/*    /!*    <Input/>*!/*/}
                {/*    /!*</Form.Item>*!/*/}
                {/*    /!*<Form.Item label={"昵称"} name="nickname" rules={[{required:true,message:"输入昵称！"}]}>*!/*/}
                {/*    /!*    <Input/>*!/*/}
                {/*    /!*</Form.Item>*!/*/}
                {/*    /!*<Form.Item label={"昵称"} name="nickname" rules={[{required:true,message:"输入昵称！"}]}>*!/*/}
                {/*    /!*    <Input/>*!/*/}
                {/*    /!*</Form.Item>*!/*/}
                {/*    <Form.Item>*/}
                {/*        <Button htmlType={"submit"}>注册</Button>*/}
                {/*    </Form.Item>*/}
                {/*</Form>*/}
            </Modal>
        </div>
    )
}

export default Loginview