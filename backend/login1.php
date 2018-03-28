<?php
	session_start();
	require "../class/database.php";
	require_once "../class/Bcrypt.php";		
	require "../class/Ticket.php";

	$userId = $_POST['userId'];
	$password = $_POST['password'];

	$db = new database();
	$ticket = new Ticket();

	$hashedPassword = $db->selectNow('user','password','employeeId',$userId);

	if($db->selectNow('user','id','employeeId',$userId) != "") {
		if($db->selectNow("user",'id',"employeeId",$userId) != "" && $db->selectNow("user","id","password",$db->encrypt_decrypt($password)) != "") {
			$_SESSION['userId'] = $db->selectNow('user','id','employeeId',$userId);			
			if($db->selectNow('user','role','employeeId',$userId) == "user") {

				$todayTicketNo = $db->selectNow('ticketCounter','ticketCount','employeeId',$_SESSION['userId']);
				if($todayTicketNo == "" || $todayTicketNo == null) {
					//$lastTodayTicketNo = $db->selectNow('ticketCounter','ticketCount','dateLogin',date("Y-m-d"));

					if($ticket->getLastTicketNo() == "" || $ticket->getLastTicketNo() == null) {
						$data = array(
							"employeeId" => $db->selectNow('user','id','employeeId',$userId),
							"ticketCount" => 1,
							"dateLogin" => date("Y-m-d"),
							"timeLogin" => date("H:i:s")
						);
						$db->insertNow("ticketCounter",$data);
						header("Location: ../table-kite.php");
					}else {
					
						$data = array(
							"employeeId" => $db->selectNow('user','id','employeeId',$userId),
							"ticketCount" => $ticket->getLastTicketNo() + 1,
							"dateLogin" => date("Y-m-d"),
							"timeLogin" => date("H:i:s")
						);
						$db->insertNow("ticketCounter",$data);
						header("Location: ../table-kite.php");
					}
				}else {
					header("Location: ../table-kite.php");
				}
			

			}else {
				header("Location: admin-panel.php");
			}
		}else {
			header("Location: ../login.php?error=Authentication Error");
		}
	}else {
		header("Location: ../login.php?error=Authentication Error");
	}

?>