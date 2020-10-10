import {request} from "../utils/request"
export function apiDoLogin(code,callback,effFun) {
  let url='/miniapp/login/getOpenId?code=' + code;
  let data = {};
  console.log(code);
  request('GET',url,data,callback,effFun);
}


 