# 深入浅出react全家桶

## Project Building
1. create-react-app [your project name] --scripts-version=react-scripts-ts **(基于官方脚手架，将TypeScript进行引入)**
2. yarn add material-ui @types/material-ui react-tap-event-plugin @types/react-tap-event-plugin **(流行的React UI库)**
3. 引入 icon: 下载 icomoon(iconfont); import './icomoon/style.css' **(字体图片)**
4. 自定义 material-ui theme 参考 UIProvider 代码  **(自定义UI主题)**
5. yarn add styled-components **(*CSS in JS*，React 样式处理方案 )**
6. yarn add redux redux-actions @types/redux-actions react-redux @types/react-redux  
**(*redux-actions* Flux Standard Action utilities for Redux *react-redux* Official React bindings for Redux.)**
7. yarn add redux-devtools-extension **(Chrome 扩展插件用于开发redux)**
8. yarn add redux-saga **(redux异步解决方案)**
9. yarn add react-router-dom **(路由 4.\*)**

##Project Structure
#### redux
1. actions **(定义数据CURD方法及入参)**
1. // saga(async actions) **(定义数据CURD方法及入参)**
2. root reduxProvider **(加载store)**
2. store **(数据容器)**
3. reducer **(根据action定义的方法，采用函数式编程实现并返回新的结果数据)**
4. constants **(存放action定义的方法名，目的让reducer找到action)**


##Thinks
###redux 单项数据流
- 初始化 root -> store -> reducer -> type -> action
- 运行中 view -> action -> (异步action) -> root -> store -> reducer -> view
- **saga作用** 

> Count 模块 action(request) 发出命令，saga 的 action 监听 Count action(request) 执行 ForkEffect (异步事件)， 通过call请求事件，拿到结果后，通知 (put) 到 指定的 Count 模块 action(succeeded) 传递命令 {type, payload} , Count reducer 定义 succeeded 执行规则接收命令执行规则。

> 由原来的 action 与 reducer 通信，变为 action -> saga -> reducer，saga监听 action，异步事件结束后，通知 reducer 处理后续

##issue
#### 1. material-ui @types文件接口声明有误(出现接口遗漏未定义的情况)
#####处理方案: /node_modules/@types/mmaterial-ui/index.d.ts
	interface MuiTheme {
	    ...
	    bottomNavigation?: {
	        backgroundColor?: string;
	        unselectedColor?: string;
	        selectedColor?: string;
	        height?: number;
	        unselectedFontSize?: number;
	        selectedFontSize?: number;
	    };
	    ...
	}

#### 2. create-react-app 设置 proxy
##### package.json 
	"name": "xxxxx",
	"version": "0.1.0",
	"private": true,
	"proxy": "http://localhost:4000",
	...
	
#### 3. redux-saga beginner tutorial
1. store 装载
	
		import { createStore, applyMiddleware } from 'redux'
		import reducer from '../reducers';
		import { composeWithDevTools } from 'redux-devtools-extension';
		
		export default function configureStore(initialState = {}) {
		    const enhancer = composeWithDevTools(applyMiddleware());
		    const store = createStore(reducer, initialState, enhancer);
		    return store
		}
	
#### 4. redux-saga beginner tutorial
1. store 添加saga中间件，关键代码

		import createSagaMiddleware from 'redux-saga';
		import { saga } from '../sagas/xxxx.saga'
		
		const sagaMiddleware = createSagaMiddleware()
		const initialState = {};
		
		export default function configureStore(state: any = initialState) {
		    const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
		    const store = createStore(reducer, state, enhancer);
		    sagaMiddleware.run(saga)
		    return store
		}

	
##examples
####1. redux 基础应用实例
#####具体代码参见 /examples/redux