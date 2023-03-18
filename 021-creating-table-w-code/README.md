#Week 10 Notes
# How do we create the data rows?

- Currently, the code will create a new header row everytime we submit the form, so we need to fist take care fot that.

- There are a few options to acheive this. I think the easiest way is to recreate the entire table each time new data appears (so each form submission) 
To do this we could leave the render table as is, but add after the headings loop, a similar loop that iterates over each item in the data object, and then each value in that item -> rendering a td for each and then appending them. That will be two loops, one nested in the other, then after the inner loop, create the buttons and append those as a td for each tr.

