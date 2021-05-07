# Intro

This project arose out of a conversation with [wheelibin](http://github.com/wheelibin) about his excellent [synaesthesia](https://github.com/wheelibin/synaesthesia) project, which itself arose out of another conversation relating to [synaesthesia](https://en.wikipedia.org/wiki/Synesthesia).

I'm interested in the kind of relationship that sound might have to colour. The idea of this project is simply to provide a playground for experimenting with the idea.

A possible spinoff would be a visualiser to plug into wheelibin's synaesthesia.

![Tone Chart](https://github.com/mcharper/toneChart/blob/main/ToneChart%20Demo.PNG "Tone Chart")

# Demo

https://mcharper.github.io/toneChart/

# Thoughts on how sound and colour may be related

There are reasons to think there might be some sort of relationship. We use some of the same language to describe music and colour: harmony, tone, light, dark, loud, subdued etc. Many people with synaesthesia seem to perceive a relationship directly. 

I'm not sure they are connected at a physical level - there are so many differences between sound and light energy. And how we process the signals seems very different - for example pitch is perceived logarithmically with respect to frequency.

If there is a connection, it's probably inside our heads.

# Simple working model

I think there are many ways to explore this but for now I'm working with the following model:

I'll select colours using the HSL system.

Hue:
- There are 12 semitones in an octave, each corresponding to a particular hue
- The hue will be calculated by dividing the colour wheel into 12 equal parts
- Since a scale contains a subset of those 12 tones, each scale or mode (major, minor, myxolydian etc) represents a different set
- This will result in a palette of colours based on the scale

Saturation:
- My idea for this eventually is that saturation will relate to timbre. A pure sine wave would be a pure spectral colour. Untuned percussion would be a shade of pure grey. Tuned percussion would be a very desaturated version of the hue corresponding to the pitch. Distorted sounds would be more desaturated than clean sounds. This idea is implied in the idea of white, pink and brown noise. 

Lightness:
- I plan to use this to model the octave relationship between sounds. We hear C4 (Middle C) as being recognisably the same note as C3 (the C below that on the piano keyboard) but higher. So I want to use a different "version" of the same hue to simulate this.

![Colour Wheel](https://upload.wikimedia.org/wikipedia/commons/d/db/RGB_color_wheel_24.svg "Colour Wheel")

# Assumptions

I'm assuming a 12-tone equal temperament tuning system for now.

# Running the app locally

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Just run `npm start`.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

