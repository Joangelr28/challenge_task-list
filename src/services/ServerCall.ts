import axios from "axios"
import { CallData } from "../interfaces/CallData"

// Function for generic server call
export async function serverCall(callData: CallData) {
  const { method, params, data, url } = callData
  const result = axios.request({
    method: method ? method : "GET",
    params: params,
    data: data,
    url: url,
  })

  return (await result).data
}
