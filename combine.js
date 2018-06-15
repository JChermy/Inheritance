/***
* 组合继承
* 优点: 融合原型链继承和构造函数的优点，是JavaScript中最常用的继承模式
*/
function Parent(name) {
    this.name = name;
    this.colors = ["red", "blue"];
}

Parent.prototype.getName = function() {
    console.log(this.name);
}

function Child(name, age) {
    Parent.call(this, name); 
    this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var child1 = new Child("aa", 18);
child1.colors.push("black");

child1.name; //"aa"
child1.age; //18
child1.colors; //["red", "blue","black"]

var child2 = new Child("bb", 20);
child2.name; //"bb"
child2.age; //20
child2.colors; //["red", "blue"]