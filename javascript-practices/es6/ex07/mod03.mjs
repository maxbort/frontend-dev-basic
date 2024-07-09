/**
 * named export
 * 
 * 1. export(require) 와 비슷하다.
 *      exports.a = ...
 *      exports.b = ...
 * 
 * 2. import 하는 모듈에 destructing(구조 분해) 할 수 있다.
 *  
 */

export const add = function(a,b){
    return a+b;
}
export const subtract = function(a,b){
    return a-b;
}