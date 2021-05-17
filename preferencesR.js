import Types from '../Types'
const initialState = { 
    preferences:null 
}
const preferencesR  = (state = initialState, action) =>{
     if(action.type === Types.setPreferences){ 
        return {
            ...state,
            preferences:action.value 
        }
    } 
    
    return state;
}
export default preferencesR; 