import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';
/* 调用 Chrome 浏览器 redux-devtools 开发插件 */
import { composeWithDevTools } from 'redux-devtools-extension';
/* redux-saga redux 中间件 */
import createSagaMiddleware from 'redux-saga';
/* 业务saga异步请求模块 */
import { watchCountFetch } from '../sagas/Count.saga'
/* 初始化默认 state */
const initialState = {};
/* 创建 saga 中间件实例 */
const sagaMiddleware = createSagaMiddleware()
/* redux中间件序列 */
const middlewares = [
    sagaMiddleware
]

 /* 配置Store */
export default function configureStore(state: any = initialState) {
    /* 使用 composeWithDevTools 组合redux中间件并应用，也可以使用redux的compose，进行组合中间件 */
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    /* 创建 store 实例 */
    const store = createStore(reducer, state, enhancer);
    /* saga 中间件运行 saga业务模块 */
    sagaMiddleware.run(watchCountFetch)
    return store
}
