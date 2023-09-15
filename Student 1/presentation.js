

const background = document.querySelector('.background');
const text = document.querySelector('.text');
const container2 = document.querySelector('.container2');

//Shows text//
background.style.opacity = 0;
setTimeout(function() {
  text.style.opacity = 1;
  
  //show container2
  setTimeout(function() {
    text.style.opacity = 0;
    container2.style.opacity = 1;
    
    //linked to home page//
    setTimeout(function() {
      window.location.href = 'buyproducts.html';
    }, 1000);
  }, 500);
}, 2500);

