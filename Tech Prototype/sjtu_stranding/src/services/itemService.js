import {postRequest} from "../utils/ajax";
export const getItems = (callback) => {
    const url = "http://localhost:8081/getItems"
    postRequest(url, null, callback);
};
export const getUserItem = (userId, callback) => {
    const data = {userId: userId};
    const url = "http://localhost:8081/getUserItem"
    postRequest(url, data, callback);
};
export const getItem = (itemId, callback) => {
    const data = {itemId: itemId};
    const url = "http://localhost:8081/getItem"
    postRequest(url, data, callback);
};
export const saveItem = (itemId, userId, name, image, number, description, tag1, tag2, tag3, callback) => {
    const data = {itemId: itemId, userId: userId, name: name, image: image, number: number, description: description, tag1: tag1, tag2: tag2, tag3: tag3};
    const url = "http://localhost:8081/saveItem"
    postRequest(url, data, callback);
};
