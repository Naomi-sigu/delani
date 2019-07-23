$(document).ready(function(){
    $("#hide-1").hide();
    $(".toggle1, #hide-1").click(function(){
       $(".toggle1").hide(1000);
        $("#hide-1").show(1000);
});

$("#hide-1").click(function(){
    $(".toggle1").slideDown();
    $("#hide-1").hide(1000);
})
});
$(document).ready(function(){
    $("#hide-2").hide();
    $(".toggle2").click(function(){
       $(".toggle2").hide(1000);
        $("#hide-2").show(1000);
});
$("#hide-2").click(function(){
    $(".toggle2").slideDown();
    $("#hide-2").hide(1000);
})
});
$(document).ready(function(){
    $("#hide-3").hide();
    $(".toggle3").click(function(){
       $(".toggle3").hide(1000);
        $("#hide-3").show(1000);
});
$("#hide-3").click(function(){
    $(".toggle3").slideDown();
    $("#hide-3").hide(1000);
})
});
$(document).ready(function() {
    $('#work1').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work2').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work3').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work4').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work5').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work6').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work7').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
$(document).ready(function() {
    $('#work8').hover(function(){
		$('.image-cap',this).slideToggle('slow');
	}, function(){
		$('.image-cap',this).slideToggle('slow');
    });
});
//Form Validation
var name = $("input#MERGE1").val();
var email = $("input#MERGE0").val();
var message = $("textarea#message").val();
    $("form#form").on('submit',function(event){
        // event.preventDefault();
        let name = $("input#MERGE1").val();
        let email = $("input#MERGE0").val();
        let message = $("textarea#message").val();

        if ($("input#MERGE1").val() && $("input#MERGE0").val()){
            alert ("Hi " + name+ ", Thank you for reaching to us, we will get back to you shortly.");
        }
        else {
            alert("Please enter your name and email!");
        }

    });
