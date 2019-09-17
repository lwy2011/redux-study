//方法汇总,与action挂钩

import {ADD_NOTE, DEL_NOTE, EDIT_NOTE, GET_ALLNOTE, REQ_ALLNOTE} from "./actionTypes";
import {shopData} from "../api";
import store from "./index";

export const deleteNoteAction = (index)=>({
    type : DEL_NOTE ,
    index
});

export const addNoteAction = (list) =>({
    type : ADD_NOTE,
    list
});
export const editNoteAction = (list) =>({
    type : EDIT_NOTE,
    list
});
// export const getAllNotesAction = (lists) =>({
//     type : GET_ALLNOTE,
//     lists
// });

// 不用中间件

export const getAllNotesAction = () =>{
    return (dispatch)=>{
        shopData().then(
            res=>{
                // console.log(res,222)
                if(res.success_code === 200){
                    const action = {type:GET_ALLNOTE,lists:res.lists};
                    store.dispatch(action)
                }
            }
        )
    }
};

//用thunk

export const reqAllNotesAction = () => ({type:REQ_ALLNOTE});

//用saga