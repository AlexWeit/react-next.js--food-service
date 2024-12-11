import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "./restaurants-slice";
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getRestaurantById = createAsyncThunk(
    "restaurant/getRestaurantById",
    async (id, { rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/restaurant/${id}`);

        const result = await response.json();

        if (!result) {
            rejectWithValue("restaurant/getRestaurantById no data");
            return;
        }

        return result;
    },
    {
        condition: (id, { getState }) => {
            //if no restaurants
            return selectRestaurantById(getState(), id).length === 0;
        },
    }
);
