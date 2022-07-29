import Seller from "./models/Seller.js";
import { validateEmail, validatePhone, validatePlainText } from './formValidations.js'

const signUpForm = document.querySelector('#signupForm')
const formInputsArray = document.querySelectorAll('input')
signUpForm.addEventListener('submit', (event) => {
  formInputsArray.forEach((input) => {
    switch (input.id) {
      case "category":
      case "name":
        if (!validatePlainText(input.value.trim())) {
          errorArray.push(input.id)
        }
        break;
      case "email":
        if (!validateEmail(input.value.trim())) {
          errorArray.push(input.id)
        }
        break;
      case "phoneNumber":
        if (!validatePhone(input.value.trim())) {
          errorArray.push(input.id)
        }  
      default:
        break;
    }
  })
  if (errorArray.length > 0) {
    // error handling
    event.preventDefault()
    errorArray.forEach((error) => {
      document.querySelector(`#${error}Error`).hidden = false
    })
    errorArray.length = 0

  }
  const seller = new Seller(formInputsArray[0].value, formInputsArray[1].value, formInputsArray[2].value, formInputsArray[3].value )
  sessionStorage.setItem('seller', JSON.stringify(seller))

})
const errorArray = []
