$(document).ready(function() {
    $('button').click(function(event) {
        $.get("https://api.github.com/users/doriangibs", displayName)
        function displayName(data) {
            console.log(data);
        }   
    });
  });