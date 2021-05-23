export const addItemsToCart= (items,itemToAdd) =>{
    const existsItem=items.find(({id}) => id===itemToAdd.id)
    if(existsItem){
        return (
            items.map(item => item.id===itemToAdd.id ? {...item,count:item.count+1}: item)
        );
    }
    return [...items,{...itemToAdd,count:1}];
}

export const removeItemFromCart =(items,itemToDelete) => {
    return items.filter((item) => itemToDelete.id!==item.id);
}

export const decreaseItemFromCart =(items,itemToDecrease) => {
    const existsItem=items.find(({id}) => id===itemToDecrease.id);
    if(existsItem.count===1){
        return items.filter((item) => itemToDecrease.id!==item.id);
    }

    return items.map(item => itemToDecrease.id===item.id?{...item,count:item.count-1}:item);
}

export const increaseItemToCart =(items,itemToIncrease) =>{
    return items.map(item => itemToIncrease.id===item.id?{...item,count:item.count+1}:item);
}