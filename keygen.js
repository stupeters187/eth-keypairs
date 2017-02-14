var EthUtil = require("ethereumjs-util")
// console.log(`0:${process.argv[0]}\n1:${process.argv[1]}\n2:${process.argv[2]}\n`)

var hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
  bytes.push(parseInt(hex.substr(c, 2), 16));
  return bytes
}

var privateKeyToAddress = function(privateKey) {
  return `0x${EthUtil.privateToAddress(hexToBytes(privateKey)).toString('hex')}`
}

console.log(privateKeyToAddress(process.argv[2]))