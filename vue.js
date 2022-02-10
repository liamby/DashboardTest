/*
VUE.JS

This file contains the code for retrieving data from the backend 
and the dynamically changing the HTML in index.html file.
*/

var app = new Vue({
    el: '#app',

    data: {
        // Display Settings
        scene: "moodJournal",
        activeIcon: 'moodJournal',
        calendarView: 'jsGridView',
        viewMode: 'light',

        // User Settings
        userFirstName: "",
        userImgURL: "",
        
        // Mood Data
        mood: undefined,
        journalEntry: undefined,
        tags: undefined,
        day: undefined,
        month: undefined,
        date: undefined,
        year: undefined,
        calendarData: undefined
    },
    mount(){
        this.changeScene(sceneParam);
    },
    methods: {
        // 
        getCalendarData() {

        },
        //
        getDayData() {

        },
        //
        changeScene(sceneParam) {
            this.scene = sceneParam;
            this.activeIcon = sceneParam;
            console.log(sceneParam);
        },
        //
        changeMode(){
            document.documentElement.classList.toggle('dark');
            document.querySelector('.mode-switch').classList.toggle('active');
        },
        //
        changeCalendarView(calendarView){
            this.calendarView = calendarView;
        }
    }
});