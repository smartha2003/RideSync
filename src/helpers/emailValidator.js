export function emailValidator(email) {
  const check = /\S+@\S+\.\S+/
  if (!check.test(email)) return false 
  return true
}
