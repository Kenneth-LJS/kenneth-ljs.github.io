<header>
<h1>Murder Mystery Game</h1>

<p>
  How I wrote a text-based game engine with Webpack, custom loaders, and a generous serving of cryptography.
</p>

<p>
  <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a> | <a href="#" target="_blank" rel="noopener noreferrer">Demo</a>
</p>

</header>

## A Victorian Murder Mystery

During my free time, I enjoy helping out with event organising. In 2022, there was an online event with a Victorian Murder Mystery theme. As part of the event, they wanted to include a puzzle game that the attendees could play.

Working with writers and artists, we put together a simple concept: 6-letter codes would be hidden on the event’s website and in the social media platforms. Observant players could solve the puzzles to get the code, then enter it into the game. Each code would unlock a new chapter of the storyline, with more puzzles to solve to uncover clues that would reveal the murderer.

The 6-letter codes would be hard to find, and the puzzles would range from trivially easy to challenging. We wanted to encourage players to discuss the solutions, and help each other out with hints along the way. Towards the closing of the event, the last 6-letter code would also be revealed, allowing the players to crack the case.

One additional note: the game would be hosted on the event website, but after the event, it should also be downloadable and playable offline. This would come into play later.

*Cue ominous music and foreshadowing*

## The Engine

As the sole developer of the game engine with only a few weeks to work on this, I had to make this engine simple but powerful. I turned to ol’ reliable: my Webpack boilerplate with React, Typescript, and SCSS.

The first scene was easy enough: a 6-letter input that would accept valid codes and reject invalid ones.

[Show video of entering invalid codes and valid codes]

I made sure it worked well on mobile devices too.

[Show video of entering invalid codes and valid codes on mobile]

That was the easy part. Once the player has entered a code, we render an interactive chapter. Players needed to choose dialogue options and solve puzzles. I decided the best way to handle this is to store the game data in a JSON format.

Each part of the story would be represented as a node. A `text` node would render text.

[code of text node]

[image of text node]

An `image` node would render an image.

[code of image node]

[image of image node]

Dialogue options would be represented with an `options` node. When the engine reached an `options` node, it would render it and wait for the player’s input. Based on their options, it would choose the next node to jump to.

[video of clicking an option and scrolling down]

This functionality created a lot of complexity for the engine. There were 2 features I wanted. FIrst, I wanted players to be able to backtrack through the dialogue options. If they reached a dead end, they should be able to scroll back to a previous option to select it.

[video of choosing the wrong option, scrolling up, then scrolling back down].

The second feature was to have an internal state. If we’re able to store flags, we can remove dialogue options that were already selected.

These two features aren’t trivially compatible. If I only wanted the ability to backtrack, then I can simply keep track of:

The history of nodes rendered
The current node that the player is at

[diagram of node history and arrow pointing to the current state]

If the player selects an earlier option, then I can slice off the history at that point, then continue from there.

[diagram of slicing off the node history at an earlier option, (diagram 1) then branching down to a new path (diagram 2)]

If I only wanted the ability to have an internal state, then I will need to keep track of:

The history of nodes rendered
The current node that the player is at
A global state

[diagram of node history, with a box that the current state is on. show how that after selecting an option, we can add a check to the state - split across multiple diagrams]

Let’s say we want both features, meaning we want players to be able to backtrack while keeping an internal state. Let’s see what happens when a player tries to set a flag and backtracks..

[diagram of setting flag 1, then backtrack to an earlier state with flag 1 still set]

In this sequence, the player enters a state where a flag is set before it’s supposed to have been set. Uh oh!

Thankfully, there is a solution. While keeping track of the nodes, I also keep track of the player state at that particular node. Now, we can backtrack without allowing players to reach an invalid state.

[diagram of backtracking while allowing states to work]

From there, I added more node types. There’s a text input node that allows story branching by comparing the input with a string or regex.

[code of the text input dialogue]

[video of it in action]

There’s also an image node that allows users to click on various parts of the image to choose an option.

Now, we can code the story in the JSON format and we’re good to go! Or are we?

## A Gaping Flaw
Remember when I said we needed the game to be playable offline? That meant that we couldn’t rely on a server to check if the 6-letter codes were valid. All the information had to be stored on the frontend: codes, storyline, and all.

That meant if a tech-savvy player dug around in the source, they would quickly find all the 6-letter codes as well as the entire storyline. If they wanted to, they could also spoil the ending even before we released the final chapter. Not cool.

Thankfully, my inner nerd came to the rescue. Over the years, I’ve dug into cryptography concepts and familiarised myself with concepts such as encryption and digital signatures. This would be helpful.

### A Simple Way

A naive solution would be to serialise every chapter’s JSON into a string and encrypt it with the 6-letter code as the key. When a user enters the code, the engine would attempt to decrypt all the chapters. If any of the chapters was successfully decrypted, then it meant that it was a valid code. Otherwise, we reject it.

[diagram of encryption -> show each chapter being encrypted with a diff key each]

[diagram of decryption -> show a code entered, then unlocking the valid chapter]

Is it secure? Yes. But it’s also very slow. Each chapter can reach lengths of up to [XXX characters]. It would be very computationally intensive to attempt to decrypt the entire story’s worth of chapters each time the user enters a 6-letter code.

Can we do better?

### A Better Way

It turns out that we don’t need to decrypt the entire string. Let’s assume we have the encrypted chapter as a string. If we hash the 6-letter code and pair it with the encrypted chapter, we only need to compare the hash to ensure that the chapter is a match. Only then do we take the time to decrypt the chapter.

One more issue is that because the game has to be viewable offline, it needs to also work in a local file context. This means that the browser’s crypto API is not always available. We’ll need to implement an encryption and decryption function ourselves (uh-oh), and ideally keep it simple (double uh-oh). Thankfully, since we aren’t dealing with sensitive data, we can get away with this. Yay1

I implemented a simple [name of hashing and encryption function]. [explain how it all works]

This method was inspired by how digital signatures work. by pairing [blah blah blah]

The result is an array of encrypted strings with a prepended hash, each one representing a serialised chapter JSON.

But does it work?

Yup! I sent this to a friend who works in digital security to crack. He pored over the minified code and eventually found the cryptography functions and encrypted strings. When he realised there was no way to cheat the system, he conceded defeat. He did, however, leave me with the following statement: “But you do realise it’s easy for me to brute-force all 6-letter combinations if I wanted to, right?”

Fine, you win Jason. But hey, if we wanted the data to be secure, we would be asking for 128-bit keys rather than 6-letter codes (which amount to just above 28 bits). The idea isn’t to make the code uncrackable, it’s to make it more difficult than actually solving the puzzles.

With that, we’re done with the encryption. Now, whenever we write a chapter, all we have to do is to encrypt it, prepend the hash of its 6-letter code, then add it to the array. Easy, right? Most definitely not!

## Webpack to the Rescue

The best way to get me to code is to present me with a mind-numbingly banal task, because I’ll write a script to automate the heck out of it.

Thankfully, Webpack allows us to write custom loaders. I added a filter to take in JSON files with the `.puzzle.json` extension, and convert it into the encrypted array of strings.

[code of the filter from webpack config]

[code of the custom loader]

So the input file may look something like this:

```JSON
{ 
“LITTLE”: <story json>
“ISLAND”: <story json>
…
}
```

And the encrypted result looks like this:

```JSON
[“ASFASHFLKSFHA”...]
```

All I have to do is import it in the code as such:

```javascript
import blah blah from “../data.puzzle.json”
```

And Webpack does everything for me. It’s a lifesaver during the development process, since I could edit the JSON in development mode, and have it refresh instantly. Bamm!

## Case Closed

The game engine was deployed to the website along with the encrypted story, and the event’s attendees got to cracking the case. By the time the event came to a close, the attendees have solved the murder mystery, and our detectives ride their horse-drawn carriage into the sunset.

And while we may enjoy a happy ending, the true treasure was the programming concepts we learnt along the way.
