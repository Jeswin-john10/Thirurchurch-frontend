import { commonapi } from "./commonapi"
import { serverurl } from "./serverurl"

//add data
export const adddata=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/newchurchdata`,reqBody)
}

//get data
export const getdata=async()=>{
    return await commonapi('GET',`${serverurl}/newchurchdata`,"")
}

//add

export const addnewdata=async(reqBody)=>{
    return await commonapi('POST',`${serverurl}/churchdata`,reqBody)
}
