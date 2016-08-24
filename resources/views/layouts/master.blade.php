<html>
    <head>
        <title>Food Composition Database - @yield('title')</title>
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
    @section('navbar')
        @include('navbar')
    @show
    <div class="container" style="padding-bottom: 100px;">
        @yield('content')
    </div>
    <br>
    <footer class="footer navbar-fixed-bottom" style="background-color:#f5f5f5;height:60px;">
      <div class="container">
        <p class="text-muted" style="margin-top:20px;margin-bottom:20px;">This web interface has been built using <a href="http://onelab.eu" target="_blank"><img src="/images/onelab.png" style="height:30px;padding-left:5px;padding-right:5px;"></a> code is available at <a href="https://github.com/loicbaron/nutrition" target="_blank"><img src="/images/github.png" style="height:30px;padding-left:5px;padding-right:5px;"></a></p>
      </div>
    </footer>
    </body>
</html>
