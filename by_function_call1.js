/** 
 * 借用构造函数继承
 * 优点:
 * 1.避免了引用类型的属性被所有实例共享
 * 2.可以在Child中向Parent传参
*/
function Parent() {
    this.names = ["aa", "bb"];
}

function Child() {
    Parent.call(this);
}

var child1 = new Child();
child1.names.push("cc");
console.log(child1.names);//["aa", "bb", "cc"]

var child2 = new Child();
console.log(child2.names);//["aa", "bb"]

child2.names.push("dd");
console.log(child1.names); //["aa", "bb", "cc"]
console.log(child2.names); //["aa", "bb", "dd"]

var p = new Parent();
p.names; //["aa", "bb"]