//NAVAR ACTIVE O NO ACTIVE RESPONSIVE//

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navigation");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-close");
  if (menuIcon.classList.contains("bx-close")) {
    menuIcon.innerHTML = '<ion-icon name="close"></ion-icon>';
    navbar.classList.add("active");
  } else {
    menuIcon.innerHTML = '<ion-icon name="menu"></ion-icon>';
    navbar.classList.remove("active");
  }
};

function closeMenu() {
  menuIcon.classList.remove("bx-close");
  menuIcon.innerHTML = '<ion-icon name="menu"></ion-icon>';
  navbar.classList.remove("active");
}

navLinks.forEach(link => {
  link.addEventListener("click", closeMenu);
});

//Navar seccion active//

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    })
}


//CAMBIO DE LETRA//

let typingEffect = new Typed(".multiText", {
  strings: ["Frontend Developer", "Backend Developer", "Full-Stack Developer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 1500
})



let options = {
  startAngle: -1.55,
  size: 150,
  value: 0.85,
  fill: {gradient: ['#965de9', '#594fe2']}
}
$(".circle .bar").circleProgress(options).on('circle-animation-progress',
function(event, progress, stepValue){
  $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
});
$(".js .bar").circleProgress({
  value: 0.60
});
$(".css .bar").circleProgress({
  value: 0.80
});

ScrollReveal({ 
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.header', { origin: 'top' });
ScrollReveal().reveal('.box1, .flip-card', { origin: 'bottom' });
ScrollReveal().reveal('.title, .top, .social-media, .home-btn, .img-2, .portafolioPrinci-box, .btnLogin-popup', { origin: 'left' });
ScrollReveal().reveal('.img-1, .top2, .data, .input', { origin: 'right' });