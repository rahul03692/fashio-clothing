import {createSelector} from 'reselect';

const selectCart=state => state.cart;

export const selectCartItems= createSelector(
    [selectCart],
    (cart) => cart.cartItems,
);

export const selectCartCount= createSelector(
    [selectCartItems],
    cartItems =>cartItems.reduce((cnt,item) =>(cnt+item.count),0),
);

export const selectCartHidden=createSelector(
    [selectCart],
    (cart) => cart.hidden,
);

export const selectCartTotal=createSelector(
    [selectCartItems],
    cartItems =>cartItems.reduce((cnt,item) =>(cnt+item.count*item.price),0),
);