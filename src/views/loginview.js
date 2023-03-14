import React from 'react'
import {history} from "../utils/history";
import {Button, Card, Checkbox, Form, Input} from 'antd';
import '../css/login.css'
export class Loginview extends React.Component{

    onfinish=(value)=>{
        console.log(value);
        history.push({pathname:"/"})
        history.go(0)
    };

    render(){
        return (
            <div className="login">
                <Card className="login-container">
                    <img src="https://www.car-brand-names.com/wp-content/uploads/2015/07/Jaguar-logo-3.jpg" className="login-logo" alt="111" />
                    <Form
                        className="login-form"
                        onFinish={this.onfinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{
                                required:true,
                                message:"Input username"
                            }]}
                            >
                            <Input size="large" placeholder="Input username"/>
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{
                                required:true,
                                message:"Input password"
                            }]}>
                            <Input.Password size="large" placeholder="Input password"/>
                        </Form.Item>
                        <Form.Item
                            name="checked"
                            // rules={[{
                            //     required:true,
                            //     message:"Agree the agreement"
                            // }]}
                            >
                            <Checkbox className="login-checkbox" checked="true">
                                我已经阅读同意用户协议和隐私条款
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-submit" >
                                登录
                            </Button>
                            <Button type="primary" htmlType="submit" className="login-register" >
                                注册
                            </Button>
                        </Form.Item>
                    </Form>

                </Card>
            </div>
        )
    }
}