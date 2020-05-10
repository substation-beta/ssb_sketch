const MathExt = require('./math');

test('clamp 3 in range [4.5, 10] results in 4.5', () => {
	expect(MathExt.clamp(3, 4.5, 10)).toBe(4.5);
});

test('Floor (negative) resolves -5.3 to -5', () => {
	expect(MathExt.floorNeg(-5.3)).toBe(-5);
});

test('Floor by base 10 resolves 7654.3 to base 1000 with 7 units', () => {
	expect(MathExt.floor10(7653.3)).toStrictEqual({ base10: 1000, units10: 7 });
});
