let currentRating = null
let isSubmitted = false

const ratings = [...document.getElementsByClassName('rating')]
const submitBtn = document.getElementById('submit')
const card = document.querySelector('.card')
const cardFinal = document.querySelector('.card-final')
const ratingChip = document.querySelector('.final-rating-chip')

ratings.forEach(rating => {
  rating.addEventListener('click', event => {
    currentRating = +event.target.innerText
    if (currentRating) {
      ratings.forEach(r => r.classList.remove('selected'))
    }
    event.target.classList.add('selected')
  })
})

submitBtn.addEventListener('click', () => {
  if (!currentRating) {
    alert('Please select a rating')
    return
  }
  isSubmitted = true
  card.remove()
  cardFinal.style.opacity = 1
  cardFinal.style.position = 'static'
  cardFinal.style.zIndex = 0
  cardFinal.style.padding = '45px 38.5px'
  ratingChip.innerHTML = `You selected ${currentRating} out of 5`
})
