// import Feather

// const Feather = require('../src/Feather');


import {Feather} from '../src/Feather.js';

test('adds 1 + 2 to equal 3', () => {
  console.log(Feather);
  expect(Feather.sum(1, 2)).toBe(3);
});

test('randomNames', ()=> {
  // 传0
  expect(Feather.randomNames(0) === []);
  // 传非整数
  expect(Feather.randomNames('xxx') === []);
  //名称不重复
  let noDuplicate = true;
  let names = Feather.randomNames(100);
  let len = names.length;

  for (i=len; i>0;i--) {
    for(j=i-1; j>=0; j--) {
      if (names[i] === names[j]) {
          noDuplicate = false;
          break;
      }
    }
  }
  expect(noDuplicate);
})
