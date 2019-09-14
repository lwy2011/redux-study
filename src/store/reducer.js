//数据处理，返回新数据的地方

import {ADD_NOTE, DEL_NOTE, EDIT_NOTE} from "./actionTypes";

//默认数据
const defaultState = [];

export default (state = defaultState ,action)=>{
    console.log(state,action);
    if(action.type === ADD_NOTE){
        const value = [].concat(state);
        value.push(action.list);
        return value
    }else if(action.type === DEL_NOTE){
        const value = [].concat(state);
        value.splice(action.index,1);
        return value
    }else if(action.type === EDIT_NOTE){
        const value = [].concat(state);
        value.splice(action.index,1,action.list);
        return value
    }
    return state;
}