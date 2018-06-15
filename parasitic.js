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