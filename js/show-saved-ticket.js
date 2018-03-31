function getSavedTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		var deleteModal = '';
		var editModal = '';
		var viewModal = '';
		var publishModal = '';
		//console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.ticketNo+'</td>';
				 tableData += '<td>'+field.date+'</td>';
				 tableData += '<td><button class="btn btn-default" data-toggle="modal" data-target="#view-ticket-modal'+field.ticketNo+'">View</button> <button class="btn btn-default" data-toggle="modal" data-target="#publish-ticket-modal'+field.ticketNo+'">Publish</button></td>'
				 //tableData += '<td><button class="btn btn-default" data-toggle="modal" data-target="#edit-ticket-modal'+field.id+'"><i class="fa fa-pencil"></i> Edit</button> <button class="btn btn-danger" data-toggle="modal" data-target="#delete-ticket-modal'+field.id+'"><i class="fa fa-trash"></i> Delete</button><input type="checkbox" class="publish" value="'+field.id+'" checked></td>'
				 tableData += '</tr>';

				 viewModal += "<div id='view-ticket-modal"+field.ticketNo+"' class='modal fade' role='dialog'>";
				 	viewModal += "<div class='modal-dialog modal-xl'>";
				 		viewModal += "<div class='modal-content'>";
				 			viewModal += "<div class='modal-header'>";
				 				viewModal += "<h5 class='modal-title'>View Modal</h5>";
				 			viewModal += "</div>";
				 			viewModal += "<div class='modal-body'>";
				 				viewModal += "<div class='col-md-12 text-center'>";
				 					viewModal += "<table class='table table-hover'><thead><tr><th>Subject</th><th>Code/Title</th><th>Activity</th><th>Start Time</th><th>End Time</th><th>Remarks</th><th>Action</th></tr></thead><tbody id='saved-view-table"+field.ticketNo+"'></tbody></table>";
				 				viewModal += "</div>"
				 				viewModal += "<div class='col-md-12 text-right'>";
				 					viewModal += "<button data-dismiss='modal' class='btn btn-danger'>Close</button>";
				 				viewModal += "</div>";
				 			viewModal += "</div>";
				 		viewModal += "</div>";
				 	viewModal += "</div>";
				 viewModal += "</div>";

				 publishModal += "<div id='publish-ticket-modal"+field.ticketNo+"' class='modal fade' role='dialog'>";
				 	publishModal += "<div class='modal-dialog'>";
				 		publishModal += "<div class='modal-content'>";
				 			publishModal += "<div class='modal-header'>";
				 				publishModal += "<h5 class='modal-title'>Select Published Date</h5>";
				 			publishModal += "</div>"
				 			publishModal += "<div class='modal-body'>";
				 				publishModal += "<div class='col-md-12 text-center'>";
				 					publishModal += "<input type='text' id='save-publish-date"+field.ticketNo+"' class='form-control'>";
				 				publishModal += "</div>";
				 				publishModal += "<br>";
				 				publishModal += "<div class='col-md-12 text-right'>";
				 					publishModal += "<button data-dismiss='modal' class='btn btn-danger'>Close</button>";
				 					publishModal += "  <button id='saved-publish-btn"+field.ticketNo+"' data-dismiss='modal' class='btn btn-success'>Publish</button>";
				 				publishModal += "</div>";
				 			publishModal += "</div>";
				 		publishModal += "</div>"
				 	publishModal += "</div>"
				 publishModal += "</div>";

				 viewSavedTicket('./backend/by-ticketNo-json-encoder.php?ticketNo='+field.ticketNo);
			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#saved-ticket-table').html(tableData);
		 // $('#edit-modal-handler').html(editModal);
		 // $('#delete-modal-handler').html(deleteModal);
		 $('#view-modal-handler').html(viewModal);
		 $('#publish-modal-handler').html(publishModal);

		if(result != "null") {	
			$.each(result,function(i,field){
				$('#save-publish-date'+field.ticketNo).datepicker({dateFormat: 'yy-mm-dd'});
			});
		}else {

		}
	

	});
}



function viewSavedTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		var ticketNo = '';
		var taskModal = '';

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.subject+'</td>';
				 tableData += '<td>'+field.title+'</td>';
				 tableData += '<td>'+field.activity+'</td>';
				 tableData += '<td>'+field.start+'</td>';
				 tableData += '<td>'+field.end+'</td>';
				 tableData += '<td>'+field.remarks+'</td>';
				 tableData += '<td><button id="saved-task-btn'+field.id+'" data-toggle="modal" data-target="#task-information'+field.id+'" data-dismiss="modal" class="btn btn-default">Update</button></td>';
				 tableData += '</tr>';
				
				taskModal += "<div id='task-information"+field.id+"' class='modal fade' role='dialog' style='overflow-y:auto;'>";
					taskModal += "<div class='modal-dialog'>";
						taskModal += "<div class='modal-content'>"; 
							taskModal += "<div class='modal-body'>";
								taskModal += "<div class='col-md-12'>";
									taskModal += "<div class=form-group>";
										taskModal += "<label>Subject</label>";
										taskModal += "<input type='text' id='saved-task-subject"+field.id+"' class='form-control' value='"+field.subject+"'>";
									taskModal += "</div>";
									taskModal += "<div class='form-group'>";
										taskModal += "<label>Code/Title</label>";
										taskModal += "<input type='text' id='saved-task-title"+field.id+"' class='form-control' value='"+field.title+"'>";
									taskModal += "</div>";
									taskModal += "<div class='form-group'>";
										taskModal += "<label>Activity</label>";
										taskModal += "<textarea id='saved-task-activity"+field.id+"' class='form-control' rows='4'>"+field.activity+"</textarea>";
									taskModal += "</div>";
									taskModal += "<div class='form-group'>";
										taskModal += "<label>Start time</label>";
										taskModal += "<input type='text' id='saved-task-startTime"+field.id+"' class='form-control' value='"+field.start+"'>";
									taskModal += "</div>";
									taskModal += "<div class='form-group'>";
										taskModal += "<label>End time</label>";
										taskModal += "<input type='text' id='saved-task-endTime"+field.id+"' class='form-control' value='"+field.end+"'>";
									taskModal += "</div>";
									taskModal += "<div class='form-group'>";
										taskModal += "<label>Remarks</label>";
										taskModal += "<input type='text' id='saved-task-remarks"+field.id+"' class='form-control' value='"+field.remarks+"'>";
									taskModal += "</div>";
								taskModal += "</div>";
								taskModal += "<div class='col-md-12 text-right'>";
									taskModal += "<button class='btn btn-default' data-dismiss='modal'>Cancel</button>";
									taskModal += "  <button id='saved-task-update-btn"+field.id+"' class='btn btn-success' data-dismiss='modal'>Update</button>";
								taskModal += "</div>";
							taskModal += "</div>";
						taskModal += "</div>";
					taskModal += "</div>";
				taskModal += "</div>";
	
			$('#task-information-handler').append(taskModal);

			$('#saved-task-startTime'+field.id).datetimepicker({
				format:'LT'
			});

			$('#saved-task-endTime'+field.id).datetimepicker({
				format:'LT'
			});			

			ticketNo = field.ticketNo;	

			});

		}else {
			tableData += '<tr></tr>';
		}
		 $('#saved-view-table'+ticketNo).html(tableData);
	});
}
