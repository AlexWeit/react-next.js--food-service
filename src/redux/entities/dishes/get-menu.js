import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getMenu = createAsyncThunk(
    "dishes/getMenu",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/dishes?restaurantId=${restaurantId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("dishes/getMenu no data");
            return;
        }

        return result;
    }
);
