// toggle style switch
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");

styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

// hide style - switcher on scroll
window.addEventListener("scroll", () => 
{
  if (document.querySelector(".style-switcher").classList.contains("open")) 
  {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

// theme color
const alternateStyles = document.querySelectorAll(".alternate-style");

const setActiveStyle = (color) => 
{
  let jsonObj = JSON.stringify({
      color: color
  });
  localStorage.setItem("basecolor", jsonObj);

  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) 
    {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
};


window.addEventListener("load", () => 
{  
  const getColor = localStorage.getItem("basecolor");
  let setColor = JSON.parse(getColor);

  if(setColor != null)
  {
    setActiveStyle(''); 
    setTimeout(() => {
      setActiveStyle(setColor.color); 
    }, 10);
  }
})

// theme light and dark mode
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle("dark");

  var jsonObj = '';
  
  if (document.body.classList[0] != undefined) 
 {
    jsonObj = JSON.stringify({
        color: document.body.classList[0],
        icon: "fa-moon"
    });
 } 
 else 
 {
    jsonObj = JSON.stringify({
        color: '',
        icon: "fa-sun"
    });
 }
    
 localStorage.setItem("theme", jsonObj);

});

window.addEventListener("load", () => 
{
    const theme = localStorage.getItem("theme");

    let setheme = JSON.parse(theme);

    if(setheme != null)
    {
      if(setheme.color != '') {
        document.body.classList.add(setheme.color); 
        dayNight.querySelector("i").classList.add(setheme.icon);
      } else {
        dayNight.querySelector("i").classList.add(setheme.icon);
      }
    }
    else{
      dayNight.querySelector("i").classList.add("fa-sun");
    }
});
