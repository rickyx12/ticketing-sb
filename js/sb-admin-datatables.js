// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable({
  	"processing":true,
  	"serverSide":false,
  	"ordering":true,
  	"searching":true,
  	"ajax":{
  		url:"./backend/dataTables-published-ticket-json-encoder.php",
  		dataSrc:'data'
  	},
  	"aoColumns":[
		{mData:'ticketNo'},
		{mData:'date'},
		{mData:'title'},
		{mData:'id'}
  	],
    "columnDefs": [ {
        "targets": -1,
        //"defaultContent": "<a href='./ticket-form.php?ticketNo='><button class='btn btn-default btn-sm'>View</button></a> <button class='btn btn-default btn-sm'>Download</button> <button class='btn btn-default btn-sm'>Print</button>"
        "render": function ( data, type, row, meta ) {
          console.log(data);
      		return '<a href="./ticket-form.php?id='+data+'" target="_blank"><button class="btn btn-default btn-sm">View</button></a> <button id="history-download-btn'+data+'" class="btn btn-default btn-sm">Download</button> <button id="history-print-btn'+data+'" class="btn btn-default btn-sm">Print</button>';
    	}	
    },
 	{ 
 		"orderable": false, "targets": -1 
 	}
     ]
  });
});
