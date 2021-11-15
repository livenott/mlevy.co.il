$(document).ready(function () {
//Slider-top
	$("#slider-top").owlCarousel({
	        rtl: true,
	        nav:false,
	        loop: true,
	        dots: true,
	        margin:0,
	        items: 1,
	    });
//ScrollBar
    new SimpleBar(document.getElementById('myEl'), {
            autoHide: false,
            scrollbarMinSize: 100
        });
//Slider-top-mobile
    $("#slider-top-mobile").owlCarousel({
            rtl: true,
            nav:false,
            loop: true,
            dots: true,
            margin:0,
            items: 1,
        });
//Counter
	$(".buttonCountPlus").on("click", function(){
		var val=parseInt($(this).closest(".sale__numbers").find(".buttonCountNumber").val());
		val++;
		$(this).closest(".sale__numbers").find(".buttonCountNumber").val(val);
	});
	$(".buttonCountMinus").on("click", function(){
		var val=parseInt($(this).closest(".sale__numbers").find(".buttonCountNumber").val());
		if (val>1)
		{
		  val--;
		  $(this).closest(".sale__numbers").find(".buttonCountNumber").val(val);
		}
	});
//FancyBox
    $(".fancy").fancybox({});
    $(".various").fancybox({
        type: "iframe",
    });
//FancyBox img
$('[data-fancybox="images"]').fancybox({
    afterLoad : function(instance, current) {
        var pixelRatio = window.devicePixelRatio || 1;
        if ( pixelRatio > 1.5 ) {
            current.width  = current.width  / pixelRatio;
            current.height = current.height / pixelRatio;
        }
    }
});
//Scroll
$('.product__link').on('click', function(e){
  $('html,body').stop().animate({ scrollTop: $('#info-product').offset().top }, 1000);
});
//ScrollToTop
$('#up').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 500);
    return false;
});
//SelectStyler
if($('.selector__select').length > 0){
    $('.selector__select').styler();
}
if($('.time__select').length > 0){
    $('.time__select').styler();
}   
//Menu-footer opener
    $(".menu__top").click(function () {
        $(".pr_bs_list").toggleClass("brown-bg");
        $(".basket__btn").toggleClass("brown-bg");
    });
//Bascket opener
    $(".basket__item_sh").click(function(e) {
        e.preventDefault(); 
        $(".product__list").toggleClass("d-none");
        $(".basket__list").toggleClass("brown-bg");
        $(".basket__btn").toggleClass("brown-bg");
        $(".product__btns").toggleClass("d-none");
        $(".product__btns").toggleClass("d-flex");
    });
//Menu-footer opener
    $(".menu__top").click(function () {
        $(this).toggleClass("down_f");
        $(this).parent().find(".subject__list").toggleClass("d-none");
        $(this).parent().find(".subject__list").toggleClass("subject__list-style");
    });
//Burger opener
    $(".burger").click(function () {
        $(".burder__list").toggleClass("d-none");
        $(".burger__btn").toggleClass("d-none");
        $(".close__btn").toggleClass("d-none close__btn_o");
    });
//Sj list opener
    $(".burger__link_down").click(function () {
    $(this).parent().find(".burger__link").toggleClass("down_sb");
    $(this).parent().find(".burger_sb__list").toggleClass("d-none");
    $(this).parent().find(".burger__item_sb").toggleClass("down_sb");
    $(this).parent().find(".burger__link_down").toggleClass("down_ar");
     });
//Tabs
(function($){               
    jQuery.fn.lightTabs = function(options){
        var createTabs = function(){
            tabs = this;
            i = 0;
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            showPage(0);                
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });             
        };      
        return this.each(createTabs);
    };  
})(jQuery);
    $(".tabs").lightTabs();
//li Active 
$(".select__item").click(function () {
        $(".select__item").removeClass("active");
        $(this).addClass("active");
});
//Modal window
$(".modalbox").fancybox({
        });
});












