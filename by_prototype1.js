function Parent() {
    this.name = 'jchermy';
}

Parent.prototype.getName =  function() {
    console.log(this.name);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();
console.log(child1.getName()); //jchermy
