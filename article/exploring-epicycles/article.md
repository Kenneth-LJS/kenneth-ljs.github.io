<div style="display: none;">
Outline:
Motivation
I’ve seen those cool youtube vids: https://www.youtube.com/watch?v=QVuU2YCwHjw
I went down a rabbit hole of exploring Fourier transforms, etc
But I never really understood how to get from a Fourier transform to a video like that.
So let’s explore that together. For this, I assume you have a brief understanding of complex numbers
Fourier Transform (brief intro)
1D signal -> 1D array of numbers
You get a 1D array back
The array index = strength of that frequency. Since no time units, use the array index as “time”
Taking it to 2D
This was where I got lost. How do you get anywhere from here? Do we do a 2D fourier transform? How do we get the X and Y coordinates into this formula?
Our inputs: (X, Y) coordinates over time
Idea 1: Take X and Y and fourier transform separately
???
Idea 2: 2D fourier transform? but how do we put those numbers into a 2D grid?
Idea 3: 1D signal of complex numbers -> 1D array complex numbers, since it’s still a 1D transformation
But how does this translate into epicycles? My understanding is each circle needs a corresponding frequency and amplitude, but how do we know what phase?
Turns out in the 1D signal, you do get a complex number back too. That encodes the phase.
In 2D, you’re given a complex number back that indicates the phase. In fact, the complex number already includes 2 things: the size (the abs of the complex number), and the phase (the arg of the complex number). Then as before, the frequency is given by the index.
Putting It Together
Run the numpy libraries
PILLOW to make the images. We take all the circles, sort them in decreasing order of size, then render them on a provided base image
We then use FFMPEG with the following command to render the video
Conclusion
THERE. This final project was years in the making of coming back to the Fourier transform, etc. And it’s finally done! I can rest well.
</div>
<header>

<h1>Exploring Epicycles</h1>

<p>A fun and mathematical journey into discovering complex numbers, Fourier transforms, and the secrets to drawing anything with circles</p>

<p><a href="/project/shard-game/" target="_blank" rel="noopener noreferrer">Source Code</a></p>

<p align=center>
  Post in progress! Check back again.
</p>


</header>

## Circles and Simpsons
Years ago, I came across this video on YouTube that showed a drawing of Homer Simpsons drawn by rotating circles of different radii and speeds.

<p align=center>
  <iframe style="width: min(100%, 600px); aspect-ratio: 4 / 3;" src="https://www.youtube.com/embed/QVuU2YCwHjw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

“Man,” I thought, “wouldn’t it be cool to be able to do this someday?”

That started me on a journey of Mathematics that I was more than happy to indulge in. I learnt that these rotating circles were called epicycles. Ptolemy, a Greek mathematician and astronomer, theorised that with enough rotating circles, you could trace the movement of every celestial body. Turns out he was right, except that it’s not just planetary movements that you can predict, but literally every periodic motion. And that includes that outline of Homer Simpson.

To get these cycles, there’s something called the Fourier transform. If this concept is new to you, I recommend reading <a href="https://www.3blue1brown.com/lessons/fourier-transforms" target="_blank" rel="noopener noreferrer">But what is the Fourier Transform?</a> by Grant Sanderson (also known as <a href="https://www.youtube.com/@3blue1brown" target="_blank" rel="noopener noreferrer">3Blue1Brown</a> on YouTube). The rest of this post is going to get pretty maths-heavy, so familiarise yourself with complex numbers and Fourier transforms before we go on. Hang on tight!

Fourier Transforms
To briefly summarise, the Fourier transform is a way to split a signal into its constituent frequencies.

[graph of how one frequency splits into multiple]

Mathematicians like to call this the “transformation of a signal from the time domain to the frequency domain”. That’s nice, but it still doesn’t explain how I can draw Homer Simpson with circles. Instead, let’s turn to the programmer’s way of understanding functions: input and output.

In the classic Fourier transform, we take a signal as an input, which we represent as amplitude over time. As output, we get a breakdown of frequencies. For instance, in the illustration below, the two frequencies that make up the following signal are represented by the two peaks in the output graph.

[graph of 2 frequencies getting split, then show how it corresponds to the peaks]

One problem: we can’t represent a continuous signal in finite data, but what we can do is to break it down into discrete samples and apply a discrete Fourier transform.

[graph of continuous to discrete signal, then graph of its FFT]

Back to the input-output explanation. Our input is an array of amplitudes. In this case, the time component is embedded in the array index. Our output is a 1D array of numbers representing the “strength” of each frequency.

[show how the array also embeds time]

[show how in the frequency domain, the amplitude is represented by the y axis, freq is represented by the x axis]

But this is where I got stuck. How do you get from this to spinning circles that trace out an image?
## 2D Fourier Transform
A signal is 1-dimensional: amplitude over time. Epicycles, however, are 2-dimensional: x and y coordinates over time, right? Nope. 2D Fourier transforms take on a very different shape from what we’re looking for.

[image of 2d fourier transform]

Input:
2D array of amplitudes over x/y space

Output
2D array of amplitudes over frequency space

TODO







