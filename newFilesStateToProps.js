const newFilesStateToProps = (state) =>{ 
    return { 
    docs:state.viewFiles.docs  
    }
}
 export default newFilesStateToProps;