mergeInto(LibraryManager.library, {
	canvasResize: function (sourceRGBA, targetRGBA, sourceWidth, sourceHeight, targetWidth, targetHeight) {
		var resize = function resize(sourceRGBA, sourceWidth, sourceHeight, targetWidth, targetHeight) {
			var sourceSize = sourceWidth * sourceHeight * 4;
			var sourceData = new Uint8Array(Module.HEAPU8.buffer, sourceRGBA, sourceSize);
			var sourceCanvas = document.createElement("canvas");
			//var sourceCanvas = document.getElementById('resize-out');
			var sourceContext = sourceCanvas.getContext("2d");
			sourceCanvas.width = sourceWidth;
			sourceCanvas.height = sourceHeight;
			var imgData = sourceContext.createImageData(canvas.width, canvas.height);
			imgData.data.set(sourceData);
			sourceContext.putImageData(imgData, 0, 0);

			var targetCanvas = document.createElement("canvas");
			var targetContext = targetCanvas.getContext("2d");
			targetCanvas.width = targetWidth;
			targetCanvas.height = targetHeight;
			targetContext.drawImage(sourceCanvas, 0, 0, sourceWidth, sourceHeight, 0, 0, targetWidth, targetHeight);

			return targetContext.getImageData(0, 0, targetWidth, targetHeight).data;
		};

		var resultData = resize(sourceRGBA, sourceWidth, sourceHeight, targetWidth, targetHeight);
		Module.HEAPU8.set(resultData, targetRGBA);
		return true;
	}
});
