import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsIds } from "./restaurants-slice";
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",
    async (_, { getState, dispatch, rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/restaurants`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("restaurants/getRestaurants no data");
            return;
        }

        return result;
    },
    {
        condition: (_, { getState }) => {
            //if no restaurants
            return selectRestaurantsIds(getState()).length === 0;
        },
    }
);
