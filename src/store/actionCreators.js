//方法汇总,与action挂钩

import {ADD_NOTE, DEL_NOTE, EDIT_NOTE, GET_ALLNOTE} from "./actionTypes";

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
export const getAllNotesAction = (lists) =>({
    type : GET_ALLNOTE,
    lists
});