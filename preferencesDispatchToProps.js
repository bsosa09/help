import Types from '../Types'
const viewFilesDispatchToProps = dispatch => {
        return { 
    setPreferences:(prefs)=>{dispatch({type:Types.setPreferences,value:prefs})}
    }
}
 export default viewFilesDispatchToProps;
 