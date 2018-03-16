function savedTicketBtn() {
	$.getJSON('./backend/saved-ticket-json-encoder.php','',function(result) {	

			$.each(result,function(i,field) {

				//  $('#delete-saved-ticket-btn'+field.id).click(function(){
				// 	$.ajax({
				// 		url:'./backend/delete-ticket.php',
				// 		type:'POST',
				// 		data:{id:field.id},
				// 		success:function(){
				// 		    $('.modal-backdrop').remove();
				// 			getSavedTicket('./backend/saved-ticket-json-encoder.php');
				// 		}
				// 	});
				//  });

				// $('#edit-saved-ticket-btn'+field.id).click(function(){
				// 	var editSubject = $('#edit-subject'+field.id).val();
				// 	var editTitle = $('#edit-title'+field.id).val();
				// 	var editActivity = $('#edit-activity'+field.id).val();
				// 	var editStart = $('#edit-start'+field.id).val();
				// 	var editEnd = $('#edit-end'+field.id).val();
				// 	var editRemarks = $('#edit-remarks'+field.id).val();

				// 	var data = {
				// 		id:field.id,
				// 		subject:editSubject,
				// 		title:editTitle,
				// 		activity:editActivity,
				// 		start:editStart,
				// 		end:editEnd,
				// 		remarks:editRemarks
				// 	};
					
				// 	$.ajax({
				// 		url:'./backend/edit-ticket.php',
				// 		type:'POST',
				// 		data:data,
				// 		success:function(){
				// 			getSavedTicket('./backend/saved-ticket-json-encoder.php');
				// 			savedTicketBtn();
				// 		}
				// 	});

				// });

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

					console.log();
				});

				// $('#saved-publish-btn'+field.ticketNo).click(function(){

				// 	var datePublished = $('#save-publish-date'+field.ticketNo).val();

				// 	var data = {
				// 		ticketNo: field.ticketNo,
				// 		datePublished: datePublished
				// 	};

				// 	$.ajax({
				// 		url:'./backend/publish-saved.php',
				// 		type:'POST',
				// 		data:data,
				// 		success:function(){
				// 			getSavedTicket('./backend/saved-ticket-json-encoder.php');
				// 			savedTicketBtn();
				// 		}
				// 	});

				// 	console.log();
				// });

				$('#edit-start'+field.id).datetimepicker({
					format:'LT'
				});

				$('#edit-end'+field.id).datetimepicker({
					format:'LT'
				});

			});
	});
}


$(function(){
	getSavedTicket('./backend/saved-ticket-json-encoder.php');
	//viewSavedTicket('./backend/by-ticketNo-json-encoder.php?ticketNo=DTU-20180314-14');
	savedTicketBtn();
});