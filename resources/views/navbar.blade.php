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
