window.onkeydown = function(e){
    var key = e.keyCode ? e.keyCode : e.which; //Not sure what exactly this does, but it checks the key code
    var pressed = false;
    
    if (key == 67) { //If the 'c' button is pressed
        pressed = true; //To change the text color
        
        var red = getRandomInclusive(0,255);
        var green = getRandomInclusive(0,255);
        var blue = getRandomInclusive(0,255);

        var color = ntc.name(red.toString(16) + green.toString(16) + blue.toString(16)) //Generates a new ntc object with these values in hexadecimal
        
        if(pressed){
            document.getElementById("title").style.color = "white"; //Looks nicer when it's white but it doesn't work on the default page
            document.getElementById("color-name").style.color = "white";
        }


        document.body.style.background = color[0]; //Updates the background color
        document.getElementById("color-name").textContent = color[1]; //List of map for color-hex and color-name is in the ntc file
        console.log(color[1] + " " + color[0]); //Debugging
//       console.log(color[0] === "#000000"); //Debugging
   }
}

//For generating a number between two values inclusively
//TODO: black is super fucking common for some reason. Not sure if it's due to the ntc algorithm but there's something wrong
function getRandomInclusive(min, max) { 
    max = Math.floor(max);
    min = Math.ceil(min);
    return Math.floor(Math.random() * (max - min + 1) + min)
}