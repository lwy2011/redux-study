//汇总文件


import {createStore} from "redux";
import reducer from './reducer'

const store = createStore(reducer);  //把reducer的响应式逻辑，交给redux的机制来响应式管理。