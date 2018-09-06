function handleSubmit(e) {
  const allBlocks = [...document.querySelectorAll('span')]
  allBlocks.forEach(block => block.style.backgroundColor = "")
  const userInput = document.querySelectorAll('input')[0]
  e.preventDefault()
  const identicon = new Identicon(userInput.value)
  window.identicon = identicon
  updateDOM()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
