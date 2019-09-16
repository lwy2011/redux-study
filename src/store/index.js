//汇总文件

//把reducer的响应式逻辑，交给redux的机制来响应式管理。

import {createStore,applyMiddleware,compose} from "redux";
import reducer from './reducer'

import thunk from 'redux-thunk'
// const store = createStore(
//     reducer,
//     applyMiddleware(thunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //redux-devtools的应用参数
// );    报错！因为第二三个参数冲突了

//解决冲突的网址https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),    //这里可以继续扩展其他的中间件
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);

export default store;