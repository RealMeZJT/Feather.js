'use strict';
// 写法参考：http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html

var Feather = (function(){
  var ft = {};

  ft.greet = function() {
      alert("Hello from the " + name + " library.");
  }


  ft.sum = function(a,b) {
    return a + b;
  }

  return ft;
}());


//------------


String.prototype.ft = (function(){
  var ft = {};

  ft.sayHello = function() {
    return "hello"
  }

  return ft;
}());
