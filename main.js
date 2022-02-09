/*
MAIN.JS

This file contains the code for passing data between the google astion
(the conversation) and the front end. When the data object changes then 
the onupdate function "clicks" the appropriate icon to change the pages 
on display.
*/

interactiveCanvas.ready({
    onUpdate(data) {

        if (data[0].scene == 'TodaysMoodJournal') {
            document.querySelector('#TodaysMoodJournalIcon').click();

        } else if (data[0].scene == 'Stats') {
            document.querySelector('#StatsIcon').click();

        } else if (data[0].scene == 'Calendar') {
            document.querySelector('#CalendarIcon').click();

        } else if (data[0].scene == 'Settings') {
            document.querySelector('#SettingsIcon').click();
        }

    }
});