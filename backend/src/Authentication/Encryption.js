import bcrypt from 'bcrypt'

async function Hash(password) {
    return await bcrypt.hash(password,15)
}

export {Hash}