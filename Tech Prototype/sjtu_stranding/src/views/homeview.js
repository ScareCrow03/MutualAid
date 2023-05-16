import {Button, Carousel, FloatButton, Form, Input, message, Modal, Upload, Card, Space} from "antd";
import Search from "antd/es/input/Search";
import {Link} from "react-router-dom";
import "../css/homepage.css"
import {
    LoadingOutlined,
    PlusCircleOutlined,
    PlusOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined
} from "@ant-design/icons";
import {useState,useEffect} from "react";
import TextArea from "antd/es/input/TextArea";
import {getItems, saveItem} from "../services/itemService";

const Homeview=(props)=>{
    // let items=props.items
    const [items,setItems]=useState([])
    useEffect(()=>{
        getItems(get_callback)
    },[])
    const [isModalOpen,setIsModalOpen]=useState(false)
    const showmodal=()=>{
        setIsModalOpen(true)
    }
    const addItem=(value)=>{
        console.log(value)
        saveItem(0,localStorage.getItem("userId"),value.name,value.image,value.number,value.description,value.tag1?value.tag1:null,value.tag2?value.tag2:null,value.tag3?value.tag3:null,add_callback)
    }
    const add_callback=(data)=>{
        setIsModalOpen(false);
        getItems(get_callback)
    }
    const get_callback=(data)=>{
        setItems(data)
    }
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
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();
    const handleChange = (info) => {
        if (info.file.status === 'uploading') {
            setLoading(true);
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
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
        <div>
            {/*<Search*/}
            {/*    placeholder="输入搜索内容..."*/}
            {/*    allowClear*/}
            {/*    enterButton="Search"*/}
            {/*    size="large"*/}
            {/*    rootClassName="search"*/}
            {/*/>*/}
            <Carousel autoplay className="carousel">
                <div className="carouselitem">
                    <Link to="/detail/1"><img src={require('../pictures/book1.jpg')} alt="123"/></Link>
                </div>
                <div className="carouselitem">
                    <Link to="/detail/2"><img src={require('../pictures/book2.jpg')}/></Link>
                </div>
                <div className="carouselitem">
                    <Link to="/detail/3"><img src={require('../pictures/book3.jpg')}/></Link>
                </div>
                <div className="carouselitem">
                    <Link to="/detail/4"><img src={require('../pictures/book4.jpg')}/></Link>
                </div>
            </Carousel>
            <Space className={"myspace"} direction={"vertical"}>
            <div style={{width:"100%"}} >
                <div style={{height: 50}} className={"myitem"}>
                    <UserOutlined />
                    我的
                </div>
                <div>
                    {
                        items.map(item=>{
                            if(item.state==0&&item.userId==localStorage.getItem("userId")){
                                return (
                                    <Link to={'detail/'+item.itemId}>
                                        <Card className={"cardq"} hoverable>
                                        <img src={item.image}
                                        //      style={{
                                        //     width:"300px",
                                        //     height:"150px",
                                        //     marginRight:20,
                                        //     marginBottom:20
                                        // }}
                                            className={"image"}
                                        />
                                            </Card>
                                    </Link>
                                )
                            }
                            else{
                                return null
                            }
                        })
                    }
                </div>
            </div>
    <div >
            <div style={{height: 100}} className={"iitem"}>
                <TeamOutlined />
                商品
            </div>
            <div>
                {
                    items.map(item=>{
                        if(item.state==0&&item.userId!=localStorage.getItem("userId")){
                            return (
                                <Link to={'detail/'+item.itemId}>
                                    <Card className={"cardq"} hoverable>
                                    <img src={item.image}
                                    //      style={{
                                    //     width:"300px",
                                    //     height:"150px",
                                    //     float:"left",
                                    //     marginRight:20,
                                    //     marginBottom:20
                                    // }}
                                        className={"image"}
                                    />
                                        </Card>
                                </Link>
                            )
                        }
                        else{
                            return null
                        }
                    })
                }
            </div>
    </div>
                </Space>
            <FloatButton icon={<PlusCircleOutlined />} tooltip={<div>发布商品</div>} onClick={showmodal}/>
            <Modal open={isModalOpen} footer={null} onCancel={()=>{setIsModalOpen(false)}}>
                <Form onFinish={addItem}>
                   <Form.Item label={"商品名称"} name="name" rules={[{
                       required:true,
                       message:"输入商品名称！"
                   }]} style={{marginTop:20}} >
                       <Input/>
                   </Form.Item>
                    <Form.Item label={"图片url"} name="image" rules={[{
                       required:true,
                       message:"输入url！"
                   }]} style={{marginTop:20}}>
                        <Input/>
                        {/*<Upload*/}
                        {/*    name="avatar"*/}
                        {/*    listType="picture-card"*/}
                        {/*    className="avatar-uploader"*/}
                        {/*    showUploadList={false}*/}
                        {/*    // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"*/}
                        {/*    beforeUpload={beforeUpload}*/}
                        {/*    onChange={handleChange}*/}
                        {/*>*/}
                        {/*    {imageUrl ? (*/}
                        {/*        <img*/}
                        {/*            src={imageUrl}*/}
                        {/*            alt="avatar"*/}
                        {/*            style={{*/}
                        {/*                width: 50,*/}
                        {/*                height:80*/}
                        {/*            }}*/}
                        {/*        />*/}
                        {/*    ) : (*/}
                        {/*        uploadButton*/}
                        {/*    )}*/}
                        {/*</Upload>*/}
                    </Form.Item>
                    <Form.Item label={"商品数量"} name="number" rules={[{
                        required:true,
                        message:"输入商品数量！"
                    }]} style={{marginTop:20}} >
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"商品描述"} name="description" rules={[{
                        required:true,
                        message:"输入商品描述！"
                    }]} style={{marginTop:20}} >
                        <TextArea/>
                    </Form.Item>
                    <Form.Item label={"标签1"} name="tag1" style={{marginTop:20}} >
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"标签2"} name="tag2" style={{marginTop:20}} >
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"标签3"} name="tag3" style={{marginTop:20}} >
                        <Input/>
                    </Form.Item>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"} style={{marginLeft:200}}>发布</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}
export default Homeview