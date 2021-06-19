
const initalState = {
    noOfCakes : 10
}
const cakeReducers = (state = initalState,action)=>{
    switch(action.type){
        case "BUY_CAKES":
            return{
                ...state,
                noOfCakes: state.noOfCakes-1
            }
            break;
        case "ADD_CAKES":
            return{
            ...state,
            noOfCakes: state.noOfCakes+1
        }
        break;
        default: return state
    }
}

export default cakeReducers;