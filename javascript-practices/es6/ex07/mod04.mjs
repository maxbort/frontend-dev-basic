/**
 * named export
 * 
 * 1. export(require) 와 비슷하다.
 *      exports.a = ...
 *      exports.b = ...
 * 
 * 2. import 하는 모듈에 destructing(구조 분해) 할 수 있다.
 * 
 * 3.   
 */

const add = function(a,b){
    return a+b;
}
const subtract = function(a,b){
    return a-b;
}

export {add, subtract};
export default {add, subtract};