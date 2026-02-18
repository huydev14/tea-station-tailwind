$(function(){
    function animateProgress($context, duration) {
        $context.find("[progress-bar]").each(function(){
            var $bar = $(this);
            var percent = $bar.attr("data-percentage");

            $bar.find(".progress-fill").animate({ width: percent}, duration);

            $bar.find(".progress-number-mark").animate(
                { left: percent },
                {
                    duration, 
                    step: function(now) {
                        var data = Math.round(now);
                        $(this)
                            .find(".percent")
                            .html(data + "%");
                    }
                }
            )
        })
    }

    animateProgress($("#firstbar"), 1000);

    $(".slider").on("afterChange", function(event, slick, currentSlide) {
        var $current = $(slick.$slides.get(currentSlide));

        $current.find("[progress-bar]").each(function (){
            $(this).find(".progress-fill").css({width : 0});
            $(this).find(".progress-number-mark").css({ left : 0});
        });

        animateProgress($current, 1000);
    });
})