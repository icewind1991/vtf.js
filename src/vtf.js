var vtflib = require('./vtflib');

/**
 * @return {number}
 */
var getSize = vtflib.cwrap('vlImageGetSize', 'number', []);

/**
 * @return {boolean}
 */
var saveLumb = vtflib.cwrap('vlImageSaveLump', 'boolean', ['number', 'number', 'number']);

/**
 * @return {boolean}
 */
var fromData = vtflib.cwrap('fromData', 'boolean', ['number', 'number', 'number']);

/**
 * get an emscripten pointer to a typed array
 *
 * @param {Uint8Array} sourceData
 * @returns {int}
 */
function pointerFromData(sourceData) {
	var buf = vtflib._malloc(sourceData.length);
	vtflib.HEAPU8.set(sourceData, buf);
	return buf;
}

/**
 *
 * @param pointer
 * @param size
 * @return {Uint8Array}
 */
function getDataFromPointer(pointer, size) {
	return new Uint8Array(vtflib.HEAPU8.buffer, pointer, size);
}

exports.fromRGBA = function (sourceData, width, height) {
	var buf = pointerFromData(sourceData);
	fromData(width, height, buf);
	var targetSize = getSize();
	var targetPointer = vtflib._malloc(targetSize);
	var sizePointer = vtflib._malloc(4);
	saveLumb(targetPointer, targetSize, sizePointer);
	var resultSize = (new Uint32Array(vtflib.HEAPU8.buffer, sizePointer, 1))[0];
	return getDataFromPointer(targetPointer, resultSize);
};
