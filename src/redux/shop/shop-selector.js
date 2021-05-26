import {createSelector} from 'reselect';

const selectShop= state => state.shop;


export const selectShopItems = createSelector(
    [selectShop],
    item =>item.collections,
);

export const selectCollectionsPreview=createSelector(
    [selectShopItems],
    items=>items? Object.keys(items).map(item => items[item]):null,
);

export const selectCollections =(collectionParams) => createSelector(
    [selectShopItems],
    items => items?items[collectionParams]:null,
);

export const selectLoading =createSelector(
    [selectShop],
    item=>item.loading,
);