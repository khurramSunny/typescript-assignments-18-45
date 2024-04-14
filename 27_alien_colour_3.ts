
// Alien colours # 3.

// Turn your if-else chain from exercise 5-4 into an if-else chain.
let alienColours: string = "Green";

// If the alien is Green, print a message that the player earned 5 points.
// Version 1 of the program.

if(alienColours === "Green")
    {   console.log("Version 1 : Green Player earned 5 points.");      }

// If the alien is Yellow, print the message that the player earned 10 points.
else if(alienColours === "Yellow")
    {   console.log("Player earned 10 points.");     }

// If the alien is Red, print the message that the player earned 15 points. 
else if(alienColours === "Red")
    {   console.log("Player earned 15 points.");     }

else
    {   console.log("Please select right colour");   }

// Write three versions of this program, making sure each message is printed for the appropriate colouralien.

// Version 2 of the program.
alienColours = "Yellow";

if(alienColours === "Green")
    {   console.log("Player earned 5 points.");      }

// If the alien is Yellow, print the message that the player earned 10 points.
else if(alienColours === "Yellow")
    {   console.log("Version 2 : Yellow Player earned 10 points.");     }

// If the alien is Red, print the message that the player earned 15 points. 
else if(alienColours === "Red")
    {   console.log("Player earned 15 points.");     }

else
    {   console.log("Please select right colour");   }

// Version 3 of the program.
alienColours = "Red";

if(alienColours === "Green")
    {   console.log("Player earned 5 points.");      }

// If the alien is Yellow, print the message that the player earned 10 points.
else if(alienColours === "Yellow")
    {   console.log("Player earned 10 points.");     }

// If the alien is Red, print the message that the player earned 15 points. 
else if(alienColours === "Red")
    {   console.log("Version 3 : Red Player earned 15 points.");     }

else
    {   console.log("Please select right colour");   }
