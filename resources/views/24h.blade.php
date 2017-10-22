@extends('layouts.master')

@section('title', '24h recall')

<?php $active = '24h'; ?>

@section('head')
    @parent
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

@endsection

@section('content')
<div class="info-icons">
</div>
<div class="container-fluid col-md-12">
    <div class="row">

        <div class="panel panel-default" id="recall">
            <div class="panel-heading" id="name" style="display:inline-block; width:100%;">
            <h2>24h recall</h2>
            </div>

            <div class="table-responsive" id="list">
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">
$(document).ready(function(){
    var h24 = localStorage.getItem('h24');
    if(h24!=null) {
        var oH24 = JSON.parse(h24);
        $("#list").html(listItems);
        var listItems = "<table class='table' style='text-align:right;'>";
        $.each(oH24, function(i, val){
            listItems += "<tr>";
            listItems += "<td style='text-align:left;'>"+Object.keys(val)[0]+"</td>";
            var values = val[Object.keys(val)[0]];
            $.each(values, function(i, v){
                listItems += "<td>"+v+"</td>";
            });
            listItems += "</tr>";
        }); 
        var total = localStorage.getItem("total");
        if(total!=null) {
            var oTotal = JSON.parse(total);
            listItems += "<tr class='success' style='font-weight:bold;'><td style='text-align:left;'>Total</td>"
            $.each(oTotal, function(i, val){
                listItems += "<td>"+parseFloat(Math.round(val * 100) / 100).toFixed(2);+"</td>";
            });
            listItems += "</tr>";
        }
        listItems += "</table>";
        $("#list").html(listItems);
    }else{
        $("#list").html("no food item selected");
    }
});

</script>
@endsection

