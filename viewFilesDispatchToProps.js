import Types from '../Types'
const viewFilesDispatchToProps = dispatch => {
        return { 
    setDocs:(docs)=>{dispatch({type:Types.setDocs,value:docs})}
    }
}
 export default viewFilesDispatchToProps;
 