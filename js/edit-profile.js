$(function(){

	$('#update-profile-btn').click(function(){
		
		var userId = $('#userId').val();
		var employeeName = $('#employee-name').val();
		var currentPassword = $('#current-password').val();
		var newPassword = $('#new-password').val();

		var data = {
			userId:userId,
			employeeName:employeeName,
			currentPassword:currentPassword,
			newPassword:newPassword
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