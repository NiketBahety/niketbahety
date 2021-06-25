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

let counter = 1;

next.addEventListener("click" , function(){
    if(counter == 3)
    {
    counter = 1;
    slider_content.style.left = "0%";
    }
    else
    {
    let leftpos = getComputedStyle(slider_content).left.substr(0 , getComputedStyle(slider_content).left.length - 2);
    let sliderwidth = getComputedStyle(slider_content).width.substr(0 , getComputedStyle(slider_content).width.length - 2);
    slider_content.style.left = leftpos - (sliderwidth/3) + "px";
    counter++;
    }
});


previous.addEventListener("click" , function(){
    if(counter == 1)
    {
    counter = 3;
    slider_content.style.left = "-200%";
    }
    else
    {
    let leftpos = getComputedStyle(slider_content).left.substr(0 , getComputedStyle(slider_content).left.length - 2);
    console.log(leftpos);
    let sliderwidth = getComputedStyle(slider_content).width.substr(0 , getComputedStyle(slider_content).width.length - 2);
    console.log(sliderwidth);
    slider_content.style.left = +leftpos + +(sliderwidth/3) + "px";
    counter--;
    }
});
