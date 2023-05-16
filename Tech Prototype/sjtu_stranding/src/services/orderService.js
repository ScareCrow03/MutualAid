import {postRequest} from "../utils/ajax";

export const getOrders = (userId, callback) => {
    const data = {userId: userId};
    const url = "http://localhost:8081/getOrder"
    postRequest(url, data, callback);
};

export const addOrder = (itemId,buyer,callback) =>{
    const data = {itemId:itemId,buyer:buyer};
    const url = "http://localhost:8081/addOrder"
    postRequest(url, data, callback);
}

export const saveOrder = (orderId,state,callback)=>{
    const data ={orderId:orderId,state:state};
    const url="http://localhost:8081/saveOrder"
    postRequest(url, data, callback);
}

export const scoreOrder=(orderId,score,callback)=>{
    const data ={orderId:orderId,score:score};
    const url="http://localhost:8081/evaluateOrder"
    postRequest(url, data, callback);
}