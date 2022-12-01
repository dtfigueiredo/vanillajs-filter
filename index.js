//DOM ELEMENTS
const inputElement = document.querySelector('#filter')
const cardsList = document.querySelectorAll('li')

//FILTER FUNCTION
const filtered = () => {
  const inputValue = inputElement.value.toLocaleLowerCase()

  if (inputValue) {
    cardsList.forEach(el => {
      const title = el.querySelector('h2').textContent.toLocaleLowerCase()
      const isIncluded = title.includes(inputValue)

      !isIncluded ? el.style.display = "none" : el.style.display = "block"
    })
  } else {
    cardsList.forEach(el => el.style.display = "block")
  }
}

inputElement.addEventListener('input', filtered)