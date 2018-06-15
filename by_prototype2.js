/** 
 * 原型继承缺点：
 * 1.引用类型的属性被所有实例共享
 * 2.在创建Child实例时，不能向Parent传参
*/
function Parent() {
    this.names = ["aa", "bb"];
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();
child1.names.push("cc");
console.log(child1.names); //["aa","bb","cc"]

var child2 = new Child();
console.log(child2.names); //["aa","bb","cc"]

child2.names.push("dd");
console.log(child1.names) //["aa", "bb", "cc", "dd"]
console.log(child2.names);//["aa", "bb", "cc", "dd"]

var p = new Parent();
console.log(p.names); //["aa", "bb"]
