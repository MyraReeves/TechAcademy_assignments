// JavaScript lets you execute code when events are detected.

// HTML events are "things" that happen to HTML elements.  When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// An HTML event can be something the browser does, or something a user does.

// Here are some examples of HTML events:
// An HTML web page has finished loading
// An HTML input field was changed
// An HTML button was clicked
// Often, when events happen, you may want to do something.

// HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

function displayDateTime() {
    document.getElementById("demo").innerHTML = Date();
  }


//   The corresponding HTML using this function would be:
//                  <p> Click the button to display the date. </p>
//                  <button onclick="displayDateTime()"> The time is? </button>
//                  <p id="demo"></p>