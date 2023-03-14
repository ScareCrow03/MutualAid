import React from "react";
import {Avatar, Breadcrumb, Card, Carousel, Layout, Menu, theme} from 'antd';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import "../css/home.css"

const { Header, Content, Sider } = Layout;

export class Homeview extends React.Component{
    carddata=[
        {id:1,name:'123'},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
        {id:2,name:"234"},
    ]
    getItem=(label, key, icon, children)=>{
        return {
            key,
            icon,
            children,
            label,
        };
    };

    items = [
        this.getItem('Option 1', '1', <PieChartOutlined />),
        this.getItem('Option 2', '2', <DesktopOutlined />),
        this.getItem('User', 'sub1', <UserOutlined />, [
            this.getItem('Tom', '3'),
            this.getItem('Bill', '4'),
            this.getItem('Alex', '5'),
        ]),
        this.getItem('Team', 'sub2', <TeamOutlined />, [this.getItem('Team 1', '6'), this.getItem('Team 2', '8')]),
        this.getItem('Files', '9', <FileOutlined />),
    ];

    render(){
        console.log(this.items)
        return(
            <div className="home">
                <Layout >
                    <Sider
                        width={200}
                        className="sider"
                        collapsible={true}
                    >
                        <Avatar size={64} icon={<UserOutlined></UserOutlined>}></Avatar>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={this.items} />
                    </Sider>
                    <Layout>
                        <Header className="header">

                        </Header>
                        <Content className="content">
                            <Breadcrumb className="nav">
                                <Breadcrumb.Item>
                                    User
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Bill
                                </Breadcrumb.Item>
                            </Breadcrumb>
                            <div>
                                <Carousel autoplay className="carousel">
                                    <div className="carouselitem">
                                        1
                                    </div>
                                    <div className="carouselitem">
                                        2
                                    </div>
                                    <div className="carouselitem">
                                        3
                                    </div>
                                    <div className="carouselitem">
                                        4
                                    </div>
                                </Carousel>
                            </div>
                            {this.carddata.map((data)=>(
                                <Card title="title" bordered={false} className="card" hoverable={true}>
                                    <p>{data.id}</p>
                                    <p>{data.name}</p>
                                </Card>
                            ))}
                        </Content>
                    </Layout>
                </Layout>
            </div>

        )
    }
}