$(function(){


	$('#alphanumeric-checker').hide();
	$('#required-userId').hide();
	$('#required-firstName').hide();
	$('#required-lastName').hide();
	$('#required-middleName').hide();
	$('#required-division').hide();
	$('#required-department').hide();
	$('#required-section').hide();
	$('#required-branch').hide();
	$('#required-position').hide();

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

		if(userId !== "" && employeeFirstName !== "" && employeeLastName !== "" && employeeMiddleName !== "" && employeePassword !== "" && employeeDivision !== "" && employeeDepartment !== "" && employeeSection !== "" && employeeBranch !== "" && employmentStatus !== "" && employeePosition !== "") {

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
				data:data,
				success:function(){
					window.location.replace("./login.php");
				}
			});		

		}else {

			if(userId == "") {
				$('#required-userId').show();
			}else {
				$('#required-userId').hide();
			}

			if(employeeFirstName == "") {
				$('#required-firstName').show();
			}else {
				$('#required-firstName').hide();
			}

			if(employeeLastName == "") {
				$('#required-lastName').show();
			}else {
				$('#required-lastName').hide();
			}

			if(employeeMiddleName == ""){ 
				$('#required-middleName').show();
			}else {
				$('#required-middleName').hide();
			}

			if(employeeDivision == "") {
				$('#required-division').show();
			}else {
				$('#required-division').hide();
			}

			if(employeeDepartment == "") {
				$('#required-department').show();
			}else {
				$('#required-department').hide();
			}

			if(employeeSection == "") {
				$('#required-section').show();
			}else {
				$('#required-section').hide();
			}

			if(employeeBranch == "") {
				$('#required-branch').show();
			}else {
				$('#required-branch').hide();
			}

			if(employeePosition == "") { 
				$('#required-position').show();
			}else {
				$('#required-position').hide();
			}

		}

	});




});