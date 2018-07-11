$(document).ready(function () {
  $("button").click(function(){
    $.get("https://api.github.com/users/mnw247", displayName)

    function displayName(data) {
      $('h3').html(data.login)
    }
  })
})