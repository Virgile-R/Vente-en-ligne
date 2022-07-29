export function validateEmail(email) {
  // RFC 5322 Official Standard Email REGEX: http://emailregex.com/
  const emailRegex =  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
  if (!emailRegex.test(email)) {
    return false
  }
  return true
}

export function validatePhone(phoneNumber) {
  const phoneRegex = /\d{10}/
  const replaceRegex = /[^0-9]/g;
  const phoneNumberformatted = phoneNumber.replaceAll(replaceRegex, '')
  console.log('phoneNumberformatted', phoneNumberformatted)
  if (!phoneRegex.test(phoneNumberformatted)) {
    return false
  }
  return true
}

export function validatePlainText(text) {
  const nameRegex = /[a-zA-Z]+/
  if (!nameRegex.test(text)) {
    return false
  }
  return true
}