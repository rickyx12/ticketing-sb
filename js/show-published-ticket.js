function getPublishedTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.ticketNo+'</td>';
				 tableData += '<td>'+field.date+'</td>';
				 tableData += '<td><a href="./ticket-form.php?ticketNo='+field.ticketNo+'" target="_blank"><button type="button" id="published-view-btn'+field.ticketNo+'" class="btn btn-default">View</button></a> <button id="history-download-btn'+field.ticketNo+'" class="btn btn-default">Download</button> <button class="btn btn-default">Print</button></td>'
				 tableData += '</tr>';

				 $(document).on('click','#history-download-btn'+field.ticketNo,function(){
					var columns = ["No", "Subject", "Code/Title","Activity","Start Time","End Time","Remarks"];
					var rows = [];
					var title = field.ticketNo;
					$.getJSON("./backend/by-ticketNo-json-encoder.php?ticketNo="+field.ticketNo,'',function(result) {
						
						$.each(result,function(i,field){
							rows.push([field.id,field.subject,field.code,field.activity,field.start,field.end,field.remarks]);
						});				
						var doc = new jsPDF('p', 'pt');
						doc.autoTable(columns, rows);
						doc.save('ticket#'+title+'.pdf');					
					});
				 });
			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#published-ticket-table').html(tableData);
	});
}