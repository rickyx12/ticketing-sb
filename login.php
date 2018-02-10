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
  <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <!-- Custom fonts for this template-->
  <link href="vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
  <!-- Custom styles for this template-->
  <link href="css/sb-admin.css" rel="stylesheet">
</head>

<body class="bg-dark">
  <div class="container">
    <div class="card card-login mx-auto mt-5">
      <div class="card-header">Login</div>
      <div class="card-body">
        <?php if(isset($_GET['error'])): ?>
          <center><span style="color:red;"><?= $_GET['error'] ?></span></center>
        <?php endif; ?>
        <form id="credentials-form" method="POST" action="login1.php">
          <div class="form-group">
            <label for="exampleInputEmail1">User ID</label>
            <input class="form-control" id="userId" type="text" name="userId" autocomplete="off" aria-describedby="emailHelp" placeholder="User ID" maxlength="4">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input class="form-control" id="password-field" name="password" type="password" placeholder="Password" pattern=".{6,}" required title="must be 6 characters">
           <!--  <span id="password-checker" style="color:red;">Password must be 6 characters</span> -->
          </div>
          <input type="submit" id="login-button" class="btn btn-block btn-primary" value="Login">
        </form>
      </div>
    </div>
  </div>
  <!-- Bootstrap core JavaScript-->
  <script src="vendor/jquery/jquery.min.js"></script>
  <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <!-- Core plugin JavaScript-->
  <script src="vendor/jquery-easing/jquery.easing.min.js"></script>
  <script src="js/sb-admin.js"></script>
</body>

</html>
