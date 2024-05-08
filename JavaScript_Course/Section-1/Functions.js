// A JavaScript function is a repeatable block of code that executes certain actions and performs tasks. You execute a function by calling it. This is also called “invoking” the function.

// Functions are valuable because of code reusability – you can invoke functions over and over. Since functions in JavaScript contain properties and methods, they are basically objects.

// “document.getElementById” is a method that returns an element. The element has an ID attribute with a specific value assigned to it. It is used mainly to control or get information from an element within your code. If it can’t find the element with the specified value, it will return “null.”

// In JavaScript, a keyword identifies actions to be performed. There is a function keyword. Parameters are the values passed to or received by the function. One writes a JavaScript function with the keyword, then a name, then parentheses containing parameters (note: you can leave the parentheses empty).

// Everything inside our curly brackets { } below is our function:


function My_First_Function() {                                  // Defines a funtion and names it
    let string = 'This is the button text!';                    // Defines a variable and gives it a string value
    document. getElementById("Button_Text").innerHTML = string; // Puts the value of the variable into the HTML elementFromPoint with the "Button_Text" id
}


// In the HTML code, we would create a button element. That way, the above could utilize the ID attribute and assigned the button element the value “Button_Text.” 

// The button element was given an event handler which is used to call the JavaScript function “My_First_Function().” The onclick event handler is triggered when the user clicks on that element. 
