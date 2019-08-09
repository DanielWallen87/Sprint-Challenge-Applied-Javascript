// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTabs (data) {
    
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = data;

    const tabs = document.querySelector('.tabs'); // container on which each topics div is placed
    const topics = document.querySelector('.topics'); // container on which each tab is placed

    topics.append(tab);

    return tabs;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics') // Access the topics array via the API
    .then((response) => { // Then do some things with the response
        response.data.topics.forEach(topic => createTabs(topic));
        console.log(response);
    })

    .catch((err) => { // Catch any weird errors or bugs that might happen
        console.log(err) // Print the specifics in the console so I can deal with it
    })