function add(a, b) {
  return a + b
}


test('workds', () => {
  expect(add(1,2)).toBe(3)
})


test('as', () => {
  expect(typeof(add) === 'function').toBe(true)
})


((PI) => 
  ((PI) => 
    (diameter) => diameter * PI
  )(3.1415)
)(3)(2)

