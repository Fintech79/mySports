// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#sign-up-button").on("click", function(event) {
    event.preventDefault();

    var fanName = $("#fan-name").val().trim();
    var fanEmail = $("#fan-email").val().trim();
    var fanCity = $("#fan-city").val().trim(); 
    var fanTeam = $("#fan-team").val().trim();
    var fanGoogleID = $("#googleID").data('googleid');

    console.log(fanGoogleID);

    var newFan = {
        name: fanName,
        email: fanEmail,
        city: fanCity,
        team: fanTeam,
        googleID: fanGoogleID
    }

     // Send the POST request.
    // $.ajax("/api/new", {
    //   type: "POST",
    //   data: newFan
    // }).then(function(data) {
    //     console.log("created new Fan");
    //     // After Creating the new User take them back to the login screen
    //     window.location.href = "/auth/login";
    // })

//       $.ajax({
//     url: "https://probasketballapi.com/teams&api_key=aUzFocEQCWLJBZ4N9RD5VqM31X8fbrlO&team_name=warriors",
//     method: "GET"
//   }).then(function(teams){
//     console.log(teams)
//   })

//   });
//   $.ajax({
//       url: "https://2/?t=romancing+the+stone&y=&plot=short&apikey=40e9cece",
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//     });
//     $.ajax({
//       url: "https://api.probasketballapi.com/warriors'/aUzFocEQCWLJBZ4N9RD5VqM31X8fbrlO",
//       method: "GET"
//     }).done(function(response) {
//       console.log(response);
//     });


 });
});
