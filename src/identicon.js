class Identicon {
  // make use of the md5.array method, which is in scope because we required it in our index.html
  constructor(userInput) {
    this.userInput = userInput
    this.row15 = []
    this.row24 = []
    this.row3 = []
    this.generateNumbers()
  }

  generateNumbers() {
    const hashedArr = md5.array(this.userInput)
    this.randNum = hashedArr
    this.row15 = this.randNum.slice(0, 5)
    this.row24 = this.randNum.slice(5, 10)
    this.row3 = this.randNum.slice(10, 15)
  }



}


// everytime the user enters a letter,
// it should generate 15 random numbers
// that will get mapped onto RGB values,
// if the numbers are even, then they will appear
// if the numbers are not, then they dont appear
// which we will use to change the background color of 15 identicon values
// which we then need to mirror
// the other 10 values
