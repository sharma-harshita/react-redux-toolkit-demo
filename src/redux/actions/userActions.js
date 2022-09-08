import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios";

export const getPostsData = createAsyncThunk(
    `posts/getPosts`,
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return {
            payload : response.data
        }
    }
)

export const modifyUserNameAction = (data) => {
    return {
        type : "CHANGE_NAME",
        payload:data
    }
}