$(".navbar a").click(function(einfo){
    console.log(einfo);
    let x = $(einfo.target).attr("href");
    console.log(x);
    let y = $(x).offset().top;
    console.log(y);
    $("html,body").animate({scrollTop : y} , 3)
})