
let container = document.getElementById("Practice");

let practiceHeading = document.createElement("h1");
container.appendChild(practiceHeading);
practiceHeading.textContent = "JavaScript created heading!";

let introParagraph = document.createElement("p");
container.appendChild(introParagraph);
introParagraph.textContent = "Hi there, hello!  This is an introductory paragraph written inside the JavaScript file!  Woot!  Woot!"

let practiceH2 = document.createElement("h2");
container.appendChild(practiceH2);
practiceH2.textContent = "H2 heading is here";

let firstParagraph = document.createElement("p");
container.appendChild(firstParagraph);
firstParagraph.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis excepturi repellendus suscipit praesentium magni eius quae rem obcaecati illo architecto ullam enim, nobis iusto sed dolorem culpa ad, harum labore."

let secondParagraph = document.createElement("p");
container.appendChild(secondParagraph);
secondParagraph.textContent = "Quos voluptate eligendi, dolorem optio dolor obcaecati quisquam veritatis voluptas, voluptatem maxime laborum enim. Accusamus impedit officiis fugit veniam voluptate illum architecto maxime ab suscipit ipsa. Iure excepturi voluptatem accusantium."

let orderedListSection = document.createElement("section");
container.appendChild(orderedListSection);

let orderedListHeading = document.createElement("h3");
orderedListSection.appendChild(orderedListHeading);
orderedListHeading.textContent = "Heading for the Ordered List"

let orderedList = document.createElement("ol");
orderedListSection.appendChild(orderedList);

let numberOne = document.createElement("li");
orderedList.appendChild(numberOne);
numberOne.textContent = "Numero Uno";

let numberTwo = document.createElement("li");
orderedList.appendChild(numberTwo);
numberTwo.textContent = "Numero Dos esta aqui";

let numberThree = document.createElement("li");
orderedList.appendChild(numberThree);
numberThree.textContent = "Number three in the hooooouuuuuse!";

let unorderedListSection = document.createElement("section");
container.appendChild(unorderedListSection);

let unorderedListHeading = document.createElement("h3");
unorderedListSection.appendChild(unorderedListHeading);
unorderedListHeading.textContent = "Heading for My Unordered List";

let unorderedList = document.createElement("ul");
unorderedListSection.appendChild(unorderedList);

let firstItem = document.createElement("li");
unorderedList.appendChild(firstItem);
firstItem.textContent = "First item in my unordered list";

let secondItem = document.createElement("li");
unorderedList.appendChild(secondItem);
secondItem.textContent = "Second thing in the list";

let thirdItem = document.createElement("li");
unorderedList.appendChild(thirdItem);
thirdItem.textContent = "This is the third thing on the unordered list.  Hey now!"
