/**
 * Created by web on 2018/11/25.
 */
$(function(){
    $("<link rel='stylesheet' href='css/product_header.css'>").appendTo("head");
    $.ajax({
        //url:"http://localhost:63342/day10/BILLZCON3/header.html",
        url:"product_header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header")
        }
    })
})