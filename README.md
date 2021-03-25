# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Amna Amen

Time spent: 10 hours spent in total

Link to project:
https://glitch.com/edit/#!/maze-possible-piranha

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!
- [X] The heading and paragraph texts have been styled. The title has a shadow.
- [X] When a user loses or wins a game, a message is displayed on the game screen besides the alert

## Video Walkthrough

Here's a walkthrough of implemented user stories:

![](https://i.imgur.com/1BuIadl.gif)



## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 
I have completed a microcredential course, so I looked at my notes from my HTML/CSS/JavaScript class notes. I also 
 looked back at my code from old projects to get ideas and guide myself.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 
A challenge I initially faced was that the audio was not working when I would click on the buttons. I made sure it was copied correctly. I tried copying my 
  HTML/CSS/JavaScript into Visual Studio Code to see if it would work. That did not work either. I was using safari on 
  a Macintosh device. I decided to open Glitch on Google Chrome, and the program was running correctly and the sound was working. Another big 
  challenge that I faced was figuring out how to add images to the buttons. It was difficult trying to add images and make sure the game was working correctly.
  I tried adding images and making them clickable, so it would alternate between hiding and displaying. Even though the buttons worked, the game would not work. Only the 
  first button in the sequence would play. Sometimes it would keep playing the sound until I clicked on another button. So, I decided to not use that method.
  This took me the longest time, more than creating the basic version of the game. I used many different methods to try to make it work. I looked back at my old notes
  and projects to get idea. At the end I decided to overlay the buttons and the images using the position and z-index attribute in CSS. The button would disappear 
  when clicked, so that the image would show. This was definitely the hardest part of the project.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 
I have many questions about web development after completing this project. I would like to see how other people would code this same game, which methods they would use. 
I also wonder about the design and coding process of much more complex games that have multiple layers, features, and options. One of the biggest questions I have is the reason why 
the same code behaves differently in different browsers. Why doesn’t safari support Glitch code and run it correctly. On the other hand, Google Chrome always display the webpage 
in the desired way, the way in which it was coded. Is there a fix to this issue, or should google chrome always be used for the most accurate results?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 
If I had a few more hours to work on this project, I would definitely try to add more features to the game including audio and a timer. I would also try to shorten my code. Many of the aspects of the game can be shortened.
 I would refactor my code to make it more concise and efficient. I would add attributes that would make the game more visually appealing. I would need a lot of time to add features because a lot of it is trial and error of 
 various methods to implement the desired results. I would also try to come up with a different method to display the images. Another feature that can be added is different increasingly difficult levels in the game. 
 The user can determine the number of button or the playback speed as Easy, Medium, or Hard.



## License

    Copyright Amna Amen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.