/**
* 原型式继承
*  缺点：包含引用类型的属性值始终会共享相应的值，与原型链继承一样
*/
function createObj(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

var person = {
    name: 'jchermy',
    friends: ["aa", "bb"]
}

var person1 = createObj(person);
var person2 = createObj(person);

//注意：修改person1.name的值，person2.name的值并未发生改变，
//并不是因为person1和person2有独立的 name 值，而是因为person1.name = 'person1'，给person1添加了 name 值，并非修改了原型上的 name 值。
person1.name = "xiaomi";
console.log(person2.name); //"jchermy"

person2.friends.push("cc");
console.log(person1.friends); //["aa", "bb", "cc"]