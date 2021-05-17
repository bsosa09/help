import Types from '../Types'
const initialState = { 
    auth:false,
    user:null,
    showMenu:false,
    currentName:'Menu', 
    toolbarDisplay:null,
    modalContent:null,
    showModal:false
}
const toolbarR  = (state = initialState, action) =>  { 
    if(action.type === Types.setShowMenu){
        const show = !action.value
        return {
            ...state,
            showMenu:show
        }
    }
    if(action.type === Types.setShowMenuManual){
        return {
            ...state,
            showMenu:action.value
        }
}
    if(action.type === Types.setAuth){
        return {
            ...state,
            auth:action.value
        }
    }
    if(action.type === Types.setUser){ 
        return {
            ...state,
            user:action.value 
        }
    }
    if(action.type === Types.setCurrentName){
        return {
            ...state,
            currentName:action.value
        }
    } 
    if(action.type === Types.setToolbarDisplay){
        return {
            ...state,
            toolbarDisplay:action.value
        }
    } 
    if(action.type === Types.setShowModal){
        const show = action.value
        return {
            ...state,
            showModal:show
        }
    } 
    if(action.type === Types.setModalContent){
        const newCont = {...action.value}
        return {
            ...state,
            modalContent:newCont
        }
    } 
    
    return state;
}
export default toolbarR; 