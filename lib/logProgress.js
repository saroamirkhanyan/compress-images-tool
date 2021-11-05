module.exports = (percentage) => {
    process.stdout.write(`Finished ${Math.floor(percentage)} / 100\n`)
	if(percentage === 100) {
       process.stdout.write("\n") 
    }
}
