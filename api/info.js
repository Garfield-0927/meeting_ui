import {request} from "../utils/request"
export function apiSaveLeaveWord(data,callback,effFun) {
  let url = '/miniapp/leaveWord/addLeaveWord';
  request('POST',url,data,callback,effFun);
}
export function apiGetInfo(data,callback,effFun) {
  let url = '/miniapp/conference/getMainConf';
  request('POST',url,data,callback,effFun);
}
export function apiDelete(data,callback,effFun) {
  let url = '/miniapp/conference/getMainConf';
  request('POST',url,data,callback,effFun);
}