import {postRequest} from "../utils/ajax";

export const getUserInfo = (userId, callback) => {
    const data = {userId: userId};
    const url = "http://localhost:8081/getUser"
    postRequest(url, data, callback);
};
export const saveUserInfo = (userId, data, callback) => {
    data.userId = userId;
    // console.log(data);
    const url = "http://localhost:8081/saveUser"
    postRequest(url, data, callback);
};
export const userLogin = (username,password,callback)=>{
    const data={username:username,password:password};
    const url="http://localhost:8081/checkUserAuth"
    postRequest(url,data,callback)
}
export const userRegister_check = (username,password,callback)=>{
    const data={username:username,password:password};
    const url="http://localhost:8081/saveUserAuth"
    postRequest(url,data,callback)
}
export const userRegister_complete = (userId,nickname,telephone,email,address,avatar,qq,description,callback)=>{
    const data={userId:userId,nickname: nickname,telephone: telephone,email:email,address:address,avatar:avatar,qq:qq,description:description};
    const url="http://localhost:8081/saveUser"
    postRequest(url,data,callback)
}