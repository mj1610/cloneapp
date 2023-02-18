import axios from "axios";

export const loginCall = async (userCrendentials, dispatch)=>{
    dispatch({type:"Login_Start"});
    try{
        const res = await axios.post("auth/login", userCrendentials);
        dispatch({type:"Login_Successful", payload: res.data});
    }
    catch(err){
        dispatch({type:"Login_Failure", payload: err});
    }
}