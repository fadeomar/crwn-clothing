import { createSelector } from "reselect";

const shopSelector = (state) => state.shop;

export const shopSelectorCollections = createSelector(
  [shopSelector],
  (shop) => shop.collections,
);

export const selectCollectionForPreview = createSelector(
  [shopSelector],
  (shop) => Object.keys(shop.collections).map((key) => shop.collections[key]),
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [shopSelector],
    ({ collections }) => collections[collectionUrlParam],
  );
