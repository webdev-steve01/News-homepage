const menu = document.getElementById('hamburger');
const innerNav = document.getElementById('innerNav');
const cancel = document.getElementById('cancel')
const body = document.getElementById('main')

let toggle = true;
menu.addEventListener('click', () => {
  
  innerNav.style.display = 'block' 
  // body.style.opacity = .5
  // body.style.backgroundColor = black
  // body.style.opacity = .1
  innerNav.style.opacity = 1
  innerNav.style.transform = "translateY(0px)";
  
})

cancel.addEventListener('click', () => {
  innerNav.style.transform = "translateY(-1000px)";
  innerNav.style.opacity = 0
  innerNav.style.transition = 'all 900ms ease'
  // innerNav.style.transform = "translateY(0px)";
  setTimeout(() => {
    innerNav.style.display = 'none'
    
  }, 600)
  
})





