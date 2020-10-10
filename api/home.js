import {request} from "../utils/request"
export function apiGetInfo(callback,effFun) {
  let url = '/miniapp/conference/getNewConference';
  let data = {};
  request('GET',url,data,callback,effFun);
}
export function apiGetMineInfo(data,callback,effFun) {
  let url = '/miniapp/mine/getRegisteredConf';
  request('POST',url,data,callback,effFun);
}
export function apiSearchInfo(data,callback,effFun) {
  let url = '/miniapp/conference/getLikeConf';
  request('POST',url,data,callback,effFun);
}


