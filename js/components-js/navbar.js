document.getElementById("hamburger").addEventListener("click", hamburger_click);
document.getElementById("exit_nav").addEventListener("click",exit_nav_click)
document.getElementById("models_nav").addEventListener("click",models_nav_click)
document.getElementById("merch_nav").addEventListener("click",merch_nav_click)

document.getElementById("Black-Widow_nav").addEventListener("click", Black_Widow_nav_click)
document.getElementById("nemesis_nav").addEventListener("click", nemesis_nav_click)

document.getElementById("back_models-submenu").addEventListener("click", back_models_submenu)
document.getElementById("back_blackwidow").addEventListener("click", back_blackwidow)
document.getElementById("back_nemesis").addEventListener("click", back_nemesis)
document.getElementById("back_merch-submenu").addEventListener("click", back_merch_submenu)





const nav_trion_h1 = document.getElementById("nav-trion"); 
const originalFontSize = window.getComputedStyle(nav_trion_h1).fontSize; 



//opens navbar
function hamburger_click() {
  document.getElementById("left-bar").style.height = ''
  document.getElementById("menu").style.display=""
  document.getElementById("offical-nav").style.zIndex = "2"

  document.getElementById("nav").style.marginLeft ="0%"
  document.getElementById("nav").style.width="3%"

  document.getElementById("menu").style.top="0"
  document.getElementById("models-submenu").classList.add('almost-clicked')
  document.getElementById("merch-submenu").classList.add('almost-clicked')
  document.getElementById("nav-blackwidow").style.fontSize= '0';
  document.getElementById("nav-trion").style.fontSize= '0';
  document.getElementById("nav-nemesis").style.fontSize= '0';
  document.getElementById("hamburger").style.scale= '0';
  document.getElementById("pfp").style.scale= '0';

  document.getElementById('originalImage').style.scale = '0'
  
  if(window.matchMedia("(max-width: 1400px)").matches){
    document.getElementById("menu").style.left="-25%"
  }
  
  

  
  

  document.getElementById("logo").style.transition='width 1s, height 1s'
  document.getElementById("exit_nav").style.transition='width 1s, height 1s'
  
  setTimeout(() =>  document.getElementById("nav").style.opacity="0.1", 500)
  setTimeout(() =>  document.getElementById("nav").style.opacity="1", 1100)
  setTimeout(() =>  document.getElementById("nav").style.backgroundImage="url(../img/components-img/left-bar.png)", 1100)
 
  setTimeout(() =>  document.getElementById("left-bar").style.justifyContent="center", 1400)



  setTimeout(() =>  document.getElementById("svg_group").style.marginBottom="90vh", 1800)
  

 
  setTimeout(() =>  document.getElementById("hamburger").classList.add('clicked'), 1400)

  if(window.matchMedia("(max-width: 1100px)").matches && window.matchMedia("(min-width:571px)").matches){
    setTimeout(() =>  document.getElementById("logo").style.width='25px', 1700)
    setTimeout(() =>  document.getElementById("logo").style.height='25px', 1700)

    setTimeout(() =>  document.getElementById("exit_nav").style.width='25px', 1700)
    setTimeout(() =>  document.getElementById("exit_nav").style.height='25px', 1700)
  }
  else if(window.matchMedia("(max-width: 571px)").matches){
    setTimeout(() =>  document.getElementById("logo").style.width='20px', 1700)
    setTimeout(() =>  document.getElementById("logo").style.height='20px', 1700)

    setTimeout(() =>  document.getElementById("exit_nav").style.width='20px', 1700)
    setTimeout(() =>  document.getElementById("exit_nav").style.height='20px', 1700)
  }
  else{
    setTimeout(() =>  document.getElementById("logo").style.width='35px', 1700)
    setTimeout(() =>  document.getElementById("logo").style.height='35px', 1700)

    setTimeout(() =>  document.getElementById("exit_nav").style.width='35px', 1700)
    setTimeout(() =>  document.getElementById("exit_nav").style.height='35px', 1700)
  }

  
  



  setTimeout(() =>  document.getElementById("menu").style.left = '3%', 3181)
  setTimeout(() =>  document.getElementById("menu").classList.remove("exit"), 1400)

  
  
  
}






// when the models is clicked
  function models_nav_click() {
    if(document.getElementById("merch-submenu").classList.contains("clicked")){

      document.getElementById("merch-submenu").classList.add('back')
      document.getElementById("merch-submenu").style.zIndex = "100"
      setTimeout(back_merch_removed, 1000)
      document.getElementById("models-submenu").style.zIndex = "101"
      document.getElementById("models-submenu").classList.add('almost-clicked')
      document.getElementById("models-submenu").classList.add('clicked')
      document.getElementById("models-submenu-blackwidow").classList.add('almost-clicked')
      document.getElementById("models-submenu-nemesis").classList.add('almost-clicked')
      document.getElementById("merch-submenu").classList.add('almost-clicked')
      
      setTimeout(() => document.getElementById("models-submenu").style.opacity = "1", 0)

    }
    else{

      
      document.getElementById("models-submenu").classList.add('clicked')
      document.getElementById("models-submenu").style.zIndex = "101"
      document.getElementById("models-submenu-blackwidow").classList.add('almost-clicked')
      document.getElementById("models-submenu-nemesis").classList.add('almost-clicked')
      document.getElementById("merch-submenu").classList.add('almost-clicked')
      setTimeout(() => document.getElementById("models-submenu").style.opacity = "1", 0)

    }
  }


    //when blackwidow or nemesis is clicked
    function Black_Widow_nav_click() {

      if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
        document.getElementById("models-submenu-nemesis").classList.add('back')
        setTimeout(back_nemesis_removed, 1000)
        document.getElementById("models-submenu-blackwidow").classList.add('clicked')
      }
      else{
        document.getElementById("models-submenu-blackwidow").classList.add('clicked')
      }
      
      document.getElementById("models-submenu-blackwidow").style.opacity = "1"
      var cartype = "blackwidow";
      localStorage.setItem("cartype",cartype);

    }


    function nemesis_nav_click(){

      if (document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
        document.getElementById("models-submenu-blackwidow").classList.add("back")
        setTimeout(back_blackwidow_removed, 1000)
        document.getElementById("models-submenu-nemesis").classList.add('clicked')
      }
      else{
      document.getElementById("models-submenu-nemesis").classList.add('clicked')
      }

      document.getElementById("models-submenu-nemesis").style.opacity = "1"
      var cartype = "nemesis";
      localStorage.setItem("cartype",cartype);
    }






  // returns to previouse state
    function back_models_submenu(){

      if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
        document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")

        setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 1000)
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 1000)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 1000)

        document.getElementById("models-submenu").classList.add('back')
        document.getElementById("models-submenu").classList.add('almost-clicked')
        setTimeout(all_models_close, 1000)

      }
      else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
        document.getElementById("models-submenu-nemesis").classList.add("models-nemesis-back")

        setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 1000)
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 1000)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 1000)
        
        document.getElementById("models-submenu").classList.add('back')
        document.getElementById("models-submenu").classList.add('almost-clicked')
        
        setTimeout(all_models_close, 1000)

      }
      else{
        document.getElementById("models-submenu").classList.add('almost-clicked')
        document.getElementById("models-submenu").classList.add('back')
        document.getElementById("models-submenu").classList.add('almost-clicked')

        

        setTimeout(back_model_removed, 1000)
      }

    
    }

    function back_blackwidow() {
      document.getElementById("models-submenu-blackwidow").classList.add('back')
      
      setTimeout(back_blackwidow_removed, 1000)
    }


    function back_nemesis() {
      document.getElementById("models-submenu-nemesis").classList.add('back')
      setTimeout(back_nemesis_removed, 1000)
      
    }



    // removes back and click
    function back_model_removed(){
      document.getElementById("models-submenu").classList.remove('back')
      document.getElementById("models-submenu").classList.remove('clicked')
      document.getElementById("models-submenu").style.zIndex = "100"
      document.getElementById("models-submenu").style.opacity = "0"
    }

    function back_nemesis_removed(){
      
      document.getElementById("models-submenu-nemesis").classList.remove('back')
      document.getElementById("models-submenu-nemesis").classList.remove('clicked')
      document.getElementById("models-submenu-nemesis").style.opacity = "0"
    }

    function back_blackwidow_removed(){
      document.getElementById("models-submenu-blackwidow").classList.remove('back')
      document.getElementById("models-submenu-blackwidow").style.opacity = "0"
      document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
    }

    function back_merch_removed(){
      document.getElementById("merch-submenu").classList.remove('back')
      document.getElementById("merch-submenu").classList.remove('clicked')
      document.getElementById("merch-submenu").style.zIndex = "100"
      document.getElementById("merch-submenu").style.opacity = "0"
    }


    function all_models_close(){
      document.getElementById("models-submenu-blackwidow").classList.remove('models-blackwidow-back')
      document.getElementById("models-submenu-blackwidow").classList.remove('back')
      document.getElementById("models-submenu-blackwidow").classList.remove('clicked')
      document.getElementById("models-submenu-blackwidow").classList.remove('almost-clicked')
      document.getElementById("models-submenu-blackwidow").classList.remove('exit')
      document.getElementById("models-submenu-blackwidow").style.opacity = "0"

      
      document.getElementById("models-submenu-nemesis").classList.remove('models-nemesis-back')
      document.getElementById("models-submenu-nemesis").classList.remove('back')
      document.getElementById("models-submenu-nemesis").classList.remove('clicked')
      document.getElementById("models-submenu-nemesis").classList.remove('almost-clicked')
      document.getElementById("models-submenu-nemesis").classList.remove('exit')
      document.getElementById("models-submenu-nemesis").style.opacity = "0"

      
      document.getElementById("models-submenu").classList.remove('back')
      document.getElementById("models-submenu").classList.remove('clicked')
      // document.getElementById("models-submenu").classList.remove('almost-clicked')
      document.getElementById("models-submenu").classList.remove('exit')
      document.getElementById("models-submenu").style.opacity = "0"



      document.getElementById("merch-submenu").classList.remove('back')
      document.getElementById("merch-submenu").classList.remove('clicked')
      // document.getElementById("merch-submenu").classList.remove('almost-clicked')
      document.getElementById("merch-submenu").classList.remove('exit')
      document.getElementById("merch-submenu").style.opacity = "0"
    }
  

//merch clicked
function merch_nav_click() {

  if (document.getElementById("models-submenu").classList.contains("clicked")){
    
    if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")
      document.getElementById("merch-submenu").classList.add('clicked')
      document.getElementById("models-submenu").style.zIndex = "100"
      
      setTimeout(remove_click, 1000)
      setTimeout(remove_models_blank_back, 1000)
      setTimeout(remove_back, 1000)
    }
    else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("models-submenu-nemesis").classList.add("models-nemesis-back")
      document.getElementById("merch-submenu").classList.add('clicked')
      document.getElementById("models-submenu").style.zIndex = "100"
      
      setTimeout(remove_click, 1000)
      setTimeout(remove_models_blank_back, 1000)
      setTimeout(remove_back, 1000)
    }
    else if (document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
      document.getElementById("models-submenu").classList.add("back")
      document.getElementById("models-submenu-blackwidow").classList.add("models-blackwidow-back")
      document.getElementById("merch-submenu").classList.add('clicked')
      document.getElementById("models-submenu").style.zIndex = "100"
      setTimeout(remove_click, 1000)
      setTimeout(remove_models_blank_back, 1000)
      setTimeout(remove_back, 1000)
    }
    else{
      document.getElementById("models-submenu").classList.add('back')
      document.getElementById("models-submenu").style.zIndex = "100"
      setTimeout(back_model_removed, 1000)
      document.getElementById("merch-submenu").classList.add('clicked')
    }

    
  }
  else{
    document.getElementById("merch-submenu").classList.add('clicked')
  }

  document.getElementById("merch-submenu").style.opacity = "1"
}


function back_merch_submenu(){
  document.getElementById("merch-submenu").classList.add('back')
  setTimeout(back_merch_removed, 1000)
}













function remove_click(){
  document.getElementById("models-submenu-blackwidow").classList.remove("clicked")
  document.getElementById("models-submenu-nemesis").classList.remove("clicked")
  document.getElementById("models-submenu").classList.remove("clicked")
  document.getElementById("models-submenu").style.opacity = "0"
  document.getElementById("models-submenu-nemesis").style.opacity = "0"
  document.getElementById("models-submenu-blackwidow").style.opacity = "0"
}

function remove_models_blank_back(){
  document.getElementById("models-submenu-blackwidow").classList.remove("models-blackwidow-back")
  document.getElementById("models-submenu-nemesis").classList.remove("models-nemesis-back")
}

function remove_back(){
  document.getElementById("models-submenu").classList.remove("back")
}


















document.getElementById("nav").style.marginLeft ="0%"
  
  
  
  
  
  
  
 
  











  //closes navbar
  function exit_nav_click() {
      
    if(document.getElementById("models-submenu").classList.contains('clicked')){
  
      if(document.getElementById("models-submenu-blackwidow").classList.contains("clicked")){
        document.getElementById("models-submenu-blackwidow").classList.add("exit")
        document.getElementById("models-submenu").classList.add("exit")
        document.getElementById("menu").style.left = '-15%'
        setTimeout(all_models_close, 1000)

        
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 800)


        setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1350)
        navbar_close_animation()
      }
      else if (document.getElementById("models-submenu-nemesis").classList.contains("clicked")){

        
        document.getElementById("models-submenu-nemesis").classList.add("exit")
        document.getElementById("models-submenu").classList.add("exit")
        document.getElementById("menu").style.left = '-15%'
        setTimeout(all_models_close, 1000)

        setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 800)

        setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1350)
        navbar_close_animation()
        
      }
      else{
        document.getElementById("models-submenu").classList.add("exit")
        document.getElementById("menu").style.left = '-15%'
        setTimeout(all_models_close, 1000)

        setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 800)

        setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
        navbar_close_animation()
      }
  
    }
    else if(document.getElementById("merch-submenu").classList.contains('clicked'))
    {
      
      document.getElementById("merch-submenu").classList.add("exit")
      
      document.getElementById("menu").style.left = '-15%'

      setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 800)
      setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 800)
      setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 800)

      setTimeout(all_models_close, 1000)
      setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
      navbar_close_animation()
      
    }
    else{
      document.getElementById("menu").style.left = '-15%'

      setTimeout(() => document.getElementById("models-submenu-blackwidow").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu-nemesis").style.opacity = "0", 800)
        setTimeout(() => document.getElementById("models-submenu").style.opacity = "0", 800)

      setTimeout(() => document.getElementById("hamburger").classList.remove('clicked'), 1050)
      navbar_close_animation()

      

      


      
      
    }
    
  }


  function navbar_close_animation(){
      document.getElementById("models-submenu").classList.remove('almost-clicked')
      document.getElementById("merch-submenu").classList.remove('almost-clicked')

      
      
      setTimeout(() =>  document.getElementById('originalImage').style.scale = '1', 2000)
      
      
      

      setTimeout(() =>  document.getElementById("nav-blackwidow").style.fontSize= '24px', 2000)
      setTimeout(() =>  document.getElementById("nav-trion").style.fontSize= originalFontSize, 2000)
      setTimeout(() =>  document.getElementById("nav-nemesis").style.fontSize= '24px', 2000)
      setTimeout(() =>  document.getElementById("hamburger").style.scale= '1', 2000)
      setTimeout(() =>  document.getElementById("pfp").style.scale= '1', 2000)


      document.getElementById("logo").style.transition='width 1s, height 1s'
      document.getElementById("exit_nav").style.transition='width 1s, height 1s'


      setTimeout(() =>  document.getElementById("logo").style.width='0px', 500)
      setTimeout(() =>  document.getElementById("logo").style.height='0px', 500)
      setTimeout(() =>  document.getElementById("exit_nav").style.width='0px', 500)
      setTimeout(() =>  document.getElementById("exit_nav").style.height='0px', 500)

      // setTimeout(() =>  document.getElementById("nav").style.height="10vh", 900)
      setTimeout(() =>  document.getElementById("nav").style.backgroundImage="linear-gradient(#444444, #020103)", 1750)

      setTimeout(() =>  document.getElementById("nav").style.width="100%", 2000)
      setTimeout(() =>  document.getElementById("left-bar").style.height="0", 900)
      // setTimeout(() =>  document.getElementById("left-bar").style.transition="height 3s", 800)
      setTimeout(() =>  document.getElementById("menu").style.display="none", 900)

      setTimeout(() =>  document.getElementById("svg_group").style.marginBottom="0vh", 2000)
      setTimeout(() =>  document.getElementById("offical-nav").style.zIndex = "0", 2000)

      
  }

  var pfp_img = localStorage.getItem("pfp-img"); 

  const imgElement = document.getElementById('originalImage');
  
  if(pfp_img == null)
  {
    document.getElementById("pfp").style.opacity = "1"
        document.getElementById('originalImage').style.opacity = "0"
    imgElement.style.visibility = "none"
  }
  else{
    imgElement.src = pfp_img
    imgElement.style.visibility = "visible"

    document.getElementById("pfp").style.opacity = "0"
  }
  