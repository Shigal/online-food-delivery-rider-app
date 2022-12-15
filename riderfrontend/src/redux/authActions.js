export const authenticate = () => {
    console.log("authenticate-AUTH_REQ")
    return {
        type: "AUTH_REQ"
    }
}

export const authSuccess = (content) => {
    console.log("authSuccess")
    localStorage.setItem('USER_KEY',content.token);
    return {
        type: "AUTH_SUCCESS",
        payload: content
    }
}

export const authFailure = (error) => {
    console.log("authFailure")
    return {
        type: "AUTH_FAILURE",
        payload: error
    }
}

