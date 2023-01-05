import { genSaltSync, hashSync } from 'bcryptjs'

export const newPermission = async (pwd) => {
  const salt = genSaltSync(10)

  const hash = hashSync(pwd, salt)
  console.log('salt', salt)
  console.log('hash', hash)
  return { hash, salt }
}
