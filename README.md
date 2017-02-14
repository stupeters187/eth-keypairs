A simple function that creates Ethereum Wallet Adresses from any Private key

to use in CLI:

$ node ./keygen.js "private key"

to create a sha3 hash to use in a brain wallet using this function:

$ node

> var Web3 = require("web3")

> var web3 = new Web3

> we3.sha3("brain wallet string")

The output will the the 40 character private key

note: omit the "0x" at the beginning of the output


