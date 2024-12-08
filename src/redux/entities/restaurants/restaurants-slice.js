import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {getRestaurants} from "./get-restaurants";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({requestStatus: "idle"}),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state, { payload }) => {
                state.requestStatus = "pending";
            })
            .addCase(getRestaurants.rejected, (state, { payload }) => {
                state.requestStatus = "rejected";
            })
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload);

                state.requestStatus = "fulfilled";
            }),
});

export const {
    selectRestaurantById,
    selectRestaurantsIds,
    selectRestaurantsRequestStatus
} = restaurantsSlice.selectors;
