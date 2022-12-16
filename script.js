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

  function saveEvent(event) {
    // find the textbox with the same data-hour attribute as the event.target
    let hour = event.target.getAttribute("data-hour");
    let input = $(`textarea[data-hour="${hour}"]`);
    console.log(input.val());
  
    // check data-hour attribute on the event.target and use that to loop through the dailySchedule array and compare the dailySchedule[i].val to the data-hour property on the event to find the entry in the dailySchedule array

    for(let i = 0; i < dailySchedule.length; i++) {
      if(dailySchedule[i].val == hour) {
        dailySchedule[i].event = input.val();
      }
    }
  
    console.log(dailySchedule);
  //add dailySchedule to the local storage using JSON
    localStorage.setItem("dailySchedule", JSON.stringify(dailySchedule));
  
  }
  
    //create a render function for the columns and values and hours
  function renderSchedule() {
    for (let i = 0; i < dailySchedule.length; i++) {
        //create time-blocks rows
      var row = $("<div>");
      row.addClass("row time-block");
     //insert time-block columns
      var label = $("<div>");
      label.addClass("col-2 col-md-1 hour text-center py-3");
      label.text(dailySchedule[i].text);
    //add class for textarea with the time and value
      var eventText = $("<textarea>");
      eventText.addClass("col-8 col-md-10 description");
      eventText.attr("rows", "3");
      eventText.val(dailySchedule[i].event);
      eventText.attr("data-hour", dailySchedule[i].val);
    //create a save button on the 3rd right columns
      var saveBtn = $("<button>");
      saveBtn.addClass("btn saveBtn col-2 col-md-1");
      saveBtn.attr("aria-label", "save");
      saveBtn.attr("data-hour", dailySchedule[i].val);
      // attach a click event listener to the save button
      saveBtn.click(saveEvent);
    

    //create the save icon (add class and attr to the icon)
    var icon = $("<i>");
      icon.addClass("fas fa-save");
      icon.attr("aria-hidden", "true");
      icon.attr("data-hour", dailySchedule[i].val)

    //insert icon into save button
      saveBtn.append(icon);

    //insert label, eventText, savebtn to <div>
      row.append(label);
      row.append(eventText);
      row.append(saveBtn);

    //calling dayjs format, and create variable for 
      console.log(dayjs().hour());
      var currentHour = dayjs().hour();
    // var currentHour = 13; 
      console.log(dailySchedule[i].val);
    // write statement if current hour is greater than the time on the schedule -> will be past, 
    //less than the time on the schedule -> will be future, same -> current 
      if(currentHour > dailySchedule[i].val) {
        row.addClass("past");
      }else if (currentHour < dailySchedule[i].val) {
        row.addClass("future");
      }else {
        row.addClass("present");
      }
      //insert the div with id=schedule to row 
      $("#schedule").append(row);
    }
  }
  //call function
  renderSchedule();
  