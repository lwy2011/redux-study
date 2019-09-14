//汇总文件


import {createStore} from "redux";
import reducer from './reducer'

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());  //把reducer的响应式逻辑，交给redux的机制来响应式管理。

export default store;