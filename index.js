let clickMeBtn=document.getElementById("btn")

let index=0
clickMeBtn.addEventListener("click", function(){
    let colors=["red","yellow", "green"]
    document.getElementsByTagName("body")[0].style.background=colors[index++]
    if (index>colors.length-1){
        index=0
    }

})

