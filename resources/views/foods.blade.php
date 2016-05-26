@extends('layouts.master')

@section('title', 'List of food items')

@section('head')
    @parent
    <script src="/js/typeahead.bundle.js"></script>
    <link rel="stylesheet" href="/css/typeahead.css">
@endsection

<!--
@section('sidebar')
    @parent

    <p>This is appended to the master sidebar.</p>
@endsection
-->

@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
            @endif
<!--
<div id="the-basics">
  <input class="typeahead" type="text" placeholder="States of USA">
</div>
-->
<div id="bloodhound">
  <input class="typeahead" type="text" placeholder="Search food">
</div>
<br>

            <div class="panel panel-default">

                <div class="panel-heading">
                <h1>Foods List</h1>
                </div>

                <div class="panel-body">
                    <?php
                    foreach ($foods as $food) {
                        echo "<h4>".$food->name."</h4>";
                        echo "energy in Kcal: ".$food->energy_kcal."<br>";
                        echo "energy in Kj: ".$food->energy_kj."<br>";
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function(){
    // constructs the suggestion engine
    var data = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      //datumTokenizer: Bloodhound.tokenizers.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // `states` is an array of state names defined in "The Basics"
      //local: s
      //local: ["dog", "dag","pig", "moose"],
      limit: 2,
      remote: {
        url: "/json/food",
      }
    });

    $('#bloodhound .typeahead').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'data',
      source: data
    });
});
</script>
@endsection

