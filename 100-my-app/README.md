# App for Eating

This application will decide whether or not to eat, and what Macro nutrient to induilge in. It first decides whether or not we are within eating hours, then decides whether or not we are hungry. If those two guards are passed, then the inner loop recommends different options based on which nutrients have been consumed at higher levels that day.

Week 13:
- Right now, there are two different parts of my app. One is the user enters a hunger level and then the app uses the current macros from that day, hunger level, and time(using the Date Api) to return a message of what kind of food to eat. Second, the user can add new numbers to their daily macros intake.
- You metioned that you want an update function. So, I am wondering if you will accept that the user has the option to update their daily macros by filling out the macros form with positive or negative numbers? I'm not sure what delete function would be helpful here.

In order to have more complex and interesting dom-rendering I would like to log each time the user updates their macros, saving how much of each was added at what time.
Then, when its a new day, the app will adjust and reset the macros.
THe important part is that the app renders an answer when the user enters hunger level. By entering a new hunger level, the app will rerender the message of what to eat. 
The last thing the app needs to render is the full daily count for each of the three macros. 

EXTRAS:
Added a bunch of math that actually saves the data each time you add a new macro. Finally added the reset to both forms to make sure they clear after being processed.