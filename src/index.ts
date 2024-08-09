import {
  createObjectWithDirectPropertyAssignment,
  createObjectWithObjectAssign,
  createObjectWithSpread,
  large_object,
  measureExecutionTime,
  modifyInputObject,
} from './spread_operator_performance';

const spreadTime = measureExecutionTime(100_000, createObjectWithSpread, 1000);
const propTime = measureExecutionTime(
  100_000,
  createObjectWithDirectPropertyAssignment,
  1000
).toFixed(4);

const assignTime = measureExecutionTime(
  100_000,
  createObjectWithObjectAssign,
  1000
).toFixed(4);

const mutateInputObject = measureExecutionTime(
  100_000,
  modifyInputObject,
  large_object
).toFixed(4);

console.log(
  'Performance Results:\n' +
    `With spread operator: ${spreadTime} ms\n` +
    `With direct property assignment: ${propTime} ms\n` +
    `With Object.assign: ${assignTime} ms\n` +
    `With mutating input object: ${mutateInputObject} ms`
);

console.log('finish');
