import { createSelector } from 'reselect';

const selectCollections = state => state.shop;

export const selectCollectionsData = createSelector(
    [selectCollections],
    shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
    [selectCollectionsData],
    collections => Object.keys(collections).map(key => collections[key])
);

export const selectCollection = collectionUrlParm => createSelector(
    [selectCollectionsData],
    collections => collections[collectionUrlParm]
);