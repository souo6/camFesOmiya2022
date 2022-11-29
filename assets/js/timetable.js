window.onload = function() {
      setInterval(function() {
      const nowtime = new Date();
      document.getElementById("Current_time").innerHTML = nowtime.toLocaleString();
    }, 1000);
}
