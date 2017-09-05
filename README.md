# dissect-awesome-react-bucket
深入浅出react全家桶

1. create-react-app [your project name] --scripts-version=react-scripts-ts
2. yarn add material-ui @types/material-ui react-tap-event-plugin @types/react-tap-event-plugin
3. 引入 icon: 下载 icomoon(iconfont); import './icomoon/style.css'
4. 自定义 material-ui theme 参考 UIProvider 代码
5. yarn add styled-components
6. yarn add redux redux-actions @types/redux-actions react-redux @types/react-redux


###issue
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