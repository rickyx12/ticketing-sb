$(function(){

	$('#upload-photo').hide();
	$('#current-password-text').hide();
	$('#hide-password-btn').hide();

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
	    console.log(cs);
	    if(cs >= 6) {
	    	$('#new-password-limiter').hide();
	    }else {
	    	$('#new-password-limiter').show();
	    }
	}

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