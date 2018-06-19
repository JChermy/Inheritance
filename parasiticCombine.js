/**
 * 寄生组合式继承
 * 这种方式的高效率体现它只调用了一次 Parent 构造函数，并且因此避免了在 Parent.prototype 上面创建不必要的、多余的属性。
 * 与此同时，原型链还能保持不变；因此，还能够正常使用 instanceof 和 isPrototypeOf。
 * 开发人员普遍认为寄生组合式继承是引用类型最理想的继承范式。
 */
function Parent(name) {
   this.name = name;
   this.colors = ["red", "blue", "green"];
}

Parent.prototype.getName = function () {
    console.log(this.name);
  }

  function Child(name, age) {
      Parent.call(this, name);
      this.age = age;
  }

//关键的三步
  var F = function(){};

  F.prototype = Parent.prototype;

  Child.prototype = new F();


  
  Child.prototype.constructor = Child;

  var child1 = new Child('xiaomi', 18);
  var child2 = new Child2('aa', 24);
  console.log(child1.name); //xiaomi
  console.log(child2.name); //aa

  child1.colors.push("black");
  child1.colors; //["red", "blue", "green", "black"]
  child2.colors; //["red", "blue", "green"];