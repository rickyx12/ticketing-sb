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
				 					viewModal += "<table class='table table-hover'><thead><tr><th>No.</th><th>Subject</th><th>Code/Title</th><th>Activity</th><th>Start Time</th><th>End Time</th><th>Remarks</th><th>Action</th></tr></thead><tbody id='saved-view-table"+field.ticketNo+"'></tbody></table>";
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

				 // deleteModal += "<div id='delete-ticket-modal"+field.id+"' class='modal fade' role='dialog'>";
					//  deleteModal += "<div class='modal-dialog'>";
					//  	deleteModal += "<div class='modal-content'>";
					//  		deleteModal += "<div class='modal-header'>";
					//  			deleteModal += "<h5 class='modal-title'>"+field.subject+"</h5>";
					//  		deleteModal += "</div>";
					//  		deleteModal += "<div class='modal-body'>";
					//  			deleteModal += "<div class='col-md-12 text-center'>";
					//  				deleteModal += "<h5>Delete <span style='color:red;'>"+field.code+"</span></h5>";
					//  				deleteModal += "<br>";
					//  				deleteModal += "<div class='col-md-12 text-right'>";
					//  					deleteModal += "<button class='btn btn-default' data-dismiss='modal'>Cancel</button>";
					//  					deleteModal += " <button class='btn btn-danger' data-dismiss='modal' id='delete-saved-ticket-btn"+field.id+"'>Delete</button>";
					//  				deleteModal += "</div>";
					//  			deleteModal += "</div>";
					//  		deleteModal += "</div>";
					//  	deleteModal += "</div>";
					//  deleteModal += "</div>";
				 // deleteModal += "</div>";

				 // editModal += "<div id='edit-ticket-modal"+field.id+"' class='modal fade' role='dialog'>";
				 // 	editModal += "<div class='modal-dialog'>";
				 // 		editModal += "<div class='modal-content'>";
				 // 			editModal += "<div class='modal-header'>";
				 // 				editModal += "<h5 class='modal-title'>"+field.subject+"</h5>";
				 // 			editModal += "</div>";
				 // 			editModal += "<div class='modal-body'>";
				 // 				editModal += "<div class='col-md-12'>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>Subject</label>";
				 // 						editModal += "<input type='text' id='edit-subject"+field.id+"' class='form-control' autocomplete='off' value='"+field.subject+"'>";
				 // 					editModal += "</div>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>Code/Title</label>";
				 // 						editModal += "<input type='text' id='edit-title"+field.id+"' class='form-control' autocomplete='off' value='"+field.code+"'>";
				 // 					editModal += "</div>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>Activity</label>";
				 // 						editModal += "<textarea class='form-control' id='edit-activity"+field.id+"' rows='5' cols='2' style='overflow-x:hidden'>"+field.activity+"</textarea>";
				 // 					editModal += "</div>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>Start time</label>";
				 // 						editModal += "<input type='text' id='edit-start"+field.id+"' class='form-control time-picker' autocomplete='off' value='"+field.start+"'>";
				 // 					editModal += "</div>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>End time</label>";
				 // 						editModal += "<input type='text' id='edit-end"+field.id+"' class='form-control time-picker' autocomplete='off' value='"+field.end+"'>";
				 // 					editModal += "</div>";
				 // 					editModal += "<div class='form-group'>";
				 // 						editModal += "<label>Remarks</label>";
				 // 						editModal += "<input type='text' id='edit-remarks"+field.id+"' class='form-control' autocomplete='off' value='"+field.remarks+"' >";
				 // 					editModal += "</div>";
				 // 					editModal += "<br>";
				 // 					editModal += "<div class='col-md-12 text-right'>";
				 // 						editModal += "<button type='button' class='btn btn-default' data-dismiss='modal'>Cancel</button>";
				 // 						editModal += " <button type='button' class='btn btn-success' id='edit-saved-ticket-btn"+field.id+"' data-dismiss='modal'>Update</button>";
				 // 					editModal += "</div>";
				 // 				editModal += "</div>";
				 // 			editModal += "</div>";
				 // 		editModal += "</div>";
				 // 	editModal += "</div>";
				 // editModal += "</div>";

				 // $(document).on('click','#delete-ticket-btn'+field.id,function(){
					// $.ajax({
					// 	url:'./backend/delete-ticket.php',
					// 	type:'POST',
					// 	data:{id:field.id},
					// 	success:function(){
					// 		getTicket('./backend/ticket-json-encoder.php');
					// 	}
					// });
				 // });
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
				 tableData += '<td>'+field.id+'</td>';
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
