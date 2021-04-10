#! /usr/bin/env node
const getArgs = require('./lib/getArgs.js')

const imagesArgs = getArgs('images')
const directory = getArgs('directory')[0] || ''

const DEFAULT_QUALITY = 70
const quality = parseInt(getArgs('quality')[0]) || DEFAULT_QUALITY
const prefix = getArgs('prefix')[0] || ''
const path = require('path')
const CWD = process.cwd()
const saveInArg = getArgs('save-in')[0]
const saveIn = saveInArg ? path.join(CWD, saveInArg) : CWD
const logProgress = require('./lib/logProgress.js')



const compressImageList = require('./lib/compressImageList.js')

let imagesNames = []

if (imagesArgs.length) {
	imagesNames = imagesArgs
} else if (directory) {
	const ALLOWED = ['png', 'jpeg', 'jpg']
	const allowedArgs = getArgs('allowed')

	const isValidAllowedArgs = allowedArgs.every(
		arg => ALLOWED.includes(arg)
	)	

	if (allowedArgs.length && !isValidAllowedArgs) {
		throw new Error(`formats must be one of ${ALLOWED}`)
	}

	const allowed = allowedArgs.length ? allowedArgs : ALLOWED

	const fs = require('fs')
	
	const directoryFiles = fs.readdirSync(path.join(CWD, directory))
	const directoryImages = directoryFiles.filter(
		file => allowed.includes(path.extname(file).slice(1))
	)
	imagesNames = directoryImages
}
else {
	throw new Error("Insert Images Using --directory or --images")
}

const imagesPaths = imagesNames.map(
	imageName => path.join(CWD,directory,imageName)
)

console.log(imagesNames)
console.log({imagesPaths,quality,prefix,saveIn})

compressImageList({
	imagesPaths,
	quality,
	prefix,
	saveIn
})
.on('progress', logProgress)

