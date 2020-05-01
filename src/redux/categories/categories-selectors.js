import { createSelector } from 'reselect';

const selectCategories = state => state.categories;

export const selectCategoriesData = createSelector(
    [selectCategories],
    (categories) => categories.categoriesData
);