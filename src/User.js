import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {modifyDeptAction} from "./redux/actions/deptActions"
import {modifyUserNameAction} from "./redux/actions/userActions"

function User () {
    const data = useSelector((state)=>state);
    const dispatch = useDispatch();

    return (
        <>
            <h1>User Component</h1>
            <h2>DEPT : {data.dept.deptName}</h2>
            <button onClick={()=> dispatch(modifyDeptAction())}>Change Dept</button>
            <h2>NAME : {data.user.username}</h2>
            <button onClick={()=> dispatch(modifyUserNameAction("Akshay"))}>Change Name</button>
        </>
    )
}

export default User