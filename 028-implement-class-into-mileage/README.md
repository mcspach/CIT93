# Week 13
## Classes

Part 1: 
I think we should create a class called TRIP that inclkudes the three inputs. Then we can save an instance of Trip each time something is submitted or updated. 
Other than that Im not sure where classes could be used in this app. Because Im not sure that's what you are planning to do Im going to hold off until the next video to actually mess with my code.

Part 2:
One way we could do it is have the trackMPGandCost function take Trip object rather than just three things. Then we can refactor the code inside that method.
It looks like that's what you are doing in the rest of the video.

- I'm also getting NaN for the loop that goes through all the objects in the data. It is creating NaN values for both MPG and Cost. THere may need to be some data type validation that needs to be added.
- Edit buttons are also getting the error about the values. I beleive this may be related to the underscores added to the key's in the new objects.
- I'm also getting an error in the console that says the reduce function is being called on an empty array. For that reason, I think there is some problem with the MY_DATA variable now that we have changed from standard objects to Trip objects. I wonder if the solution to each of these probelems is about the same.

# MODULES
QUESTION: A few weeks ago, you were importing each module separately and I aksed you why you were doing that, as you only need the main.js, since everything else is imported in using js imports. I thought you'd mentioned that yes, only the main.js needs to be imported. Now you are importing in every file again. Did I miss something?


Part 3:
- I got rid of the error about an empty array just by checking if mydata was not empty before running calculaterAverages.
- Adding the underscores removed the error from the edit buttons.
- Fo,lowing along with your video, adding the underscores again fixed the reduce function and related functions.