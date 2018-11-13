const fs = require('fs')

const parse = (path) => fs.readFileSync(path, 'utf8').split('\n')
  .filter((d) => d)
  .map((d) => JSON.parse(d))
const format = (path, data) => fs.writeFileSync(
  path,
  data
    .filter((d) => d)
    .map((d) => JSON.stringify(d)).join('\n')
)
const formatRow = (row) => JSON.stringify(row).concat('\n')

module.exports = { parse, format, formatRow }
