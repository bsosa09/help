import Types from '../Types'
const toolbarDispatchToProps = dispatch => { 
        return {
    setShowMenu:(show)=> dispatch({type:Types.setShowMenu,value:show}),
    setShowMenuManual:(boolVal)=> dispatch({type:Types.setShowMenuManual,value:boolVal}),
    setAuth:(auth)=>dispatch({type:Types.setAuth,value:auth}),
    setCurrentName:(name)=>dispatch({type:Types.setCurrentName,value:name}),
    setUser:(user)=>{dispatch({type:Types.setUser,value:user})}, 
    setToolbarDisplay:(display)=>{dispatch({type:Types.setToolbarDisplay,value:display})},  
    setShowModal:(show)=>{dispatch({type:Types.setShowModal,value:show})},
    setModalContent:(content)=>{dispatch({type:Types.setModalContent,value:content})}
    }
}
 export default toolbarDispatchToProps;
 