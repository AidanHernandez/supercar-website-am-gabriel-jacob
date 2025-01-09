var next = document.getElementById("next")

var page

next.addEventListener("click", change)

function change(){
    page = page + 1
    if(page == 2){
        document.querySelector('#myImage').src = 'newImagePath.jpg';

    }
}