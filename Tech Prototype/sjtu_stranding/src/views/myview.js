import React, {useState} from 'react';
import {Table, Layout, Carousel, Tag, Row, Col, Form, message, Input, Button} from 'antd'
import {getUserInfo, saveUserInfo} from "../services/userInfoService";
import * as userInfoService from "../services/userInfoService";
import TextArea from "antd/es/input/TextArea";
import isNumeric from "antd/es/_util/isNumeric";
import { Rate } from 'antd';
import "../css/myview.css"
import { Descriptions } from 'antd';
import { Image } from 'antd';
import { UploadOutlined ,LoadingOutlined} from '@ant-design/icons';
import type,{ UploadProps } from 'antd';
import {   Space, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    if (!isJpgOrPng) {
        message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = true;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
};
export default class Myview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.userId,
            nickname: "",
            telephone: "",
            email:"",
            address: "",
            score:"",
            avatar:"",
            qq:"",
            description: "",
            loading:false,
            imageUrl:null,
        };
    }
    formRef = React.createRef();
    callback = (data) => {
        console.log(data);
        this.setState({
            userId:data.userID,
            nickname: data.nickname,
            telephone: data.telephone,
            email: data.email,
            address: data.address,
            score:data.score,
            avatar:data.avatar,
            qq:data.qq,
            description: data.description,
        }, () => {//setState的回调函数
            this.formRef.current.setFieldsValue({
                userID:this.state.userID,
                nickname: this.state.nickname,
                telephone: this.state.telephone,
                email: this.state.email,
                address: this.state.address,
                score:this.state.score,
                avatar:this.state.avatar,
                qq:this.state.qq,
                description: this.state.description,
            })

        });
    };


    componentDidMount() {
        console.log(this.props)
        getUserInfo(localStorage.getItem("userId"), this.callback);
    }

    render() {
       // const [loading, setLoading] = useState(false);
        //const [imageUrl, setImageUrl] = useState();
        const handleChange = (info) => {
            if (info.file.status === 'uploading') {
                //setLoading(true);
                this.setState({loading:true});
                return;
            }
            if (info.file.status === 'done') {
                // Get this url from response in real world.
                getBase64(info.file.originFileObj, (url) => {
                   // setLoading(false);
                   // setImageUrl(url);
                    this.setState({loading:false});
                    this.setState({imageUrl:url})
                });
            }
        };
        const uploadButton = (
            <div>
                {this.state.loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div
                    style={{
                        marginTop: 8,
                    }}
                >
                    Upload
                </div>
            </div>
        );
        return (
            <div className={"myinfo"}>

                <Form
                    ref={this.formRef}
                    labelCol={{span: 4}}
                    wrapperCol={{span: 14}}
                    layout="horizontal"
                    // initialValues={{size: componentSize}}
                    // onValuesChange={onFormLayoutChange}
                    // size={componentSize as SizeType}
                    style={{maxWidth: 600}}
                    onFinish={(values) => {
                        // console.log(values);
                        saveUserInfo(localStorage.getItem("userId"), values, this.callback);
                        message.success("保存成功！");
                    }}
                >
                    {/*<Form.Item label="用户名">*/}
                    {/*    <Input value={this.state.username} />*/}
                    {/*</Form.Item>*/}
                    <Form.Item
                        label="昵称" name="nickname"
                        rules={[
                            {
                                required: true,
                                message: '请输入昵称！',
                            },
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        label="电话" name="telephone"
                        rules={[
                            {
                                required: true,
                                message: '请输入电话号码！',
                            },
                            ({getFieldValue}) => ({
                                validator(_, value) {
                                    const x = getFieldValue('telephone'), len = x.length;
                                    for (let i = 0; i < len; i ++)
                                        if (!(x[i] == '-' || x[i] >= '0' && x[i] <= '9'))
                                            return Promise.reject(new Error('请输入正确的电话号码！'));
                                    return Promise.resolve();
                                },
                            }),
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="邮箱"
                        rules={[
                            {
                                required: true,
                                message: '请输入邮箱！',
                            }
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="address"
                        label="地址"
                        rules={[
                            {
                                required: true,
                                message: '请输入地址！',
                            }
                        ]}
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="score"
                        label="评分">

                        <Rate disabled defaultValue={this.state.score} />
                    </Form.Item>
                    <Form.Item
                        name="avatar"
                        label="头像"
                        rules={[
                            {
                                required: true,
                                message: '请上传头像！',
                            }
                        ]}
                    >
                        <Upload
                            name="avatar"
                            listType="picture-card"
                            className="avatar-uploader"
                            showUploadList={false}
                            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                        >
                            {this.state.imageUrl ? (
                                <img
                                    src={this.state.imageUrl}
                                    alt="avatar"
                                    style={{
                                        width: '100%',
                                    }}
                                    className="avatar"
                                />
                            ) : (
                                uploadButton
                            )}
                        </Upload>

                    </Form.Item>
                    <Form.Item
                        name="qq"
                        label="qq"
                    >
                        <Input allowClear/>
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="备注"
                    >
                        <TextArea rows={4} />
                    </Form.Item>
                    <Form.Item>
                        <Button style={{backgroundColor:"white",marginLeft:50}} htmlType="submit">
                            保存
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}