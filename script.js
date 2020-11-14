// construtor so moment can be called more easily
const t = moment();
// array used to get the number of textareas 
var workHours = $("textarea").get();

// updates the color of the textarea element depending on the time
function colorUpdate() {
    var currentHour = t.hours();
    for (i = 0; i < workHours.length; i++) {
        var hour = $("textarea").get(i).id;
        if (currentHour > hour) {
            $("#" + hour).addClass("past");
        }
        else if (currentHour == hour) {
            $("#" + hour).addClass("present");
        }
        else {
            $("#" + hour).addClass("future");
        }
    }
}

// gets text saved in textareas if available in local storage
function pullActivities() {
    for (i = 9; i < workHours.length + 9; i++) {
        var text = localStorage.getItem(i);
        $("#" + i).val("");
        $("#" + i).val(text);
    }
}

// save button listener, will save text in textarea if button clicked
$(".saveBtn").click(function () {
    var activity = $(this).siblings("textarea").val();
    var hour = $(this).siblings("textarea").get(0).id;
    localStorage.setItem(hour, activity);
    colorUpdate();
    pullActivities();
})

// adds current date at the top of the page in currentDay element
$("#currentDay").text(t.format("dddd, MMMM Do"));

// calls methods to run when page loads
colorUpdate();
pullActivities();
