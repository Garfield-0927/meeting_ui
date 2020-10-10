import {request} from "../utils/request"
export function apiGetInfo(data,callback,effFun) {
  let url = '/miniapp/options/getOptions';
  request('POST',url,data,callback,effFun);
}