import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "./users-slice";
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getUsers = createAsyncThunk(
    "users/getUsers",
    async (_, { rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/users`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("users/getUsers no data");
            return;
        }

        return result;
    },
    {
        condition: (_, { getState }) => {
            //if no users
            return selectUsersIds(getState()).length === 0;
        },
    }
);
