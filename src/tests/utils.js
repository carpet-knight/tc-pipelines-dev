const {execSync} = require('child_process')

function sleep(seconds) {
  execSync(`sleep ${seconds}`)
}

module.exports = {
  sleep,
}
