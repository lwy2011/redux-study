import React ,{useState} from 'react'
import {deleteNoteAction, editNoteAction} from "../store/actionCreators";
import store from "../store";

export const List = (props)=>{
    const {index,list,now} = props;
    const [edit,setEdit] = useState(undefined);
    const editStart = (index,note) =>setEdit({index,note});
    const editOver = ()=>{
        const action = editNoteAction({now,...edit});
        store.dispatch(action);
        setEdit(undefined)
    };
    const editClose = ()=>setEdit(undefined);
    const deleteNote = index => {
        //这里把方法传递给store
        const action = deleteNoteAction(index);
        store.dispatch(action)
    };
    return(
        <li>
            <p>
                {

                    edit && edit.index === index ? <>
                            <input type="text"
                                   value={edit.note}
                                   onChange={e=>setEdit({...edit,note:e.target.value})} />
                            <button onClick={editOver}>确定</button>
                            <button onClick={editClose}>取消</button>
                        </> :
                        list.note
                }
            </p>
            <span className="listTime">
                                {list.id}
                            </span>
            <div>
                                <span className="edit" onClick={()=> editStart(index,list.note)}>
                                    {'编辑'}
                                </span>
                <span className="delete" onClick={()=>deleteNote(index)}>
                                    {'删除'}
                                </span>
            </div>
            {
                list.edit && <p className="editTime">
                    {list.edit}修改！
                </p>
            }
        </li>
    )
};