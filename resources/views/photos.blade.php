@extends('layouts.master')

@section('title', 'Photos')

@section('content')
<div class="container">
    <div class="content">
        <div class="title">Photos, work in progress</div>
        <div id="image_container">
            <div class="col-sm-4 selector">
            <img src="images/photos/Plats/bouillon pomme Ad L (4).jpg" style="width:100%" />
            </div>
            <div class="col-sm-4 selector">
            <img src="images/photos/Plats/bouillon pomme Ad M (7).jpg" style="width:100%;" />
            </div>
            <div class="col-sm-4 selector">
            <img src="images/photos/Plats/bouillon pomme Enf M et Ad S (5).jpg" style="width:100%;" />
            </div>
        </div>
        <form>
            Meal: <input id="meal" name="meal" type="text" value="" />
            Size Adult: <input id="sizeAdult" name="sizeAdult" type="text" value="" />
            Size Child: <input id="sizeChild" name="sizeChild" type="text" value="" />
            <input type="button" value="Validate">
        </form>
    </div>
</div>
    <script type="text/javascript">
        // JS
        $('div#image_container div').click(function(){
            $('div#image_container div').removeClass("selected");
            $(this).toggleClass("selected");
            // set the img-source as value of image_from_list
            src = $("img", this).attr("src");
            var sizeAdult;
            var sizeChild;
            var meal;
            if(src.indexOf(" Enf ") !== -1){
                /* Adult and Child */
                var myRegexp = /^(.+)(\/)(.*) Enf (.*) et Ad.(.)(.*\ \(.*).jpg$/
                var match = myRegexp.exec(src);
                meal = match[3];
                sizeChild = match[4];
                sizeAdult = match[5];
            }else{
                /* Adult only */
                var myRegexp = /^(.+)(\/)(.*) Ad.(.)(.*\ \(.*).jpg$/
                var match = myRegexp.exec(src);
                meal = match[3];
                sizeChild = '';
                sizeAdult = match[4];
            }
            console.log(match);
            $('input#meal').val( meal );
            $('input#sizeAdult').val( sizeAdult );
            $('input#sizeChild').val( sizeChild );
        });
    </script>
@endsection
