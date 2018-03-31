function getTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		var deleteModal = '';
		var editModal = '';

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 // tableData += '<td>'+field.id+'</td>';
				 tableData += '<td>'+field.subject+'</td>';
				 tableData += '<td>'+field.code+'</td>';
				 tableData += '<td>'+field.activity+'</td>';
				 tableData += '<td>'+field.start+'</td>';
				 tableData += '<td>'+field.end+'</td>';
				 tableData += '<td>'+field.remarks+'</td>';
				 tableData += '<td><button class="btn btn-default" data-toggle="modal" data-target="#edit-ticket-modal'+field.id+'"><i class="fa fa-pencil"></i> Edit</button> <button class="btn btn-danger" data-toggle="modal" data-target="#delete-ticket-modal'+field.id+'"><i class="fa fa-trash"></i> Delete</button><input type="checkbox" class="publish" value="'+field.id+'" checked></td>'
				 tableData += '</tr>';


				 deleteModal += "<div id='delete-ticket-modal"+field.id+"' class='modal fade' role='dialog'>";
					 deleteModal += "<div class='modal-dialog'>";
					 	deleteModal += "<div class='modal-content'>";
					 		deleteModal += "<div class='modal-header'>";
					 			deleteModal += "<h5 class='modal-title'>"+field.subject+"</h5>";
					 		deleteModal += "</div>";
					 		deleteModal += "<div class='modal-body'>";
					 			deleteModal += "<div class='col-md-12 text-center'>";
					 				deleteModal += "<h5>Delete <span style='color:red;'>"+field.code+"</span></h5>";
					 				deleteModal += "<br>";
					 				deleteModal += "<div class='col-md-12 text-right'>";
					 					deleteModal += "<button class='btn btn-default' data-dismiss='modal'>Cancel</button>";
					 					deleteModal += " <button class='btn btn-danger' data-dismiss='modal' id='delete-ticket-btn"+field.id+"'>Delete</button>";
					 				deleteModal += "</div>";
					 			deleteModal += "</div>";
					 		deleteModal += "</div>";
					 	deleteModal += "</div>";
					 deleteModal += "</div>";
				 deleteModal += "</div>";

				 editModal += "<div id='edit-ticket-modal"+field.id+"' class='modal fade' role='dialog'>";
				 	editModal += "<div class='modal-dialog'>";
				 		editModal += "<div class='modal-content'>";
				 			editModal += "<div class='modal-header'>";
				 				editModal += "<h5 class='modal-title'>"+field.subject+"</h5>";
				 			editModal += "</div>";
				 			editModal += "<div class='modal-body'>";
				 				editModal += "<div class='col-md-12'>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>Subject</label>";
				 						editModal += "<input type='text' id='edit-subject"+field.id+"' class='form-control' autocomplete='off' value='"+field.subject+"'>";
				 					editModal += "</div>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>Code/Title</label>";
				 						editModal += "<input type='text' id='edit-title"+field.id+"' class='form-control' autocomplete='off' value='"+field.code+"'>";
				 					editModal += "</div>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>Activity</label>";
				 						editModal += "<textarea class='form-control' id='edit-activity"+field.id+"' rows='5' cols='2' style='overflow-x:hidden'>"+field.activity+"</textarea>";
				 					editModal += "</div>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>Start time</label>";
				 						editModal += "<input type='text' id='edit-start"+field.id+"' class='form-control time-picker' autocomplete='off' value='"+field.start+"'>";
				 					editModal += "</div>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>End time</label>";
				 						editModal += "<input type='text' id='edit-end"+field.id+"' class='form-control time-picker' autocomplete='off' value='"+field.end+"'>";
				 					editModal += "</div>";
				 					editModal += "<div class='form-group'>";
				 						editModal += "<label>Remarks</label>";
				 						editModal += "<input type='text' id='edit-remarks"+field.id+"' class='form-control' autocomplete='off' value='"+field.remarks+"' >";
				 					editModal += "</div>";
				 					editModal += "<br>";
				 					editModal += "<div class='col-md-12 text-right'>";
				 						editModal += "<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
				 						editModal += " <button type='button' class='btn btn-success' id='edit-ticket-btn"+field.id+"' data-dismiss='modal'>Update</button>";
				 					editModal += "</div>";
				 				editModal += "</div>";
				 			editModal += "</div>";
				 		editModal += "</div>";
				 	editModal += "</div>";
				 editModal += "</div>";
			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#ticket-table').html(tableData);
		 $('#edit-modal-handler').html(editModal);
		 $('#delete-modal-handler').html(deleteModal);
	});
}
