#Week 10
- For the delete button, I was able to create functionality pretty easily by copying a few lines from elsewhere.
- There is one persisting error where the Averages get thrown off when I delete a record. 

- I was finally able to solve the delete/averages issue with some tinkering, but there is still a tiny UI issue where I'd like to illiminate the average outputs if the values are NaN, but I didnt quite figure that out.

- I also noticed that sometimes, when I deleted an object and recalulated the values, I would get multiple paragraph elements with the averages. To fix this I added a helper funtion called clearAverages and used it in a few places to clear those elements before recalculating.