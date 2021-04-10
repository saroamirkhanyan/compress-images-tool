const sharp = require('sharp')
const fs = require('fs')
const path = require('path')
module.exports = async ({imagePath, quality, prefix, saveIn}) => {
	if(!fs.existsSync(imagePath)) {
		console.error(`Image not found at ${imagePath}`)
		process.exit();
	}
	if(!fs.existsSync(saveIn)) {
		console.error(`Not found directory - ${saveIn}`)
		process.exit();	
	}
	const image = fs.readFileSync(imagePath)
	const imageName = path.basename(imagePath)
	await sharp(image)
	.jpeg({quality})
	.toFile(path.join(saveIn,prefix + imageName))
}
