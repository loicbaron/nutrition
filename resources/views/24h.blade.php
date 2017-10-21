@extends('layouts.master')

@section('title', 'Search for food items')

<?php $active = '24h'; ?>

@section('head')
    @parent
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
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
<div class="info-icons">
</div>
<div class="container-fluid col-md-12">
    <div class="row">
            <div id="adult" class="col-md-1 selected type" style="margin: 0px 0px 0px 0px;padding-right:0px;padding-left: 0px; cursor:pointer;">
            <div style="background-color:white;margin: 1px 1px 1px 1px;">
            <i class="fa fa-male" aria-hidden="true" style="font-size:60px;background-color:white;"></i>
            </div>
            </div>
            <div id="child" class="col-md-1 type" style="margin: 0px 0px 0px 0px;padding-right:0px;padding-left: 0px; cursor:pointer;">
            <div style="background-color:white;margin: 1px 1px 1px 1px;">

            <i class="fa fa-child" aria-hidden="true" style="font-size:40px;"></i>
            </div>
            </div>
        <div class="col-md-10">
            @if (session('status'))
            <div class="alert alert-success">
                {{ session('status') }}
            </div>
            @endif

            <div id="scrollable-dropdown-menu">
                <input class="typeahead" type="text" placeholder="Search food" />
            </div>
            <br>
        </div>
        <div class="col-md-12" style="padding: 0px;padding-right: 15px;">
            <div class="chevron">
            <i class="fa fa-chevron-left" aria-hidden="true" style="font-size:25;"></i>
            </div>
            <div class="container testimonial-group" style="max-width:100%; display:inline-block !important; width: 99% !important;">
                <div id="portions_container" class="row text-center">
                </div>
            </div>
            <div class="chevron">
            <i class="fa fa-chevron-right" aria-hidden="true" style="font-size:25;"></i>
            </div>
        </div>
        <div id="image_container" class="container" style="max-width:100%;">
        </div>
        <div class="panel panel-default" id="result" style="display:none;">

            <div class="panel-heading" id="name" style="display:inline-block; width:100%;">
            </div>

            <div class="panel-body">

                <br>
                <div class="container" style="max-width:100%;">
                    <div class="row" id="composition">
                    </div>
                    <br><br>
                    <div class="row" id="quantity">
                        <div class=col-md-3">
                        </div>
                        <div class=col-md-3">
                        Quantity in grams: <input type="number" id="grams" value="100" disabled="disabled"> (g)
                        <input type="hidden" id="previous_grams" value="100">
                        </div>
                        <div class=col-md-3">
                        </div>
                        <div class=col-md-3">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
var save = function(item){
    if(typeof sessionStorage==undefined) {
        alert("Web Browser error, please update to a recent browser: sessionStorage not supported");
        return;
    }
    if(typeof localStorage==undefined) {
        alert("Web Browser error, please update to a recent browser: localStorage not supported");
        return;
    }
    // Get the current item composition
    var compo = sessionStorage.getItem("composition");
    var oCompo = JSON.parse(compo);
    var obj = {[item]:oCompo}; 
    // Get the 24h recall
    var h24 = localStorage.getItem('h24');
    if(h24!=null) {
        var oH24 = JSON.parse(h24);
    }else{
        var oH24 = Array();
    }
    // Add the item to the 24h recall
    oH24.push(obj);
    localStorage.setItem("h24",JSON.stringify(oH24));
    // Get the total
    var total = localStorage.getItem("total");
    console.log(total);
    if(total!=null) {
        var oTotal = JSON.parse(total);
    }else{
        console.log("create array");
        var oTotal = Array();
    }
    console.log(oTotal);
    // Add the item composition to the total
    $.each(oCompo, function(i, val){
        console.log(i);
        // initalize the value to 0
        if(oTotal[i]==undefined){
            oTotal.push('0');
        }
        console.log(oTotal[i]);
        console.log(val);
        oTotal[i] = parseFloat(oTotal[i]) + parseFloat(val);
    });
    // save total
    localStorage.setItem("total",JSON.stringify(oTotal));
    window.location.reload();
};
$(document).ready(function(){
    $('.chevron').hide();
    var type = "adult";
    var portions = [];
    var images = [];
    var render_portions = function(portions){
        $('#portions_container').html('');
        $.each(portions, function(j, ps){
            var keys = [];
            for (var k in ps) {
              if (ps.hasOwnProperty(k)) {
                keys.push(k);
              }
            }
            keys.sort();
            if(ps['type']==type){
                for (var i = 0; i < keys.length; i++) {
                    k = keys[i];
                    if(k != 'type'){
                        var img = render_image(type,k);
                        if(img!=null){
                        $('#portions_container').append('<div class="selector col-xs-4" data-portion="'+ps[k]+'"><div style="font-size:20pt;">'+k+'</div><div>'+img+'</div></div>');
                        }else{
                        $('#portions_container').append('<div class="selector col-xs-4" data-portion="'+ps[k]+'"><div style="font-size:40pt;">'+k+'</div></div>');
                        }
                    }
                }
            }
        });
    }
    var render_image = function(type, portion){
        var img = images[type][portion];
        if(img!=null){
            return '<img src="images/photos/'+type+'/'+img+'" style="width:100%" />';
        }else{
            return null;
        }
    }
    // constructs the suggestion engine
    var data = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      //datumTokenizer: Bloodhound.tokenizers.whitespace('name'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      // `states` is an array of state names defined in "The Basics"
      //local: s
      //local: ["dog", "dag","pig", "moose"],
      //limit: 2,
      remote: {
        url: "/json/food?query=%QUERY",
        wildcard: '%QUERY',
      }
    });


    $('#scrollable-dropdown-menu .typeahead').typeahead({
      hint: true,
      highlight: true,
      //minLength: 1
    },
    {
      name: 'data',
      displayKey: 'name',
      source: data
    }).on('typeahead:selected', function(event, data){            
        $('#result').show();
        var buttonAdd = "<div style='position:absolute; right:10px; margin-top:-40px;'><button class='btn-primary' id='add' value='"+data.name+"' disabled><i class='fa fa-plus-circle' aria-hidden='true'></i> Add</button></div>";
        $('#name').html('<h1><div>'+data.name+'</div> '+buttonAdd+'</h1>');
        $("#add").click(function() {
            save(data.name);
        });
        $('#composition').html('');
        $('#image_container').html('');
        $('#portions_container').html('');

        if(data.portions.length){
            $('.chevron').css('display', 'inline-block');
        }
        portions = JSON.parse(data.portions);
        images = JSON.parse(data.images);
        render_portions(portions);

        var hide=['id',
                 'name', 
                 'images', 
                 'created_at', 'updated_at',
                 'Code_categorie',
                 'Categorie',
                 'Code_aliment',
                 'portions',
                 ]
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
        //var compo = sessionStorage.getItem("composition");
        //var oCompo = JSON.parse(compo);
        oCompo = Array();
        collection.each(function(k,v) {
            var ref = v.innerText;
            var new_val = (ref / previous_quantity) * new_quantity;
            if(isFloat(new_val)){
                new_val = (new_val).toFixed(2);
            }
            this.innerText = new_val;
            oCompo[k] = new_val;
        });
        if(typeof sessionStorage!='undefined') {
            sessionStorage.setItem("composition",JSON.stringify(oCompo));
        }else{
            alert("Web Browser error, please update to a recent browser: sessionStorage not supported");
        }
        $("#previous_grams").val(new_quantity);
        $("#add").prop("disabled",false);
    });
    $('div#portions_container').on('click','.selector', function(){
        $('div#portions_container div').removeClass("selected");
        $(this).toggleClass("selected");
        gr = $(this).attr("data-portion");
        $("#grams").val(gr);
        $("#grams").trigger("change");
    });

    $('div#image_container').on('click','.selector', function(){
        $('div#image_container div').removeClass("selected");
        $(this).toggleClass("selected");
        src = $("img", this).attr("src");
    });
    $('div.type').on('click', function(){
        $('.type').removeClass("selected");
        $(this).toggleClass("selected");
        type = $(this).attr("id");
        render_portions(portions);
    });

});
</script>
@endsection

