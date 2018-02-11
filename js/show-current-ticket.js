function getTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.id+'</td>';
				 tableData += '<td>'+field.subject+'</td>';
				 tableData += '<td>'+field.code+'</td>';
				 tableData += '<td>'+field.activity+'</td>';
				 tableData += '<td>'+field.start+'</td>';
				 tableData += '<td>'+field.end+'</td>';
				 tableData += '<td>'+field.remarks+'</td>';
				 tableData += '<td><button class="btn btn-default" data-toggle="modal" data-target="#bs-modal"><i class="fa fa-pencil"></i></button> <button class="btn btn-danger" data-toggle="modal" data-target="#delete-ticket-modal'+field.id+'"><i class="fa fa-trash"></i></button><input type="checkbox" class="publish" value="'+field.id+'" checked></td>'
				 tableData += '</tr>';
			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#ticket-table').html(tableData);
	});
}
