mergeInto(LibraryManager.library, {
	canvasResize: function (sourceRGBA, targetRGBA, sourceWidth, sourceHeight, targetWidth, targetHeight) {
		var resize = require('pica/lib/pure/resize');
		var sourceSize = sourceWidth * sourceHeight * 4;
		var sourceData = new Uint8Array(Module.HEAPU8.buffer, sourceRGBA, sourceSize);

		var resultData = resize({
			src     : sourceData,
			width   : sourceWidth,
			height  : sourceHeight,
			toWidth : targetWidth,
			toHeight: targetHeight,
			alpha   : true,
			quality : 3
		});
		Module.HEAPU8.set(resultData, targetRGBA);
		return true;
	}
});
