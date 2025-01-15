document.getElementById("premium-options-arrow").addEventListener("click", premium_arrow);

document.getElementById("colorwheel-arrow").addEventListener("click", color_wheel_arrow);





const green = document.getElementById("fancygreen-exterior")
const blue = document.getElementById("fancyblue-exterior")
const red = document.getElementById("fancyred-exterior")
const black = document.getElementById("fancyblack-exterior")

var paint


function premium_arrow(){

        if(document.getElementById("exterior-colorwheel").classList.contains('opened'))
        {
            document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"
            document.getElementById("exterior-colorwheel").classList.remove("opened")
            
        }
        

        if(document.getElementById("premium-dropdown").classList.contains('closed')){
            document.getElementById("premium-options-arrow").style.transform = "rotate(0deg)"
            document.getElementById("premium-dropdown").classList.add("opened")
            document.getElementById("premium-exterior-blocker").classList.remove('opened')
            document.getElementById("premium-dropdown").classList.remove("closed")
        }
        else if(document.getElementById("premium-dropdown").classList.contains('opened')){
            
            document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"

            document.getElementById("premium-dropdown").classList.remove('opened')
            document.getElementById("premium-dropdown").classList.add('closed')




            document.getElementById("premium-exterior-blocker").classList.add('opened')
        }

        if((document.getElementById("premium-dropdown").classList.contains('closed')) && (document.getElementById("exterior-colorwheel").classList.contains('closed'))){
            document.getElementById("exterior-colorwheel").classList.add('close-close')
            document.getElementById("premium-exterior-colorwheel-blocker").classList.add('close-close')
            document.getElementById("colorCanvas").classList.add('close-close')
            
        }
}


function color_wheel_arrow(){
        if(document.getElementById("premium-dropdown").classList.contains('opened'))
        {
            document.getElementById("premium-options-arrow").style.transform = "rotate(180deg)"
            document.getElementById("premium-dropdown").classList.remove("opened")
            document.getElementById("premium-dropdown").classList.add("closed")

            document.getElementById("exterior-colorwheel").classList.add('close-close')
            document.getElementById("premium-exterior-colorwheel-blocker").classList.add('close-close')
            document.getElementById("colorCanvas").classList.add('close-close')

        }


        if(document.getElementById("exterior-colorwheel").classList.contains('closed')){
            
            document.getElementById("colorwheel-arrow").style.transform = "rotate(0deg)"
            document.getElementById("exterior-colorwheel").classList.remove('closed')
            document.getElementById("exterior-colorwheel").classList.add('opened')
            
            
            document.getElementById("premium-exterior-colorwheel-blocker").classList.add('opened')
        }
        else if(document.getElementById("exterior-colorwheel").classList.contains('opened')){

            document.getElementById("colorwheel-arrow").style.transform = "rotate(180deg)"
            
            document.getElementById("exterior-colorwheel").classList.add("closed")
            document.getElementById("exterior-colorwheel").classList.remove("opened")


            document.getElementById("premium-exterior-colorwheel-blocker").classList.remove('opened')

        }

        if((document.getElementById("premium-dropdown").classList.contains('closed') && document.getElementById("exterior-colorwheel").classList.contains('closed'))){
            document.getElementById("exterior-colorwheel").classList.add('close-close')
            document.getElementById("premium-exterior-colorwheel-blocker").classList.add('close-close')
            document.getElementById("colorCanvas").classList.add('close-close')
            
        }

        
}





  




document.getElementById("next").onclick = function () {
    location.href = "../interior-blackwidow.html";
}

document.getElementById("save").onclick = function () {
    paint_save = localStorage.getItem("paint")
    localStorage.setItem("cartype", "Black Widow")
    localStorage.setItem("paint_save", paint_save)
    localStorage.setItem("interior_save", "black")
    location.href = "../pf.html";
}