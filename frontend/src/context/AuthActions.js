export const LoginStart = (userCredentials)=>({
    type:"Login_Start"
})

export const LoginSuccessful = (user)=>({
    type:"Login_Successful",
    payload: user
})

export const LoginFailure = (error)=>({
    type:"Login_Failure",
    payload: error
})