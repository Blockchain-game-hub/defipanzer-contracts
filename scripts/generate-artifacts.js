const fs = require('fs')

const artifactsToGenerate = [
  'DefiPanzer.json',
]

artifactsToGenerate.forEach(a => {
  const source = `build/contracts/${a}`
  const dest = `artifacts/${a}`
  const abi = JSON.parse(fs.readFileSync(source)).abi
  fs.writeFileSync(dest, JSON.stringify({ abi }) + '\n')
})
