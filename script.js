const icons = document.getElementsByClassName('icon');


const clickHandler = (e) => {
  const dt = e.target.closest('dt');
  
  if (dt) {
    const dd = dt.nextElementSibling;
    dd.classList.toggle('visible');
    
   const iconImg = dt.lastElementChild.firstElementChild;
      if (iconImg) {
        if (dd.classList.contains('visible')) {
            
          iconImg.setAttribute('src','./assets/images/icon-minus.svg');
          iconImg.setAttribute('alt','icon-minus'); 
          
        } else {
          iconImg.setAttribute('src','./assets/images/icon-plus.svg'); 
          iconImg.setAttribute('alt','icon-plus'); 
         
        }
      }

    }
}

Array.from(icons).forEach((element) => {
  element.addEventListener('click', (e) => clickHandler(e));

  element.addEventListener('keydown', (e)=> {  if (e.key === "Enter" || e.key === " ") clickHandler(e);})
})