import React, {useState, useEffect} from 'react'
import './test.css'


const Test = () => {
    const [now, setTimer] = useState(new Date().toLocaleString());
    const [note, setNote] = useState('');
    const [lists,setLists] = useState([]);
    const [edit,setEdit] = useState(undefined);
    useEffect(
        () => {
            setTimeout(
                () => setTimer(new Date().toLocaleString()), 1000
            )
        }, [now]
    );

    const addNotes = ()=>{
        if(!note) return;
        const obj = {id:now,note};
        setNote('');
        setLists(lists.concat([obj]));
    };
    const deleteNote = index => {
        const value = [].concat(lists);
        value.splice(index,1);
        // console.log(index,value);

        setLists(value)
    };
    const editStart = index =>setEdit({id:index,note:lists[index].note});
    const editOver = ()=>{
        const value = [].concat(lists);
        value.splice(edit.id,1,{id:now,note:edit.note});
        setLists(value);
        setEdit(undefined)
    };

    return (
        <div className="clock">
            <h4>notebook</h4>
            时间：<span className="time">{now}</span>
            <div className="add">
                <input type="text" value={note} onChange={e=>setNote(e.target.value)}/>
                    <button onClick={addNotes}>
                        添加note
                    </button>
            </div>

            {
                lists.length > 0 ?
                <ul>
                    {
                        lists.map((list,index)=><li key={index}>
                            <p>
                                {

                                    edit && edit.id === index ? <>
                                           <input type="text"
                                                  value={edit.note}
                                                  onChange={e=>setEdit({...edit,note:e.target.value})} />
                                                <button onClick={editOver}>确定</button>
                                    </> :
                                    list.note
                                }
                            </p>
                            <span>
                                {list.id}
                            </span>
                            <div>
                                <span className="edit" onClick={()=> editStart(index)}>
                                    {'编辑'}
                                </span>
                                <span className="delete" onClick={()=>deleteNote(index)}>
                                    {'删除'}
                                </span>
                            </div>
                        </li>)
                    }
                </ul>
                    :
                    <p>请先添加笔记！</p>

            }
        </div>
)
};
export default Test;