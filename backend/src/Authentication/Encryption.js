import bcrypt from 'bcrypt'

async function Hash(password) {
    return await bcrypt.hash(password,10)
}

export {Hash}