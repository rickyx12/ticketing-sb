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