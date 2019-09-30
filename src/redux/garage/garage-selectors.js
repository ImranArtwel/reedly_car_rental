import { createSelector } from 'reselect';
 

const selectGarage = (state) => state.garage;

export const selectCollectionsForPreview = createSelector(
    [selectGarage],
    garage => garage.cars
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollectionsForPreview],
    cars => cars[collectionUrlParam]
    );
