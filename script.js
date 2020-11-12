const t = moment();

var now = moment().hours();
console.log(now);

var time = t.hours();

console.log(time);
console.log(t.format("MMMM, Do YYYY"));
console.log(t.format("hA"));

console.log($("textarea").get(0).id);



console.log(workHours);
////////////////
//testing above
var workHours = $("textarea").get();
console.log(workHours.length);




// updates the color of the textarea element depending on the time
function colorUpdate() {
    var currentHour = t.hours();
    for(i=0; i< workHours.length; i++) {
       var hour = $("textarea").get(i).id;
        if(currentHour > hour) {
           $("#"+hour).addClass("past");
        }
        else if (currentHour === hour) {
            $("#"+hour).addClass("present");
         }
        else {
            $("#"+hour).addClass("future");
        }
    } 
}

// adds current date at the top of the page in currentDay element
$("#currentDay").text(t.format("dddd, MMMM Do"));

colorUpdate();
