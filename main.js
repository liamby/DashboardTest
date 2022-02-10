/*
MAIN.JS

This file contains the code for passing data between the google astion
(the conversation) and the front end. When the data object changes then 
the onupdate function "clicks" the appropriate icon to change the pages 
on display.
*/

interactiveCanvas.ready({
    onUpdate(data) {
        
        //Display the correct page
        if(typeof data[0].scene != 'undefined'){
            app.changeScene(data[0].scene);
        }
        //Display the mood
        if(typeof data[0].mood != 'undefined'){
            app.mood = data[0].mood;
        }
        
    }
});