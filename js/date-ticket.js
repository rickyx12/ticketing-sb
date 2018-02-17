function getTicketByDate(json,id) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.ticketId+'</td>';
				 tableData += '<td>'+field.date+'</td>';
				 tableData += '</tr>';
			});
		}else {
			tableData += '<tr></tr>';
		}

		 $(id).html(tableData);
	});
}
