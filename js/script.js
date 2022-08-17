const item = document.querySelectorAll(".item");
const zoom = document.querySelector(".zoom-popup");
const zoomback = document.querySelector(".zoom-back")

// console.log(item);
item.forEach(function(item) {
    item.onclick=function(){
        let imgUrl = this.querySelector('img').src;
        // alert(imgUrl);
        zoom.style.display = "block";
        zoomback.style.display = "block";
        zoom.querySelector('img').src = imgUrl;
    }
});

zoomback.onclick = function(){
    zoom.style.display = "none";
    zoomback.style.display = "none";
}