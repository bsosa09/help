const preferencesStateToProps = (state) =>{  
    return {
        preferences:state.preferences.docs  
    }
}
 export default preferencesStateToProps;