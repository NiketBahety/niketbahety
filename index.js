let navitem = document.getElementsByClassName("nav-item");
let navlinks = document.getElementsByClassName("nav-links");

for(let i=0 ; i<navitem.length ; i++)
{
    let scrollvalues = [500 , 400 , 300, 200 , 100];
    window.addEventListener("scroll" , function(){
        let scroll_y = window.scrollY;
        for(let k=0 ; k<scrollvalues.length ; k++)
        {
            let navlink = navlinks[k].innerHTML;
            let navlinkid = document.getElementById(navlink);
            let scroll_top = navlinkid.getBoundingClientRect().top;
            if(scroll_top<250)
            {
                for(let j = 0 ; j < navitem.length ; j++)
                navitem[j].classList.remove("active");
                navitem[k].classList.add("active");
            }
        }
    });
}

for(let i = 0 ; i < navitem.length ; i++)
{
    navitem[i].addEventListener("click" , function(){
        for(let j = 0 ; j < navitem.length ; j++)
        navitem[j].classList.remove("active");
        navitem[i].classList.add("active");
    });
}

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let slider_content = document.getElementById("slider-content");
let review_template = document.getElementById("review-template");


next.addEventListener("click" , function(){
});