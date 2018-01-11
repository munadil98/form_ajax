
$(document).ready(function(){

	$( function() {
    	$( document ).tooltip();
  	} );

	$(".form").sortable();
	// $("#at").text("Email can't be blank");
	$("#email").keyup(function(){

		//Email Validity
		var emailData = $("#email").val();
		// console.log(noData);
		var at=$("#email").val().indexOf("@");
		var com=$("#email").val().indexOf(".com");
		
		if (emailData=="") {
			$("#at").text("Email can't be blank");
		}
		else if(emailData!=""&&(at<=-1||com<=-1)){
			$("#at").text("Not a valid Email");
		}
		else{
			$("#at").text("Email address is valid, thank you!");	
		}

	});

	
	// Full Name from first and last name

	$("#lastName").keyup(function(){

		firstName=$("#firstName").val();
		lastName=$("#lastName").val();
		var fullName=firstName.concat(" ").concat(lastName);
		$("#fullName").val(fullName);

	});

	$("#firstName").keyup(function(){
		firstName=$("#firstName").val();
		// lastName=$("#lastName").val();
		
		if (/\w/.test(firstName)) {
    		$("#firstNameMessage").text("");
		}
		if (/\W/.test(firstName)) {
	    	if (/\S/.test(firstName)) {
	    		$("#firstNameMessage").text("This is not an alphabet");
	    	}
		}

		if (/\d/.test(firstName)) {
	    	$("#firstNameMessage").text("Number is not allowed");
		}
	})

	$("#lastName").keyup(function(){
		lastName=$("#lastName").val();
		// lastName=$("#lastName").val();
		
		if (/\w/.test(lastName)) {
    		$("#lastNameMessage").text("");
		}
		if (/\W/.test(lastName)) {
	    	if (/\S/.test(lastName)) {
	    		$("#lastNameMessage").text("This is not an alphabet");
	    	}
		}

		if (/\d/.test(lastName)) {
	    	$("#lastNameMessage").text("Number is not allowed");
		}
	})


$("#submit").click(function(){
	firstName=$("#firstName").val();
	lastName=$("#lastName").val();
	email=$("#email").val();

	jQuery.ajax({
		url: "form_data.php",
		type: "POST",
		data: {
			firstName:firstName,
			lastName:lastName,
			email:email

		}, 
		success: function(result){
			console.log("firstName: "+firstName);
        $("#success").text("Form successfully submitted");
    	},
    	error: function(result){
    		console.log("error");
    	}
    });

})
	

});