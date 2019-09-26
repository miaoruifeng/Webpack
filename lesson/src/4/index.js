/* 4-1  4-2 */
// Tree Shaking 只支持 ES Module引入，不支持CommonJs引入
import { add } from './math';
add(1, 2);

/* 4-3  4-4  4-5  4-6 */
// 同步代码
import _ from 'lodash';
const element = document.createElement('div');
element.innerHTML = _.join(['hello', 'world'], '-');
document.body.appendChild(element);

// 异步代码
function getComponent() {
    // 魔法注释
    return import(/* webpackChunkName:"lodash" */'lodash').then(({ default: _ }) => {
        const element = document.createElement('div');
        element.innerHTML = _.join(['hello', 'world'], '-');
        return element;
    })
}
getComponent().then(element => {
    document.body.appendChild(element);
})

/* 4-7 */
// async - await 异步函数改写 Promise
async function getComponent() {
    const { default: _ } = await import(/* webpackChunkName:"lodash" */'lodash');
    const element = document.createElement('div');
    element.innerHTML = _.join(['hello', 'world'], '-');
    return element;
}
// 懒加载
document.addEventListener('click', () => {
    getComponent().then(element => {
        document.body.appendChild(element);
    })
})

/* 4-8 */
// Preloading / Prefetching 
document.addEventListener('click', () => {
    import(/* webpackPrefetch: true */ './click.js').then(({default: func}) => {
        func();
    })
})