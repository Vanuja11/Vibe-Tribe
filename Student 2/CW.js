let slideIndex = 0;
showSlides();

//function made to call the class slides switch every 5 seconds
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i<slides.length; i++) { 
    slides[i].style.display = "none" ; 
  } 
  //setting i as let instead of var so it is compatible with XML 1.0s

  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 
}
//changes image every 5 seconds

function submitForm() {
  // show an alert with the input value
  alert("Hello! Your form has been submitted.");
}