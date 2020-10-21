const navSlide=()=>{
    const burger = document.querySelector('.burger ')
    const nav=document.querySelector('.nav-links')
    const navlinks=document.querySelectorAll('.nav-links li')

    // Untuk animasi ketika burger di klik
    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active')
        
        navlinks.forEach((link,index) => {
        if (link.style.animation) {
            link.style.animation=''
        }else{
                link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 +0.8}s`
        } });

        // Animasi Untuk Burger
        burger.classList.toggle('toggle')
    })

}
navSlide()