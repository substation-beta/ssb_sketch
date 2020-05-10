const MathExt = require('./math');

test('clamp 5 in range 7 - 10 results in 7', () => {
	expect(MathExt.clamp(5, 7, 10)).toBe(7);
});
