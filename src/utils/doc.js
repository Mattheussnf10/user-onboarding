

const PadStartDocument = (str) => {
	if (typeof str !== 'string') {
		return "";
	}

	const pad = "X";
	const padSize = 14;
	return str.padStart(padSize, pad);
}

const PadEndDocument = (str) => {
	if (typeof str !== 'string') {
		return "";
	}

	const pad = "X";
	const padSize = 14;
	return str.padEnd(padSize, pad);
}

module.exports = { PadStartDocument, PadEndDocument };