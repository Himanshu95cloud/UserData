import axios from "axios";
import { APPLICATION_JSON } from "./AppConstant";

function makeHttpRequest({ path, body = {}, method }) {
  return axios({
    url: path,
    data: body,
    headers: {},
    header: {
      "Content-Type": APPLICATION_JSON,
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS, POST, PUT",
    },
    method: method,
  });
}

export default makeHttpRequest;
