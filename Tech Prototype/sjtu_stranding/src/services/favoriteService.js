import {postRequest} from "../utils/ajax";

export const getFavorite = (userId, callback) => {
    const data = {userId: userId};
    const url = "http://localhost:8081/getFavorite"
    postRequest(url, data, callback);
};

export const addFavorite = (userId,itemId, callback) => {
    const data = {userId: userId,itemId:itemId,favorited:true};
    const url = "http://localhost:8081/saveFavorite"
    postRequest(url, data, callback);
};

export const delFavorite = (userId,itemId, callback) => {
    const data = {userId: userId,itemId:itemId,favorited:false};
    const url = "http://localhost:8081/saveFavorite"
    postRequest(url, data, callback);
};