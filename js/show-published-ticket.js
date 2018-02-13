function getPublishedTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.ticketNo+'</td>';
				 tableData += '<td>'+field.date+'</td>';
				 tableData += '<td><a href="./ticket-form.php?ticketNo='+field.ticketNo+'" target="_blank"><button type="button" id="published-view-btn'+field.id+'" class="btn btn-default">View</button></a> <button class="btn btn-default">Download</button> <button class="btn btn-default">Print</button></td>'
				 tableData += '</tr>';

				 // $(document).on('click','#published-view-btn'+field.id,function(){
				 // 	$('#published-view-btn'+field.id).attr('target','_blank');
				 // });

			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#published-ticket-table').html(tableData);
	});
}