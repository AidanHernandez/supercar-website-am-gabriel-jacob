

document.getElementById("side-scroll-feature").addEventListener("click", side_feature_open);
// document.getElementById("scroll-car").addEventListener("click", side_feature_open);





const hero = document.getElementById("hero")
const blocker = document.getElementById("hero-blocker")

const sideblocker = document.getElementById("side-blocker")


side_feature_clicked = true





function side_feature_open(){
    if( side_feature_clicked == false)
    {
        if(window.matchMedia("(max-width:2251px)").matches && window.matchMedia("(min-width: 1851px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "1000px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:1851px)").matches && window.matchMedia("(min-width: 1650px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "600px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:1651px)").matches && window.matchMedia("(min-width: 1101px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "600px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:1101px)").matches && window.matchMedia("(min-width: 901px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "450px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:901px)").matches && window.matchMedia("(min-width: 769px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "350px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:769px)").matches && window.matchMedia("(min-width: 571px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "250px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:571px)").matches && window.matchMedia("(min-width: 426px)").matches){
            document.getElementById("scroll-car").style.marginLeft = "190px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else if(window.matchMedia("(max-width:426px)").matches ){
            document.getElementById("scroll-car").style.marginLeft = "150px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
        else{
            document.getElementById("scroll-car").style.marginLeft = "1300px"
            side_feature_clicked = true
            sideblocker.style.animationName = "sideblocker-out"
        }
       


        
        
    }
    else{
    if(window.matchMedia("(max-width:901px)").matches && window.matchMedia("(min-width: 426px)").matches){
        document.getElementById("scroll-car").style.marginLeft = "50px"
            sideblocker.style.animationName = "sideblocker-in"
            side_feature_clicked = false
    }
    else if(window.matchMedia("(max-width:426px)").matches ){
        document.getElementById("scroll-car").style.marginLeft = "10px"
        sideblocker.style.animationName = "sideblocker-in"
        side_feature_clicked = false
    }
    else{
        document.getElementById("scroll-car").style.marginLeft = "200px"
            sideblocker.style.animationName = "sideblocker-in"
            side_feature_clicked = false
    }
            
        
           
    }
}


