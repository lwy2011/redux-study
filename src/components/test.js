import React, {useState, useEffect} from 'react'
import './test.css'
import store from '../store/index.js'
import {addNoteAction, getAllNotesAction, reqAllNotesAction} from "../store/actionCreators";
import {List} from "./list";
import {connect} from "react-redux";

const Test = (props) => {
    const [now, setTimer] = useState(new Date().toLocaleString());
    const [note, setNote] = useState('');

    // const Lists = store.getState();   无react-redux的时候，引入data

    //有react-redux的时候，引入data:
    const {notes} = props;


    // store.subscribe(()=>{console.log(Lists)});函数式不订阅，也是可以的。
    useEffect(
        () => {
            setTimeout(
                () => setTimer(new Date().toLocaleString()), 1000
            )
        }, [now]
    );
    // const shops = async ()=>{
    //     const shops = await shopData() ;
    //     if(shops.success_code === 200){
    //         const action = getAllNotesAction(shops);
    //         store.dispatch(action)
    //     }
    // };
    useEffect(
         () => {
             // const action = reqAllNotesAction();
             // store.dispatch(action);     没有引入react-redux的时候


             //引入react-redux的用法
             console.log(props);
             props.reqAllNotes()
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
                    {/*{console.log(JSON.stringify(Lists))}*/}
                    {
                        notes.map((list,index)=>
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


//react-redux加入，用了connect，第一个参数是store，第二个参数是派发行为！

const mapDispatchToProps = (dispatch)=>{
    return {
        reqAllNotes(){
            const action = reqAllNotesAction();
            dispatch(action)
        }
    }
};


const mapStateToProps = (state)=>{
    return {
        notes : state
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Test);