import { createSelector } from 'reselect';

const selectCategoriesState = state => state;

export const selectCategories = createSelector(
    [selectCategoriesState],
    (state) => state.categories
);