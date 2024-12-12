import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/reviews?restaurantId=${restaurantId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("reviews/getReviews no data");
            return;
        }

        return result;
    }
);
