function savedTicketBtn() {
	$.getJSON('./backend/saved-ticket-json-encoder.php','',function(result) {	

			$.each(result,function(i,field) {


				$(document).on('click','#saved-publish-btn'+field.ticketNo,function(){

					var datePublished = $('#save-publish-date'+field.ticketNo).val();

					var data = {
						ticketNo: field.ticketNo,
						datePublished: datePublished
					};

					$.ajax({
						url:'./backend/publish-saved.php',
						type:'POST',
						data:data,
						success:function(){
							getSavedTicket('./backend/saved-ticket-json-encoder.php');
							savedTicketBtn();
						}
					});

					console.log(data);
				});


				$('#edit-start'+field.id).datetimepicker({
					format:'LT'
				});

				$('#edit-end'+field.id).datetimepicker({
					format:'LT'
				});

				viewSavedTicketBtn('./backend/by-ticketNo-json-encoder.php?ticketNo='+field.ticketNo+"&datePublished="+field.datePublished);
			});
	});
}


function viewSavedTicketBtn(json) {
	$.getJSON(json,'',function(result) {	

			$.each(result,function(i,field) {
				$(document).on('click','#saved-task-update-btn'+field.id,function(){
					
					var subject = $('#saved-task-subject'+field.id).val();
					var title = $('#saved-task-title'+field.id).val();
					var activity = $('#saved-task-activity'+field.id).val();
					var startTime = $('#saved-task-startTime'+field.id).val();
					var endTime = $('#saved-task-endTime'+field.id).val();
					var remarks = $('#saved-task-remarks'+field.id).val();

					var data = {
						id:field.id,
						subject:subject,
						title:title,
						activity:activity,
						startTime:startTime,
						endTime:endTime,
						remarks:remarks
					};

					$.ajax({
						url:'./backend/saved-task-update.php',
						type:'POST',
						data:data,
						success:function(){
							getSavedTicket('./backend/saved-ticket-json-encoder.php');
							savedTicketBtn();
						}
					});

				});
			});
	});
}


$(function(){
	getSavedTicket('./backend/saved-ticket-json-encoder.php');
	savedTicketBtn();
});