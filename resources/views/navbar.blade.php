<?php
if(!isset($active)){
    $active = 'food';
}
?>

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <ul class="nav navbar-nav">
      @if ($active === 'food')
      <li class="active"><a href="/">Search Food</a></li>
      @else
      <li><a href="/">Search Food</a></li>
      @endif
      @if ($active === 'portions')
      <li class="active"><a href="/portions">Portions Evaluation</a></li>
      @else
      <li><a href="/portions">Portions Evaluation</a></li>
      @endif
      @if ($active === 'photos')
      <li class="active"><a href="/photos">Photos Evaluation</a></li>
      @else
      <li><a href="/photos">Photos Evaluation</a></li>
      @endif
      @if ($active === '24h')
      <li class="active"><a href="/24h">24h recall <span class="badge"></span></a></li>
      @else
      <li><a href="/24h">24h recall <span class="badge"></span></a></li>
      @endif
      <!-- <li><a href="#">Food portion photograph book</a></li> -->
      @if ($active === 'project')
      <li class="active"><a href="/project">ANTRAC Project</a></li>
      @else
      <li><a href="/project">ANTRAC Project</a></li>
      @endif

      @if ($active === 'about')
      <li class="active"><a href="/about">About</a></li>
      @else
      <li><a href="/about">About</a></li>
      @endif

      @if ($active === 'contact')
      <li class="active"><a href="/contact">Contact Us</a></li>
      @else
      <li><a href="/contact">Contact Us</a></li>
      @endif

    </ul>
  </div>
</nav>

<script type="text/javascript">

$(document).ready(function(){
    var h24 = localStorage.getItem('h24');
    if(h24!=null) {
        var oH24 = JSON.parse(h24);
        console.log(oH24.length);
    }else{
        var oH24 = Array();
    }

    if(oH24.length>0){
        $(".badge").html(oH24.length);
    }else{
        $(".badge").html("");
    }

});
</script>
