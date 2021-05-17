import Types from '../Types'
const initialState = { 
    docs:null 
}
const viewFileR  = (state = initialState, action) =>{
     if(action.type === Types.setDocs){ 
        return {
            ...state,
            docs:action.value 
        }
    } 
    
    return state;
}
export default viewFileR; 