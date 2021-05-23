
export const FlipCartDropDown = () => ({
    type:'FLIP_CART_DROP_DOWN',
});

export const AddItem = (item) => ({
    type:'ADD_ITEM',
    payload:item,
});

export const RemoveItem=(item) => ({
    type:'REMOVE_ITEM',
    payload:item,
});

export const DecreaseItem=(item) => ({
    type:'DECREASE_ITEM',
    payload:item,
});

export const IncreaseItem=(item) => ({
    type:'INCREASE_ITEM',
    payload:item,
});

