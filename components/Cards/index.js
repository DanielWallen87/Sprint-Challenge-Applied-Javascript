// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CreateCard (data) {
    const card = document.createElement('div'); // Create basic structure of elements
    card.classList.add('card');

    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.textContent = data.headline;

    const author = document.createElement('div');
    author.classList.add('author');

    const imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    const authorImg = document.createElement('img');
    authorImg.src = data.authorPhoto;

    const authorName = document.createElement('span');
    authorName.textContent = data.authorName;

    card.append(headline); // Append children to appropriate parent/container
    card.append(author);

    author.append(imgContainer);
    author.append(authorName);

    imgContainer.append(authorImg);

    const cardsContainer = document.querySelector('.cards-container'); // select container on which to append every card
    cardsContainer.append(card); 

    return card;

}


axios.get('https://lambda-times-backend.herokuapp.com/articles') // Access the topics array via the API
    .then((response) => { // Then do some things with the response
        console.log(response);
        response.data.articles.javascript.forEach(article => CreateCard(article));
        response.data.articles.bootstrap.forEach(article => CreateCard(article));
        response.data.articles.jquery.forEach(article => CreateCard(article));
        response.data.articles.node.forEach(article => CreateCard(article));
        response.data.articles.technology.forEach(article => CreateCard(article));
    })

    .catch((err) => { // Catch any weird errors or bugs that might happen
        console.log(err) // Print the specifics in the console so I can deal with it
    })