const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');


function PageTransitions() {
    //Button click active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';

        })
    }

    //Sctions Active 

    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            //resmove selected from the other btns
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })

    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () => {
        let element = document.body;
        element.classList.toggle('light-mode')


    })
}

PageTransitions();




//-------------------------------------------------------------------------------

/*function sendEmail() {
    Email.send({
        Host: "smtp.gmail.com.com",
        Username: "boudidaadil@gmail.com",
        Password: "password",
        To: 'boudidaadil@gmail.com',
        From: document.getElementById("Email").value,
        Subject: "message from your portefoloi",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}*/
/*--------------------------------------------------------------------------------*/
// getting HTML elements
const nav = document.querySelector("nav"),
    toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
    nav.classList.toggle("open");


});

/*
// js code to make draggable nav
function onDrag({ movementY }) { //movementY gets mouse vertical value
    const navStyle = window.getComputedStyle(nav), //getting all css style of nav
        navTop = parseInt(navStyle.top), // getting nav top value & convert it into string
        navHeight = parseInt(navStyle.height), // getting nav height value & convert it into string
        windHeight = window.innerHeight; // getting window height

    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
    if (navTop > windHeight - navHeight) {
        nav.style.top = `${windHeight - navHeight}px`;
    }
}
*/
/*
//this function will call when user click mouse's button and  move mouse on nav
nav.addEventListener("mousedown", () => {
    nav.addEventListener("mousemove", onDrag);
});

//these function will call when user relase mouse button and leave mouse from nav
nav.addEventListener("mouseup", () => {
    nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () => {
    nav.removeEventListener("mousemove", onDrag);
});*/
/* tradution -------------------------------------------------------------------------------------------*/