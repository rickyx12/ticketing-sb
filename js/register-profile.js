$(function(){


	$('#alphanumeric-checker').hide();

	$('#register-profile-btn').click(function(){
		
		var userId = $('#employee-userId').val();
		var employeeFirstName = $('#employee-first-name').val();
		var employeeLastName = $('#employee-last-name').val();
		var employeeMiddleName = $('#employee-middle-name').val();
		var employeePassword = $('#employee-password').val();
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
			employeePassword:employeePassword,
			employeeDivision:employeeDivision,
			employeeDepartment:employeeDepartment,
			employeeSection:employeeSection,
			employeeBranch:employeeBranch,
			employmentStatus:employmentStatus,
			employeePosition:employeePosition
		};

		$.ajax({
			url:'./backend/register-account.php',
			type:'POST',
			data:data
		});		

	});




});