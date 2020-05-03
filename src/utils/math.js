export function clamp(x, min, max) {
	return Math.min(Math.max(x, min), max);
}

export function floorNeg(x) {
	return x < 0 ? Math.ceil(x) : Math.floor(x);
}

export function floor10(x) {
	const base10 = Math.pow(10, Math.floor(Math.log10(x)));
	return { base: base10, units: Math.floor(x / base10) };
}
