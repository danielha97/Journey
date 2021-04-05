let countries = document.querySelectorAll(".location img")
let crosses = document.querySelectorAll(".cross");


countries.forEach((country)=>{
    country.addEventListener("click", (e)=>{
       let place = e.currentTarget.previousElementSibling;
       place.classList.add("show-cover");
    });
});

crosses.forEach((cross)=>{
    cross.addEventListener("click", (e)=>{
       let cancel = e.currentTarget.parentElement.parentElement;
       cancel.classList.remove("show-cover");
    });
});


let names = document.querySelectorAll(".name");
let containers = document.querySelectorAll(".tab-container");
let contents = document.querySelectorAll(".content");

containers.forEach((container)=>{
container.addEventListener("click",(e)=>{
    let link = e.target.parentElement.dataset.link;
    if(link){
        names.forEach((name)=>{
            name.classList.remove("show");
            e.target.parentElement.classList.add("show");
        });
        contents.forEach((content)=>{
            content.classList.remove("show")
        });
        let display = document.getElementById(link);
        display.classList.add("show");
    }
});
});

let links = document.querySelectorAll(".link");

links.forEach((link)=>{
link.addEventListener("click",(e)=>{
    let spot = e.currentTarget.getAttribute("href").slice(1);
    let section = document.getElementById(spot);
    let destination = section.offsetTop;
    window.scrollTo({
        top: destination,
        left: 0
    })
});
});

let navigation = document.querySelector(".main-nav");

window.addEventListener("scroll",()=>{
    let base = window.pageYOffset;
    if(base>250){
        navigation.classList.add("scroll");
    }
    else{
        navigation.classList.remove("scroll");
    }
})


let boxes = document.querySelectorAll(".how-box img");
let xes = document.querySelectorAll(".x");

boxes.forEach((box)=>{
    box.addEventListener("click",(e)=>{
      let sky = e.currentTarget.nextElementSibling;
      sky.classList.add("reveal");
    });
    
})
   xes.forEach((x)=>{
       x.addEventListener("click",(e)=>{
        let gone = e.currentTarget.parentElement.parentElement;
            gone.classList.remove("reveal");
        });
    })

