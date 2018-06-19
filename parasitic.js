 
 /**
  * 创建一个仅用于封装继承过程的函数，该函数在内部以某种形式做增强对象，最后返回对象
  * 缺点:跟借用构造函数模式一样，每次创建对象都会创建一遍方法
  */
 function createObj(o) {
    var clone = Object.create(o);
    clone.sayName = function () {
        console.log("hi");
      }
      return clone;
}

var person = {
    name: "jchermy",
    friends: ["aa", "bb"]
};

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = "xiaomi";
console.log(person1.name); //"xiaomi"
console.log(person2.name); //"jchermy"

person1.friends.push("xxx");
console.log(person1.friends); // ["aa", "bb", "xxx"]
console.log(person2.friends); // ["aa", "bb", "xxx"]