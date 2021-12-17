// using eventListner to check for any keys pressed, and if right/left pressed function will be carried out
document.addEventListener("keydown", event => {
  if(event.key==="ArrowLeft"){moveLeft();}
  if(event.key==="ArrowRight"){moveRight();}
});
var character = document.getElementById("character");
//Creating a function for movement of shapes-where left arrow key moves shape left 100px 
function moveLeft(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left -= 100;//- sign makes shape go left
    if(left>=0){//if statement is for the shape to no leave the game div
        character.style.left = left + "px";
    }
}
//Creating a function for movement of shapes-where right arrow key moves shape right 100px
function moveRight(){
    let left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    left += 100; //+ sign makes it go to the right
    if(left<300){//if statement is for the shape to no leave the game div
        character.style.left = left + "px";
    }
}
//elemnent of randomisation
//a function for changing the left position of cirlce into middle or right position (0px,100px.200px)
var block = document.getElementById("block");
var counter = 0;
//this will allow the function to start everytime the animation loop starts
block.addEventListener('animationiteration', () => {
    var random = Math.floor(Math.random() * 3);
    left = random * 100;
    block.style.left = left + "px";
    counter++;
});
// this is a hit detection function to restart the game if both shapes hit eachother 
setInterval(function(){
    var characterLeft =
     parseInt(window.getComputedStyle(character).getPropertyValue("left"));//this is to check for postion of shape
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var blockTop = parseInt(window.getComputedStyle(block).getPropertyValue("top"));
   //if statment to check if the cirlce is on top of the triangle 
    if(characterLeft==blockLeft && blockTop<500 && blockTop>300){
        alert("Game over. Score: " + counter);//if they are a score will show up as a pop up alert
        block.style.animation = "none"; //removing animation to stop the circle from sliding down after the game is over
    }},1);
