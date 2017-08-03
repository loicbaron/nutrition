@extends('layouts.master')

@section('title', 'Admin food items')


@section('content')
<div class="container-fluid">
    <div class="row">
    <button type="button" id="add" class="btn btn-success" style="width:152px;">Add new item</button>
    <button type="button" id="sync" class="btn btn-primary" style="width:152px;">Synchronise images</button>
    <button type="button" id="del" class="btn btn-danger" style="width:152px;">Delete items</button>
    </div>
    <div class="row">
    &nbsp;
    </div>
@foreach ($foods as $food)
    <div class="row">
        <div id={{ $food->id }} class="food_name col-md-3">
        {{ $food->name }}
        </div>
        <div id={{ $food->id }} class="food_images col-md-7">
        images: {{ $food->images }}
        </div>
        <div id="item_actions col-md-2">
            <a href="#">
              <span class="glyphicon glyphicon-edit" id={{ $food->id }}></span>
            </a>
            <a href="#">
              <span class="glyphicon glyphicon-trash" id={{ $food->id }}></span>
            </a> 
        </div>
    </div>
@endforeach
</div>
<script type="text/javascript">
function sleep(miliseconds) {
    var currentTime = new Date().getTime();
    while (currentTime + miliseconds >= new Date().getTime()) {
    }
}
$(document).ready(function(){
    $('#add').click(function(){
        alert("not implemented");
    });
    $('#sync').click(function(){
        $(".food_images").each(function() {
            if(this.id){
                var oldValue = $(this).html();
                console.log(oldValue);
                var item = $(this);
                item.html("&nbsp;");
                item.addClass("loaderSmall");
                $.get( "sync/images/"+this.id, function( data ) {
                    console.log(data);
                    item.removeClass("loaderSmall");
                    item.html('images: ' + data );
                });
            }
        });
    });
    $('#del').click(function(){
        /* TODO: select items to enable the button */
        alert("not implemented");
    });
    $('.glyphicon-edit').click(function(){
        alert(this.id);
    });
    $('.glyphicon-trash').click(function(){
        if (confirm("Are you sure?") == true) {
            x = "You pressed OK to delete "+this.id;
            console.log(x);
        }
    });
});
</script>

@endsection
