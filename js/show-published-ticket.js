function getPublishedTicket(json) {
	$.getJSON(json,'',function(result) {
		var tableData = '';
		console.log(result);

		if(result != "null") {
			$.each(result,function(i,field) {	
				 tableData += '<tr>';
				 tableData += '<td>'+field.ticketNo+'</td>';
				 tableData += '<td>'+field.date+'</td>';
				 tableData += '<td><a href="./ticket-form.php?ticketNo='+field.ticketNo+'" target="_blank"><button type="button" id="published-view-btn'+field.ticketNo+'" class="btn btn-default">View</button></a> <button id="history-download-btn'+field.ticketNo+'" class="btn btn-default">Download</button> <button id="history-print-btn'+field.ticketNo+'" class="btn btn-default">Print</button></td>'
				 tableData += '</tr>';

				 $(document).on('click','#history-download-btn'+field.ticketNo,function(){
					var columns = ["Subject", "Code/Title","Activity","Start Time","End Time","Remarks"];
					var rows = [];
					var title = field.ticketNo;
					var employeeName = field.employeeName;
					var ticketDate = field.dateFormatted;
					var userSection = field.userSection;

					$.getJSON("./backend/by-ticketNo-json-encoder.php?ticketNo="+field.ticketNo,'',function(result) {
						
						$.each(result,function(i,field){
							rows.push([field.subject,field.title,field.activity,field.start,field.end,field.remarks]);
						});		
						
						var logo = new Image();
						logo.addEventListener('load',function(){
							var doc = new jsPDF('p', 'pt');
							doc.addImage(logo, 'JPEG', 70, 20, 100, 50);
							doc.setFontSize(10);
							doc.text("Ticket#: "+title,450,30);
							doc.setFontSize(15);
							doc.text("DAILY PRODUCTION WORK TICKET",180,50);
							doc.setFontSize(10);
							doc.text("Name: "+employeeName,40,90);
							doc.text("Section: "+userSection,280,90);
							doc.text("Date: "+ticketDate,440,90);
							doc.text("Checked By:",90,770);
							doc.text("_____________________________",40,800);
							doc.text("SUPERVISOR",90,820);
							doc.text("Checked By:",440,770);
							doc.text("_____________________________",390,800);
							doc.text("MANAGER",440,820);
							doc.autoTable(columns, rows,{
								margin:{
									top:100
								}
							});
							doc.save('ticket#'+title+'.pdf');		
						});	
						logo.src = './img/kite.jpeg';				
					});
				 });

				 $(document).on('click','#history-print-btn'+field.ticketNo,function(){
					  windowObjectReference = window.open(
					    "./backend/history-print-page.php?ticketNo="+field.ticketNo,
					    "",
					    "resizable,scrollbars,status,width=1300,height=650"
					  );
				 });

			});
		}else {
			tableData += '<tr></tr>';
		}

		 $('#published-ticket-table').html(tableData);
	});
}