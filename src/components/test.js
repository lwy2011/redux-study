
import React , {useState,useEffect} from 'react'
import './test.css'


const Test = ()=> {
    const [now,setTimer] = useState(new Date().toLocaleString());
    useEffect(
        ()=>{
            setTimeout(
                ()=>setTimer(new Date().toLocaleString()),1000
            )
        },[now]
    );
    return(
        <div className="clock">
            时间：<span className="time">{now}</span>
        </div>
    )
};
export default Test;