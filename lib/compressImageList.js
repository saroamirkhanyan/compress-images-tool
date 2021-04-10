const compressImage = require('./compressImage.js')
const { EventEmitter } = require('events')
module.exports = ({ imagesPaths, quality, prefix, saveIn }) => {
	const eventEmitter = new EventEmitter();
	const eachPercentage = 100 / imagesPaths.length 
	let finishedCount = 0;
	imagesPaths.forEach(async (imagePath) => {
		await compressImage({
			imagePath,
			quality,
			prefix,
			saveIn,
		})
		finishedCount++;
		eventEmitter.emit(
			'progress', 
			 eachPercentage * finishedCount
		)
	})

	return eventEmitter
}

