$(document).ready(function () {
    $(".ui-box1").click(function (e) {
        if (!$(".min").src) {
            $(".max").attr("src", e.target.src)
            $(".max").toggleClass("min");
        }
    })
})

function init(){
$(".ui-box2-content-text").eq(0).show();
}
$(document).ready(function () {
	$(".ui-subbox2-button").click(function () {
		$(".ui-subbox2-button").removeClass("background");
   		$(this).addClass("background");
        $(".ui-box2-content-text").hide();
        $(".ui-box2-content-text").eq($(this).index()).fadeIn('normal');
	})
});
$(init);

$(document).ready(function () {
	$(".ui-subbox3-item-button").click(function (e) {
		$(this).parent().remove();
		var num=$(".ui-subbox3-item").length+1;
		console.log(num);
        for(var i=0;i<num;i++) {
        $(".ui-subbox3-item-num").eq(i).text(i+1);
		}
	})

	$(".ui-box3-button").click(function () {
        var num=$(".ui-subbox3-item").length+1;
        var element="<div class='ui-subbox3-item'><div class='ui-subbox3-item-num'>"+num+
        "</div><div class='ui-subbox3-item-content'></div><div class='ui-subbox3-item-button'>Delete</div></div>"
            $(".ui-subbox3:last").append(element);
            $(".ui-subbox3-item-button").click(function (e) {
                $(this).parent().remove();
                console.log(num);
                for(var i=0;i<num;i++) {
                $(".ui-subbox3-item-num").eq(i).text(i+1);
            }
            });
    }) 

});