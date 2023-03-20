# Week 11

Before attemtping challenge:
I believe the setter method needs to go somewhere inside the form event listener. But, I think it will not fully solve the challenge. 

As far as I can tell right now, we are creating an empty array when we first load the page because of the conditional inside of getTripData(). But the rest of our code is still just making changes to that global constant rather than dealing with the localStorage object. If we were to use localStorage.setItem() in the form event listener, the localStorage would not be updated. So I think we will then have to get the data, parse it, then add the new data with push(), then send it back to local storage as 'tripdata'.

Hopefully it is simpler than that.


/////
After getting it to work, I realised it was a little easier than I thought. we were able to directly add the new object to the data, then update local storage by overwriting the whole object. 
The thing that is now missing will be adding the update to the other CRUD operations if we want to make sure that the localStorage object is updated in realitme with all the app actions.