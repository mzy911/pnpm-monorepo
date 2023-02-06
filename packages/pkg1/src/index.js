// pkg1/src/index.ts
import pkg2 from '@mzy123/pkg2';

function fun2() {
  pkg2();
  console.log('I am package 1');
}

export default fun2;