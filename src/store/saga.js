import { put, takeEvery } from 'redux-saga/effects'
import {GET_ALLNOTE, REQ_ALLNOTE} from "./actionTypes";
import {shopData} from "../api";

function* getNotes(){
    const data = yield shopData()
    console.log(data);
    if(data.success_code  === 200) {
        yield put({type:GET_ALLNOTE,lists:data.lists})
    }
}

function* mySaga() {
    yield takeEvery(REQ_ALLNOTE, getNotes);
}

export default mySaga;