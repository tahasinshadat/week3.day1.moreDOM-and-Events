
let weaponArticle = document.getElementById("weapons")
let isMouseDown = false

let outfitArticle = document.getElementById("outfits")
let isMouseDown2 = false

let moneyArticle = document.getElementById("money")
let isMouseDown3 = false

weaponArticle.onmousedown = function() {
    isMouseDown = true;
}

weaponArticle.onmouseup = function() {
    isMouseDown = false;
}

outfitArticle.onmousedown = function() {
    isMouseDown2 = true;
}

outfitArticle.onmouseup = function() {
    isMouseDown2 = false;
}

moneyArticle.onmousedown = function() {
    isMouseDown3 = true;
}

moneyArticle.onmouseup = function() {
    isMouseDown3 = false;
}



document.onmousemove= function(event){
    if (isMouseDown) {
        weaponArticle.onmousemove = function() {
        weaponArticle.style.position = "absolute"
        weaponArticle.style.zIndex = 1000
        weaponArticle.style.left = (event.pageX-weaponArticle.offsetWidth/2) + "px"
        weaponArticle.style.top = (event.pageY-weaponArticle.offsetHeight/2) + "px"
        weaponArticle.style.width = "400px"
        }
    }

    if (isMouseDown2) {
        outfitArticle.onmousemove = function() {
        outfitArticle.style.position = "absolute"
        outfitArticle.style.zIndex = 1000
        outfitArticle.style.left = (event.pageX-outfitArticle.offsetWidth/2) + "px"
        outfitArticle.style.top = (event.pageY-outfitArticle.offsetHeight/2) + "px"
        outfitArticle.style.width = "400px"
        }
    }

    if (isMouseDown3) {
        moneyArticle.onmousemove = function() {
        moneyArticle.style.position = "absolute"
        moneyArticle.style.zIndex = 1000
        moneyArticle.style.left = (event.pageX-moneyArticle.offsetWidth/2) + "px"
        moneyArticle.style.top = (event.pageY-moneyArticle.offsetHeight/2) + "px"
        moneyArticle.style.width = "400px"
        }
    }
}
