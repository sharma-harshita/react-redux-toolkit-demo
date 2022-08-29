const initialState = {
    id : 12,
    username : "John", 
    salary : 20000
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
            return{
                ...state,
                username:action.payload
            }
        default:
            return state;
    }
}

export default UserReducer