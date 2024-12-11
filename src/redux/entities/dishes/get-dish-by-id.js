import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectDishById } from './dishes-slice.js';
import { API_BASE_URL } from "../../constants";

// creating middleware for asking data from server
export const getDishById = createAsyncThunk(
    "dishes/getDishById",
    async (dishId, { rejectWithValue }) => {
        const response = await fetch(`${API_BASE_URL}/dish/${dishId}`);

        const result = await response.json();

        if (!result.length) {
            rejectWithValue("dish/getDish no data");
            return;
        }

        return result;
    },
    {
        condition: (dishId, { getState }) => {
            return selectDishById(getState(), dishId) === undefined;
        },
    }
);
