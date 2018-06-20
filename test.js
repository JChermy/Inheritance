function Parent() {
   this.test = function() {
       console.log("come from constructor");
   }
}

Parent.prototype.test = function() {
    console.log("come from prototype");
}

var child = new Parent();
child.test(); //come from constructor
child.__proto__.test(); //come from prototype




