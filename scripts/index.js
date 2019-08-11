const isVisibleElement = element => {
  const windowBottomEdge = window.pageYOffset + window.innerHeight
  const elementTopEdge = element.offsetTop

  return elementTopEdge + 300 <= windowBottomEdge
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
