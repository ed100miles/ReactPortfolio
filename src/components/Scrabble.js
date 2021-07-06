import React from 'react'

function Scrabble() {

  return (
    <div>
      <h3>What does it do?</h3>
      <p>The user enters their scrabble letters in the form and (if there's letters already on the board) can select which letter they want to play off. The app will then produce a list of words that it's possible for the user to play, along with their base score. The words can be clicked on and a definition of the word will be show.</p>
      <p>Once the user has chosen which word to play, they select on the board where they want to lay the first letter, enter the word they want to play, and then select if they want to play the word down or across.</p>
      <h3>How does it work?</h3>
      <p>The tricky bit is taking the users letters and the selected board letter and seeing if they match any of the valid scrabble words. A list of valid scrabble words and their definitions are available online, these have been formed into a JavaScript object that gets imported into the main script <i>'index.js'</i>.</p>
      <p>The most performant way I found for checking if a valid word is present in the input letters was to create an object with letters as the key and the value representing the number of times that letter is present. For example the object for the word <i>'scrabble'</i> would be: {'{'}"s":1, "c":1, "r":1, "a":1, "b":2, "l":1, "e":1{'}'}. The script then iterates through each of the ~280,000 valid scrabble words building an object and seeing if the user letters object contains all the letter keys and if so, whether the value is greater than or equal to the valid word objects corresponding value. If these tests are met, the valid word is appended to the matching words list which is displayed on the browser once the process is complete.</p>

      <hr></hr>

      <div className='git-links'>
        <a href='https://ed100miles.github.io/scrabbleJS/' rel="noreferrer" target='_blank'>
          <i class="fas fa-external-link-alt"></i>
                        Open project in a new tab
                    </a>
        <a href='https://github.com/ed100miles/scrabbleJS' rel="noreferrer" target='_blank'>
          <i class="fab fa-github"></i>
                    Source Code
                    </a>
      </div>

      <hr></hr>

      <iframe src='https://ed100miles.github.io/scrabbleJS/' title='scrabbleIframe' className='scrabble-frame' frameBorder='0' id='scrabbleIframe' scrolling='no' ></iframe>
    </div>
  )
}

export default Scrabble
