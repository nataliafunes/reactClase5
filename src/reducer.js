function reducer(state={}, action){
    switch(action.type){
        case 'add':
            return { 
                ...state,
                item: state.items.push([action.newItem])
            }    
        case 'delete':
                 //  
        break;
    }
    return state;
}


export default reducer;

