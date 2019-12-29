![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

<img src='https://i.imgur.com/2sBatlI.png' alt='rps logo' />

## Rock, Paper, Scissors- A History

In 1950, the mathematician John Nash proved that in any kind of game with a finite number of players and a finite number of options — like Rock-Paper-Scissors — a mix of strategies always exists where no single player can do any better by changing their own strategy alone. The theory was known as “Nash equilibria,” and it revolutionised the field of game theory, altering the course of economics and changing the way everything from political treaties to network traffic is studied and analyzed. As part of my development at General Assembly, this legendary playground game was one I was curious to translate into code. 

### Brief

My task is to take the starting point HTML file, and add JavaScript functionality to play the classic, Rock, Paper, Scissors game against the computer!

### Requirements

* When a user makes their choice (rock, paper or scissors), I should also randomly generate a computer choice
* Write some logic to determine who has won
* Display the player's choice and the computer's choice
* Display the winner on the page
* When the reset button is clicked, clear the choices and the winner from the screen

### Technologies Used:
- Algorithm
- Git
- GitHub
- HTML5/ HTML5 Audio
- CSS, Flexbox 
- JavaScript (ES6)
- UX

### Wireframing

Rough draft of the landing page I initially created: 

<img src='https://i.imgur.com/IETeQi8.png' alt='landingpgwireframe'>

Play screen: 

<img src='https://i.imgur.com/GHNd5yS.png' alt='playscreenwireframe'>

### Functionality

Link to Rock Paper Scissors is here.

Here's a screen grab of the landing page:

<img src='https://i.imgur.com/7UFG1Yz.png' alt='landingpage'>

Once the player hits the play button, it triggers the start of the game. There, the player is presented with two images and 3 buttons, reflecting the options they can take.

<img src='https://i.imgur.com/kYMYrZS.png' alt='pageload'>

On page load, it's the player's move. I have also included a Score's tally above the two images for the player's FYI.

And a live demo of me playing against the computer:

<img src='https://i.imgur.com/7rfnW2a.gif' alt='playdemo'>

### Timeframe

3 days worth of work

### Controls

3 buttons are presented as options for the player to select before the computer randomly selects its choice. 

### Process

Firstly, in the index.html file, I built a whole section containing the score, intro screen, and a second screen that would switch to the game screen. I created classes to differentiate the divs and knew this would serve handy when isolating them in my javascript.


```<section class="game"> 
        <div class="score">
            <div class="player-score">
              <h2>Player</h2>
              <p>0</p>
            </div>
                  <div class="computer-score">
                    <h2>Computer</h2>
                    <p>0</p>
            </div> 
      </div>
<h2 class="winner">Choose an option</h2>
<div class="hands">
    <img class="player-hand" src="./images/rock.png" alt="rock"/>
        <img class="computer-hand" src="./images/rock.png" alt="rock"/>
</div>

<div class="options">
  <button class="rock">rock</button>
  <button class="paper">paper</button>
  <button class="scissors">scissors</button>


</div>
</div>
</section>
```


### Logic

Once I got the basics fleshed out, I wanted to figure out how to include my initial landing page- the first screen the player would see before entering the main game screen.

I  added ```fadeOut``` and ```fadeIn``` classes to query select in my app.js file, before applying display block and display none in my css, to reveal and hide the two different screens upon being triggered by a click event.

```
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
```
After that I wanted to approach the options the player would have and the computer would randomly select. 

The first line within the playMatch function will select all the buttons for the options.
The second and third lines reflect the two hands- the player hand and computer hand, which by default, reflect 'rock'. 

```
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
```

My next step was to establish how I was going to generate the computer's options. I needed the computer to generate a random number between 0, 1 and 2.

I created an array first to reflect the computer options: 
```
 //computer options
      const computerOptions = ['rock', 'paper', 'scissors']
```
I then wanted to generate the random number, and based on that random index, associate it with the above array of choices.

```
options.forEach(option => {
        option.addEventListener('click', function() { //for each button we can add an event listener
        // console.log(this); this will be the computer choice
          const computerNumber = Math.floor(Math.random() * 3) //round the number up
          const computerChoice = computerOptions[computerNumber]
          // console.log(computerChoice)
```

Methods used: I added an event listener in a regular function here to trigger an event on three seperate button options. Based on the player choice and therefore the eventlistener, the computer would then be triggered to select a random choice of its own- in theory.
I used the Math.floor array method and encapsulated eveything within the Math.random() method to round it up to the nearest whole index. 

### Logic and Comparison Function

I needed to think about a comparison function that would compare the choices of the two players and who was ultimately winning on each turn. I needed to think about feeding it the choice the player was making, aswell as the computer choice- and the scenarios ultimately from the combination of choices.

This meant lots of If statements wrapped in an arrow function. I needed to include the values of the options that the player and computer make from 'playMatch'- therefore playerChoice, and computerChoice are wrapped in parenthesis to feed in to the function. Everytime the click event logged the choice from playMatch, it was going to be fed into this comparison function.

The summary above the images, was also going to need updating with who is winning, or if there is a tie. I did this by first selecting the class: ```const winner = document.querySelector('.winner') ``
Then adding the below, dependent on the scenario in the If statement: 
``` winner.textContent = 'It\'s a tie!' ```

```
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

```
### Updating Images

I accessed images stored locally to change the images, dependent on the choices made.
The template literals were used to reflect the different image paths dependent on these the choices.

``` setTimeout(() => {

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
```

### Scores

To update the score, I had to write up a seperate function, isolating the classes that needed updating.  

```const updateScore = () => {
      const playerScore = document.querySelector('.player-score p')
      const computerScore = document.querySelector('.computer-score p')
      playerScore.textContent = pScore
      computerScore.textContent = cScore
    }
```

The above function needed to be called everytime a player scored within the main compareHands function. I needed to increment the number to change the value by adding 1. If in one scenario, the playerHand won, pScore++ was added, and if the computerHand won, cScore++ was added. 

To update the scoreboard, ```updateScore()``` function was added after the score increment.

### Challenges

Trying to figure out syntactically, how to update the scoreboard was the main challenge in this project.

### Wins

Playing around with array methods in this game, helped solidify some knowledge on just how useful they can be. Getting the computer to select its own choice through random allocation was a really big win for me- it felt very cool coding that part out!

Adding audio during player-wins was enteratining, albeit I realise it can get annoying very quickly for the user. 

### Future features

The three main improvements I'd like to make are as follows:
- Adding a leaderboard using localStorage to keep a track of high scores.
- Make the game responsive and fully functioning on mobile and tablet.
- Make the game more enjoyable and challenging for users by adding different levels of difficulty- for example, adding [Rock, Paper, Scissors, Lizard, Spock](http://www.instructables.com/id/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/)!
