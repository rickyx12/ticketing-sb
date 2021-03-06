<?php 
  require_once 'session/session.php'; 
  require 'class/database.php';

  $db = new database();

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <title>KITE Ticketing System</title>
  <!-- Bootstrap core CSS-->
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Page level plugin CSS-->
  <link href="vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
  <!-- Navigation-->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
    <a class="navbar-brand" href="index.html">KITE Ticketing System</a>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarResponsive">
      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <a class="nav-link" href="index.php">
            <i class="fa fa-fw fa-dashboard"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
        </li> -->
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Charts">
          <a class="nav-link" href="charts.html">
            <i class="fa fa-fw fa-area-chart"></i>
            <span class="nav-link-text">Charts</span>
          </a>
        </li> -->
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Tables">
          <a class="nav-link" href="tables.html">
            <i class="fa fa-fw fa-table"></i>
            <span class="nav-link-text">Tables</span>
          </a>
        </li> -->
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Components">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Ticket</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents">
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
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Example Pages">
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
        </li> -->
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Menu Levels">
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
        </li> -->
<!--         <li class="nav-item" data-toggle="tooltip" data-placement="right" title="Link">
          <a class="nav-link" href="#">
            <i class="fa fa-fw fa-link"></i>
            <span class="nav-link-text">Link</span>
          </a>
        </li> -->
      </ul>
      <ul class="navbar-nav sidenav-toggler">
        <li class="nav-item">
          <a class="nav-link text-center" id="sidenavToggler">
            <i class="fa fa-fw fa-angle-left"></i>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto">
<!--         <li class="nav-item dropdown">
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
        </li> -->
<!--         <li class="nav-item">
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
        </li> -->
      <!-----XB----> 
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle mr-lg-2" id="alertsDropdown" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <?php if($db->selectNow('user','photo_path','id',$_SESSION['userId']) != ""): ?>
              <img src="<?= "user_photos/".$db->selectNow('user','photo_path','id',$_SESSION['userId']) ?>" alt="Avatar" class="avatar">
            <?php else: ?>
              <img src="avatar.png" class="avatar">
            <?php endif; ?>

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

    <div class="container-fluid">
    <h6>Edit Profile Information</h6>
    <div class="card card-register mt-2">
      <!-- <div class="card-header">Profile Settings</div> -->
      <div class="card-body">
        <span id="message-response" style="color:red; font-size: 12px;">
          <?php if(isset($_SESSION['profile-message'])): ?>
            <?= $_SESSION['profile-message'] ?>
          <?php endif; ?>
        </span>        
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label>User ID</label>
                <h5><?= $db->selectNow('user','employeeId','id',$_SESSION['userId']) ?></h5>
              </div>
            </div>
          </div>    
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <form method="post" action="backend/upload-photo.php" enctype="multipart/form-data">

                  <?php if($db->selectNow('user','photo_path','id',$_SESSION['userId']) != ""): ?>
                    <img id="user-photo" src="user_photos/<?= $db->selectNow('user','photo_path','id',$_SESSION['userId']) ?>" class="avatar-preview">
                  <?php else: ?>
                    <img id="user-photo" src="img/avatar.png" class="avatar-preview">
                  <?php endif; ?>
                  <input type="submit" id="upload-photo" class="btn btn-default btn-sm" value="Update">
                  <br>
                  <br>
                  <input type="file" name="fileToUpload" class="btn btn-default btn-sm" style="margin-top: 2%; margin-left: -3%;" onchange="readURL(this);">
                </form>
                <br>
              </div>
            </div>
          </div>      
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputName">First Name</label>
                <input class="form-control" id="employee-first-name" type="text" autocomplete="off" value="<?= $db->selectNow('user','first_name','id',$_SESSION['userId'
                ]) ?>">
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputName">Last Name</label>
                <input class="form-control" id="employee-last-name" type="text" autocomplete="off" value="<?= $db->selectNow('user','last_name','id',$_SESSION['userId'
                ]) ?>">
              </div>
            </div>
          </div>
           <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputName">Middle Name</label>
                <input class="form-control" id="employee-middle-name" type="text" autocomplete="off" value="<?= $db->selectNow('user','middle_name','id',$_SESSION['userId'
                ]) ?>">
              </div>
            </div>
          </div>         
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <span id="message-response" style="color:red; font-size: 12px;">
                  <?php if(isset($_SESSION['password-message'])): ?>
                    <?= $_SESSION['password-message'] ?>
                  <?php endif; ?>
                </span>
                <Br>
                <label for="exampleInputPassword1">Current Password</label>
                <input class="form-control" id="current-password-password" type="password" value="<?= $db->encrypt_decrypt(($db->selectNow('user','password','id',$_SESSION['userId'])),'d') ?>">
                
                <input class="form-control" id="current-password-text" type="text" value="<?= $db->encrypt_decrypt(($db->selectNow('user','password','id',$_SESSION['userId'])),'d') ?>">
                
                <button id="show-password-btn" class="btn btn-default btn-sm" style="margin-top: 1%;">Show password</button>
                <button id="hide-password-btn" class="btn btn-default btn-sm" style="margin-top: 1%;">Hide password</button>
              </div>            
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">New Password</label>
                <input class="form-control" id="new-password" type="password"> <span id="new-password-limiter" style="color:red; font-size:15px;">Minimum of 6 character</span><br><span id="alphanumeric-checker" style="color:red; font-size:15px;">Password should be Alphanumeric</span>
              </div>            
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Division</label>
                <input class="form-control" id="employee-division" type="text" value="<?= $db->selectNow('user','division','id',$_SESSION['userId']) ?>" autocomplete="off">
              </div>            
            </div>
          </div> 
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Department</label>
                <input class="form-control" id="employee-department" type="text" value="<?= $db->selectNow('user','department','id',$_SESSION['userId']) ?>" autocomplete="off">
              </div>            
            </div>
          </div>  
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Section</label>
                <input class="form-control" id="employee-section" type="text" value="<?= $db->selectNow('user','section','id',$_SESSION['userId']) ?>" autocomplete="off">
              </div>            
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Branch</label>
                <input class="form-control" id="employee-branch" type="text" value="<?= $db->selectNow('user','branch','id',$_SESSION['userId']) ?>" autocomplete="off">
              </div>            
            </div>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Employment Status</label>
                <select id="employment-status" class="form-control">
                  <option><?= $db->selectNow('user','employment_status','id',$_SESSION['userId']) ?></option>
                  <option>Full-time</option>
                  <option>Probationary</option>
                  <option>Project-Based</option>
                  <option>Direct Casual/Contractual</option>
                  <option>OJT</option>
                  <option>Agency Contractual</option>
                </select>
              </div>            
            </div>
          </div>  
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label for="exampleInputPassword1">Employee Position</label>
                <input class="form-control" id="employee-position" type="text" value="<?= $db->selectNow('user','position','id',$_SESSION['userId']) ?>" autocomplete="off">
              </div>            
            </div>
          </div>                                                              
          <a class="btn btn-primary btn-block" id="update-profile-btn">Update</a>
  
      </div>
    </div>
      
    </div>
    </div>

    <!-- /.container-fluid-->
    <!-- /.content-wrapper-->
    <footer class="sticky-footer">
      <div class="container">
        <div class="text-center">
          <small>KITE Ticketing System</small>
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
    <script src="vendor/jquery/jquery.min.js"></script>
    <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- Core plugin JavaScript-->
    <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
    <!-- Page level plugin JavaScript-->
    <script src="vendor/datatables/jquery.dataTables.js"></script>
    <script src="vendor/datatables/dataTables.bootstrap4.js"></script>
    <!-- Custom scripts for all pages-->
    <script src="js/sb-admin.min.js"></script>
    <!-- Custom scripts for this page-->
    <script src="js/sb-admin-datatables.min.js"></script>
    <script src="js/photo-preview.js"></script>
    <script src="js/edit-profile.js"></script>
  </div>
</body>

</html>
