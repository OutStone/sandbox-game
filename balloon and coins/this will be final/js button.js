/*You can solve this multiple ways like using html button
 suggested in the comments.

But if you do need to handle click events inside your canvas
 you can do something like this:

Add a click handler to the canvas and when the mouse pointer
 is inside your bounding rectangle you can fire your click function:
*/

//Function to get the mouse position
function getMousePos( event) {
    
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//The rectangle should have x,y,width,height properties
var rect = {
    x:250,
    y:350,
    width:200,
    height:100
};
//Binding the click event on the canvas
document.getElementById("canvas").addEventListener('click', function(evt) {
    var mousePos = getMousePos( evt);

    if (isInside(mousePos,rect)) {
        alert('clicked inside rect');
    }else{
        alert('clicked outside rect');
    }   
}, false);