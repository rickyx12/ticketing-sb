$(function(){

	getTicket('./backend/ticket-json-encoder.php');
	
	$('#add-ticket-btn').click(function(){

		var subject = $('#subject').val();
		var code = $('#code').val();
		var activity = $('#activity').val();
		var startTime = $('#start-time').val();
		var endTime = $('#end-time').val();
		var remarks = $('#remarks').val();

		var data = {
			subject:subject,
			code:code,
			start:startTime,
			end:endTime,
			activity:activity,
			remarks:remarks
		};

		$.ajax({
			url:'./backend/add-ticket.php',
			type:'POST',
			data:data,
			success:function(){
				getTicket('./backend/ticket-json-encoder.php');
				$('#subject').val('');
				$('#code').val('');
				$('#start-time').val('');
				$('#end-time').val('');
				$('#activity').val('');
				$('#remarks').val('');
			}
		});

	});

	$('#publish-ticket-btn').click(function(){

		var chkArray = [];
		
		$(".publish:checked").each(function() {
			chkArray.push($(this).val());
		});
		
		console.log(chkArray);
		
		var selected;
		selected = chkArray.join(',') ;
		$.ajax({
			url:'./backend/publish.php',
			type:'POST',
			data:{ids:selected},
			success:function(){
				//getPublishedTicket('published-ticket-json-encoder.php');
			}
		});

	});



	$.getJSON('./backend/ticket-json-encoder.php','',function(result) {	
			$.each(result,function(i,field) {	
				 $('#delete-ticket-btn'+field.id).click(function(){
					$.ajax({
						url:'./backend/delete-ticket.php',
						type:'POST',
						data:{id:field.id},
						success:function(){
							getTicket('./backend/ticket-json-encoder.php');
						}
					});
				 });
			});
	});



});