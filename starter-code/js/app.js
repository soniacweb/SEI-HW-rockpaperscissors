document.addEventListener('DOMContentLoaded', () => {

  const game = () => {

    let pScore = 0
    let cScore = 0
    const audio = document.querySelector('audio')

    //start the game
    const startGame = () => {
      gametheme()
      const playBtn = document.querySelector('.intro button')
      const introScreen = document.querySelector('.intro')
      const match = document.querySelector('.match')
      

      playBtn.addEventListener('click', () => {
        introScreen.classList.add('fadeOut')
        match.classList.add('fadeIn')
      })
    }
    //play match
    const playMatch = () => {
      const options = document.querySelectorAll('.options button')
      const playerHand = document.querySelector('.player-hand')
      const computerHand = document.querySelector('.computer-hand')
      const hands = document.querySelectorAll('.hands img')  
    
      hands.forEach(hand => {
        hand.addEventListener('animationend', function() {
          this.style.animation = ''
        })
      })

      //computer options
      const computerOptions = ['rock', 'paper', 'scissors']
      
      // console.log(computerNumber)

      options.forEach(option => {
        option.addEventListener('click', function() { //for each button we can add an event listener
        // console.log(this); this will be the computer choice
          const computerNumber = Math.floor(Math.random() * 3) //round the number up
          const computerChoice = computerOptions[computerNumber]
          // console.log(computerChoice)

          setTimeout(() => {

            compareHands(this.textContent, computerChoice)
            // update images
            playerHand.src = `./images/${this.textContent}.png`
            computerHand.src = `./images/${computerChoice}.png`

          }, 1000)
      
          //shake animation
          playerHand.style.animation = 'shakePlayer 2s ease'
          computerHand.style.animation = 'shakeComputer 2s ease'
        })
      })
    } 
    const updateScore = () => {
      const playerScore = document.querySelector('.player-score p')
      const computerScore = document.querySelector('.computer-score p')
      playerScore.textContent = pScore
      computerScore.textContent = cScore
    }

    //now we need to compare hands
    const compareHands = (playerChoice, computerChoice) => {
    //updating text here
      const winner = document.querySelector('.winner')
      if (playerChoice === computerChoice) {
        winner.textContent = 'It\'s a tie!'
        return
      } 
      //check for rock
      if (playerChoice === 'rock') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'You Win!'
          pScore++
          updateScore()
          clapping()
          return
        } else {
          winner.textContent = 'Computer Wins'
          cScore++
          updateScore()
          return
        }
      }
      // check for paper
      if (playerChoice === 'paper') {
        if (computerChoice === 'scissors') {
          winner.textContent = 'Computer Wins'
          cScore++
          updateScore()
          return
        } else {
          winner.textContent = 'You Win!'
          pScore++
          updateScore()
          clapping()
          return
        }
      }
      // check for scissors
      if (playerChoice === 'scissors') {
        if (computerChoice === 'rock') {
          winner.textContent = 'Computer Wins'
          cScore++
          updateScore()
          return
        } else {
          winner.textContent = 'You Win!'
          pScore++
          updateScore()
          clapping()
          return
        }
      }
    }

    function clapping() {
      audio.src = 'audio/clapping.mp3'
      audio.play()
    }

    function gametheme() {
      audio.src = 'audio/gametheme.mp3'
      audio.play()
    }

    const resetGame = (pScore, cScore) => {
      if (pScore || cScore === 10)
        return startGame()
    }

    //call all the inner functions
    startGame()
    playMatch()
    resetGame()
    // updateScore()
  }
  //start the game function
  game()

  window.addEventListener('DOMContentLoaded', game)
})
