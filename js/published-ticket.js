$(function(){
	$('#print-print-btn').click(function(){
		var selectedDate = $('#print-date').val();
		$.getJSON('./backend/date-ticket-json-encoder.php?date='+selectedDate,'',function(result) {
			$.each(result,function(i,field){
				console.log(field.ticketId);
				  windowObjectReference = window.open(
				    "./backend/history-print-page.php?ticketNo="+field.ticketId,
				    "",
				    "resizable,scrollbars,status,width=1300,height=650"
				  );				
			})
		});		
	});
})