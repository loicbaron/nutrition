<html>
    <head>
        <title>ANTRAC project Food Composition Database - @yield('title')</title>
        @section('head')
        <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
        
        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
        
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
        @show
    </head>
    <body>
        <!--
        @section('sidebar')
            This is the master sidebar.
        @show
        -->
        <div class="container-fluid">
            <div class="page-header" style="margin-top: 10px;">
                <h1>Food Composition Database</h1>
                <div class="row">&nbsp;</div>
                <div class="row">
                    <div class="col-sm-4">
                    <img src="images/cnrs.jpg" style="height:50px;">
                    <img src="images/mnhn.jpg" style="height:50px;">
                    <img src="images/paris7.jpg" style="height:50px;"><br>
                    <a href="http://www.ecoanthropologie.cnrs.fr/" target="_blank">UMR 7206 Eco-anthropologie et ethnobiologie</a>
                    </div>
                    <div class="col-sm-4">
                    <img src="images/impm.jpg" style="height:50px;"><br>
                    <a href="http://www.impm-cm.org/" target="_blank">Centre de Recherches en Alimentation et Nutrition (CRAN)</a>
                    </div>
                </div>
            </div>
        </div>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Search Food</a></li>
      <li><a href="#">Food portion photograph book</a></li>
      <li><a href="#">ANTRAC Project</a></li>
      <li><a href="#">Contact Us</a></li> 
    </ul>
  </div>
</nav>
        <div class="container">
            @yield('content')
        </div>
    </body>
</html>
