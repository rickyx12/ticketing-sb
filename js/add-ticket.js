$(function(){

	$('#not-allow').hide();
	$('#download-ticket-form-table').hide();
	$('#download-print-btn').hide();
	$('#print-ticket-form-table').hide();
	$('.print-btn').hide();
	$('#print-view-form-table').hide();

	getTicket('./backend/ticket-json-encoder.php');
	getPublishedTicket('./backend/published-ticket-json-encoder.php');
	
	$('#add-ticket-btn').click(function(){

		var subject = $('#subject').val();
		var code = $('#code').val();
		var activity = $('#activity').val();
		var startTime = $('#start-time').val();
		var endTime = $('#end-time').val();
		var remarks = $('#remarks').val();

		var data = {
			subject:subject,
			code:code,
			start:startTime,
			end:endTime,
			activity:activity,
			remarks:remarks
		};

		$.ajax({
			url:'./backend/add-ticket.php',
			type:'POST',
			data:data,
			success:function(){
				getTicket('./backend/ticket-json-encoder.php');
				$('#subject').val('');
				$('#code').val('');
				$('#start-time').val('');
				$('#end-time').val('');
				$('#activity').val('');
				$('#remarks').val('');
			}
		});

	});

	$('#publish-ticket-btn').click(function(){

		var chkArray = [];
		
		$(".publish:checked").each(function() {
			chkArray.push($(this).val());
		});
		
		console.log(chkArray);
		
		var selected;
		selected = chkArray.join(',') ;
		$.ajax({
			url:'./backend/publish.php',
			type:'POST',
			data:{ids:selected},
			success:function(){
				$('#allow').hide();
				$('#not-allow').show();
				getPublishedTicket('./backend/published-ticket-json-encoder.php');
			}
		});

	});



	$.getJSON('./backend/ticket-json-encoder.php','',function(result) {	
			$.each(result,function(i,field) {	
				 $('#delete-ticket-btn'+field.id).click(function(){
					$.ajax({
						url:'./backend/delete-ticket.php',
						type:'POST',
						data:{id:field.id},
						success:function(){
							getTicket('./backend/ticket-json-encoder.php');
						}
					});
				 });

				$('#edit-ticket-btn'+field.id).click(function(){
					var editSubject = $('#edit-subject').val();
					var editTitle = $('#edit-title').val();
					var editActivity = $('#edit-activity').val();
					var editStart = $('#edit-start').val();
					var editEnd = $('#edit-end').val();
					var editRemarks = $('#edit-remarks').val();

					var data = {
						id:field.id,
						subject:editSubject,
						title:editTitle,
						activity:editActivity,
						start:editStart,
						end:editEnd,
						remarks:editRemarks
					};
					
					$.ajax({
						url:'./backend/edit-ticket.php',
						type:'POST',
						data:data,
						success:function(){
							getTicket('./backend/ticket-json-encoder.php');
						}
					});

				});

			});
	});


	$('#download-date').datepicker({
		"dateFormat":"yy-mm-dd",
	    onSelect: function(dateText, inst) {

	    	var selectedDate = $('#download-date').val();

	    	$('#download-ticket-form-table').show();
	    	$('#download-print-btn').show();
			getTicketByDate('./backend/date-ticket-json-encoder.php?date='+selectedDate,'#download-ticket-form-body-table');
	    }		
	});

	$('#print-date').datepicker({
		"dateFormat":"yy-mm-dd",
		onSelect: function(dateText, inst) {

			var selectedDate = $('#print-date').val();

			$('#print-ticket-form-table').show();
			$('.print-btn').show();
			getTicketByDate('./backend/date-ticket-json-encoder.php?date='+selectedDate,'#print-ticket-form-body-table');

			$('#view-print-btn').click(function(){
				$('#print-ticket-form-table').hide();
				$('#print-view-form-table').show();
				$('#view-print-btn').hide();
				getTaskByDate('./backend/task-by-ticket-json-encoder.php?date='+selectedDate,'#print-view-form-body-table');
			});
		}
	});



	$('#download-print-btn').click(function(){
		var columns = ["No", "Subject", "Code/Title","Activity","Start Time","End Time","Remarks"];
		var rows = [];
		var title;
		var selectedDate = $('#download-date').val();
		$.getJSON("./backend/task-by-ticket-json-encoder.php?date="+selectedDate,'',function(result) {
			
			$.each(result,function(i,field){
				rows.push([field.id,field.subject,field.code,field.activity,field.start,field.end,field.remarks]);
				title = field.ticketNo;
			});				
			var doc = new jsPDF('p', 'pt');
			doc.autoTable(columns, rows);
			doc.save('ticket#'+title+'.pdf');					
		});
	});

});