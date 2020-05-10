/**
 * Additional math functions for edge cases.
 */

/**
 * Clamp number in range (by min/max).
 *
 * @param {Number} x Any number.
 * @param {Number} min Lower threshold to clamp.
 * @param {Number} max Upper threshold to clamp.
 * @return {Number} Clamped input.
 * @example clamp(1, 3, 5)	// 3
 */
export function clamp(x, min = 0, max = 0) {
	return Math.min(Math.max(x, min), max);
}
/**
 * Like Math.floor but rounds negative numbers towards zero.
 *
 * @param {Number} x Any number.
 * @return {Number} Input floored.
 * @example floorNeg(-5.3)	// 5
 */
export function floorNeg(x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
}

/**
 * Get base and units of number with logarithm by 10.
 *
 * @param {Number} x Any number.
 * @returns {Object} Object with base and units of input.
 * @example floor10(543)	// { base10: 100, units10: 5 }
 */
export function floor10(x) {
	const base10 = Math.pow(10, Math.floor(Math.log10(x)));
	return { base10, units10: Math.floor(x / base10) };
}
