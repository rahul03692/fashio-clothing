
const INITIAL_STATE={
    collections:null,
    loading:true,
}

const shopReducer=(state=INITIAL_STATE,action) =>{
    switch(action.type){
        case 'UPDATE_ITEMS':
            return {
                ...state,
                collections:action.payload
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading:action.payload
            }
        default:
            return state;
    }
}

export default shopReducer;