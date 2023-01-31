const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

function updateText()
{
    x = 2;  // 2 Seconds

    myHeading.textContent === "Hello world!" ?   myHeading.textContent = "Mozilla is too cool for school" : myHeading.textContent = "Hello world!";

    setTimeout(updateText, x*1000);
}


updateText(); // execute text mapping function