
const defaultstate={

    Todolist:["finsh the first task"]
}

export const Reducer =(state=defaultstate,action)=>{
    switch (action.type) {
        case "ADD_LIST":
            let newList=[...state.Todolist]
            newList.push(action.payload)
            return {...state,Todolist:newList}
        case "DELETE_LIST":
            let deleteList=state.Todolist.filter((ele)=> ele!==action.payload)
             return {...state,Todolist:deleteList}
        default:
            return state
    }
}
