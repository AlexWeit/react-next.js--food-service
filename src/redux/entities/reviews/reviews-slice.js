import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import {getReviews} from "./get-reviews";

const entityAdapter = createEntityAdapter();

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState(),
    selectors: {
        selectReviewsIds: (state) => state.ids,
        selectReviewById: (state, id) => state.entities[id],
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                entityAdapter.setMany(state, payload); // get all reviews
            }),
});

export const { selectReviewById, selectReviewsIds } =
    reviewsSlice.selectors;
