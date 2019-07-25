$('#textarea').attr('rows', 20);

$(document).ready(function(){
  $("#design").click(function(){
  $("#design p").toggle();
  $("#design img").toggle();
});

$("#development").click(function(){
$("#development p").toggle();
$("#development img").toggle();
});

$("#product").click(function(){
$("#product p").toggle();
$("#product img").toggle();
});



});
$("#contactus").submit(function (e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("Thank you " + name + " \n Message submitted successfully");
        }
    });
