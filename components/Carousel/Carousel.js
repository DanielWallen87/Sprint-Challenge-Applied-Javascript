/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function CreateCarousel () {
  const carousel = document.createElement('div');
  carousel.classList.add('carousel');

  const leftButton = document.createElement('div');
  leftButton.classList.add('left-button');

  const rightButton = document.createElement('div');
  rightButton.classList.add('right-button');

  const img1 = document.createElement('img');
  img1.src = './assets/carousel/mountains.jpeg';

  const img2 = document.createElement('img');
  img2.src = './assets/carousel/computer.jpeg';

  const img3 = document.createElement('img');
  img3.src = './assets/carousel/trees.jpeg';

  const img4 = document.createElement('img');
  img4.src = './assets/carousel/turntable.jpeg';

  carousel.append(leftButton);
  carousel.append(rightButton);
  carousel.append(img1);
  carousel.append(img2);
  carousel.append(img3);
  carousel.append(img4);

  const allImg = document.querySelectorAll('img');

  leftButton.addEventListener('click', function() { // Stopping here as I'm not sure how to continue without changing CSS
    allImg.animate('fade');
  })
  
}
