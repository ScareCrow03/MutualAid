import React, {useEffect, useRef, useState} from "react";
import {getFavorite,delFavorite} from "../services/favoriteService";
import {Card, Tag,Button} from "antd";
import Loginview from "./loginview";
import {Link} from "react-router-dom";
import "../css/favoriteview.css"

const Favoriteview=()=>{
    let [favorites,setFavorites]=useState([])
    function get_callback(data) {
        setFavorites(data)
    }

    function del_callback(data){
        getFavorite(localStorage.getItem("userId"),get_callback)
        // addFavorite(localStorage.getItem("userid"),)
    }

    useEffect(()=>{
        getFavorite(localStorage.getItem("userId"),get_callback)
    },[])

    return(
        <div>
            {
                favorites?.map(favorite=>{
                    return(
                        <Link to={"/detail/"+favorite.item.itemId}>
                            <Card className={"fcard"}>
                                <div style={{float:"left"}}>
                                    <img src={favorite.item.image} style={{width:80,height:100}}/>
                                </div>
                                <div style={{float:"left",marginLeft:50}}>
                                    {favorite.item.name}
                                </div>
                                <div style={{float:"left",marginLeft:50}}>
                                    {favorite.item.tag1===undefined?<Tag>暂无</Tag>:<Tag>{favorite.item.tag1}</Tag>}
                                    {favorite.item.tag2===undefined?<Tag>暂无</Tag>:<Tag>{favorite.item.tag2}</Tag>}
                                    {favorite.item.tag3===undefined?<Tag>暂无</Tag>:<Tag>{favorite.item.tag3}</Tag>}
                                </div>
                                <div style={{float:"right",marginRight:50}}>
                                    <Button type={"primary"} onClick={()=>{
                                        delFavorite(localStorage.getItem("userId"),favorite.item.itemId,del_callback)}}>删除</Button>
                                </div>
                            </Card>
                        </Link>
                    )
                })
            }
        </div>
    )
}
export default Favoriteview