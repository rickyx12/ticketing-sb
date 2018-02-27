<?php 
	require_once 'session/session.php'; 
	require 'class/database.php';
	require 'class/Ticket.php';

	$db = new database();
	$ticket = new Ticket();

	$ticket->getTicket($_SESSION['userId']);

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>SB Admin - Start Bootstrap Template</title>
  <!-- Bootstrap core CSS-->
  <link href="bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <link href="vendor/eonasdan-bootstrap-datetimepicker/build/css/bootstrap-datetimepicker.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.php">Start Bootstrap</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.php">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <!-- <a class="nav-link" href="charts.html"> -->
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Charts</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <!-- <a class="nav-link" href="tables.html"> -->
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Tables</span>
          </a>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Ticket</span>
          </a>
          <ul class="sidenav-second-level collapse show" id="collapseComponents">
            <li>
              <a href="table-kite.php">Current</a>
            </li>
            <li>
              <a href="saved-ticket.php">Unpublished Ticket</a>
            </li>            
            <li>
              <a href="table-kite-history.php">History</a>
            </li>
          </ul>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-file"></i>
            <span class="nav-link-text">Example Pages</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseExamplePages">
            <li>
              <a href="login.html">Login Page</a>
            </li>
            <li>
              <a href="register.html">Registration Page</a>
            </li>
            <li>
              <a href="forgot-password.html">Forgot Password Page</a>
            </li>
            <li>
              <a href="blank.html">Blank Page</a>
            </li>
          </ul>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-sitemap"></i>
            <span class="nav-link-text">Menu Levels</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseMulti">
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a href="#">Second Level Item</a>
            </li>
            <li>
              <a class="nav-link-collapse collapsed" data-toggle="collapse" href="#collapseMulti2">Third Level</a>
              <ul class="sidenav-third-level collapse" id="collapseMulti2">
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
                <li>
                  <a href="#">Third Level Item</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-link"></i>
            <span class="nav-link-text">Link</span>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="messagesDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-envelope"></i>
            <span class="d-lg-none">Messages
              <span class="badge badge-pill badge-primary">12 New</span>
            </span>
            <span class="indicator text-primary d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="messagesDropdown">
            <h6 class="dropdown-header">New Messages:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>David Miller</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">Hey there! This new version of SB Admin is pretty awesome! These messages clip off when they reach the end of the box so they don't overflow over to the sides!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>Jane Smith</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I was wondering if you could meet for an appointment at 3:00 instead of 4:00. Thanks!</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <strong>John Doe</strong>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">I've sent the final files over to you for review. When you're able to sign off of them let me know and we can discuss distribution.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all messages</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-bell"></i>
            <span class="d-lg-none">Alerts
              <span class="badge badge-pill badge-warning">6 New</span>
            </span>
            <span class="indicator text-warning d-none d-lg-block">
              <i class="fa fa-fw fa-circle"></i>
            </span>
          </a>
          <div class="dropdown-menu" aria-labelledby="alertsDropdown">
            <h6 class="dropdown-header">New Alerts:</h6>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-danger">
                <strong>
                  <i class="fa fa-long-arrow-down fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">
              <span class="text-success">
                <strong>
                  <i class="fa fa-long-arrow-up fa-fw"></i>Status Update</strong>
              </span>
              <span class="small float-right text-muted">11:21 AM</span>
              <div class="dropdown-message small">This is an automated server response message. All systems are online.</div>
            </a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item small" href="#">View all alerts</a>
          </div>
        </li>
        <li class="nav-item">
          <form class="form-inline my-2 my-lg-0 mr-lg-2">
            <div class="input-group">
              <input class="form-control" type="text" placeholder="Search for...">
              <span class="input-group-append">
                <button class="btn btn-primary" type="button">
                  <i class="fa fa-search"></i>
                </button>
              </span>
            </div>
          </form>
        </li>
      <!-----XB----> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="avatar.png" alt="Avatar" class="avatar">
          </a>
          <div class="dropdown-menu" aria-labelledby="alertsDropdown">
            <a class="dropdown-item" href="edit.profile.php">
              <span class="text-default">
                  Edit Profile
              </span>             
            </a>
        </li>
      <!-----XB---->               
        <li class="nav-item">
          <a class="nav-link" data-toggle="modal" data-target="#exampleModal">
            <i class="fa fa-fw fa-sign-out"></i>Logout</a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="content-wrapper">
   <?php if($db->doubleSelectNow('ticket','ticketNo','status','publish','datePublished',date("Y-m-d")) == "" ): ?>
	    <div id="allow" class="container-fluid">
	      <!-- Example DataTables Card-->
	      <div class="card mb-3">
	        <div class="card-header">
	          <div class="col-sm-12">
	            <i class="fa fa-table"></i> Ticket#: DTU-<?= date("Ymd") ?>-<?= $ticket->getLastTicketNo() + 1 ?>
	            <span class="pull-right"><?= date("F d, Y") ?></span>
	          </div>
	        </div>
		        <div class="card-body">
		          <div class="row">
		            <div class="col-md-6">
		              Current Ticket: DTU-<?= date("Ymd") ?>-<?= $ticket->getLastTicketNo() + 1 ?>
		            </div>
		            <div class="col-md-6 text-right">
		              <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#add-ticket-modal">Add Item</button>
		            </div>
		          </div>
		          <br>
			          <div class="table-responsive">
			            <table class="table table-bordered" width="100%" cellspacing="0">
			              <thead>
			                <tr>
			                  <th>No.</th>
			                  <th>Subject</th>
			                  <th>Code/Title</th>
			                  <th>Activity</th>
			                  <th>Start Time</th>
			                  <th>End Time</th>
			                  <th>Remarks</th>
			                  <th></th>
			                </tr>
			              </thead>
			              <tbody id="ticket-table"></tbody>
			            </table>
			            <div class="col-md-12 text-right">
			              <button class="btn btn-success" data-toggle="modal" data-target="#save-ticket-modal"><i class="fa fa-save"></i> Save</button>
			              <button class="btn btn-info" data-toggle="modal" data-target="#publish-ticket-modal"><i class="fa fa-check"></i> Publish</button>
			            </div>
			          </div>
		        </div>
	        <!-- <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div> -->
	      </div>
	    </div>
	<?php else: ?>
		<br>
		<br>
		<br>
		<br>
		<div class="col-md-12 text-center">
			<img src="published.png" width="100" height="100">
			<div class="alert alert-default">
				Your Ticket for today is already published
			</div>
		</div>
	<?php endif; ?>
    <br>
    <br>
    <br>
    <br>
    <div id="not-allow" class="col-md-12 text-center">
      <img src="published.png" width="100" height="100">
      <div class="alert alert-default">
        Your Ticket for today is already published
      </div>
    </div>

    <div id="add-ticket-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
          <div class="modal-body">
            <div class="form-group">
              <label>Subject:</label>
              <input type="text" id="subject" class="form-control" autocomplete="off">
            </div>
            <div class="form-group">
              <label></label>Code/Title
              <input type="text" id="code" class="form-control" autocomplete="off">
            </div>
            <div class="form-group">
              <label>Activity</label>
              <textarea class="form-control" id="activity" style="overflow-x: hidden;" rows="5" cols="2"></textarea>
            </div>
            <div class="form-group">
              <label>Start time</label>
              <input type="text" id="start-time" class="form-control" autocomplete="off">      
            </div>
            <div class="form-group">
              <label>End Time</label>
              <input type="text" id="end-time" class="form-control" autocomplete="off">
            </div>
            <div class="form-group">
              <label>Remarks</label>
              <input type="text" id="remarks" class="form-control" autocomplete="off">
            </div>
            <div class="col-md-12 text-right">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> 
              <button type="button" class="btn btn-success" id="add-ticket-btn" data-dismiss="modal">Save</button> 
            </div>           
          </div>
        </div>

      </div>
    </div>

    <div id="publish-ticket-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
         <div class="modal-header">
         	<h6 class="modal-title">Publish</h6>
         </div>
          <div class="modal-body">
          	<div class="col-md-12 text-center">
          		Are you sure you want to publish this ticket?
          	</div>
          	<br>
          	<br>
            <div class="col-md-12 text-right">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> 
              <button type="button" class="btn btn-success" id="publish-ticket-btn" data-dismiss="modal">Publish</button> 
            </div>           
          </div>
        </div>

      </div>
    </div>


    <div id="save-ticket-modal" class="modal fade" role="dialog">
      <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
         <div class="modal-header">
          <h6 class="modal-title">Saved</h6>
         </div>
          <div class="modal-body">
            <div class="col-md-12 text-center">
              Are you sure you want to saved this ticket?
            </div>
            <br>
            <br>
            <div class="col-md-12 text-right">
              <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> 
              <button type="button" class="btn btn-success" id="save-ticket-btn" data-dismiss="modal">Save</button> 
            </div>           
          </div>
        </div>

      </div>
    </div>

    <div id="edit-modal-handler"></div>
    <div id="delete-modal-handler"></div>

    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>Copyright © Your Website 2018</small>
        </div>
      </div>
    </footer>
    <!-- Scroll to Top Button-->
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a>
    <!-- Logout Modal-->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="session/logout.php">Logout</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Bootstrap core JavaScript-->
    <script src="vendor/jquery/jquery.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> -->
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="vendor/datatables/jquery.dataTables.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
    <script src="bower_components/moment/moment.js"></script>
    <script src="vendor/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="js/sb-admin-datatables.min.js"></script>
    <script src="js/show-current-ticket.js"></script>
    <script src="js/show-published-ticket.js"></script>
    <script src="js/add-ticket.js"></script>
  </div>
</body>

</html>
