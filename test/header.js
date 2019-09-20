function Header() {
	var dom = document.getElementById('root');
	var header = document.createElement('div');
	header.innerText = 'header';
	dom.append(header);
}

// Module 模块导出
// export default Header;

// CommonJS模块导出
module.exports = Header;