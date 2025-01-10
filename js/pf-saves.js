paint_save = localStorage.getItem("paint_save")
interior_save = localStorage.getItem("interior_save")
cartype = localStorage.getItem("cartype")

paint = localStorage.getItem("paint")

console.log(paint_save, interior_save, cartype)


if(paint_save == null){
    document.getElementById("car-name").innerText = ""
    document.getElementById("exterior-paint").innerText = "No saved configs"
    document.getElementById("interior-paint").innerText = "" 
}
else{
 

    document.getElementById("car-name").innerText = cartype

    document.getElementById("exterior-paint").style.color=paint;

    document.getElementById("exterior-paint").innerText = "Exterior Paint: " + paint_save

    document.getElementById("interior-paint").style.color=interior_save;

    document.getElementById("interior-paint").innerText = "Interior Paint: " + interior_save
}