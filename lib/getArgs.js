const args = process.argv.slice(2, process.argv.length);

module.exports = function getArgs (name) {
	const nameIndex = args.findIndex(arg => arg == `--${name}`)
	const result = []
	for (let i = nameIndex + 1; 
		i < args.length && !args[i].startsWith('--');
		i++
	) {
		result.push(args[i])	
	}
	return result;
}
