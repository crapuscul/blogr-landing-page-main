 
 const mobNavcont = document.querySelector(".mobilenav-cont");
 const hamburger = document.querySelector(".hamburger");
 const closeIcon = document.querySelector(".close");
 const arrowFlips = document.querySelectorAll(".arrowdown");
 const dropDownButtons = document.querySelectorAll('.dropdown-btn');
 const dropDownConts = document.querySelectorAll('.dropdown-content');
 
 for (let i = 0; i < dropDownButtons.length; i++) {
     dropDownButtons[i].addEventListener('click', () => {
         arrowFlips[i].classList.toggle('active');
 
         if (arrowFlips[i].classList.contains('active')) {
             dropDownConts[i].style.display = 'block';   
         } else {
             dropDownConts[i].style.display = 'none';
         }
     });
 }


 
 hamburger.addEventListener('click', () =>{
    mobNavcont.classList.toggle('active');


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