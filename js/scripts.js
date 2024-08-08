 
 const mobNavcont = document.querySelector(".mobilenav-cont");
 const hamburger = document.querySelector(".hamburger");
 const closeIcon = document.querySelector(".close");
const dropDownButton = document.querySelector(".mobilenav-cont .dropdown-btn");
const arrowFlip = document.querySelector(".arrowdown");
const dropDownCont = document.querySelector('.dropdown-content')

dropDownButton.addEventListener('click', () => {
    arrowFlip.classList.toggle('active');

    if (arrowFlip.classList.contains('active')) {
        dropDownCont.style.display = 'block';
    } else {
        dropDownCont.style.display = 'none';
    }
});

 
 hamburger.addEventListener('click', () =>{
    mobNavcont.classList.toggle('active');
   
    hamburger.classList.replace("hamburger", "close");


        // Toggle visibility of hamburger and close icons

    if (mobNavcont.classList.contains('active')) {
        hamburger.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        hamburger.style.display = 'block';
        closeIcon.style.display = 'none';
    }
     
 })

 closeIcon.addEventListener('click', () =>{
    mobNavcont.classList.remove('active');
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';
 })