const initialState = {
    id : 12,
    deptName : "HR", 
}


const DeptReducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_DEPT":
            return{
                ...state,
                deptName:"TECHNOLOGY"
            }
        default:
            return state;
    }
}

export default DeptReducer