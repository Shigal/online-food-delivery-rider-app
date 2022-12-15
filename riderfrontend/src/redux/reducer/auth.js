
const auth = (state = {
    user:{},
    error:'',
    loading:false
}, action) => {
    console.log("Reducer auth");
    switch(action.type){
        case 'AUTH_REQ':
            return {
                ...state,
                error:'',
                loading:true
            };
        case 'AUTH_SUCCESS':
            const data = action.payload;
            return {
                ...state,
                error:'',
                loading:false,
                user:data
            };
        case 'AUTH_FAILURE':
            const error = action.payload;
            return {
                ...state,
                error:error,
                loading:false
            };
        default:
            return state;
    }
}

export default auth;