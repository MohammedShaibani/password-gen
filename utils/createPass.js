const alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_+-= '

const createPass = (length= 8, hasNum = true, hasSym = true) => {
    let chars = alpha
    hasNum ? (chars += numbers) : ''
    hasSym ? (chars += symbols) : ''
    return genPass(length, chars)
}

const genPass = (length, chars) => {
    let password = ''
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
}

module.exports = createPass