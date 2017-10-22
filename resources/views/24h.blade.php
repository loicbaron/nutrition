@extends('layouts.master')

@section('title', '24h recall')

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

@section('content')
<div class="info-icons">
</div>
<div class="container-fluid col-md-12">
    <div class="row">
    24h recall
    </div>
</div>
<script type="text/javascript">
</script>
@endsection

