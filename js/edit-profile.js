$(function(){

	$('#upload-photo').hide();
	$('#current-password-text').hide();
	$('#hide-password-btn').hide();
	$('#alphanumeric-checker').hide();

	$('#update-profile-btn').click(function(){
		
		var userId = $('#userId').val();
		var employeeFirstName = $('#employee-first-name').val();
		var employeeLastName = $('#employee-last-name').val();
		var employeeMiddleName = $('#employee-middle-name').val();
		var currentPassword = $('#current-password').val();
		var newPassword = $('#new-password').val();
		var employeeDivision = $('#employee-division').val();
		var employeeDepartment = $('#employee-department').val();
		var employeeSection = $('#employee-section').val();
		var employeeBranch = $('#employee-branch').val();
		var employmentStatus = $('#employment-status').val();
		var employeePosition = $('#employee-position').val();


		var data = {
			userId:userId,
			employeeFirstName:employeeFirstName,
			employeeLastName:employeeLastName,
			employeeMiddleName:employeeMiddleName,
			currentPassword:currentPassword,
			newPassword:newPassword,
			employeeDivision:employeeDivision,
			employeeDepartment:employeeDepartment,
			employeeSection:employeeSection,
			employeeBranch:employeeBranch,
			employmentStatus:employmentStatus,
			employeePosition:employeePosition
		};

		$.ajax({
			url:'./backend/edit-profile.php',
			type:'POST',
			data:data,
			success:function(){
				$("#message-response").load(location.href + " #message-response");
			}
		});		

	});


	$('#show-password-btn').click(function(){
		$('#current-password-password').hide();
		$('#current-password-text').show();
		$('#show-password-btn').hide();
		$('#hide-password-btn').show();
	});

	$('#hide-password-btn').click(function(){
		$('#current-password-password').show();
		$('#current-password-text').hide();
		$('#show-password-btn').show();
		$('#hide-password-btn').hide();
	});

	$('#new-password').keyup(updateCount);
	$('#new-password').keydown(updateCount);


	function updateCount() {
	    var cs = $(this).val().length;
	    if(cs >= 6) {
			var alNumRegex = /^([a-zA-Z0-9]+)$/; //only letters and numbers
			if(alNumRegex.test($('#new-password').val())) {
			   $('#new-password-limiter').hide();
			   $('#alphanumeric-checker').hide();
			}else {
			   $('#alphanumeric-checker').show();
			}	    	
	    }else {
	    	$('#new-password-limiter').show();
	    	$('#alphanumeric-checker').hide();
	    }
	}

	// $('#new-password').keydown(function(){
	// 		//var reg_password1 = 'test123#';
	// 		var reg_password1 = $('#new-password').val();
	// 		var letters = /^[a-zA-Z0-9]+$/;
	// 		var result = letters.test(reg_password1);
	// 		console.log(result);	
	// });

	// $('#new-password').keydown(function(){
	// 	var letters = /^[a-zA-Z0-9]+$/;
	// 	var result = letters.test($('#new-password').val());
	// 	console.log(result);	
	// });

	// $('#upload-photo').click(function(){
	// 	$.ajax({
	// 		url:'./backend/upload-photo.php',
	// 		type:'POST',
	// 		data:{fileToUpload:},
	// 		success:function(){
	// 			getTicket('./backend/ticket-json-encoder.php');
	// 			ticketBtn();
	// 		}
	// 	});
	// });

});