
let counter=0;
let restartButton;


//button to increase number
let counterButton = document.getElementById('counterButton');
counterButton.addEventListener('click', function(){
counter = counter+1;
document.getElementById('counter').innerHTML = counter;
})


//button to decrease number
let counterButton2 = document.getElementById('counterButton2');
counterButton2.addEventListener('click',function(){
console.log('button2 works!');
counter = counter-1;
document.getElementById('counter').innerHTML = counter;
})


//button to set to 0 again
restartButton = document.getElementById('button-restart');
restartButton.addEventListener('click',function(){
    document.getElementById('counter').innerHTML= 0;
})

//check for scrolling on the window
window.addEventListener('scroll', function(){
    console.log(window.screenY);
    document.body.style.background = "hsl("+this.window.scrollY%360+",50%,50%)";

})
    

