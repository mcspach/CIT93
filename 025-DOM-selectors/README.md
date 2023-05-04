# Week 12
Fixing Issues with DOM selectors

# Which DOM Selectors and where would the code go?

If I know that there will never be any more buttons added to this application, I could find a way to exclude the Submit button from the returned items, or remove the first item in the nodeList befgore iterating. That is not a scalable solution, so I would like to first selct the table, which would probably be most accurately selected with the document.getElementByID() selector. Then once I have the table saved to a variable. I can run another selector on that variable to get all the buttons inside the table. To do that I would use table.getElementsByTagName(), since we want all buttons. In some other case where we only wanted specific buttons, I would choose to use a class selector. 

Then we can iterate over all the buttons in the table and each of them can be disabled. 
I beleive its a boolean attribute, so something like `button.disabled = true`. 
Then once the form is submitted, we can remove the attribute or change the value back to false.
