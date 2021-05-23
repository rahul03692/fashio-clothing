//import { DecreaseItem } from './cart-actions';
import {addItemsToCart,removeItemFromCart,decreaseItemFromCart,increaseItemToCart} from './cart-utils';

const INITIAL_STATE={
    hidden:true,
    cartItems:[],
    count:0
}

const cartReducer= (state=INITIAL_STATE,action) => {
    switch(action.type){
        case 'FLIP_CART_DROP_DOWN':
            return {
                ...state,
                hidden:!state.hidden,
            }
        case 'ADD_ITEM':
            return {
                ...state,
                cartItems:addItemsToCart(state.cartItems,action.payload),
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload),
            }
        case 'DECREASE_ITEM':
            return{
                ...state,
                cartItems:decreaseItemFromCart(state.cartItems,action.payload),
            }
        case 'INCREASE_ITEM':
            return{
                ...state,
                cartItems:increaseItemToCart(state.cartItems,action.payload),
            }
        default:
            return state;
    }
}

export default cartReducer;