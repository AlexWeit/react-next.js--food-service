import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import { getMenu } from "./get-menu";
import { getDishById } from "./get-dish-by-id";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectDishesIds: (state) => state.ids,
        selectDishById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) =>
        builder
            .addCase(getMenu.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload); // get all menu
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
            }),
});

export const { selectDishById, selectDishesIds } =
    dishesSlice.selectors;
