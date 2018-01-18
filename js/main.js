/**
 * Created by lenovo on 18/1/5 005.
 */
$(function () {
    $(".mainer6_three .pinpai").click(function(){
        $(".mainer6_three .pinpai").addClass("active");
        $(".mainer6_three .qiye").removeClass("active");
        $(".mainer6_three .dinghuo").removeClass("active");
        $(".mainer6_three .shop").removeClass("active");
    })
});
$(function () {
    $(".mainer6_three a.qiye").click(function(){
        $(".mainer6_three a.qiye").addClass("active");
        $(".mainer6_three a.pinpai").removeClass("active");
        $(".mainer6_three a.dinghuo").removeClass("active");
        $(".mainer6_three a.shop").removeClass("active");
    })
});
$(function () {
    $(".mainer6_three a.dinghuo").click(function(){
        $(".mainer6_three a.dinghuo").addClass("active");
        $(".mainer6_three a.pinpai").removeClass("active");
        $(".mainer6_three a.qiye").removeClass("active");
        $(".mainer6_three a.shop").removeClass("active");
    })
});
$(function () {
    $(".mainer6_three a.shop").click(function(){
        $(".mainer6_three a.shop").addClass("active");
        $(".mainer6_three a.pinpai").removeClass("active");
        $(".mainer6_three a.qiye").removeClass("active");
        $(".mainer6_three a.dinghuo").removeClass("active");
    })
});