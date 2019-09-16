import React, {useState, useEffect} from 'react'
import './test.css'
import store from '../store/index.js'
import {addNoteAction} from "../store/actionCreators";
import {List} from "./list";
import {shopData} from "../api";

const Test = () => {
    const [now, setTimer] = useState(new Date().toLocaleString());
    const [note, setNote] = useState('');

    const Lists = store.getState();

    // store.subscribe(()=>{console.log(Lists)});函数式不订阅，也是可以的。
    useEffect(
        () => {
            setTimeout(
                () => setTimer(new Date().toLocaleString()), 1000
            )
        }, [now]
    );
    const shops = async ()=>{
        const shops = await shopData() ;
        console.log(shops);
    };
    useEffect(
         () => {
            shops()
        },[]
    );
    const addNotes = ()=>{
        if(!note) return;
        const obj = {id:now,note};
        setNote('');
        //这里把方法传递给store
        const action  = addNoteAction(obj);
        store.dispatch(action)
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
                Lists.length > 0 ?
                <ul>
                    {
                        Lists.map((list,index)=>
                            <List index={index}
                                  list={list} key={index}
                                  now={now}
                            />
                            // List(index,list,{edit,setEdit,editOver,deleteNote,editStart,now}) 这里犯错了！
                        )
                    }
                </ul>
                    :
                    <p>请先添加笔记！</p>

            }
        </div>
)
};
export default Test;