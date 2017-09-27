/*
 * According to article at https://www.toptal.com/javascript/interview-questions
 * Disallows duplicate property names or parameter values. Strict mode throws an error
 * when it detects a duplicate named property in an object
 * (e.g., var object = {foo: "bar", foo: "baz"};) or a duplicate named argument for
 * a function (e.g., function foo(val1, val2, val1){}), thereby catching what is
 * almost certainly a bug in your code that you might otherwise have wasted lots
 * of time tracking down.
 */

function withstrict() {
  'use strict';
  try {
    var tempObjec  =  {
      foo: 'bar',
      baz: 'foo',
      foo: 'baz'
    }
    console.log(tempObjec)
  } catch (err) {
    console.log(err)
  }
}

function withOutstrict() {
  try {
    var tempObjec  =  {
      foo: 'bar',
      baz: 'foo',
      foo: 'baz'
    }
    console.log(tempObjec)
  } catch (err) {
    console.log(err)
  }
}

withstrict() //suppose to throw error.
withOutstrict() //suppose to warn.
