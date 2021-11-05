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
    const extName = path.extname(imageName).slice(1)
    const sharped = sharp(image)
    const compressingFn = sharped[extName] || sharped['jpeg']
    await compressingFn.call(sharped, { quality })
	    .toFile(path.join(saveIn,prefix + imageName))
}
