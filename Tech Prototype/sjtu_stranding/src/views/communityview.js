import {Card} from 'antd'
import { HeartOutlined,TeamOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import "../css/communityview.css"
import {useEffect, useState} from "react";
import {getUserInfo} from "../services/userInfoService";
import {getcommunities} from "../services/communityService";

const Communityview=(props)=>{
    let [subscribed,setSubscribed]=useState()
    let [communities,setCommunities]=useState()
    useEffect(()=>{
        getUserInfo(localStorage.getItem("userId"),getInfo)
        getcommunities(getcommunity)
    },[])

    function getInfo(data){
        setSubscribed(data.community)
    }

    function getcommunity(data){
        setCommunities(data)
    }
    // const subscribed=[{
    //     communityId:1,
    //     name:"二次元色图交流",
    //     image:require('../pictures/community1.png')
    // }]
    // const communities=[
    //     {
    //         communityId:2,
    //         name:"二次元色图交流",
    //         image:require('../pictures/community1.png')
    //     },
    //     {
    //         communityId:3,
    //         name:"二次元色图交流",
    //         image:require('../pictures/community1.png')
    //     },
    //     {
    //         communityId:4,
    //         name:"二次元色图交流",
    //         image:require('../pictures/community1.png')
    //     },
    //     {
    //         communityId:5,
    //         name:"二次元色图交流",
    //         image:require('../pictures/community1.png')
    //     }
    // ]
    return (
        <>
            <div className={"title1"}>
                <HeartOutlined />
                我关注的
            </div>
            <div>
                {
                    subscribed?.map(community=>{
                        return(
                            <Link to={"/community/"+community.communityId}>
                                <Card className="communitycard">
                                    <img src={community.image} className="img"/>
                                    <h3>{community.name}</h3>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
            <div className={"title1"}>
                <TeamOutlined/>
                全部社群
            </div>
            <div>
                {
                    communities?.map(community=>{
                        return(
                            <Link to={"/community/"+community.communityId}>
                                <Card className="communitycard">
                                    <img src={community.image} className="img"/>
                                    <h3>{community.name}</h3>
                                </Card>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}

export default  Communityview