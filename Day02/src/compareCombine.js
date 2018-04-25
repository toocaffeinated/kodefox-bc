// @flow
/* eslint-disable */

function combineCompare(thing1: any, thing2: any) {
  if (thing1 == null || thing2 == null) {
    return false
  }
  // checking all primitives cases
  if (
    typeof thing1 === 'number' || typeof thing1 === 'string' || typeof thing1 === 'boolean'
    &&
    typeof thing2 === 'number' || typeof thing2 === 'string' || typeof thing2 === 'boolean'
  ) {
    return false
  }
  // checking non-primitives cases (Array vs Array)
  if (isAnArrays(thing1, thing2)) {
    return compareArrays(thing1, thing2)
  }
  // checking Objects cases
  if (isAnObjects(thing1, thing2)) {
    return compareObjects(thing1, thing2)
  }
  return false
}

function isAnArrays(arr1: Array<mixed>, arr2: Array<mixed>) {
  if (Array.isArray(arr1) && Array.isArray(arr2)) {
    return true
  } else {
    return false
  }
}

function compareArrays(arr1: Array<mixed>, arr2: Array<mixed>) {
  if (arr1.length !== arr2.length) {
    return false
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

function isAnObjects(obj1: Object, obj2: Object) {
  // check if obj1 && obj2 is an Object
  if (
    typeof obj1 === 'object' && !Array.isArray(obj1) && obj1 != null
    &&
    typeof obj2 === 'object' && !Array.isArray(obj2) && obj2 != null
  ) {
    return true
  }
}

function compareObjects(obj1: Object, obj2: Object) {
  let keys1 = Object.keys(obj1)
  let keys2 = Object.keys(obj2)

  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    if (keys1[key] !== keys2[key]) {
      return false
    }
  }
  for (let key of keys2) {
    if (keys2[key] !== keys2[key]) {
      return false
    }
  }
  return true
}

export {compareArrays, compareObjects, combineCompare, isAnArrays, isAnObjects}
