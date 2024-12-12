import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {getRestaurants} from "./get-restaurants";
import {getRestaurantById} from "./get-restaurant-by-id";

const entityAdapter = createEntityAdapter();

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantById: (state, id) => state.entities[id],
        selectRestaurantsRequestStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload); // get all restaurants
            })
            .addCase(getRestaurantById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});

export const {
    selectRestaurantById,
    selectRestaurantsIds,
    selectRestaurantsRequestStatus
} = restaurantsSlice.selectors;
