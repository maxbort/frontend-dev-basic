/**
 * Arrays 확장(prototype 기반의 확장)
 * 예제: List 함수 추가
 */

Array.prototype.remove = function(index) {
    // console.log('call remove' + index);
    this.splice(index,1);
}

Array.prototype.insert = function(index, value) {
    if (value instanceof Array){
    //     for(var i = 0; i < value.length; i++){
    //         this.splice(index,0,value[i]);
    //         index += 1;
    //     }
    // this 함부로 사용하면 error

    //    value.forEach(function(e){
    //        console.log(this);
    //       // this.splice(index++, 0, e);
    //    });
    
    
    }
    else{
        this.splice(index,0,value);
    }
}


// List 함수 사용하기
var a = [1, 2, 4];
console.log(a);

a.insert(2,3);
console.log(a);

a.remove(2);
console.log(a);


a.insert(2,['a','b','c']);
console.log(a); // expect: [1,2,'a','b','c',4], result: [ 1, 2, [ 'a', 'b', 'c' ] ]

o = {
    forEach: function(callback){
        for(p in this){
            callback(p);
        }
    }
}