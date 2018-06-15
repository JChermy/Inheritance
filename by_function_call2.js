/*****
* 借用构造函数继承
* 缺点：方法都在构造函数中定义，每次创建实例都会创建一遍方法
*/

function Parent(name) {
    this.name = "parent "+name;
}

function Child(name) {
    this.name = "child"+name;
    Parent.call(this, name);
}

var child1 = new Child('hemin');
console.log(chil1.name); //"parent hemin"

var child2 = new Child("aa");
console.log(child2.name); //"parent aa"

