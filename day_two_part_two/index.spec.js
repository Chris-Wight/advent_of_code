const {findingSafeReports} = require("./index");
const array_data = require("../day_two_part_one/array_data")
const testData = array_data.testData

test('check if ascending', () => {
  expect(findingSafeReports([[1,2,3,4,5]])).toEqual(1)
});

test('check if descending', () => {
  expect(findingSafeReports([[5,4,3,2,1]])).toEqual(1)
});
test('check if descending', () => {
  expect(findingSafeReports([[5,4,6,3,1]])).toEqual(1)
});
test('check if ascending then descending', () => {
  expect(findingSafeReports([[1,3,2,4,5]])).toEqual(1)
});

test('check if descending then ascending', () => {
  expect(findingSafeReports([[5,4,3,2,3]])).toEqual(1)
});

test('check if duplicate number', () => {
  expect(findingSafeReports([[1,2,3,3,4]])).toEqual(1)
});

test('check if duplicate number', () => {
  expect(findingSafeReports([[4,7,3,2,1]])).toEqual(1)
});

test('check if diff above 3', () => {
  expect(findingSafeReports([[1,2,3,7,4]])).toEqual(1)
});

test('check if diff above 3', () => {
  expect(findingSafeReports([[4,7,3,2,1]])).toEqual(1)
});

test('check if diff below 1', () => {
  expect(findingSafeReports([[1,0,3,7,4]])).toEqual(0)
});

test('multiple arrays passed through, only one safe', () => {
  expect(findingSafeReports([[1,2,2,3,4],[5,4,3,2,1]])).toEqual(2)
});

test('multiple arrays passed through, all safe', () => {
  expect(findingSafeReports([[1,2,3,4,5],[5,4,3,2,1]])).toEqual(2)
});

test('multiple arrays passed through, all safe', () => {
  // expect(findingSafeReports([[7,6,4,2,1],[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,9,4,4,1],[1,3,6,7,9]])).toEqual(2)
  expect(findingSafeReports([[1,2,7,8,9]])).toEqual(0)
});

test('testing multiple failures', () => {
  // expect(findingSafeReports([[7,6,4,2,1],[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,9,4,4,1],[1,3,6,7,9]])).toEqual(2)
  expect(findingSafeReports([[1,1,3,4,4]])).toEqual(0)
});

test('testing multiple failures', () => {
  // expect(findingSafeReports([[7,6,4,2,1],[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,9,4,4,1],[1,3,6,7,9]])).toEqual(2)
  expect(findingSafeReports([[1,1,3,4,4]])).toEqual(0)
});

// Their Test cases below

test('testing their example test cases', () => {
  expect(findingSafeReports([[7,6,4,2,1]])).toEqual(1)
})

test('Their Numbers, diff test', () => {
  expect(findingSafeReports([[1,2,7,8,9]])).toEqual(0)
})

test('Their Numbers, diff test des', () => {
  expect(findingSafeReports([[9,7,6,2,1]])).toEqual(0)
})

test('Their Numbers, asc-des issue 1 edit = safe', () => {
  expect(findingSafeReports([[1,3,2,4,5]])).toEqual(1)
})

test('Their Numbers, remove dup = safe', () => {
  expect(findingSafeReports([[8,6,4,4,1]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,3,6,7,9]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[7,6,4,2,1]])).toEqual(1)  //,[1,2,7,8,9],[9,7,6,2,1],[1,3,2,4,5],[8,6,4,4,1],[1,3,6,7,9]
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,3,5,9,4,3,2,1]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,6,9,10,11,14,13]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[16,10,10,11,14,19]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[11,12,12,13,14]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[11,11,11,13,14]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,5,6]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[12,7,9,7,7]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[11,11,12,12]])).toEqual(0)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,3,2,1]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,2,5,3,4]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[7,10,8,10,11]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[47,46,47,49,51,54,56]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[49,46,47,49,51,54,56]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[48,46,47,49,51,54,56]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,1,2,3,4,5]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,2,3,4,5,5]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[5,1,2,3,4,5]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,4,3,2,1]])).toEqual(1)
})


test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,4,3,2,1]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,6,7,8,9]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,2,3,7,4]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[1,2,3,4,3]])).toEqual(1)
})

test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[9,8,7,6,7]])).toEqual(1)
})
test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[7,10,8,10,11]])).toEqual(1)
})
test('Their Numbers, safe no removal', () => {
  expect(findingSafeReports([[29,28,27,25,26,25,22,20]])).toEqual(1)
})

test('full array test', () => {
  expect(findingSafeReports(testData)).toEqual(328)
});
