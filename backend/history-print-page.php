<?php
	require_once '../session/session.php';
	require '../class/database.php';
	require '../class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$ticket->getTicketByTicketNo($_GET['ticketNo']);

?>
<html>
	<head>
		<title>Ticket</title>
		<script src="../vendor/jquery/jquery.min.js"></script>
		<script src="../bower_components/jQuery.print/jQuery.print.js"></script>
		<link rel="stylesheet" type="text/css" href="../vendor/bootstrap-3.3.7-dist/css/bootstrap.min.css">
		<script src="../vendor/bootstrap-3.3.7-dist/js/bootstrap.min.js"></script>		
		<link rel="stylesheet" type="text/css" href="../css/ticket-form.css">
		<script>
			window.print();
		</script>
	</head>
	<body>
		<div id="to-print" id="content">
			<div class="container">
				<div class="row">
					<div class="col-sm-12 text-right">
						<h6 style="margin-right: 20%;">Ticket#: <?= $_GET['ticketNo'] ?></h6>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 text-center">
						<img src="../img/kite.png" width="150" height="60" style="margin-right: 5%;">
						<span style="margin-right: 15%;">DAILY PRODUCTION WORK TICKET</span>
						<?php if($db->selectNow('user','photo_path','id',$_SESSION['userId']) != ""): ?>
							<img src="../user_photos/<?= $db->selectNow('user','photo_path','id',$_SESSION['userId']) ?>" height="70px" width="70px">
						<?php else: ?>
							<img src="../avatar.png" height="70px" width="70px">
						<?php endif; ?>
					</div>
				</div>
				<br>
				<div class="row">
					<div class="col-xs-12">
						<div class="col-xs-6">
							<label>NAME:</label>
							<input type='text' id='name-field' value='<?= $db->selectNow("user","name","id",$db->selectNow("ticket",'employee','ticketNo',$_GET["ticketNo"])) ?>'>
						</div>
						<div class="col-xs-3">
								<label>SECTION:</label>
								<input type="text" class="other-field" value="<?= $db->selectNow("user","section","id",$db->selectNow("ticket",'employee','ticketNo',$_GET["ticketNo"])) ?>">
						</div>
						<div class="col-xs-3">
								<label>DATE:</label>
								<input type="text" class="other-field" value="<?= $db->selectNow('ticket','dateFormatted','ticketNo',$_GET['ticketNo']) ?>">
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
	<script>
		//window.close();
	</script>
</html>