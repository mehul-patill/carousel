// const slider = document.querySelector('.slider');

// function activate(e) {
//   const items = document.querySelectorAll('.item');
//   e.target.matches('.next') && slider.append(items[0])
//   e.target.matches('.prev') && slider.prepend(items[items.length-1]);
// }

// document.addEventListener('click',activate,false);

// const envelope = document.querySelector('.envelope-wrapper');
// envelope.addEventListener('click', (event) => {
//   if (!event.target.classList.contains('box')) {
//     envelope.classList.toggle('flap');
//   }
// });

// // const clickHereBox = document.querySelector('.box');
// // clickHereBox.addEventListener('click', (event) => {
// //   event.stopPropagation();
// //   mainContent();
// // });
// function carousel() {
//   // Hide the container
//   window.location.href = 'index2.html';
// }



document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const nav = document.querySelector('.nav');
  const mainContent = document.getElementById("mainContent");
  let clickCounter = 0;

  function activate(e) {
    if (e.target.matches('.next')) {
      slideNext();
    } else if (e.target.matches('.prev')) {
      slidePrev();
    }
  }

  function slideNext() {
    const items = document.querySelectorAll('.item');
    if (items.length === 1) {
      return; // Stop if last slide reached
    }
    slider.appendChild(items[0].cloneNode(true));
    slider.removeChild(items[0]);
    clickCounter++;

    if (clickCounter === 5) {
      // Additional actions when the fifth slide is reached
    }
  }

  function slidePrev() {
    const items = document.querySelectorAll('.item');
    slider.insertBefore(items[items.length - 1].cloneNode(true), items[0]);
    slider.removeChild(items[items.length - 1]);
  }

  nav.addEventListener('click', activate, false);

  // Toggle the display of the main content when the "click here" box is clicked
// Toggle the display of the main content when the "click here" box is clicked
// document.querySelector(".box").addEventListener('click', function(event) {
//   console.log("clicked");
//   event.stopPropagation();
//   mainContent.style.display = "block";
//   document.querySelector(".container").style.display = "none";
// });


//   // Toggle the envelope flap
//   const envelope = document.querySelector('.envelope-wrapper');
//   envelope.addEventListener('click', () => {
//     envelope.classList.toggle('flap');
//   });
});
const envelope = document.querySelector('.envelope-wrapper');
envelope.addEventListener('click', (event) => {
  if (!event.target.classList.contains('box')) {
    envelope.classList.toggle('flap');
  }
});

// const clickHereBox = document.querySelector('.box');
// clickHereBox.addEventListener('click', (event) => {
//   event.stopPropagation();
//   mainContent();
// });
function carousel() {
  // Hide the container
  window.location.href = 'index2.html';
}


