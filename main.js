/*
MAIN.JS

This file contains the code for passing data between the google astion
(the conversation) and the front end. When the data object changes then 
the onupdate function "clicks" the appropriate icon to change the pages 
on display.
*/
const vm = app.mount("#app");

interactiveCanvas.ready({
    onUpdate(data) {
        
        //Display the correct page
        vm.changeScene(data[0].scene);
    }
});