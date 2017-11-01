# Dissecting React Ecosphere
Use create-react-app build react & redux & react-redux & react-router-v4 & redux-saga & redux-actions & styled-components & material-ui with typescript.

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
10. yarn add reselect **(redux数据缓存)**

## 调试工具引入
1. redux-devtools
2. react perf
3. redux-immutable-state-invariant

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

#### 完整 store 
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
	const middlewares = [sagaMiddleware];
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

	
##examples
####1. redux 基础应用实例
#####具体代码参见 /examples/redux


## 项目优化技巧／写法方案
#### 1. 尽可能避免组件包裹元素节点 dom 类型的改变
比如:

	<div>...</div> => <span>...</span>
此时会造成内部元素的重新装载

#### 2. key 关键字的使用
> 当插入 \<li> zero react 会依次比较 ul 中的元素，默认会将first & zero，second & first ...进行比较，比较后发现不同，此时会重新渲染 first & second。
> 
> key作为唯一标识，在比较的时候，key=1，key=2...的元素进行比较，此时 first & first，second & second 进行比较，发现认为元素没有变化，就不会重新渲染 li first & second

	<ul>
		<li key={1}>first</li>
		<li key={2}>second</li>
	</ul>
	<ul>
		<li key={0}>zero</li>
		<li key={1}>first</li>
		<li key={2}>second</li>
	</ul>

#### 3. 尽可能避免使用 ref
> 方案如果是为了获取 input value, 可以通过 state 同步 input value 的方式获取，但个人认为也不是最好的方案，因为有时只需要获取value，没必要进行 state 和 input value 的同步，这时其实是一种浪费。

	onChange={(ev: any) => {
		this.setState({ inputValue: ev.target.value });
	}}

#### 4. mapDispatchToProps几种写法
1. ###### this.props.actions.xxx()
		const mapDispatchToProps = (dispatch: any, ownProps: any) => ({
		    onClick: () => {
		        dispatch(Actions.setFilter(ownProps.filter));
		    }
		});
		
2. ###### this.props.actions.xxx()
		function mapDispatchToProps(dispatch: any) {
		    return {
		        actions: bindActionCreators<any>(Actions, dispatch)
		    };
		}
		
3. ###### this.props.actions.xxx()
		const mapDispatchToProps = (dispatch: any) => ({
			actions: bindActionCreators<any>(Actions, dispatch)
		});
		
4. ###### {xxxFn, xxxFn}
		import { bindActionCreators } from 'redux';
		
		const mapDispatchToProps = (dispatch: any) => 
			(bindActionCreators(Actions, dispatch));
		const mapDispatchToProps = (dispatch: any) =>
			bindActionCreators(Actions, dispatch);
			
5. ###### {xxxFn, xxxFn}
		const { toggleTodo, removeTodo } = Actions;
		const mapDispatchToProps = {
			toggleTodo,
			removeTodo
		};
		
6. ###### 避免 (tslint) no-shadow-name 的问题
		const mapDispatchToProps = {
		    toggleTodo: Actions.toggleTodo,
		    removeTodo: Actions.removeTodo
		};
		
7. ###### 最直接方案
		/* const mapDispatchToProps = Actions; */
		export default connect(mapStateToProps, Actions)(TodoList);
		
8. ###### PureComponent 

	> 需要注意的是，PureComponent使用浅比较判断组件是否需要重绘，因此，下面对数据的修改并不会导致重绘（假设Table也是PureComponent)
		
		options.push(new Option())
		options.splice(0, 1)
		options[i].name = "Hello"
	  
	  
	> 这些例子都是在原对象上进行修改，由于浅比较是比较指针的异同，所以会认为不需要进行重绘。
		
9. ###### Literal Array与Literal Object

		{this.props.items.map(i =>
		 	<Cell data={i} options={this.props.options || []} />
		)}
	
	
	> 若options为空，则会使用[]。[]每次会生成新的Array，因此导致Cell每次的props都不一样，导致需要重绘。解决方法如下:

		const default = [];
		{this.props.items.map(i =>
		<Cell data={i} options={this.props.options || default} />
		)}

10. ###### 内联函数
> 函数也经常作为props传递，由于每次需要为内联函数创建一个新的实例，所以每次function都会指向不同的内存地址。比如：

	##### ❌
		
		render() {
		  <MyInput onChange={e => this.props.update(e.target.value)} />;
		}
	
	
		update(e) {
		  this.props.update(e.target.value);
		}
		
		render() {
		  return <MyInput onChange={this.update.bind(this)} />;
		}
------------------
	##### ✅
		constructor(props) {
		 super(props);
		 this.update = this.update.bind(this);
		}
		update(e) {
		 this.props.update(e.target.value);
		}
		render() {
		 return <MyInput onChange={this.update} />;
		}
	

	
###表达式
[payload, ...state]
{ ...todoItem, completed: !todoItem.completed }
	
	


	
###### ps: 项目优化技巧／写法方案中的，8、9、10是转载
> 作者：橙子_80c3
來源：[简书](http://www.jianshu.com/p/33cda0dc316a)


