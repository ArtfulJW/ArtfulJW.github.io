
document.getElementById("container").addEventListener("scroll",function(e){
    e.preventDefault();

    console.log("SCROLLING");

});

document.getElementById("Video").addEventListener('ended', function(){
    this.currentTime = 5;
    this.play();
}, false);