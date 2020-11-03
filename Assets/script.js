// Function Waits for Document to be Ready before running script
$(document).ready(function () {

    // DOM Selection
    var calCont = $(".container");
    var divRow = $('.time-block');
    var hour = $('.hour');
    var currentDay = $('#currentDay');
    var saveBtn = $('#saveBtn');
    var description = $('.description')
    var txt;
    var id;

    // Moment
    var m = moment().format("dddd MMMM Do")
    currentDay.text(m);

    //Save Button 
    // Matches Save Button Data Tag with Description ID
    // Saves to Local Storage key = hour and value = User Text
    saveBtn.on("click", function (event) {
        id = event.target.getAttribute("data-hour");
        txt = document.getElementById(id).value;
        localStorage.setItem(id, txt);
    });

    // Loop For time-block Append and Modify

    for (let i = 1; i < 25; i++) {

        // Changing Calendar Day Text
        if (i < 12) {
            hour.text(i + "am");
        }
        else if (i == 12) {
            hour.text(i + "pm");
        }
        else if (i > 12 && i < 24) {
            hour.text(i - 12 + "pm");
        }
        else {
            hour.text(i - 12 + "am");
        }

        // Save Button Set Attribute
        saveBtn.attr('data-hour', "hour" + i);
        description.each(function (index) {

            // Adds Saved Items from Local Storage to Time Blocks
            $(this).attr("id", "hour" + i);
            var stored = localStorage.getItem("hour" + i);
            if (stored !== null) {
                $(this).val(stored);
            }
            else {
                $(this).val(null);
            }
        });

        // Runs timeSlotColor function TimeSlot Colors Past/Present/Future
        timeSlotColor(i);
        // Clones (deep clone) Row block from Html and appends to Container
        divRow.clone(true).addClass('copy').appendTo(calCont);
    };

    // Function to set Time Block colors (past/present/future)
    function timeSlotColor(i) {

        m = moment().format("H")
        if (i == m) {
            hour.addClass('present');
        }
        else if (i < m) {
            hour.addClass('past');
        }
        else {
            hour.addClass('future');
        }
    };
});