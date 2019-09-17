//汇总文件

//把reducer的响应式逻辑，交给redux的机制来响应式管理。

import {createStore,applyMiddleware,compose} from "redux";
import reducer from './reducer'

// import thunk from 'redux-thunk'

import createSagaMiddleware from 'redux-saga'
import mySaga from './saga.js'


// const store = createStore(
//     reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  //redux-devtools的应用参数
// );
// const store = createStore(reducer);

//-----上面的是没thunk的版本的-----
//还像上面那种形式，添加applyMiddleware(thunk)为函数参数引入，会报错！因为第二三个参数冲突了

//解决冲突的网址https://github.com/zalmoxisus/redux-devtools-extension
// const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
//         window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
//
// const enhancer = composeEnhancers(
//     applyMiddleware(thunk),    //这里可以继续扩展其他的中间件
//     // other store enhancers if any
// );
// const store = createStore(reducer, enhancer);


//-----下面这个是有saga版本的--
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),    //这里可以继续扩展其他的中间件
    // other store enhancers if any
);
const store = createStore(reducer, enhancer);
sagaMiddleware.run(mySaga);
export default store;