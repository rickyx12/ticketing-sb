<?php
	require_once 'session/session.php';
	require 'class/database.php';
	require 'class/Ticket.php';

	$ticketNo = $_GET['ticketNo'];

	$db = new database();
	$ticket = new Ticket();

	$ticket->getTicketByTicketNo($ticketNo);

?>
<html>
	<head>
		<title>Ticket</title>
		<script src="vendor/jquery/jquery.min.js"></script>
		<script src="bower_components/jQuery.print/jQuery.print.js"></script>
		<link rel="stylesheet" type="text/css" href="vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css">
		<script src="vendor/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>		
		<link rel="stylesheet" type="text/css" href="css/ticket-form.css">
		<script>
			$(document).ready(function(){
				$("#print-btn").click(function(){
					$('#to-print').print();
				});
			});
		</script>
	</head>
	<body>
		<button id="print-btn" class="btn btn-danger" style="margin-left: 2%; margin-top: 0.5%;">Print</button>
		<br>
		<div id="to-print" id="content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-right">
						<h6 style="margin-right: 20%;">Ticket#: <?= $ticketNo ?></h6>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<img src="img/kite.png" width="150" height="60" style="margin-right: 5%;">
						<span style="margin-right: 25%;">DAILY PRODUCTION WORK TICKET</span>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-xs-12">
						<div class="col-xs-6">
							<label>NAME:</label>
							<input type='text' id='name-field' value='<?= $db->selectNow("user","name","id",$db->selectNow("ticket",'employee','ticketNo',$ticketNo)) ?>'>
						</div>
						<div class="col-xs-3">
								<label>SECTION:</label>
								<input type="text" class="other-field" value="<?= $db->selectNow("user","section","id",$db->selectNow("ticket",'employee','ticketNo',$ticketNo)) ?>">
						</div>
						<div class="col-xs-3">
								<label>DATE:</label>
								<input type="text" class="other-field" value="<?= $db->selectNow('ticket','dateFormatted','ticketNo',$ticketNo) ?>">
						</div>					
						<table class="table table-bordered">
							<thead>
								<tr>
									<th>SUBJECT</th>
									<th>CODE/TITLE</th>
									<th>START</th>
									<th>END</th>
									<th>ACTIVITY</th>
									<th>REMARKS</th>
								</tr>
							</thead>
							<tbody>
								<?php foreach($ticket->getTicketByTicketNo_id() as $id): ?>
									<tr>
										<td>
											<?= $db->selectNow('ticket','subject','id',$id) ?>
										</td>
										<td>
											<?= $db->selectNow('ticket','title','id',$id) ?>
										</td>
										<td>
											<?= $db->selectNow('ticket','start','id',$id) ?>
										</td>
										<td>
											<?= $db->selectNow('ticket','end','id',$id) ?>
										</td>
										<td>
											<?= $db->selectNow('ticket','activity','id',$id) ?>
										</td>
										<td>
											<?= $db->selectNow('ticket','remarks','id',$id) ?>
										</td>
									</tr>
								<?php endforeach; ?>
							</tbody>
						</table>
						<div class="row">
							<div class="footer">
								<div class="col-xs-4">
									Checked by:
									<br><br>
									<input type="text" class="bottom-field">
									<br>
									<label class="bottom-field-label">SUPERVISOR</label>
								</div>
								<div class="col-xs-4">
									
								</div>
								<div class="col-xs-4">
									Checked by:
									<br><br>
									<input type="text" class="bottom-field">
									<br>
									<label class="bottom-field-label">MANAGER</label>							
								</div>
								<div class="col-xs-4">
									
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>