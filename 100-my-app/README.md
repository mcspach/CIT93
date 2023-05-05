# App for Eating

This application will decide whether or not to eat, and what Macro nutrient to induilge in. It first decides whether or not we are within eating hours, then decides whether or not we are hungry. If those two guards are passed, then the inner loop recommends different options based on which nutrients have been consumed at higher levels that day.

Week 12 Instructions:

[X] Make sure you use HTML input attitudes required for inputs (which is most likely all the inputs) and then write some validation code to validate user input. (I beleive by setting the steps, required, type, min and max I have successfully eliminated much need to having extra validations in my JS)
[X] Now take the inputs from the form and pass them into the function you wrote last week. (My functions were already accepting form inputs last week)
[X] Have your returned object from last week be pushed into an array if form input is valid, we will start to implement render to the DOM next week, for now you can just call the updateDOM on the user input to show the output on the page. (My macros appear inside the macros form, and my rresult from the hunger meter renders each time you submit that form, using a combo of timestamp / macro values / and hunger level.)
[X] Make sure you clear the inputs fields.
Once you have working code or you want to see a video of me writing code for the function and forms, submit with commit "my form input" and submit your commit history URL.