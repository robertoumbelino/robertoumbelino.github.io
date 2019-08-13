const isVisibleElement = element => {
  const windowBottomEdge = window.pageYOffset + window.innerHeight
  const elementTopEdge = element.offsetTop

  return elementTopEdge + 100 <= windowBottomEdge
}

const animateElements = () => {
  const elements = [...document.querySelectorAll('.waypoint:not(.animated)')]

  elements.forEach(element => {
    if (isVisibleElement(element)) {
      element.classList.add('animated')
    }
  })
}

window.onscroll = function() {
  animateElements()
}

setTimeout(() => {
  animateElements()
}, 10)

const scrollTo = element => {
  window.scroll({
    behavior: 'smooth',
    left: 0,
    top: element.offsetTop
  })
}

document.getElementById('view-my-work').addEventListener('click', () => {
  scrollTo(document.getElementById('projects'))
})
