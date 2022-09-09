$(document).ready(function(){
    $(".btnlatestgrp").click(function(){
        $(".btnlatestgrp").addClass("default");
        $("#latestGroup").css("display","block");
        $(".btnmonthdiff").removeClass("default");
        $("#monthdiffGroup").css("display","none");
    })
    $(".btnmonthdiff").click(function(){
        $(".btnmonthdiff").addClass("default");
        $("#monthdiffGroup").css("display","block");
        $(".btnlatestgrp").removeClass("default");
        $("#latestGroup").css("display","none");
    })
})

$(document).ready(function(){
    $(".todayopt").click(function(){
        var opt =  $(".todayopt").val();
        $(".displayselopt").html(opt);
    })
    $(".lstwkopt").click(function(){
        var opt =  $(".lstwkopt").val();
        $(".displayselopt").html(opt);
    })
    $(".lstmthopt").click(function(){
        var opt =  $(".lstmthopt").val();
        $(".displayselopt").html(opt);
    })
})