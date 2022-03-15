# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Alex Lecusay

Time spent: 16 hours spent in total

Link to project: https://glitch.com/edit/#!/capable-expensive-halibut

## Required Functionality

The following **required** functionality is complete:

* [✓] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [✓] "Start" button toggles between "Start" and "Stop" when clicked. 
* [✓] Game buttons each light up and play a sound when clicked. 
* [✓] Computer plays back sequence of clues including sound and visual cue for each button
* [✓] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [✓] User wins the game after guessing a complete pattern
* [✓] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [✓] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [✓] Buttons use a pitch (frequency) other than the ones in the tutorial
* [✓] More than 4 functional game buttons
* [✓] Playback speeds up on each turn
* [✓] Computer picks a different pattern each time the game is played
* [✓] Player only loses after 3 mistakes (instead of on the first mistake)
* [✓] Game button appearance change goes beyond color (e.g. add an image)
* [✓] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [✓] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

* [✓] The Mortal Kombat announcer says "Fight" before timer begins.
* [✓] Each game button has its own sound, correlating with its character image.
* [✓] Timer appears when game begins, and disappears when game ends.
* [✓] All characters are shown when game is first loaded. But when the game begins, they hide.
* [✓] Clue hold time is random each game



## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

Shows landing page of the game, and some basic functionality.

![Intro](https://user-images.githubusercontent.com/90231709/156960972-d56d7e21-5f78-4104-afb6-71f8b91ccf42.gif)

Shows the timer being run down to 0.

![Timer](https://user-images.githubusercontent.com/90231709/156960573-2a4d54d4-ffaf-4ef2-8874-afd2f205af3d.gif)

Shows user losing 3 lives.
![Incorrect](https://user-images.githubusercontent.com/90231709/156960586-74f90e0d-eac1-4e99-b8c5-10a6ad670e7e.gif)

![](gif4-link-here)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

    -https://www.w3schools.com/
    -http://soundfxcenter.com/sound_effect/search.php?sfx=Mortal+Kombat (Some sound fx)
    -Peers who have completed the Site program before, for feedback.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

    When I first created my buttons, I thought they were amazing and I was excited to see it light up and work. But I knew if I wanted to set myself apart from other 
candidates applying I needed to stand out. So my first idea was to integrate my favorite game from my childhood, Mortal Kombat. Now the issue arose when i was trying to 
embed an image, within the actual button. By making this image hidden I was able to place it inside the button without being noticed, but would only show with the javascript
functions to make the image appear on click. Though when the image finally appeared, it was shifting all of the buttons below and to the side a but in the Y axis. Now I know
I did not want to have this issue in the final version of the game, so I began to play around with the css and look online for possibly others with my same issue. I ended up 
being able to solve the problem on my own, with just adjusting the values in the css to make the image mold the button better. Thus not causing any shifting, and letting the
design look as intended.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

    Seeing how to alter ther HTML within the javascript functions, I would like to get more hands on with learning and practicing react hooks. Knowing React is one of the 
most used frameworks, I have worked on a couple projects in the past developing the front end. But I hadnt used Hooks to change how the component would be rendered on the
virtual dom. Now my interest is leaning heavily towards learning more React, and what makes it differ from other frameworks like Angular and Vue. Integrating a database as
well as communicating with the backend is a must in the size of todays technologies, so learning express and node in tandem with Mongo is very exciting.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be 
specific. (recommended 100 - 300 words) 

   If not for having to focus on exams in school aswell, I would of implemented a way to keep track of sequence so far. That way the user can get the feedback of how many they got in a row, before they either won or lost. This would improve the user experience of the game, because it gives the user important feedback to know how well they did. This would also incentivize the user to come back and play again to top their score. The final feature I would of implemented is a top 5 scoreboard, that would display the top 5 longest memory sequences.


## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/4ebfe9fa7a28405fb92bf0282f3cde79)


## License

    Copyright Alex Lecusay

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
