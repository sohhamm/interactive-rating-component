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
      removeSelectedClass()
    }
    event.target.classList.add('selected')
  })
})

function removeSelectedClass() {
  ratings.forEach(r => r.classList.remove('selected'))
}

submitBtn.addEventListener('click', () => {
  isSubmitted = true
  card.remove()
  cardFinal.style.opacity = 1
  ratingChip.innerHTML = `You selected ${currentRating} out of 5`
})
