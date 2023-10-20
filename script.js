function weblinks(a){
  switch(a){
      
      case 1: window.open('https://www.linkedin.com/in/milana-ks-87842b24b", "_blank');
      break;
      case 2: window.open('mailto:milanashivalingappa@gmail.com',"_blank");
      break;
      case 3:window.open('https://github.com/Milanaks03',"_blank");
      break;
      default: window.alert("Error");
  }
  
}
function fadecontainers(contid){
  var navcontainers = document.getElementsByClassName("fadeout");
  
  /* for later use
  document.addEventListener('click', (e) => {
      let element = e.target;
      if(element.tagName == "BUTTON"){        
          
      }
  });*/


  for(container of navcontainers){
      if(container === contid){
          if(container.style.display === 'block'){
              container.style.display = 'none';
          }
          else{
              container.style.display = 'block';
          }
          
      }
      else{
          container.style.display = 'none';
      }
  }
  
}