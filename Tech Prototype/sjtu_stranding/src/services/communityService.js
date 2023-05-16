import {postRequest} from "../utils/ajax";

export const getcommunities=(callback)=>{
    const url = "http://localhost:8081/getCommunity"
    postRequest(url, null, callback);
}

export const getCommunityInfo=(communityId,callback)=>{
    const data={communityId:communityId}
    const url = "http://localhost:8081/getPost"
    postRequest(url, data, callback);
}
export const getPost=(communityId,callback)=>{
    const data={communityId:communityId}
    const url="http://localhost:8081/getPost"
    postRequest(url,data,callback)
}
export const savePost=(communityId,userId,info,callback)=>{
    const data={communityId:communityId,userId:userId,info:info}
    const url="http://localhost:8081/savePost"
    postRequest(url,data,callback)
}
export const deletePost=(postId,callback)=>{
    const data={postId:postId}
    const url="http://localhost:8081/deletePost"
    postRequest(url,data,callback)
}

export const addSubscribe=(userId,communityId,callback)=>{
    const data={userId:userId,communityId:communityId,subscribed:true}
    const url="http://localhost:8081/saveSubscribe"
    postRequest(url,data,callback)
}

export const delSubscribe=(userId,communityId,callback)=>{
    const data={userId:userId,communityId:communityId,subscribed:false}
    const url="http://localhost:8081/saveSubscribe"
    postRequest(url,data,callback)
}

export const checkSubscribe=(userId,communityId,callback)=>{
    const data={userId:userId,communityId:communityId}
    const url="http://localhost:8081/checkUserCommunity"
    postRequest(url,data,callback)
}