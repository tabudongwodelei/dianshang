/**
 * Created by lenovo on 18/1/5 005.
 */
$(function () {
    $(".mainer3_three .pinpai").click(function(){
        $(".mainer3_three .pinpai").addClass("active");
        $(".mainer3_three .qiye").removeClass("active");
        $(".mainer3_three .dinghuo").removeClass("active");
        $(".mainer3_three .shop").removeClass("active");
    })
});
$(function () {
    $(".mainer3_three a.qiye").click(function(){
        $(".mainer3_three a.qiye").addClass("active");
        $(".mainer3_three a.pinpai").removeClass("active");
        $(".mainer3_three a.dinghuo").removeClass("active");
        $(".mainer3_three a.shop").removeClass("active");
    })
});
$(function () {
    $(".mainer3_three a.dinghuo").click(function(){
        $(".mainer3_three a.dinghuo").addClass("active");
        $(".mainer3_three a.pinpai").removeClass("active");
        $(".mainer3_three a.qiye").removeClass("active");
        $(".mainer3_three a.shop").removeClass("active");
    })
});
$(function () {
    $(".mainer3_three a.shop").click(function(){
        $(".mainer3_three a.shop").addClass("active");
        $(".mainer3_three a.pinpai").removeClass("active");
        $(".mainer3_three a.qiye").removeClass("active");
        $(".mainer3_three a.dinghuo").removeClass("active");
    })
});