//set up time using setInterval for every second running on the App
setInterval(function() {
    $("#currentDay").text(dayjs().format("dddd MMMM DD, YYYY [at] h:mm:ss a"));
  }, 1000)

  //create array for time-block from 9am-6pm that includes the value of 24 hours style
  var dailySchedule = JSON.parse(localStorage.getItem("dailySchedule")) || [
    {
        text: "9AM",
        val: 9,
        event:"",
    },
    {
        text: "10AM",
        val: 10,
        event:"",
    }, 
    {
        text: "11AM",
        val: 11,
        event: "",
    },
    {
        text: "12PM",
        val: 12,
        event: "",
      },
      {
        text: "1PM",
        val: 13,
        event: "",
      },
      {
        text: "2PM",
        val: 14,
        event: "",
      },
      {
        text: "3PM",
        val: 15,
        event: "",
      },
      {
        text: "4PM",
        val: 16,
        event: "",
      },
      {
        text: "5PM",
        val: 17,
        event: "",
      },
      {
        text: "6PM",
        val: 18,
        event: "",
      }
  ];
//create a render function for the columns and values and hours
  function renderSchedule() {
    for (let i = 0; i < dailySchedule.length; i++) {
        //create a row variable for the time-block (row)
      var row = $("<div>");
      row.addClass("row time-block");
     //create a var for all divs to label the time 
      var label = $("<div>");
      label.addClass("col-2 col-md-1 hour text-center py-3");
      label.text(dailySchedule[i].text);
        //variable for the textarea and create new class for textarea with the time and value
      var eventText = $("<textarea>");
      eventText.addClass("col-8 col-md-10 description");
      eventText.attr("rows", "3");
      eventText.val(dailySchedule[i].event);
      eventText.attr("data-hour", dailySchedule[i].val);
    //create a save button on the right side
      var saveBtn = $("<button>");
      saveBtn.addClass("btn saveBtn col-2 col-md-1");
      saveBtn.attr("aria-label", "save");
      saveBtn.attr("data-hour", dailySchedule[i].val);
      // attach a click event listener to the save button
      saveBtn.click(saveEvent);
    }}
