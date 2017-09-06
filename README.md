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

##issue
####1. material-ui @types文件接口声明有误(出现接口遗漏未定义的情况)
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
	
##examples
####1. redux 基础应用实例
#####具体代码参见 /examples/redux