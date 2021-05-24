import {createSelector} from 'reselect';

const selectShop= state => state.shop;


export const selectShopItems = createSelector(
    [selectShop],
    item =>item.collections,
);

export const selectCollectionsPreview=createSelector(
    [selectShopItems],
    items=>Object.keys(items).map(item => items[item]),
);

export const selectCollections =(collectionParams) => createSelector(
    [selectShopItems],
    items => items[collectionParams],
);
