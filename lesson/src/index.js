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
// const Header = require('./header.js');
// const Sidebar = require('./sidebar.js');
// const Content = require('./content.js');

// new Header();
// new Sidebar();
// new Content();

import avatar from './avatar.jpg';
// css模块打包  使得css只作用于对应模块
import './index.scss';
import createAvatar from './createAvatar';

createAvatar();

var img = new Image();
img.src = avatar;
img.classList.add('avatar');
document.getElementById('root').append(img);

// 字体文字打包
import createIconfont from './createIconfont'

createIconfont();

console.log('hello sourceMap!');