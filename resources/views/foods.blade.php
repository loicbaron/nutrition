@extends('layouts.master')

@section('title', 'List of food items')

@section('head')
    @parent
    <script src="/js/typeahead.bundle.js"></script>
    <link rel="stylesheet" href="/css/typeahead.css">
    <script type="text/javascript">
    function isInt(n){
        return Number(n) === n && n % 1 === 0;
    }
    function isFloat(n){
        return Number(n) === n && n % 1 !== 0;
    }
    </script>

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

            <div class="panel panel-default" id="result" style="display:none;">

                <div class="panel-heading" id="name">
                </div>

                <div class="panel-body">
                    <div class="container" style="max-width:100%;">
                        <div class="row" id="composition">
                        </div>
                        <br><br>
                        <div class="row" id="quantity">
                            Quantity in grams: <input type="number" id="grams" value="100"> (g)
                            <input type="hidden" id="previous_grams" value="100">
                        </div>
                    </div>
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
        url: "/json/food?query=%QUERY",
        wildcard: '%QUERY',
      }
    });

    $('#bloodhound .typeahead').typeahead({
      hint: true,
      highlight: true,
      //minLength: 1
    },
    {
      name: 'data',
      displayKey: 'name',
      source: data
    }).on('typeahead:selected', function(event, data){            
        console.log(data.id);
        $('#result').show();
        $('#name').html('<h1>'+data.name+'</h1>');
        $('#composition').html('');
        var hide=['id','name', 'image', 'created_at', 'updated_at']
        $.each( data, function( key, value ) {
            if (hide.indexOf(key) < 0) {
                if(isFloat(value)){
                    value = (value).toFixed(2);
                }
                $('#composition').append('<div class="col-sm-3"><b>'+key+': </b><div class="val" style="display: inline-block">'+value+'</div></div>');
            }
        }); 
    });
    $('#grams').change(function() {
        var previous_quantity = $("#previous_grams").val();
        var new_quantity = this.value;
        var collection = $(".val");
        collection.each(function(k,v) {
            var ref = v.innerText;
            var new_val = (ref / previous_quantity) * new_quantity;
            if(isFloat(new_val)){
                new_val = (new_val).toFixed(2);
            }
            this.innerText = new_val;
        });
        $("#previous_grams").val(new_quantity);
    });
});
</script>
@endsection

