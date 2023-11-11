const navBtn = document.getElementById("nav-btn");

navBtn.addEventListener("click", ()=>{

    const mobileNav = document.getElementById("mobile-nav");
    if(mobileNav.style.transform=="translateY(0%)"){
        mobileNav.style.transform="translateY(-110%)";
    }
    else{
        mobileNav.style.transform="translateY(0%)";
    }
});