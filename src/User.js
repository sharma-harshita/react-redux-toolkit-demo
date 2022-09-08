import React, { lazy, Suspense, useEffect } from "react";
import {useSelector, useDispatch} from "react-redux";
import {modifyDeptAction} from "./redux/actions/deptActions"
import {getPostsData, modifyUserNameAction} from "./redux/actions/userActions"

const LazyComp = lazy(()=> import("./LazyComp"))

function User () {
    const data = useSelector((state)=>state);
    const dispatch = useDispatch();

    useEffect(()=>{
        const getData = async() =>{
            await dispatch(getPostsData());
        }
        getData()
    }, [])

    return (
        <>
            <h1>User Component</h1>
            <h2>DEPT : {data.dept.deptName}</h2>
            <button onClick={()=> dispatch(modifyDeptAction())}>Change Dept</button>
            <h2>NAME : {data.user.username}</h2>
            <button onClick={()=> dispatch(modifyUserNameAction("Akshay"))}>Change Name</button>
            <Suspense fallback={<div>LOADING.........</div>}>
                <LazyComp/>
            </Suspense>
        </>
    )
}

export default User




