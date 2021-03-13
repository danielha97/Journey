let country = document.querySelectorAll(".location");
let cross = document.querySelector(".cross");
let overlay = document.querySelectorAll(".cover");



country.forEach((count)=>{
    count.addEventListener("click",(e)=>{
        let display = e.currentTarget.childNodes[1]
      display.classList.toggle("show-cover")
      }); 
      
  });

