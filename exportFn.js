const exportFn = () => {
	console.log("You exported me")
}

// modules.exports = {exportFunc, thing() {}, value: 1}
module.exports = exportFn // Second one will win
