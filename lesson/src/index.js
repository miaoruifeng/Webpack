// ES Module 模块引入
// CommonJS 模块引入规范（nodeJs）
// CMD
// AMD

// webpack 是一个模块打包工具


// Module 模块引入
// import Header from './header.js';
// import Sidebar from './sidebar.js';
// import Content from './content.js';

//ComnonJS 模块引入
const Header = require('./header.js');
const Sidebar = require('./sidebar.js');
const Content = require('./content.js');

new Header();
new Sidebar();
new Content();