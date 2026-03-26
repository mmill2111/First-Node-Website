function updateStartX() {
    const sidebarWidth = $("#sidebar").outerWidth();
    if ($("#sidebar").hasClass("active")) {
        $("#sidebar").css("transform", "translateX(calc(100vw - " + sidebarWidth + "px))");
    } else {
        $("#sidebar").css("transform", "translateX(calc(100vw - 100px))");
    }
    console.log($(window).width());
}

$(".hamburger").click(function(){
    $("#sidebar").toggleClass("active");
    updateStartX();
});

$(document).click(function(arg){
    if (!$(arg.target).closest("#sidebar").length && !$(arg.target).is(".hamburger")) {
        $("#sidebar").removeClass("active");
        updateStartX();
    } 
})

window.onresize = function(){
    if ($(window).width() > 768) {
        $("#sidebar").removeAttr("style");
    }
}
