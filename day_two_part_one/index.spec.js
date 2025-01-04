const {findingSafeReports} = require("./index");
const array_data = require("../day_two_part_one/array_data")
const testData = array_data.testData

test('check if ascending', () => {
  expect(findingSafeReports([[1,2,3,4,5]])).toEqual(1)
});

test('check if descending', () => {
  expect(findingSafeReports([[5,4,3,2,1]])).toEqual(1)
});

test('check if ascending then descending', () => {
  expect(findingSafeReports([[1,3,2,4,5]])).toEqual(0)
});

test('check if descending then ascending', () => {
  expect(findingSafeReports([[5,4,3,2,3]])).toEqual(0)
});

test('check if duplicate number', () => {
  expect(findingSafeReports([[1,2,3,3,4]])).toEqual(0)
});

test('check if diff above 3', () => {
  expect(findingSafeReports([[1,2,3,7,4]])).toEqual(0)
});

test('check if diff below 1', () => {
  expect(findingSafeReports([[1,0,3,7,4]])).toEqual(0)
});

test('multiple arrays passed through, only one safe', () => {
  expect(findingSafeReports([[1,2,2,3,4],[5,4,3,2,1]])).toEqual(1)})

test('multiple arrays passed through, all safe', () => {
  expect(findingSafeReports([[1,2,3,4,5],[5,4,3,2,1]])).toEqual(2)
});

test('multiple arrays passed through, all safe', () => {
  // expect(findingSafeReports([[7,6,4,2,1],[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,9,4,4,1],[1,3,6,7,9]])).toEqual(2)
  expect(findingSafeReports([[1,2,7,8,9]])).toEqual(0)
});

test('full array test', () => {
  expect(findingSafeReports(testData)).toEqual(257)
});

// test('check to see if duplicates remove', () => { second })