$(document).ready(function(){
    setTimeout(function(){
        $(".m-input-select.type01 .fake").click(function(){
            $(this).siblings(".options").toggle();
        });

        $(".m-input-select.type02 .value").click(function(){
            $(this).siblings(".options").toggle();
        });
    }, 500);
});
