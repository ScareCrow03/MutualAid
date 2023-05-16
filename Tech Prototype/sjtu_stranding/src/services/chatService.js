import {postRequest} from "../utils/ajax";
export const getChat = (userId, callback) => {
    const data = {userId: userId};
    const url = "http://localhost:8081/getChat"
    postRequest(url, data, callback);
};
export const getChatInfo = (chatId, callback) => {
    const data = {chatId: chatId};
    const url = "http://localhost:8081/getChatInfo"
    postRequest(url, data, callback);
};
export const sendChat = (sender, receiver, dialog, callback) => {
    const data = {sender: sender, receiver:receiver, dialog:dialog};
    const url = "http://localhost:8081/sendChat"
    postRequest(url, data, callback);
};
export const addChat = (sender,receiver,callback) =>{
    const data = {sender: sender, receiver:receiver};
    const url = "http://localhost:8081/addChat"
    postRequest(url, data, callback);
}