// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headContainer = document.querySelector('.header-container');

function Header() {
    const head = document.createElement('div'); // Creating structure and text content of elements
    head.classList.add('header');
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('date');
    dateSpan.textContent = 'MARCH 28, 2019';
    const headText = document.createElement('h1');
    headText.textContent = 'Lambda Times';
    const tempSpan = document.createElement('span');
    tempSpan.classList.add('temp');
    tempSpan.textContent = '98°';

    head.append(dateSpan); // Appending child elements to their parent container
    head.append(headText);
    head.append(tempSpan);

    console.log(head); // function isn't working, confirming all of this is what it should be. 
    console.log(dateSpan);
    console.log(headText);
    console.log(tempSpan);

    return head; // Everything was fine, just forgot the return statement (which is typical of me lol)
}

headContainer.append(Header()); // Appending the function call to its wrapper container

// After creating this, I realized the function could become more reusable like so...

// function Header (dateSpan, headText, tempSpan) while passing in specific text as arguments

//... in which case the syntax would be .textContent = dateSpan, headText, tempSpan (or so I assume)