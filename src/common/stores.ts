import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';

/* redux-saga redux 中间件 */
import createSagaMiddleware from 'redux-saga';

/* 业务saga异步请求模块 */
import { watchCountFetch } from '../pages/count/sagas';

/* 调用 Chrome 浏览器 redux-devtools 开发插件 */
// import { composeWithDevTools } from 'redux-devtools-extension';

/* 调用 Chrome 浏览器 redux-devtools 开发插件 */
import * as Perf from 'react-addons-perf';

import thunk from 'redux-thunk';  

/* 检测reducer的纯函数规则 */
const immutableStateInvariantMiddleware = require('redux-immutable-state-invariant');

/* 这里 win = window，
因为 webpack 打包压缩不会压缩全局变量，
所以赋值给 win 这样webpack就可以压缩window了 */
/* 因为window没有声明，所以 as any ，或者采取下面的方法声明 window */
const win = window as any;

/* interface Window {
    Perf: any;
    __REDUX_DEVTOOLS_EXTENSION__: any;
}
declare var window: Window;
const win = window; */

win.Perf = Perf;

/* 初始化默认 state */
const initialState = {};

/* 创建 saga 中间件实例 */
const sagaMiddleware = createSagaMiddleware();

/* redux中间件序列 */
const middlewares = [sagaMiddleware, thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(immutableStateInvariantMiddleware.default());
}

/* 配置Store */
export default function configureStore(state: any = initialState) {
    /* 使用 composeWithDevTools 组合redux中间件并应用，也可以使用redux的compose，进行组合中间件 */
    const storeEnhancer = compose(
        applyMiddleware(...middlewares),
        win.__REDUX_DEVTOOLS_EXTENSION__ && win.__REDUX_DEVTOOLS_EXTENSION__()
    );

    /* 创建 store 实例 */
    const store = createStore(reducer, state, storeEnhancer);

    /* saga 中间件运行 saga业务模块 */
    sagaMiddleware.run(watchCountFetch);
    return store;
}
