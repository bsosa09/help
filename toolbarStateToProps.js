const toolbarStateToProps = (state) =>{  
    return {
    auth:state.toolbar.auth,
    user:state.toolbar.user,
    showMenu:state.toolbar.showMenu,  
    currentName:state.toolbar.currentName, 
    toolbarDisplay:state.toolbar.toolbarDisplay,
    showModal:state.toolbar.showModal,
    modalContent:state.toolbar.modalContent
    }
}
 export default toolbarStateToProps;