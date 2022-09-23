const editData = (state=[] , action)=>{
    switch (action.type){
        case 'add' : return [...state ,action.payload]

        case 'delete' :{
            state = state.filter((item,i) => i!==action.payload)
            return state
        }

        default : return state
}
    
}

export default editData