export const USER_LOGIN = 101;
export const USER_LOGOUT = 102;
export const USER_SIGNUP = 103;
export const UPDATE_USER = 104;
export const VALIDATE_CODE = 105;
export const SEND_VALIDATION_EMAIL = 106;
export const FIND_USER_TO_UPDATE = 107;
export const ADD_NEW_USER = 108;
export const REMOVE_USER = 109;
export const INSERT_RECEIPT = 201;
export const DONE_RECEIPT = 202;
export const SEARCH_RECEIPT = 203;
export const GET_LASTEST_ORDERS = 204;
export const GET_ALL_PRODUCTS = 301;
export const GET_RECEIPTS_BY_CID = 302;
export const GET_5_PRODUCTS_BY_NAME = 303;
export const SEARCH_PRODUCTS_BY_NAME = 304;
export const ADD_NEW_PRODUCT = 305;
export const ADD_NEW_PRODUCT_LINE = 306;
export const GET_ALL_PRODUCT_LINE = 307;
export const FIlTER_PRODUCT = 308;
export const GET_QUANTITY_PRODUCT = 309;
export const GET_PRODUCTS_BY_WISHLIST = 310;
export const SEARCH_ITEM_EXACTLY = 311;
export const GET_USER_Receipt = 312;
export const EDIT_PRODUCT = 313;
export const REMOVE_PRODUCT = 314;
export const INSERT_RECEIPT_LINE = 315;
export const GET_RECEIPT = 316;
export const VALIDATE_NAME_USER = 317;
export const INSERT_GUEST = 318;
export const GET_GEST = 319;
export const GET_ORDER_RECEIVED = 320;
export const GET_RECEIPT_BY_ID = 321;
export const GET_BUYER = 322;
export const INSERT_ORDER_RECEIPT = 323;
export const GET_RECEIPTS_BY_ID_USER = 324;
export const CANCEL_RECEIPT = 325;
const host = window.location.hostname;
const port = window.location.port;

async function APIrequest(action, data) {
    let sendData = new FormData();
    sendData.append("action", action);
    let jsonString = JSON.stringify(data);
    sendData.append("data", jsonString);
    let home = "";
    if (port) {
        home = host + ":" + port;
    } else home = host;
    let result = await fetch(
        "http://"+ home + "/back-end/API/API.php",
        {
            method: "post",
            body: sendData,
        }
    ).then((response) => {
        // console.log(response.text());
        return response.json();
    });
    return result;
}

async function testAPI(action, data) {
    let sendData = new FormData();
    sendData.append("action", action);
    let jsonString = JSON.stringify(data);
    sendData.append("data", jsonString);

    let result = await fetch(
        "http://localhost:2203/learning/store-phone/back-end/API/API.php",
        {
            method: "post",
            body: sendData,
        }
    ).then((response) => {
        return console.log(response.text());
    });

    return result;
}

export { testAPI };
export default APIrequest;

//Example : callAPI({data object}).then(obj => document.getElementById("...").innerText = obj.data)
//Hàm callAPI sẽ gửi data object lên server sau đó trả về kết quả (đã xử lí json) dưới dạng object
