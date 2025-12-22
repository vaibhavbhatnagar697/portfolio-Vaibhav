const home=document.querySelector("#home")
const about=document.querySelector("#about")
const services=document.querySelector("#services")
const work=document.querySelector("#work")
const contact=document.querySelector("#contact")
const header=document.querySelector(".header")

document.addEventListener("scroll",(e)=> {

    if(window.scrollY<100) {
        setTimeout(()=> {
            about.setAttribute("class","about fade-text")
        })
    }
    if(window.scrollY>500 && window.scrollY<633) {
        setTimeout(()=> {
            services.setAttribute("class","services fade-text")
        })
    }
    if(window.scrollY>1000 && window.scrollY<1298) {
        setTimeout(()=> {
            work.setAttribute("class","work fade-text")
        })     
    }
})

const home_btn=document.querySelector(".home_btn")
home_btn.addEventListener('click',(e)=> {
    window.scroll(0,0);
})

const about_btn=document.querySelector(".about_btn")
about_btn.addEventListener('click',(e)=> {
    window.scroll(0,800)
})

const services_btn=document.querySelector(".services_btn")
services_btn.addEventListener('click',(e)=> {
    window.scroll(0,1300)
})

const work_btn=document.querySelector(".work_btn")
work_btn.addEventListener('click',(e)=> {
    window.scroll(0,2000)
})

const connect_page=document.querySelector(".connect-page")
const btn=document.querySelector(".btn");

btn.addEventListener('click',(e)=> {
    header.style.display="none"
    about.style.display="none"
    services.style.display="none"
    work.style.display="none"
    home.style.display="none"
    contact.style.display="none"
    connect_page.style.display="flex"

    window.screenY="0"
})

const homebtn=document.querySelector(".home-btn");
homebtn.addEventListener('click',(e)=> {
    header.style.display="flex"
    about.style.display="flex"
    services.style.display="grid"
    work.style.display="grid"
    home.style.display="flex"
    contact.style.display="grid"
    connect_page.style.display="none"
})

