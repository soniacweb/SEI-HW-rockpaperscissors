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
- Git;
- GitHub
- HTML5 
- JavaScript (ES6)
- UX

### Functionality

Link to Rock Paper Scissors is here.

Here's screen grab of the landing page:

<img src='https://i.imgur.com/7UFG1Yz.png' alt='landingpage'>

Once the player hits the play button, it triggers the start of the game. There, the player is presented with two images and 3 buttons, reflecting the options they can take.

<img src='https://i.imgur.com/kYMYrZS.png' alt='pageload'>

On page load, it's the player's move. I have also included a Score's tally above the two images for the player's FYI.

And a live demo if me playing against the computer:

<img src='https://i.imgur.com/7rfnW2a.gif' alt='playdemo'>

### Timeframe

3 days worth of work

### Controls

3 buttons are presented as options for the player to select before the computer randomly selects its choice. 

### Process

Firstly, in the index.html file, I built a whole section containing the score, intro screen and a second screen that would switch to the game screen. I created classes to differentiate the divs and knew this would serve handy when isolating them in my javascript.


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

### Scores

### Challenges

### Bonus

### Wins

Playing around with array methods in this game, helped solidify some knowledge on just how useful the ycan be. Getting the computer to select it's own choice through random allocation was areally big win for me.

### Future features

The three main improvements I'd like to make are as follows:
- Adding a leaderboard using localStorage to keep a track of high scores.
- Make the game responsive and fully functioning on mobile and tablet.
- Make the game more enjoyable and challenging for users by adding different levels of difficulty- for example, adding [Rock, Paper, Scissors, Lizard, Spock](http://www.instructables.com/id/How-to-Play-Rock-Paper-Scissors-Lizard-Spock/)!
