'use strict';
// 写法参考：http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
// 规范参考：https://github.com/fex-team/styleguide/blob/master/javascript.md#243-%E6%96%87%E6%A1%A3%E5%8C%96%E6%B3%A8%E9%87%8A
var Feather = (function(){
  var ft = {};

  ft.greet = function() {
      alert("Hello from the " + name + " library.");
  }


  ft.sum = function(a,b) {
    return a + b;
  }

  //>>>> 在这里面添加新函数，写法如上

  /**
  * 生成随机人名(可作为测试数据使用)
  *
  * @param {number} 设置数量
  * @return {[string]} 人名数组
  */
  ft.randomNames = function(num) {
    //TODO:
  }

  /**
  * 生成随机颜色(可作为测试数据使用)
  *
  * @param {number} 设置数量
  * @return {[string]} 颜色数组，颜色为十六进制如：#E5EFF8
  */
  ft.randomColorsHex = function(num) {
    //TODO:
  }

  // 你的代码...

  //<<<<

  return ft;
}());


//------------


String.prototype.ft = (function(){
  var ft = {};

  ft.sayHello = function() {
    return "hello";
  }

  //验证: 身份证 -> Bool
  ft.isIdCard = function() {
    //TODO
  }

  //验证: 邮箱 -> Bool
  ft.isEmail = function() {
    //TODO
  }

  //验证: 手机号 -> Bool
  ft.isPhone = function() {
    //TODO
  }

  //验证: 手机号 -> Bool
  ft.isMobile = ft.isPhone;

  //验证: 是否为空 -> Bool
  ft.isEmpty = function() {
    //TODO
  }

  /**
  * 拼接路径
  * 字符串 "/usr/" 或 "/usr"， 拼接路径 "hello"，最终结果都为 "/usr/hello"
  * @param {number} 路径
  * @return {[string]} 拼接完成的新路径
  */
  ft.appendingPath = function(path) {
    //TODO
  }

  //验证: 是否是邮箱 -> Bool
  ft.isEmail = function() {
    //TODO
  }

  //验证: 是否是邮箱 -> Bool
  ft.isEmail = function() {
    //TODO
  }



  return ft;
}());
