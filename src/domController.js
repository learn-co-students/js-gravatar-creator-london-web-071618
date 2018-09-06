function updateDOM() {
  const row1 = [...document.querySelectorAll('[id$="-0"]')]
  const row2 = [...document.querySelectorAll('[id$="-1"]')]
  const row4 = [...document.querySelectorAll('[id$="-3"]')]
  const row5 = [...document.querySelectorAll('[id$="-4"]')]
  const row3 = [...document.querySelectorAll('[id$="-2"]')]

  for (let i=0; i<5; i++){
    if (identicon.row15[i]%2 === 0) {
      row1[i].style.backgroundColor = "000"
      row5[i].style.backgroundColor = "000"
    }
  }

  for (let i=0; i<5; i++){
    if (identicon.row24[i]%2 === 0) {
      row2[i].style.backgroundColor = "000"
      row4[i].style.backgroundColor = "000"
    }
  }

  for (let i=0; i<5; i++){
    if (identicon.row3[i]%2 === 0) {
      row3[i].style.backgroundColor = "000"
    }
  }
  // row1.forEach(node => node.style.backgroundColor)
}
