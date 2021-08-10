const program = require('commander')
const createPass = require('./utils/createPass')
const chalk = require('chalk')
const clipboardy = require('clipboardy')

program.version('1.0.0').description('Simple Password Generator')

program
.option('-l, --length <number>', 'length of password', '8')
.option('-s, --save', 'save password to passwords.txt')
.option('-ns, --no-symbols', 'remove symbols')
.option('-nn, --no-numbers', 'remove numbers')
.parse()

const { length, save, numbers, symbols} = program.opts()

// Get Generated Password
const genPass = createPass(length, numbers, symbols)

// Copy to clipboard
clipboardy.writeSync(genPass)

// Output Generated Password
console.log(chalk.blue('Generated Password: ') + chalk.bold(genPass))
console.log(chalk.green('Password copied to Clipboard'))

// TODO
// Get user input for what site the password is for and save that to same file