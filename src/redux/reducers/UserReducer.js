const initialState = {
    id : 12,
    username : "John", 
    salary : 20000, 
    postsData: []
}

const UserReducer = (state = initialState, action) => {
    console.log(action, "ACTIONS");
    switch (action.type) {
        case "CHANGE_NAME":
            return{
                ...state,
                username:action.payload
            }
        case "posts/getPosts/fulfilled":
            return{
                ...state,
                postsData:action.payload.payload
            }
        default:
            return state;
    }
}

export default UserReducer