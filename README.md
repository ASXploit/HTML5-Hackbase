# [Hackbase for HTML5]
This repo was created as a place to hold my Hackbase.. Which is pretty much just a simple reusable base to hack HTML5 Games using 'UserScripts' with the 'TamperMonkey' Plugin for browsers.. But i believe this can also be placed within an HTML5 games source code
Allowing you to have built in toggle/keyhacks.. This can be used for Multiplayer games, Such as Slither.io , i have created a working script using this base.. I have tested on multiple HTML5 games, Mainly single player ones as they are easier to hack in my opinion..

# [Base Updates]
There may or may not be updates to this script.. I created this base off of what i learned in my first 3-days of learning Javascript and how to use userscripts.. i did plenty of research and wrote a detailed tutorail on how to make a base like this and exactly what everything does over on GuidedHacking.. So be sure to check that out if you would like to learn a bit about this script.. Although i will be adding some details about it in this Readme file..

# [Features]
There are only two features in this base(Sounds like shit i know) But they are pretty much mandatory if you want to make a pretty good hack for an HTML5 game.. Both features are
 - An Automatic Keyhook Function
 - An Automatic Update  Function

The best part about this base is the code is written as clean as possible(So i think..) How so? Our Keyhook,Update and main thread are all Self-Executing functions.. Meaning? Well this just completely bypasses the need to call the functions at the end of the file(Which i find quite ugly..) These functions .. well the whole script itself runs as soon as the page loads up, The Keyhook automatically attaches itself to the document and instead of making a mess of my code using if conditions to check which key is pressed , Which i really see alot.. I just used a much cleaner Switch case.. Our update function also runs itself as soon as the page starts.. And is pretty much an infinite loop of calling itself.. Honestly i believe this base would eat up alot of memory, But then again i have not found a hack that doesnt LOL
