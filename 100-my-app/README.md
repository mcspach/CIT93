# App for Eating

This application will decide whether or not to eat, and what Macro nutrient to induilge in. It first decides whether or not we are within eating hours, then decides whether or not we are hungry. If those two guards are passed, then the inner loop recommends different options based on which nutrients have been consumed at higher levels that day.

Week 15:
Handle Edit/Delete

1. Added the ability to delete your hungryLevel records from the daily log. I decided it would not be helpful to edit these since they are using the Date API, it would make more sense to delete and record a new one, which will save with the current time and render the right message.
2. I added the ability to edit and delete records fro  the macros log, which will allow yopu to change how much of each nutrient you have recorded at each time thoughout the day.