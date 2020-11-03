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


            timeSlotColor(i);
            divRow.clone(true).addClass('copy').appendTo(calCont);




        };



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

    };
});