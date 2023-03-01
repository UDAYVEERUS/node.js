const bcrypt = require('bcrypt')

const passwordGeneraate = async(password) =>{ 
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password, salt)
    return hash
}
const passwordValidate = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = {passwordGeneraate, passwordValidate}