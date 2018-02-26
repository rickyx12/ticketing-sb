$(function(){

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

});