var next = document.getElementById("next")
var back = document.getElementById("back")

var page = 0

next.addEventListener("click", change)
back.addEventListener("click", change_back)

function change(){
    
    if(page < 2)
    {
        page = page + 1
        console.log(page)
        if(page == 1){
            document.getElementById('img1').src = 'img/about-us-img/quinton.png'
            document.getElementById('text1').innerText = "Quinton Dodson\nVP of Special Vehicle Operations"
            back.style.fill = 'white'

            document.getElementById('img2').src = 'img/about-us-img/kai.png'
            document.getElementById('text2').innerText = "Kie Fair\nVP pf Sales/ Dealer Coordinator"

        }
        else if(page == 2){
            document.getElementById('img1').src = 'img/about-us-img/romero.png'
            document.getElementById('text1').innerText = "Romeo Miller\nChief Brand Ambassador"

            document.getElementById('img2').src = 'img/about-us-img/warren.png'
            document.getElementById('text2').innerText = "Warren Hollier\nDirector Of Special Programs"

            next.style.fill = '#6E6E6E'
            
        }
    }
}

function change_back(){
    if(page > 0)
        {
            page = page - 1
            console.log(page)
            if(page == 1){
                document.getElementById('img1').src = 'img/about-us-img/quinton.png'
                document.getElementById('text1').innerText = 'Quinton Dodson\nVP of Special Vehicle Operations'
                next.style.fill = 'white'
                
    
                
                document.getElementById('img2').src = 'img/about-us-img/kai.png'
                document.getElementById('text2').innerText = "Kie Fair\nVP pf Sales/ Dealer Coordinator"
    
            }
            else if(page == 0){
                
                document.getElementById('img1').src = 'img/about-us-img/brentjohnson.png'
                document.getElementById('text1').innerText = "Brent Johnson\nChief Operating Officer"
    
                document.getElementById('img2').src = 'img/about-us-img/nancypatterson.png'
                document.getElementById('text2').innerText = "Nancy Patterson\nChief Executive Assistant"
    
                back.style.fill = '#6E6E6E'
                
            }
        }
}