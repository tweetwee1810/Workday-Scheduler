setInterval(function() {
    $("#currentDay").text(dayjs().format("dddd MMMM DD, YYYY [at] h:mm:ss a"));
  }, 1000)