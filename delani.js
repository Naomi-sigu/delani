$('#textarea').attr('rows', 20);

$(document).ready(function(){
  $("#imagetoggle1").click(function(){
  $(".pp2, #imagetoggle1").toggle();

});

$("#development img,#development p").click(function(){
$("#development img,#development img").toggle();

});

$("#product").click(function(){
$("#product p").toggle();
$("#product img").toggle();
});



});
$("#form").submit(function (e) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        if (name == "" || email == "") {
            alert("Cannot submit without name and email");
        } else {
            alert("Thank you " + name + " \n Message submitted successfully");
        }
    });
